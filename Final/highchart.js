//container is the name of my div defined in the html file
let myChart = Highcharts.chart('nini', {

    chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        zoomType: 'xy'
    },

    legend: {
        enabled: false
    },

    // title: {
    //     text: 'CO2 Emissions per capita'
    // },

    // subtitle: {
    //     text: 'Subtitle made here: <a href="http://www.euromonitor.com/">Euromonitor</a> and <a href="https://data.oecd.org/">OECD</a>'
    // },


    xAxis: {
        gridLineWidth: 1,
        title: {
            text: 'Population'
        },
        labels: {
            format: '{value} million'
        }
    },

    yAxis: {
        startOnTick: false,
        endOnTick: false,
        title: {
            text: 'Annual CO2 Emissions (per capita)'
        },
        labels: {
            format: '{value}'
        },
        maxPadding: 0.2
    },

    tooltip: {
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
            '<tr><th>Population:</th><td>{point.x}</td></tr>' +
            '<tr><th>Annual CO2 Emissions:</th><td>{point.y}</td></tr>' +
            '<tr><th>GDP:</th><td>{point.z} USD</td></tr>',
        footerFormat: '</table>',
        followPointer: true
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },

    series: [{
        data: [
            { x: 25.69, y: 153684, z: 132783617, name: 'Australia', country: 'Australia' },
            { x: 38, y: 141969, z: 164542341, name: 'CA', country: 'Canada' },
            { x: 83.9, y: 88702, z: 2034713, name: 'IR', country: 'Iran' },
            { x: 18.7, y: 155158, z: 17108238, name: 'KZ', country: 'Kazakhstan' },
            { x: 144.1, y: 108072, z: 148349778, name: 'RUS', country: 'Russia' },
            { x: 34.8, y: 179672, z: 70011787, name: 'SAU', country: 'Saudi Arabia' },
            { x: 51.7, y: 116562, z: 16378958, name: 'KOR', country: 'South Korea' },
            { x: 6.03, y: 124914, z: 4523143, name: 'TKM', country: 'Turkmenistan' },
            { x: 9.9, y: 151933, z: 35886877, name: 'ARE', country: 'United Arab Emirates' },
            { x: 329.5, y: 142379, z: 20953030, name: 'USA', country: 'United States' },


            // Canada, 2020, 14.1969, 
            // Iran, 2020, 8.8702, "83,992.95"
            // Kazakhstan, 2020, 15.5158, "18,754.44"
            // Russia, 2020, 10.8072, "144,104.08"
            // Saudi Arabia, 2020, 17.9672, "34,813.87"
            // South Korea, 2020, 11.6562, "51,780.58"
            // Turkmenistan, 2020, 12.4914, "6,031.19"
            // United Arab Emirates, 2020, 15.1933, "9,890.40"
            // United States, 2020, 14.2379, "329,484.12"
        ]
    }]

});
// console.log(myChart)
// myChart.renderTo('container')