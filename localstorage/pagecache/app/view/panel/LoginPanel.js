Ext.define('AppTwitter.view.panel.LoginPanel',{
	extend : 'Ext.form.Panel',
	alias : 'widget.loginPanel',
	cls : 'panel-login',
	initComponent : function(){
		this.txtUserName = Ext.create('Ext.form.field.Text',{
			fieldLabel : 'User'
		});
		this.txtPassword = Ext.create('Ext.form.field.Text',{
			fieldLabel : 'Password',
			inputType : 'password'
		});
		this.items = [{xtype:'container',height:50 },this.txtUserName,this.txtPassword];
		this.callParent(arguments);
	}
});