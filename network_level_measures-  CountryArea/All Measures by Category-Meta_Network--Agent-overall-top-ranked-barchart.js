Chart.defaults.global.legend.position = 'bottom'

var data = {
labels:['South China','United States West Coast','Japan','South Korea','Hong Kong','Singapore','Malaysia','Brazil','Spain','Italy',],
datasets : [
{
label: 'Agent (Meta Network)',
backgroundColor: 'rgba(255,0,0,0.2)',
borderColor: 'rgba(255,0,0,1)',
borderWidth: 1,
data : [1,0.352155,0.226238,0.196324,0.178809,0.176277,0.163043,0.159709,0.149269,0.141146,]
},
]
}
var context = document.getElementById('All Measures by Category-Meta_Network--Agent-overall-top-ranked-barchart').getContext("2d");
var chart = new Chart(context, {
		type: 'bar',
		data: data,
		options: {
			autowidth:false,
			scales: {
			yAxes: [{
				ticks: {
					beginAtZero:true
				}
			}]
		}
	}
});

