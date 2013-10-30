   Ext.define('AppTwitter.view.window.NewTwitWindow',{
	extend : 'Ext.window.Window',
	alias : 'widget.newTwitWindow',
	modal : true,
	title : "What's happening?",
	bodyStyle : 'padding:10px',
	width : 450,
	initComponent : function(){
		this.items = [{xtype:'textarea',hideLabel : true, width:'100%', rows:6}];
		this.buttons = [{text : 'Tweet',action:'saveTwit'}];
		this.callParent(arguments);
	}
});