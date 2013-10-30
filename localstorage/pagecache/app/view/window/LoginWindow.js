Ext.define('AppTwitter.view.window.LoginWindow',{
	extend : 'Ext.window.Window',
	alias : 'widget.loginWindow',
	resizable : false,
	//closable : false,
	draggable : false,
	width : 300,
	height : 250,
	initComponent : function(){
		this.items = [{xtype : 'loginPanel'}];
		this.buttons = [{text:'Acceder',scale:'large',cls:'btn-access',itemId:'access',action:'loginIntro'},
		{text:'Cancelar',scale:'large'}];
		this.callParent(arguments);
	}
});