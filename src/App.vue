<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
const routes = window.routes;
</script>

<template>
  <div class="container mx-auto">
    <div class="bg-teal-500">
      <nav class="flex items-center justify-between flex-wrap p-6">
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <span v-for="route in routes">
              <router-link :to="route.path"> {{ route.name }} </router-link> |
            </span>
          </div>
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
