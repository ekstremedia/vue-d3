<template>
  <div class="text-center">
    ShowDonutzs
    <animated-donut :data="names" />

    <button @click="changeValues">
      v
    </button>
  </div>
</template>
<script>
import AnimatedDonut from "/src/components/AnimatedDonut.vue";
let nameList = [
    { name: "Ubehandlet", value: 12 },
    { name: "Under behandling", value: 4 },
    { name: "På vent", value: 3 },
];
export default {
    components: {
        animatedDonut: AnimatedDonut,
    },
    data() {
        return {
            names: nameList
        }
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
