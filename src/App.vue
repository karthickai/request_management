<template>
  <div id="app" class="container">
    <Header />
    <Reports />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Reports from '@/components/Reports.vue'

export default {
  name: 'app',
  components: {
    Header,
    Reports
  }
}
</script>

<style>


</style>
