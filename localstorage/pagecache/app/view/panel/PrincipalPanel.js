Ext.define('AppTwitter.view.panel.PrincipalPanel',{
	extend : 'Ext.panel.Panel',
	alias : 'widget.principalPanel',
	layout : 'card',
	panels : null,
	initComponent : function(){
		this.callParent(arguments);
	},
	addPanels : function(elems){
		this.panels = elems;
		if(this.panels!=null){
			Ext.Array.each(this.panels,function(panel){
				push(this.items,panel);
			});
		}
	}
});