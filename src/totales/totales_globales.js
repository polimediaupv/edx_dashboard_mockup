Highcharts.chart('totales_globales', {
    credits: {
      enabled: false
    },
    chart: {
        type: 'column'
    },

    title: {
        text: 'Datos Totales'
    },

    xAxis: {
        categories: ['Inscritos', 'Activos', 'Intentan examen', 'Aprobados', 'Verificados']
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

    series: [{
        data: [12500, 7000, 5000, 1200,120],
        stack: 'videos'
    }]
});
