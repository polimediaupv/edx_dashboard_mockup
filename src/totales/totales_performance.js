Highcharts.chart('totales_performance', {
    credits: {
      enabled: false
    },
    chart: {
        type: 'column'
    },

    title: {
        text: 'Intentos por problema'
    },

    xAxis: {
        categories: ['Problemas Calificados', 'Problemas no Calificados']
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: ''
        }
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br/>' +
                this.series.name + ': ' + this.y + '<br/>' +
                'Total: ' + this.point.stackTotal;
        }
    },

    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },

    series: [{
        name: 'Incorrecto',
        data: [3, 4],
        stack: 'videos'
    },{
        name: 'Correcto',
        data: [5, 12],
        stack: 'videos'
    }]
});
