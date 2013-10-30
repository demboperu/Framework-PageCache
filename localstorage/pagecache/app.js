Ext.Loader.setConfig({ 
	enabled: true,
    paths : {
        myApp : 'app'
    }
});

Ext.onReady(function(){
    Ext.application({
    	name: 'myApp',
    	appFolder: 'app',
        controllers: ['ItemMaster'],
        launch: function() {

            //1st MODE
            Ext.create('Ext.container.Container', {
            	renderTo: 'myExample',
            	height: 250,
                width: 500,
                margin: '5 5 5 5 ',
            	layout: 'fit',
                items: [
                    {
                    	xtype: 'itemList'
                    }
                ]
            });

            //2nd MODE
            Ext.create('Ext.container.Container',{
                renderTo : 'manualDatav',
                height : 75,
                width : 500,
                items : [{xtype : 'manualData'}]
            });

            //3 MODE
            Ext.create('Ext.container.Container',{
                renderTo : 'lsWithModel',
                height : 75,
                width : 500,
                items : [{xtype : 'fWithModel'}]
            })
        }
    }); 
});