Highcharts.chart('compare_pass', {
    credits: {
      enabled: false
    },
    chart: {
        type: 'column'
    },
    title: {
        text: 'Comparación de Aprobados'
    },
    xAxis: {
        categories: [
            'Android: Introducción a la Programación',
            'Aplicaciones de la Teoría de Grafos a la Vida Real (I)',
            'Aplicaciones de la Teoría de Grafos a la vida real II',
            'Bases Matemáticas: Derivadas',
            'Bases Matemáticas: Integrales'
        ]
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Inscritos'
        }
    },
    legend: {
        shadow: false
    },
    tooltip: {
        shared: true
    },
    plotOptions: {
        column: {
            grouping: false,
            shadow: false,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Maximo',
        color: 'rgba(165,170,217,1)',
        data: [6500,6500,6500,6500,6500],
        pointPadding: 0.1,
        pointPlacement: 0
    },{
        name: 'Medianas',
        color: 'rgba(248,161,63,1)',
        data: [3800,3800,3800,3800,3800],
        pointPadding: 0.1,
        pointPlacement: 0
    }, {
        name: 'Inscritos',
        color: 'rgba(126,86,200,.9)',
        data: [6400, 4000, 3500,2000,2200],
        pointPadding: 0.2,
        pointPlacement: 0
    }]
});
