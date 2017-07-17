Highcharts.chart('totales_videos', {
    credits: {
      enabled: false
    },
    chart: {
        type: 'column'
    },

    title: {
        text: 'Visionado medio'
    },

    xAxis: {
        categories: ['Minutos unicos por video', 'Minutos por video']
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
        name: 'Completo',
        data: [5, 0],
        stack: 'videos'
    }, {
        name: 'Incompleto',
        data: [3, 0],
        stack: 'videos'
    }, {
        name: 'Repetidos',
        data: [0, 4],
        stack: 'ejercicios'
    }, {
        name: 'Unicos',
        data: [0, 12],
        stack: 'ejercicios'
    }]
});
