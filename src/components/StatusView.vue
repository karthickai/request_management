<template>
  <section id="Reports">
    <div class="columns">
      <div class="column">
        <b-tag id="tag" type="is-light" size="is-medium">
          <strong>Threshold value</strong>
        </b-tag>
        <json-viewer :value="$store.getters.data.thresholdValue" :expand-depth="5" copyable boxed sort></json-viewer>
      </div>
      <div class="column">
        <b-tag id="tag" type="is-light" size="is-medium">
          <strong>Sensor value</strong>
        </b-tag>
        <json-viewer :value="$store.getters.sensor" :expand-depth="5" copyable boxed sort></json-viewer>
      </div>
    </div>
  </section>
</template> 

<script>
export default {
  name: "StatusView",
  props: {
    msg: String
  },
  data() {
    return {

    };
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
#tag {
  margin-bottom: 10px;
}
</style>
