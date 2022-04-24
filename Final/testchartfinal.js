

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

svg.append("text")
    .attr("class", "xLabel")
    .attr("text-anchor", "end")
    .attr("x", 450)
    .attr("y", 515)
    .text("Population").attr('overflow', 'visible').attr('z-index', 100)


svg.append("text")
    .attr("class", "yLabel")
    .attr("text-anchor", "end")
    .attr("x", -120)
    .attr("y", -50)
    .text("CO2 Emissions per Capita").attr("transform", "rotate(-90)")


var tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden").style('background-color', "  rgb(235, 220, 241)").style("padding", "8px").style("border-radius", "4px")
    .text("a simple tooltip");

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

        //bubbles

        var bubbleGroup = svg.append('g');

        var bubbles = bubbleGroup.selectAll("bubbles")
            .data(finalData)
            .enter()
            .append("circle")
            .attr("cx", function (d) { return x(+d.Population * 1000); })
            .attr("cy", function (d) { return y(+d.CO2); })
            .attr("r", 0)

        bubbles.style("fill", "#53265e")
            .style("opacity", "0.7")
            .attr("stroke", "black")
            .transition().duration(frequency / 2).attr("r", function (d) { return d.GDP % 30 })

        bubbles.on("mouseover", function (d) {
            let data = d.target.__data__
            tooltip.html("Country: " + data.Country + "</br>Population: " + data.Population + "<br>GDP: " + data.GDP + "<br>CO2 Emissions: " + data.CO2);
            return tooltip.style("visibility", "visible");
        })
            .on("mousemove", function (e) {
                return tooltip.style("top",
                    (e.pageY - 10) + "px").style("left", (e.pageX + 10) + "px");
            })
            .on("mouseout", function () {
                return tooltip.style("visibility", "hidden");
            });

    });
