Ext.define('AppTwitter.view.Viewport',{
	extend : 'Ext.container.Viewport',
	alias : 'widget.viewportApp',
				layout : 'border',			
				items : [
				{
					region : 'west',
					bodyStyle : {background:'#F1F1F1'},
					width : 100,
					bodyStyle : 'padding:5px;background:#000;',
					items : []

				},{	
					region : 'center',
					items : [
					{
						xtype:'container',itemId:'contentBody',id:'contentBody',cls:'contentbody',minHeight:500,bodyStyle : {background:'#F1F1F1',padding:'5%'},autoScroll : true,
						items : [{xtype:'twittsGridPanel'}]
					}]
				}]
			});