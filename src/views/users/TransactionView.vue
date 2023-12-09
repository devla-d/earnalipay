<template>
  <user-layout>
    <!-- breadcrumb content begin -->
    <div class="uk-section uk-padding-remove-vertical">
      <div class="uk-container">
        <div class="uk-grid">
          <div class="uk-width-1-1 in-breadcrumb">
            <ul class="uk-breadcrumb uk-float-right">
              <li><a href="/">Home</a></li>
              <li><span>Transactions</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- breadcrumb content end -->

    <div class="uk-section">
      <div class="uk-container">
        <div class="uk-overflow-auto">
          <table
            id="profittable"
            class="uk-table uk-table-hover uk-table-striped"
            style="width: 100%"
          >
            <thead>
              <tr>
                <th>Date</th>

                <th>Mode</th>
                <th>Method</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="transaction in transactions" :key="transaction.id">
                <td>{{ transaction.date }}</td>

                <td>{{ transaction.mode }}</td>
                <td>{{ transaction.paymethod }}</td>
                <td>${{ transaction.amount }}</td>
                <td>
                  <span class="uk-badge">{{ transaction.status }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </user-layout>
</template>

<script>
import UserLayout from "@/layouts/UserLayout.vue";
import initialize from "@/services";
//const toastr = new window.Toastr();
export default {
  components: {
    UserLayout,
  },
  data() {
    return {
      transactions: [],
    };
  },
  async mounted() {
    initialize.setupajax(this.$store.state.token);
    document.title = "Transactions";

    await window.$.get("https://earnalipay.org/transactions/", (data) => {
      //console.log(data);
      this.transactions = data;
    });
  },
};
</script>

<style scoped>
</style>