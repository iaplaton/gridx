require([
	'dojo/parser',
	'gridx/tests/support/data/MusicData',
	'gridx/tests/support/stores/Memory',
	'dojo/store/Memory',
	'gridx/Grid',
	'gridx/core/model/cache/Sync',

	"gridx/modules/SlantedHeader",
	"gridx/modules/HeaderRegions",
	"gridx/modules/ExpandableColumn",

	//'gridx/allModules',
	'dojo/domReady!'
], function(parser, dataSource, storeFactory, MemoryStore){

	var datasources = [
		'Production'
		,'Customers'
		,'Products'
		,'Marketing'
		,'Sales'
		,'Leads'
		,'Manufacturing'
		,'Inventory'
		,'Orders'
		,'Test'
		,'Development'
	];
	function randomData(max){
		max = max || 10;
		return Math.round(Math.random()*max);
	}
	var data = [];

	for(var i = 0; i < 20; i++){
		var item = {
			id: i + 1
			,datasource: datasources[i%11]
			//total
			,critical: randomData(20)
			,warning: randomData(20)

			//governance
			,monitoring: randomData()
			,policy: randomData()
			,process: randomData()

			//,ulnerability
			,configuration: randomData()
			,patches: randomData()
			,authentication: randomData()
			,privileges: randomData()
			,filesystem: randomData()

			,alerts: randomData()
			,violations: randomData()

		};
		item.total = item.critical + item.warning;
		item.governance = (item.monitoring + item.policy + item.process)/3;
		item.vulnerability = (item.configuration + item.patches + item.authentication + item.privileges + item.filesystem)/5;

		data.push(item);
	}

	store = new MemoryStore({data: data});

	function formatter(item){
		var mark, data = eval(item[this.field]);
		if(data < 7)mark = 'normal';
		else if(data < 9)mark = 'warning';
		else mark = 'critical';

		return '<span class="mark mark-' + mark + '"></span>';
	}

	layout = [
		{field: 'datasource', name: 'Data Sources', width: '130px'},

		{id: 'total', field: 'total', name: 'Total', width: '30px', expanded: true},
		{field: 'critical', name: 'Critical', width: '30px', _parentColumn: 'total'},
		{field: 'warning', name: 'Warning', width: '30px', _parentColumn: 'total'},

		{id: 'governance', field: 'governance', name: 'Governace', width: '30px', formatter: formatter},
		{field: 'monitoring', name: 'Monitoring', width: '30px', _parentColumn: 'governance', formatter: formatter},
		{field: 'policy', name: 'Policy', width: '30px', _parentColumn: 'governance', formatter: formatter},
		{field: 'process', name: 'Process', width: '30px', _parentColumn: 'governance', formatter: formatter},

		{id: 'vulnerability', field: 'vulnerability', name: 'Vulnerability', width: '30px', expanded: true, formatter: formatter},
		{field: 'configuration', name: 'Configuration', width: '30px', _parentColumn: 'vulnerability', formatter: formatter},
		{field: 'patches', name: 'Patches', width: '30px', _parentColumn: 'vulnerability', formatter: formatter},
		{field: 'authentication', name: 'Authentication', width: '30px', _parentColumn: 'vulnerability', formatter: formatter},
		{field: 'privileges', name: 'Privileges', width: '30px', _parentColumn: 'vulnerability', formatter: formatter},
		{field: 'filesystem', name: 'FileSystem', width: '30px', _parentColumn: 'vulnerability', formatter: formatter},

		{field: 'alerts', name: 'Alerts', width: '30px', formatter: formatter},
		{field: 'violations', name: 'Violations', width: '30px', formatter: formatter}
	];

	parser.parse();
});
