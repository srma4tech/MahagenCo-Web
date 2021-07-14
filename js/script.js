window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	theme: "light1", // "light2", "dark1", "dark2"
	animationEnabled: false, // change to true		
	title:{
		text: "MAHAGENCO LTD Revenue Chart"
	},
	data: [
	{
		// Change type to "bar", "area", "spline", "pie",etc.
		type: "column",
		dataPoints: [
			{ label: "2014",  y: 16  },
			{ label: "2015", y: 19  },
			{ label: "2016", y: 19 },
			{ label: "2017",  y: 18  }
		]
	}
	]
});
chart.render();

}