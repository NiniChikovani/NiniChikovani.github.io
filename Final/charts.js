d3.select("#charts")
    .on("mousemove", function (event) {

        var tooltip = d3.select("#tooltip")
            .style("display", "block")
            .style("top", event.pageY + 20 + "px")
            .style("left", event.pageX + 20 + "px")
            .html("Legend");
    })
    .on("mouseout", function () {
        d3.select("#tooltip")
            .style("display", "none");
    });