//container is the name of your div defined in the html file
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
            text: 'Annual CO2'
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
            '<tr><th>Annual CO2:</th><td>{point.y}</td></tr>' +
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
            { x: 25.687, y: 15.3684, z: 1327836.17, name: 'Australia', country: 'Australia' },
            { x: 86.5, y: 102.9, z: 14.7, name: 'DE', country: 'Germany' },
            { x: 80.8, y: 91.5, z: 15.8, name: 'FI', country: 'Finland' },
            { x: 80.4, y: 102.5, z: 12, name: 'NL', country: 'Netherlands' },
            { x: 80.3, y: 86.1, z: 11.8, name: 'SE', country: 'Sweden' },
            { x: 78.4, y: 70.1, z: 16.6, name: 'ES', country: 'Spain' },
            { x: 74.2, y: 68.5, z: 14.5, name: 'FR', country: 'France' },
            { x: 73.5, y: 83.1, z: 10, name: 'NO', country: 'Norway' },
            { x: 71, y: 93.2, z: 24.7, name: 'UK', country: 'United Kingdom' },
            { x: 69.2, y: 57.6, z: 10.4, name: 'IT', country: 'Italy' },
            { x: 68.6, y: 20, z: 16, name: 'RU', country: 'Russia' },
            { x: 65.5, y: 126.4, z: 35.3, name: 'US', country: 'United States' },
            { x: 65.4, y: 50.8, z: 28.5, name: 'HU', country: 'Hungary' },
            { x: 63.4, y: 51.8, z: 15.4, name: 'PT', country: 'Portugal' },
            { x: 64, y: 82.9, z: 31.3, name: 'NZ', country: 'New Zealand' }

            //             , 2020, , ""
            // Canada, 2020, 14.1969, "38,005.24"
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