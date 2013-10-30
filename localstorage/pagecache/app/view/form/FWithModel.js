Ext.define('myApp.view.form.FWithModel',{
	extend : 'Ext.form.Panel',
	alias : 'widget.fWithModel',
	style : {padding:'10px',background:'#FFF'},
	initComponent : function(){
		this.btnSearch = Ext.create('Ext.Button',{
			text : 'Search',
			action : 'search',
			flex : 1
		});
		this.txtSearch = Ext.create('Ext.form.field.Text',{
			fieldLabel : 'Query',
			name : 'search'
		});
		this.cboTwits = Ext.create('Ext.form.field.ComboBox',{
			fieldLabel : 'Search Twitter',
			store : 'LSWithModel',
			anchor : '100%',
			queryMode : 'local',
			displayField : 'search',
			valueField : 'id',
			flex : 1,
			typeAhead : false,
			hideTrigger : true,
			listConfig : {
				loadingText : 'Searching...',
				emptyText : 'Not Found...',
				getInnerTpl : function(){
					return '{search}'
				}
			}
		});
		this.cboListTwits = Ext.create('Ext.form.field.ComboBox',{
			fieldLabel : 'List Search',
			store : 'LSWithModel',
			queryMode : 'local',
			displayField : 'search',
			valueField : 'id'
		});
		this.items = [/*this.txtSearch,*/this.cboTwits,this.btnSearch/*,this.cboListTwits*/];
		this.callParent(arguments);
	}
});