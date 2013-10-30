Ext.define('myApp.view.window.ItemEdit', {
    extend: 'Ext.window.Window',
    alias : 'widget.itemEdit',

    title : 'Product Maintenance',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'itemNumber',
                        fieldLabel: 'Item Number',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        xtype: 'textfield',
                        name : 'description',
                        fieldLabel: 'Description',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        xtype: 'combobox',
                        name : 'category',
                        fieldLabel: 'Select Category',
                        store: ["Electronics","Software","Gaming"],
                        queryMode: 'local',
                        value: 'Electronics'
                    },
                    {
                        xtype: 'numberfield',
                        fieldLabel: 'Price',
                        minValue: 0.01,
                        maxValue: 99.99,
                        value: 9.99,
                        name: 'price'
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});