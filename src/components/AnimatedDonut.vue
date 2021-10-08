<template>
  <div
    id="donut"
    style="width: 300px"
  />
  <button type="button">
    Swap data
  </button>
</template>

<script>
import {arc, pie, select, interpolate} from "d3";
// https://observablehq.com/@d3/donut-chart
export default {
    props: {
        pieWidth: {
            type: Number,
            default: 300,
            required: false
        }
    },
    data() {
        return {
            pieData: [],
            pie: null
        }
    },
    watch: {},
    mounted() {
        this.initializePie();
        select("button").on("click", () => {
            this.generateData()
            this.drawChart(this.pieData);
        });
    },
    methods: {
        initializePie() {
            this.generateData()
            this.pie = select("#donut")
                .append("svg")
                .style("height", `${this.pieWidth}px`);
            this.pie.append("g").attr("transform", `translate(${this.pieWidth / 2}, ${this.pieWidth / 2})`);
            this.drawChart(this.pieData);
        },
        generateData() {
            this.pieData = [Math.random(50), Math.random(50), Math.random(50)]
        },
        drawChart(data) {
            const sectorArc = arc()
                .innerRadius(this.pieWidth / 4)
                .outerRadius(this.pieWidth / 2);

            const tweenChart =
                function (sectorData) {
                    const interpolator = interpolate(this._current, sectorData);
                    this._current = interpolator(0);
                    return t => sectorArc(interpolator(t));
                }
            const colors = "#DD5A43 #478FCA #ff892a".split(" ");

            const pieData = pie().sort(null)(data);
            const sectors = this.pie
                .select("g")
                .selectAll("path")
                .data(pieData);

            sectors
                .enter()
                .append("path")
                .attr("fill", (_, i) => colors[i])
                .attr("d", sectorArc)
                .property("_current", d => d);

            sectors
                .transition()
                .duration(1000)
                .attrTween("d", tweenChart);
        }
    }

}
</script>
