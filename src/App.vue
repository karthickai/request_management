<template>
  <div id="app" class="container">
    <Header />
    <Reports />
    <keep-alive>
      <component v-bind:is="$store.getters.component" />
    </keep-alive>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Reports from "@/components/Reports.vue";
import Status from "@/components/Status.vue";
import History from "@/components/History.vue";

export default {
  name: "app",
  components: {
    Header,
    Reports,
    Status,
    History
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
