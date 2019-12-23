<template>
  <div>
    <section id="Reports">
      <template>
        <section class="hero is-light is-small">
          <div class="hero-body">
            <div class="level">
              <h1 class="title">Current Transcation</h1>
              <div class="buttons" style="float: right;">
                <b-button
                  type="is-success"
                  outlined
                  size="is-medium"
                  icon-left="plus-circle"
                  @click="prompt"
                >Request</b-button>
              </div>
            </div>
          </div>
        </section>
      </template>
      <b-table
        :data="isEmpty ? [] : data"
        :bordered="isBordered"
        :striped="isStriped"
        :narrowed="isNarrowed"
        :hoverable="isHoverable"
        :loading="isLoading"
        :focusable="isFocusable"
        :mobile-cards="hasMobileCards"
      >
        <template slot-scope="props">
          <b-table-column field="id" label="ID" width="40" numeric>{{ props.row.id }}</b-table-column>

          <b-table-column field="companyName" label="Company Name">{{ props.row.companyName }}</b-table-column>

          <b-table-column field="requestID" label="Request ID">
            <strong>{{ props.row.requestID }}</strong>
          </b-table-column>

          <b-table-column field="date" label="Date" centered>
            <span class="tag is-info">{{ new Date(props.row.date).toLocaleDateString() }}</span>
          </b-table-column>

          <b-table-column label="Status">
            <span>
              <b-tag
                :type="props.row.status === 'Approved' ? 'is-success' : 'is-danger'"
                size="is-small"
              >{{ props.row.status }}</b-tag>
            </span>
          </b-table-column>
        </template>

        <template slot="empty">
          <section class="section">
            <div class="content has-text-grey has-text-centered">
              <p>
                <b-icon icon="emoticon-sad" size="is-large"></b-icon>
              </p>
              <p>Nothing here.</p>
            </div>
          </section>
        </template>
      </b-table>
    </section>
    <StatusView />
  </div>
</template>

<script>
import axios from "axios";
import StatusView from "@/components/StatusView.vue";

export default {
  name: "Status",
  props: {
    msg: String
  },
  components: {
    StatusView
  },
  data() {
    return {
      data: [],
      isEmpty: false,
      isBordered: false,
      isStriped: false,
      isNarrowed: false,
      isHoverable: false,
      isFocusable: false,
      isLoading: false,
      hasMobileCards: true
    };
  },
  methods: {
    prompt() {
      this.$buefy.dialog.confirm({
        title: "Requests",
        message: "Add new request",
        cancelText: "Cancel",
        confirmText: "Send",
        type: "is-success",
        onConfirm: () => {
          this.$buefy.toast.open("Request sent");
          axios
            .get("http://127.0.0.1:5000/request", {
              auth: {
                username: "ibmiot",
                password: "ibmadmin"
              },
              headers:{
                'Content-Type': 'application/json'
              }
            })
            .then(response => {
              /* eslint-disable no-console */
              console.log(response.data);
              /* eslint-enable no-console */
              this.$store.commit("sensor", response.data.sensor);
              this.data.push({
                companyName: "IBM IoT",
                date: new Date().toLocaleString(),
                id: response.data.countID,
                requestID: response.data.requestID,
                status: response.data.message
              });
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
                })
                .catch(error => {
                  /* eslint-disable no-console */
                  console.log(error);
                  /* eslint-enable no-console */
                });
            })
            .catch(error => {
              /* eslint-disable no-console */
              console.log(error);
              /* eslint-enable no-console */
            });
        }
      });
    }
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
