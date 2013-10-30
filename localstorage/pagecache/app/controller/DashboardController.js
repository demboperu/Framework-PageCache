Ext.define('AppTwitter.controller.DashboardController', {
    extend: 'Ext.app.Controller',
    stores : ['TwittsStore'],
    models : ['TwitModel'],
    views : ['grid.TwittsGridPanel',
    'panel.PrincipalPanel'],
    init: function() {
        //Ext.create('AppTwitter.view.window.Login').show();
        this.control({
        });        
    }
});