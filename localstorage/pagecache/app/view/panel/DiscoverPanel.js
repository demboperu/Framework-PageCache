Ext.define('AppTwitter.view.panel.DiscoverPanel',{
	extend : 'Ext.panel.Panel',
	alias : 'widget.discoverPanel',
	id : 'discoverPanel',
	initComponent : function(){
		this.items =[{xtype:'label',text:'Discover'}];
		this.callParent(arguments);
	}
});