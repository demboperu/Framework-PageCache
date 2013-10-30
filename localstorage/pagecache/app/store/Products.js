Ext.define('myApp.store.Products', {
    extend: 'Ext.data.Store',
    model: 'myApp.model.Product',
    autoLoad: true,
    proxy: {
    	type: 'localstorage',
        id  : 'myProxyKey'
    }
});