Ext.define('AppTwitter.store.TwittsStore',{
	extend : 'Ext.data.Store',
	model : 'AppTwitter.model.TwitModel',
	autoLoad : true,
		
	proxy : {
		type : 'localstorage',
		url : 'data/twitts.json',	
		id : 'cachedTwits',
		reader : {
			type : 'json',
			root : 'twitts',
			successProperty : 'success'			
		}
	}
});