

<template>
  <div>
    <h4>Most popular female names in the world</h4>
    <pie :data="names" />
    <br>
    <button v-if="canAddAName" v-on:click="addName">Add a name</button>
  </div>
</template>

<script>
import * as d3 from "d3";
import * as _ from "lodash"
import Pie from '/src/components/Pie.vue'

const NAMES = [
  { name: 'Sarah', value: 2502 },
  { name: 'Emma', value: 2005 },
  { name: 'Laura', value: 1968 },
  { name: 'Chloé', value: 1863 },
  { name: 'Marie', value: 1810 },
  { name: 'Emily', value: 1637 },
  { name: 'Léa', value: 1592 },
  { name: 'Camille', value: 1572 },
  { name: 'Anna', value: 1433 },
  { name: 'Manon', value: 1403 }
]
export default {
  components: {
    pie: Pie
  },
  data: function() {
    return {
      names: _.take(NAMES, 3)
    }
  },
  computed: {
    canAddAName: function() {
        console.log(this.names.length < NAMES.length)
      return this.names.length < NAMES.length;
    }
  },
  methods: {
    addName: function() {
        console.log("PUSH")
      this.names.push({ name: 'Terje', value: 23 });
    }
  }
}
</script>