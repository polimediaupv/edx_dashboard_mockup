Highcharts.chart('generales_acceso', {
    credits: {
      enabled: false
    },
    chart: {
        type: 'area'
    },
    title: {
        text: 'Datos de accesos al curso (*) necesito explicación'
    },
    xAxis: {
        categories: ['01/01/2017', '08/01/2017', '15/01/2017', '22/01/2017', '29/01/2017', '05/02/2017', '12/02/2017'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        title: {
            text: 'Alumnos'
        },
        labels: {
            formatter: function () {
                return this.value;
            }
        }
    },
    tooltip: {
        split: true
    },
    plotOptions: {
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
    series: [{
        name: 'Inscritos',
        data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
        name: 'Intentan Algo',
        data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
        name: 'Intentan Algún examen',
        data: [163, 203, 276, 408, 547, 729, 628]
    }, {
        name: 'Aprueban',
        data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
        name: 'Verificados',
        data: [2, 2, 2, 6, 13, 30, 46]
    }]
});
