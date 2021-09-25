<template>
    <div>
        ShowDonutzs
        <donut :data="names"></donut>
    </div>
</template>
<script>
import Donut from "/src/components/Donut.vue";
const names = [
    { name: "Ubehandlet", value: 12 },
    { name: "Under behandling", value: 4 },
    { name: "På vent", value: 3 },
];
export default {
    data() {
        return {
            names: names,
        };
    },
    components: {
        donut: Donut,
    },
    mounted() {},
};
</script>
