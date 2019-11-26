<template>
  <div id="Header" class="container">
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="@/assets/logo.png" alt="Water Waste Management system" />
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Status</strong>
            </a>
            <a class="button is-light">History</a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Header {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 60px;
  margin-left: 60px;
}
 .line{
width: 100%;
height: 15px;
border-bottom: 1px solid grey;
position: absolute;
}
</style>
