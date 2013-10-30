Ext.define('myApp.view.form.ManualData',{
	extend : 'Ext.form.Panel',
	alias : 'widget.manualData',
	style : {padding:'10px',background:'#FFF'},
	initComponent : function(){
		this.btnMode1 = Ext.create('Ext.Button',{
			text : 'Apply Mode 1',
			action : 'mode1',
			val : 1,
			flex : 1
		});
		this.btnMode2 = Ext.create('Ext.Button',{
			text : 'Apply Mode 2',
			action : 'mode2',
			val : 2,
			flex : 1
		});
		
		this.buttons = [this.btnMode1,this.btnMode2];
		this.callParent(arguments);
	}
});