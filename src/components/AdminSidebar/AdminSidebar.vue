<template>
  <main class="admin-sidebar py-3">
    <div class="container">
      <header class="top">
        <div class="row mb-4">
          <div class="col">
            <h1 class="brand text-center">FREYDA</h1>
          </div>

          <div class="col-auto pt-1 p-0">
            <a href="">
              <i class="fa fa-bell pl-3"></i>
            </a>
          </div>

          <div class="col-auto pt-1 pb-0 pl-0">
            <a href="">
              <i class="fa fa-upload pl-3"></i>
            </a>
          </div>
        </div>

        <div class="user">
          <h6 class="text-white mb-1">ABC Capital LLP</h6>
          <label>John Smith</label>
        </div>
      </header>

      <section class="body mt-5">
        <div class="heading mb-2">
          <div class="row">
            <div class="col">
              <h4>My Coverage</h4>
            </div>

            <div class="col-auto">
              <router-link to="/admin/new-coverage">
                <i class="fa fa-plus"></i>
              </router-link>
            </div>
          </div>
        </div>
        
        <div class="coverage pl-2">
          <ul class="list-unstyled">
            <li class="list-item">
              <a class="fund-manager" data-toggle="collapse" href="#collapsePrivateEquity">
                <i class="fas fa-chess-rook text-white"></i>
                <label class="pl-1">Private Equity</label>

                <i class="fa fa-caret-down pl-3"></i>
              </a>

              <ul class="list-unstyled">
                <div class="collapse pl-3" id="collapsePrivateEquity">
                  <li class="funds">
                    <a href="">
                      <i class="fa fa-suitcase pr-1"></i>
                      Pantheon
                    </a>
                  </li>
                  <li class="funds">
                    <a href="">
                      <i class="fa fa-suitcase pr-1"></i>
                      JPEL Private Equity Limited
                    </a>
                  </li>
                  <li class="funds">
                    <a href="">
                      <i class="fa fa-suitcase pr-1"></i>
                      Fund Sleeve A
                    </a>
                  </li>
                </div>
              </ul>
            </li>

            <li class="list-item">
              <a class="fund-manager" data-toggle="collapse" href="#collapseAnotherEquity">
                <i class="fas fa-chess-rook text-white"></i>
                <label class="pl-1">Another Equity</label>

                <i class="fa fa-caret-down pl-3"></i>
              </a>

              <ul class="list-unstyled">
                <div class="collapse pl-3" id="collapseAnotherEquity">
                  <li class="funds">
                    <a href="">
                      <i class="fa fa-suitcase pr-1"></i>
                      Pantheon
                    </a>
                  </li>
                  <li class="funds">
                    <a href="">
                      <i class="fa fa-suitcase pr-1"></i>
                      JPEL Private Equity Limited
                    </a>
                  </li>
                  <li class="funds">
                    <a href="">
                      <i class="fa fa-suitcase pr-1"></i>
                      Fund Sleeve A
                    </a>
                  </li>
                </div>
              </ul>
            </li>
          </ul>
        </div>

        <div class="heading mb-2">
          <div class="row">
            <div class="col">
              <h4>My Watchlist</h4>
            </div>

            <div class="col-auto">
              <router-link to="">
                <i class="fa fa-plus"></i>
              </router-link>
            </div>
          </div>
        </div>

        <div class="coverage pl-2">
          <ul class="list-unstyled">
            <li class="list-item">
              <a class="fund-manager" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                <i class="fas fa-chess-rook text-white"></i>
                <label class="pl-1">Private Equity</label>

                <i class="fa fa-caret-down pl-3"></i>
              </a>

              <ul class="list-unstyled">
                <div class="collapse pl-3" id="collapseExample">
                  <li class="funds">
                    <a href="">
                      <i class="fa fa-suitcase pr-1"></i>
                      Pantheon
                    </a>
                  </li>
                  <li class="funds">
                    <a href="">
                      <i class="fa fa-suitcase pr-1"></i>
                      JPEL Private Equity Limited
                    </a>
                  </li>
                  <li class="funds">
                    <a href="">
                      <i class="fa fa-suitcase pr-1"></i>
                      Fund Sleeve A
                    </a>
                  </li>
                </div>
              </ul>
            </li>

            <li class="list-item">
              <a class="fund-manager" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                <i class="fas fa-chess-rook text-white"></i>
                <label class="pl-1">Private Equity</label>

                <i class="fa fa-caret-down pl-3"></i>
              </a>

              <ul class="list-unstyled">
                <div class="collapse pl-3" id="collapseExample">
                  <li class="funds">
                    <a href="">
                      <i class="fa fa-suitcase pr-1"></i>
                      Pantheon
                    </a>
                  </li>
                  <li class="funds">
                    <a href="">
                      <i class="fa fa-suitcase pr-1"></i>
                      JPEL Private Equity Limited
                    </a>
                  </li>
                  <li class="funds">
                    <a href="">
                      <i class="fa fa-suitcase pr-1"></i>
                      Fund Sleeve A
                    </a>
                  </li>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <footer class="bottom mt-5">
        <div class="collapse" id="collapseFooter">
          <ul class="list-unstyled">
            <li class="funds">
              <a href="">
                <i class="fa fa-suitcase pr-1"></i>
                Pantheon
              </a>
            </li>
            <li class="funds">
              <a href="">
                <i class="fa fa-suitcase pr-1"></i>
                JPEL Private Equity Limited
              </a>
            </li>
            <li class="funds">
              <a href="">
                <i class="fa fa-suitcase pr-1"></i>
                Fund Sleeve A
              </a>
            </li>
          </ul>
        </div>

        <a class="views-anchor" data-toggle="collapse" href="#collapseFooter">
          <i class="fas fa-chess-rook text-white"></i>
          <label class="pl-1">My recent views</label>
        </a>
      </footer>
    </div>
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
@import "./AdminSidebar.css";
</style>