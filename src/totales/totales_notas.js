
$(document).ready(function () {

    // Build the chart
    Highcharts.chart('totales_notas', {
        credits: {
          enabled: false
        },
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Notas'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'B',
                y: 56.33
            }, {
                name: 'A',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'F',
                y: 10.38
            }, {
                name: 'C',
                y: 0.91
            }]
        }]
    });
});
