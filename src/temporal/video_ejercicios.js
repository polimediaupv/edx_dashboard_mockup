Highcharts.chart('video_ejercicios', {
    credits: {
      enabled: false
    },
    title: {
        text: 'Visualizaciones acumuladas vs resultados ejercicios'
    },
    xAxis: {
        categories: ['01/07/2017', '02/07/2017', '03/07/2017','04/07/2017','05/07/2017']
    },
    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },
    series: [{
        type: 'column',
        name: 'Mal',
        color: 'rgba(186, 60, 61, 0.9)',
        data: [3, 2, 1, 3, 4],
        stack:'ejercicios'
    }, {
        type: 'column',
        name: 'Bien',
        color: 'rgb(144, 237, 125)',
        data: [2, 3, 5, 7, 6],
        stack:'ejercicios'
    }, {
        type: 'spline',
        name: 'Visualizaciones',
        data: [3, 5, 7, 8, 12],
        marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white'
        }
    }]
});
