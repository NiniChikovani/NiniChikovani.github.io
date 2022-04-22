

//dimensions and margins of the graph
var margin = { top: 10, right: 30, bottom: 30, left: 200 },
    width = 1000 - margin.left - margin.right,
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

        var maxGDP = d3.max(finalData, function (d) {
            return +d.GDP;
        });

        console.log(maxPopulation, maxCO2, maxGDP)

        // X axis
        var x = d3.scaleLog()
            .domain([4000000, maxPopulation])
            .range([0, width]);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));


        // Y axis
        var y = d3.scaleLinear()
            .domain([7, maxCO2 + 2])
            .range([height, 0]);
        svg.append("g")
            .call(d3.axisLeft(y));


        var frequency = 3 * 1000; // 3 seconds

        var z = d3.scaleLinear()
            .domain([0, maxGDP])
            .range([0, maxGDP]);
        svg.append("transform", "translate(0," + maxGDP + ")")
            .call(d3.maxGDP(r));


        //bubbles
        svg.append('g')
            .selectAll("bubbles")
            .data(finalData)
            .enter()
            .append("circle")
            .attr("cx", function (d) { return x(+d.Population * 1000); })
            .attr("cy", function (d) { return y(+d.CO2); })
            .attr("r", function (d) { return z(d.GDP); })
            .style("fill", "#53265e")
            .style("opacity", "0.7")
            .attr("stroke", "black")
            .transition().duration(frequency / 2)
            .attr("r", maxGDP)


    });