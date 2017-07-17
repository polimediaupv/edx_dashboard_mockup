Highcharts.chart('video_ejercicios2', {
    credits: {
      enabled: false
    },
    chart: {
        type: 'column'
    },

    title: {
        text: 'Videos y ejercicios por dia'
    },

    xAxis: {
        categories: ['01/07/2017', '02/07/2017', '03/07/2017','04/07/2017','05/07/2017']
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
        name: 'Repetidas',
        data: [5, 3, 4, 7, 2],
        stack: 'videos'
    }, {
        name: 'Unicas',
        data: [3, 4, 4, 2, 5],
        stack: 'videos'
    }, {
        name: 'Bien',
        data: [2, 5, 6, 2, 1],
        stack: 'ejercicios'
    }, {
        name: 'Mal',
        data: [3, 0, 4, 4, 3],
        stack: 'ejercicios'
    }]
});
