Ext.define('AppTwitter.view.panel.ConnectPanel',{
	extend : 'Ext.panel.Panel',
	alias : 'widget.connectPanel',
	id : 'connectPanel',
	initComponent : function(){
		this.items =[{xtype:'label',text:'Connect'}];
		this.callParent(arguments);
	}
});