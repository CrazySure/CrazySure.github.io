<template>
    <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>
<script>
import echarts from "echarts";
import resize from "./mixins/resize";

export default {
    mixins: [resize],
    props: {
        className: {
            type: String,
            default: "time-chart"
        },
        id: {
            type: String,
            default: "time-chart"
        },
        width: {
            type: String,
            default: "200px"
        },
        height: {
            type: String,
            default: "200px"
        },
        option:Object
    },
    data() {
        return {
            chart: null
        };
    },
    mounted() {
        this.initChart();
    },
    beforeDestroy() {
        if (!this.chart) {
            return;
        }
        this.chart.dispose();
        this.chart = null;
    },
    methods: {
        initChart() {
            this.chart = echarts.init(document.getElementById(this.id));
            
            this.chart.setOption(this.option);
        }
    }
};
</script>
