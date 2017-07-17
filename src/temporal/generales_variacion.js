Highcharts.chart('generales_variacion', {
    credits: {
      enabled: false
    },
    chart: {
        type: 'column'
    },
    title: {
        text: 'Variacion diaria de los datos'
    },
    xAxis: {
        categories: ['01/01/2017', '08/01/2017', '15/01/2017', '22/01/2017', '29/01/2017'],
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Inscritos',
        data: [5, 3, 4, 7, 2]
    }, {
        name: 'Intentan algo',
        data: [2, -2, -3, 2, 1]
    }, {
        name: 'Intentan Examen',
        data: [3, 4, 4, -2, 5]
    }, {
        name: 'Verificados',
        data: [3, 4, 4, 0, 5]
    }]
});
