/**
 * https://fperucic.github.io/treant-js/

 https://www.myheritage.co.il/site-family-tree-211085821/%D7%A1%D7%92%D7%99%D7%A8

 https://stackoverflow.com/questions/15944146/looking-for-a-family-tree/16192566#16192566
 http://scienic-data.com/force-layout-british-monarch-family-tree/
 **/
$(function(){

	$.getJSON( "data.json", function( data ) {

		var chart_config = {
			chart: {
				container: "#mychart",

				nodeAlign: "CENTER",

				rootOrientation: "NORTH",
				
				connectors: {
					type: 'step'
				},
				node: {
					HTMLclass: 'nodeExample1'
				}
			},
			nodeStructure: data
		};

		var my_chart = new Treant(chart_config);
	})
	.done(function() {
		console.log( "second success" );
	})
	.fail(function() {
		console.log( "error" );
	})
	.always(function() {
		console.log( "complete" );
	});

});


