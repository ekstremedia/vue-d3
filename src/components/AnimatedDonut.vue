<template>
  <div id="donut" />
  <main>
    <section>
      <figure>
        <svg />
      </figure>
    </section>
    <button type="button">
      Swap data
    </button>
  </main>
</template>

<script>
import * as d3 from "d3";
import {arc, pie, select, sum, interpolate} from "d3";
// https://observablehq.com/@d3/donut-chart
export default {
    props: {
        data: Array,
    },
    data() {
        return {
            pieData: []
        }
    },
    watch: {},
    methods: {
        generateData() {
            this.pieData = [Math.random(50), Math.random(50), Math.random(50)]
        }
    },
    mounted() {


        this.generateData()
        const data = this.pieData;
        const total = sum(data);
        const width = select("svg").node().clientWidth;

        const svgs = select("section")
            .select("svg")
            .style("height", `${width}px`);

        svgs.append("g").attr("transform", `translate(${width / 2}, ${width / 2})`);

        const colors = "#DD5A43 #478FCA #ff892a".split(" ");

        const sectorArc = arc()
            .innerRadius(width / 4)
            .outerRadius(width / 2.3);

        const tweens = [
            function (sectorData) {
                const interpolator = interpolate(this._current, sectorData);
                this._current = interpolator(0);
                return t => sectorArc(interpolator(t));
            }
        ];

        function drawCharts(data) {
            const pieData = pie().sort(null)(data);
            svgs.each(function (_, index) {
                const svg = select(this);
                const sectors = svg
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
                    .attrTween("d", tweens[index]);
            });
        }

        drawCharts(this.pieData);

        let isEven = false;
        select("button").on("click", () => {
            isEven = !isEven;
            this.generateData()
            // this.pieData = [1,3,10]
            drawCharts(this.pieData);
        });
    }

}
</script>
