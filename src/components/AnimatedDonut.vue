<template>
  <div id="donut" />
</template>

<script>
import * as d3 from "d3";
// https://observablehq.com/@d3/donut-chart
export default {
    props: {
        data: Array,
    },
    data() {
        return {
            pieData: {a: 9, b: 20, c: 32}
        }
    },
    watch: {},
    mounted() {
        // set the dimensions and margins of the graph
        const width = 450,
            height = 450,
            margin = 40;

        // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
        const radius = Math.min(width, height) / 2 - margin

        // append the svg object
        const svg = d3.select("#donut")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${width / 2},${height / 2})`);

        // Create dummy data
        let data = this.pieData

        // set the color scale
        const color = d3.scaleOrdinal()
            .range(["#DD5A43", "#478FCA", "#ff892a"])

        // Compute the position of each group on the pie:
        const pie = d3.pie()
            .value(d => d[1])

        const data_ready = pie(Object.entries(data))

        // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
        svg
            .selectAll('whatever')
            .data(data_ready)
            .join('path')
            .attr('d', d3.arc()
                .innerRadius(100)         // This is the size of the donut hole
                .outerRadius(radius)
            )
            .attr('fill', d => color(d.data[0]))
        .attr('fill')
            // .attr("stroke", "black")
            // .style("stroke-width", "2px")
            // .style("opacity", 0.7)




        function render(){
            // generate new random data
            data = this.pieData

            // add any new pie segments
            .datum(data).selectAll("path")
                .data(pie)
                .enter().append("path")
                .attr("class","piechart")
                .attr("fill", function(d,i){ return color(i); })
                .attr("d", arc)
                .each(function(d){ this._current = d; })

            // remove data not used
            g.datum(data).selectAll("path")
                .data(pie).exit().remove();
        }

        setInterval(render,2000);



    }
}
</script>
