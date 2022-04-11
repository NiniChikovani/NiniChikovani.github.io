

//dimensions and margins of the graph
var margin = { top: 10, right: 30, bottom: 30, left: 200 },
    width = 850 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;


var svg = d3.select("#Bubblechart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

// data
d3.csv("./finalData.csv")
    .then(function (finalData) {

        console.log(finalData);

        var maxPopulation = d3.max(finalData, function (d) {
            return +d.Population * 1000;
        });


        var maxCO2 = d3.max(finalData, function (d) {
            return +d.CO2;
        });

        console.log(maxPopulation, maxCO2)

        // X axis
        var x = d3.scaleLinear()
            .domain([0, maxPopulation])
            .range([0, width]);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        // Y axis
        var y = d3.scaleLinear()
            .domain([0, maxCO2])
            .range([height, 0]);
        svg.append("g")
            .call(d3.axisLeft(y));

    });