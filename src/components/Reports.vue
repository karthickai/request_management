<template>
  <div id="Reports" class="container">
    <nav class="level is-mobile">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Current Status</p>
          <p class="title">Active</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Approved Request</p>
          <p class="title">{{$store.getters.data.approvedList}}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Total Requests</p>
          <p class="title">{{$store.getters.data.requestCount}}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Score</p>
          <p class="title">{{$store.getters.data.creditScore}}</p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Reports",
  props: {
    msg: String
  },
  data() {
    return {
      data: null,
      creditScore: 0,
      totaRequest: 0,
      approvedRequest: 0
    };
  },

  mounted() {
    axios
      .get("http://localhost:5000/company", {
        auth: {
          username: "ibmiot",
          password: "ibmadmin"
        }
      })
      .then(response => {
        /* eslint-disable no-console */
        console.log(response);
        /* eslint-enable no-console */
        this.$store.commit("save", response.data);
        this.data = this.$store.getters.data;
      })
      .catch(error => {
        /* eslint-disable no-console */
        console.log(error);
        /* eslint-enable no-console */
      });
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
