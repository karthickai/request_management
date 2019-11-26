<template>
  <div id="Reports" class="container">
    <nav class="level is-mobile">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Ongoing Requests</p>
          <p class="title">1</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Current Status</p>
          <p class="title">Active</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Total Requests</p>
          <p class="title">50</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Score</p>
          <p class="title">789</p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Reports",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Reports {
  margin-top: 80px;
  margin-bottom: 20px;
  margin-right: 60px;
  margin-left: 60px;
}
</style>
