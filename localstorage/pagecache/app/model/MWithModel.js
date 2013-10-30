Ext.define('myApp.model.MWithModel',{
	extend : 'Ext.data.Model',
	fields : ['id','search'],
	proxy : {
		type : 'sessionstorage',
		id : 'twitter-search'
	}
})