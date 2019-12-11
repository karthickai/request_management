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

          <b-table-column field="name" label="Request Name">{{ props.row.name }}</b-table-column>

          <b-table-column field="companyId" label="Comapny ID">{{ props.row.companyId }}</b-table-column>

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
    const data = [
      {
        id: 1,
        name: "Request01",
        companyId: "34v345v3453sdfsg456",
        date: "2016/10/15 13:43:27",
        status: "Approved"
      }
    ];

    return {
      data,
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
        onConfirm: () => this.$buefy.toast.open("Request sent")
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
