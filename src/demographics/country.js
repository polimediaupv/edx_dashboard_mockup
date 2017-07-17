
$(document).ready(function () {

    // Build the chart
    Highcharts.chart('country', {
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
            text: 'Distribución por paises de los estudiantes'
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
                name: 'España',
                y: 56.33
            }, {
                name: 'Argentina',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'Francia',
                y: 10.38
            }, {
                name: 'Perú',
                y: 4.77
            }, {
                name: 'Estados Unidos',
                y: 1
            }]
        }]
    });
});
