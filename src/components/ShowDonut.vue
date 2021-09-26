<template>
    <div>
        ShowDonutzs
        <donut :data="names"></donut>
        <button @click="changeValues">Endre verdier</button>
    </div>
</template>
<script>
import Donut from "/src/components/Donut.vue";
let nameList = [
    { name: "Ubehandlet", value: 12 },
    { name: "Under behandling", value: 4 },
    { name: "På vent", value: 3 },
];
export default {
    data() {
        return {
            names: [
            { name: "Ubehandlet", value: 12 },
            { name: "Under behandling", value: 4 },
            { name: "På vent", value: 3 }
            ]
        }
    },
    components: {
        donut: Donut,
    },
    mounted() {
        // this.names = 
    },
    methods: {
        changeValues() {
            let newNames = this.names
            console.log(newNames)
            newNames[0].value = 125;
            newNames[1].value = 25;
            this.names = newNames;
            console.log(newNames)
        },
    },
};
</script>
