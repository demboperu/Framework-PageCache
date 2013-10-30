//
// Auto-caching store. Auto-caches data in localstorage.
//
 
// Scenario 1: Usage with time-based caching:
// Cache data for 1 day
//
// Ext.create('MyApp.store.CachedStore', {
//   extend: 'MyApp.store.LocalCache',
//   storeId: 'PatientEdReports',
//   proxy: {
//     type: 'ajax',
//     url: 'data/mydata.json'
//   },
//   strategy: {
//    type: 'timeout',
//    duration: {'d' : 1}
//   }
// });
//
 
//
// Scenario 2: Usage with token-based caching
// Cache until lastUpdated token changes
//
// Ext.create('MyApp.store.CachedStore', {
//   extend: 'MyApp.store.LocalCache',
//   storeId: 'PatientEdReports',
//   proxy: {
//     type: 'ajax',
//     url: 'data/mydata.json'
//   },
//   lastUpdated: '2013-02-10 08:00:00 -08:00'
// });
//
 
Ext.define('MyApp.store.LocalCache', {
 extend: 'Ext.data.Store',
 
 requires: [
   'Ext.device.Connection',
   'Ext.data.proxy.LocalStorage',
   'Ext.DateExtras'
 ],
 
 config: {
   remoteProxy: { },
   localStorageProxy: { },
   lastUpdated: '2013-04-02 06:36:00 -8:00',
   strategy: { type: 'token' },
   storeId: 'MyStore'
 },
 
 constructor: function(config) {
   this.callParent(arguments);
 
   this.expireField = Ext.app.Application.appInstance.getName() + "-" + this.getLocalStorageProxy().id + '-lastupdated';
 
   if (Ext.Object.getSize(this.getRemoteProxy()) == 0)
    this.setRemoteProxy(this.getProxy().getInitialConfig());
 
   // todo - sync when browser comes online
   // note that this event doesn't fire in desktop browser
   // Ext.device.Connection.on('onlinechange',this.setConnection, this);
 },
 
 load: function(options, scope) {
  var online = Ext.device.Connection.isOnline();
 
  var me = this;
   
  if (online && this.isCacheMiss()) {
    this.setProxy(this.getLocalStorageProxy());
 
    // load from localstorage
    this.callParent([{
     scope: this,
     callback: function() {
       // delete from local storage
       this.removeAll();
       this.sync();
 
       // load from server
       this.setProxy(this.getRemoteProxy());
 
       // get pointer to superclass load method
       // note that this.callParent() will not work 
       // from this context
 
       var  method=this.callParent.caller;
       var loader = method.$owner.superclass[method.$name];
 
       // invoke super.load() and write remote data to localstorage
       loader.call(this,{
          scope: this,
          callback: function(records,operation,success) {
            me.setProxy(this.getLocalStorageProxy()); 
            for (var i=0; i<records.length; i++) {
              records[i].setDirty(); 
            }              
            me.sync(); // write to localstorage
            me.setCacheExpiration();
 
            // perform optional final callback
            options = options || {};
 
            if (Ext.isFunction(options)) {
              options = {
               callback: options,
               scope: scope || this
              };
             }
 
            if (options.callback) {
              options.callback.call(options.scope,
                                    records,
                                    operation,
                                    success
              );
            }
        } // callback
      }); // load
     }  
    }]);
 
   } else {
     this.setProxy(this.getLocalStorageProxy());
     this.callParent(arguments);
   }
}, // end function
 
 
 isCacheMiss: function() {
    // use date as a default
    var expiry = window.localStorage.getItem(this.expireField);
    if (expiry === null) {
      return true;
    }
 
    switch(this.getStrategy().type) {
     case 'token' : 
       return !(expiry == this.getLastUpdated());
 
     case 'timeout' : 
       var timeout = Ext.Date.parse(expiry,"Y-m-d H:i:s P");
       return (new Date() > timeout);
    }
},
 
 
setCacheExpiration: function() {
 
  switch(this.getStrategy().type) {
    case 'token' :
     window.localStorage.setItem(this.expireField, this.getLastUpdated());
     break;
 
     case 'timeout' :
      var expireDate = new Date();
      var duration = this.getStrategy().duration;
      for (var i in duration) {
        expireDate = Ext.Date.add(expireDate,i,duration[i]);
      }
      var timeout = Ext.Date.format(expireDate,"Y-m-d H:i:s P");
      window.localStorage.setItem(this.expireField, timeout);
      break;
   }
 },
 
 applyLocalStorageProxy: function(newObj,oldObj) {
 
    if (Ext.Object.getSize(newObj) == 0) { 
           // set default proxy based on storeid
       newObj = {type: 'localstorage', id: Ext.app.Application.appInstance.getName() + "-" + this.getStoreId()};
       return newObj;
    } else {
      return newObj;
    }
 }
});