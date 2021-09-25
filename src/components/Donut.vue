<template>
    <div>
        <svg id="donut" width="400" height="400"></svg>
    </div>
</template>

<script>
import * as d3 from "d3";
export default {
    mounted() {
        console.log("sd");

        var svg = d3.select('#donut');
        var width = +svg.attr("width");
        var height = +svg.attr("height");
        var margin = { top: 20, left: 0, bottom: 30, right: 0 };
        var chartWidth = width - (margin.left + margin.right);
        var chartHeight = height - (margin.top + margin.bottom);
        this.chartLayer = svg
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);
        this.arc = d3
            .arc()
            .outerRadius(chartHeight / 2)
            .innerRadius(chartHeight / 4)
            .padAngle(0.03)
            .cornerRadius(6);
        this.pieG = this.chartLayer
            .append("g")
            .attr(
                "transform",
                `translate(${chartWidth / 2}, ${chartHeight / 2})`
            );
        console.log("data", this.data);
        this.drawChart(this.data);
    },
    props: ["data"],
    methods: {
        drawChart: function (data) {
            var arcs = d3
                .pie()
                .sort(null)
                .value(function (d) {
                    return d.value;
                })(data);
            var block = this.pieG.selectAll(".arc").data(arcs);
            block.select("path").attr("d", this.arc);
            var newBlock = block.enter().append("g").classed("arc", true);
            newBlock
                .append("path")
                .attr("d", this.arc)
                .attr("id", function (d, i) {
                    return "arc-" + i;
                })
                .attr("stroke", "gray")
                .attr("fill", (d) => {
                    if (d.data.name === "Ubehandlet") { return "#F00"; }
                    if (d.data.name === "Under behandling") { return "blue"; }
                    if (d.data.name === "På vent") { return "orange"; }
                });
            newBlock
                .append("text")
                .attr("dx", 10)
                .attr("dy", -5)
                .append("textPath")
                .attr("xlink:href", function (d, i) {
                    return "#arc-" + i;
                })
                .text(function (d) {
                    return d.data.name;
                });
        },
    },
};
</script>
