Ext.define('myApp.view.grid.ItemList' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.itemList',
    title : 'List of my Store Products',
    store : 'Products',
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store : 'Products',  
        dock: 'bottom',
        displayInfo: true,
        items: [
                { 
                	xtype: 'tbseparator' 
                },
                {
                    xtype : 'button',
                    text: 'Add Product',
                    action: 'add'
        		}
        ]
    }],
    
    initComponent: function() {
        
    	this.columns = [
            {
            	header: 'Item Number',  
            	dataIndex: 'itemNumber',  
            	flex: 1
            },
            {
            	header: 'Description', 
            	dataIndex: 'description', 
            	flex: 2
            },
            {
            	header: 'Category',  
            	dataIndex: 'category',  
            	flex: 1
            },
            {
            	header: 'Price', 
            	dataIndex: 'price', 
            	flex: 1
            }
        ];

        this.callParent(arguments);
    }
});