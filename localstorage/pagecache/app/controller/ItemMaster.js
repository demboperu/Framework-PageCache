Ext.define('myApp.controller.ItemMaster', {
			extend : 'Ext.app.Controller',

			stores : ['Products','LSWithModel'],
			models : ['Product','MWithModel'],
			views : ['grid.ItemList', 'window.ItemEdit','form.FWithModel','form.ManualData'],

			init : function() {
				this.control({
					'container > panel' : {
						render : this.onPanelRendered
					},
					'itemList' : {
						itemdblclick : this.editItem
					},
					'itemList button[action=add]' : {
						click : this.addItem
					},
					'itemEdit button[action=save]' : {
						click : this.updateItem
					},
					'fWithModel button[action=search]':{
						click : this.searchAction
					},
					'manualData button[action=mode1]':{
						click : this.actionMode
					},
					'manualData button[action=mode2]':{
						click : this.actionMode
					}
				});

			},

			actionMode : function(btn){
				if(btn.val==1){
		            var myLocal = Ext.state.LocalStorageProvider.create();
		            myLocal.set('mode1','mode1');
		            console.info(myLocal.get('twitter-search-1',false));
    				window.localStorage.setItem(this.expireField, '2013-10-29 05:05:00 -8:00');
				}else{

					var row = Ext.create('myApp.model.MWithModel',{search : 'mode2'});
					row.save();
				}
			},	

			searchAction : function(btn){
				//var txtSearch = btn.up('form').down('textfield');
				var cbSearch = btn.up('form').down('combobox');
				var searchv = cbSearch.getValue();
				if(searchv!=null){
					var store = cbSearch.getStore();
					store.add({search : searchv});
					store.sync();
				}
			},

			onPanelRendered : function() {
			},

			editItem : function(grid, record) {
				var view = Ext.widget('itemEdit');
				view.down('form').loadRecord(record);
			},

			updateItem : function(button) {
				var win = button.up('window');
				var form = win.down('form').getForm();
				if (form.isValid()) {
					var record = form.getRecord();
					var values = form.getValues();
					if(!record){
						var newRecord = new myApp.model.Product(values);
						this.getProductsStore().add(newRecord);
					}
					else {
						record.set(values);
					}
					win.close();
					this.getProductsStore().sync();
				}
			},

			addItem : function(button) {
				var view = Ext.widget('itemEdit');
			}
		});