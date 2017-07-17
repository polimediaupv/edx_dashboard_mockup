
$(document).ready(function () {

    // Build the chart
    Highcharts.chart('gender', {
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
            text: 'Sexo de los estudiantes'
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
                name: 'Hombres',
                y: 56.33
            }, {
                name: 'Mujeres',
                y: 43.67,
                sliced: true,
                selected: true
            },]
        }]
    });
});
