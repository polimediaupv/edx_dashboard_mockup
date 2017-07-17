
$(document).ready(function () {

    // Build the chart
    Highcharts.chart('studies', {
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
            text: 'Nivel de estudios'
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
                name: 'Grado Medio',
                y: 56.33
            }, {
                name: 'Graduado Escolar',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'Universitarios o superiores',
                y: 10.38
            }, {
                name: 'Sin esstudios',
                y: 0.91
            }]
        }]
    });
});
