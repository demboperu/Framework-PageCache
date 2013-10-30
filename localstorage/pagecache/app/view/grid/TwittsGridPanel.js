Ext.define('AppTwitter.view.grid.TwittsGridPanel',{
	extend : 'Ext.grid.Panel',
	alias : 'widget.twittsGridPanel',
	id : 'twittsGridPanel',
	store : 'TwittsStore',
	rowTwit : '',
	cls : 'grid-twitts',
	autoScroll : true,
	forceFit : true,	
	initComponent : function(){
        this.columns = [
            {header: '<b>Tweets</b>',  dataIndex: 'twit', flex: 1, height:30, renderer: this.renderTwit}
            //{header: '', /*width:'20%',*/  dataIndex: 'actions'}
        ];

		this.callParent(arguments);
	},
	renderTwit : function(value,p,record){
		return Ext.String.format('<div class="contentmessage"><div class="username"> <span>{1}</span><span> {2}</span> </div><div class="twitmessage">{3}</div></div>',
			'data/photo/'+record.data.avatar,record.data.username,record.data.twittername,record.data.twitmessage);
	}
});