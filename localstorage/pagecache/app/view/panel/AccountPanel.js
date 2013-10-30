Ext.define('AppTwitter.view.panel.AccountPanel',{
	extend : 'Ext.panel.Panel',
	alias : 'widget.accountPanel',
	id : 'accountPanel',
	initComponent : function(){
		this.items =[{xtype:'label',text:'Mi cuenta'}];
		this.callParent(arguments);
	}
});