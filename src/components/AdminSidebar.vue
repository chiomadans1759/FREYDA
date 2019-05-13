<template>
  <main class="admin-sidebar">
    <header class="top">
      <div class="left-top-text">
        <div class="text-white">ABC Capital LLP</div>
        <label>@John.Smith</label>
      </div>
      <div class="left-top-icon mb-3">
        <i class="far fa-star ml-5"></i>
        <i class="far fa-bell pl-3"></i>
      </div>
    </header>

    <section class="body mt-3">
      <p>My coverage</p>
      <ul class="list-unstyled mt-2 list-menu">
        <li>
          <i class="fas fa-chess-rook text-white"></i>
          <router-link
            to="/admin/private-equity"
            class="pl-2 text-white"
            data-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >Private Equity</router-link>
          <div class="collapse" id="collapseExample">
            <div class="toggler pt-1" v-for="i in 5" :key="i">
              <i class="far fa-user pl-4"></i>
              <span class="pl-2">Richard Brandon</span>
            </div>
          </div>
        </li>
        <li>
          <i class="far fa-user"></i>
          <router-link to="pantheon" class="space" href>Pantheon</router-link>
        </li>
        <li>
          <i class="fas fa-suitcase"></i>
          <a class="space" href>JPEL Private Equity Limited</a>
        </li>
        <li class="last">
          <i class="far fa-envelope"></i>
          <a class="space" href>Fund Sleeve A</a>
        </li>
      </ul>
    </section>

    <footer class="bottom mt-5">
      <p>My recent views</p>
      <ul class="list-unstyled mt-2 list-menu">
        <li v-for="i in 6" :key="i">
          <i class="far fa-file"></i>
          <a class="space" href>XYZ Capital LLP Quater....</a>
        </li>
      </ul>
    </footer>
  </main>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  name: "admin-sidebar",
  methods: {
    ...mapActions(["getInvestments"])
  },
  mounted() {
    this.getInvestments();
  },
  computed: {
    ...mapState(["auth", "investments"])
  }
};
</script>

<style scoped>

</style>