<template>
  <div>
    <section id="Reports">
      <template>
        <section class="hero is-light is-small">
          <div class="hero-body">
            <div class="level">
              <h1 class="title">Transcation History</h1>
            </div>
          </div>
        </section>
      </template>
      <b-table
        :data="isEmpty ? [] : history"
        :bordered="isBordered"
        :striped="isStriped"
        :narrowed="isNarrowed"
        :hoverable="isHoverable"
        :loading="isLoading"
        :focusable="isFocusable"
        :mobile-cards="hasMobileCards"
      >
        <template slot-scope="props">
          <b-table-column field="companyName" label="Company Name">{{ props.row.company }}</b-table-column>

          <b-table-column field="transactionId" label="transactionId">
            <strong>{{ props.row.transactionId }}</strong>
          </b-table-column>

          <b-table-column field="date" label="Date" centered>
            <span class="tag is-info">{{ props.row.timestamp}}</span>
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
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "History",
  props: {
    msg: String
  },
  components: {
    
  },
  data() {
    return {
      history: [],
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
   mounted() {
    axios
      .get("http://localhost:5000/history", {
        auth: {
          username: "ibmiot",
          password: "ibmadmin"
        }
      })
      .then(response => {
        this.history = response.data.history
        /* eslint-disable no-console */
        console.log(this.history);
        /* eslint-enable no-console */
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
