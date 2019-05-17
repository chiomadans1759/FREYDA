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
          <h6 class="text-white mb-1">{{auth.user.companyName}}</h6>
          <label>{{auth.user.firstName}} {{auth.user.lastName}}</label>
        </div>
      </header>

      <section class="body mt-5">
        <div class="heading mb-2">
          <div class="row">
            <div class="col">
              <h4>My Coverage</h4>
            </div>

            <div class="col-auto">
              <router-link :to="`/${auth.user.username}/new-coverage`">
                <i class="fa fa-plus"></i>
              </router-link>
            </div>
          </div>
        </div>
        
        <div class="coverage pr-1">
          <ul class="list-unstyled">
            <li class="list-item" v-for="(coverage, index) in investments.coverages" :key="coverage.id">
              <a class="fund-manager" data-toggle="collapse" href="#collapsePrivateEquity"> 
                <div class="row pl-2">
                  <div class="col">
                    <i class="fas fa-chess-rook text-white"></i>
                    <label class="pl-1">{{coverage.fundStrategy}}</label>
                  </div>

                  <div class="col-auto text">
                    <i class="fa fa-caret-down"></i>
                  </div>
                </div> 
              </a>

              <ul class="list-unstyled mb-1">
                <div class="collapse pl-4" id="collapsePrivateEquity">
                  <li class="funds" v-for="(manager, index) in coverage.fundManagers" :key="manager.id">
                    <a data-toggle="collapse" :href="`#collapse${index}`">
                      <div class="row">
                        <div class="col">
                          <i class="fas fa-user"></i>
                          <label class="pl-1" data-toggle="tooltip" data-placement="right" :title="manager.fundManager">
                            {{manager.fundManager | truncate(14)}}
                          </label>
                        </div>
                        <div class="col-auto">
                          <i class="fa fa-caret-down"></i>
                        </div>
                      </div>
                    </a>

                    <ul class="list-unstyled">
                      <div class="collapse pl-3" :id="`collapse${index}`">
                        <li v-for="fund in manager.Funds" :key="fund.id" class="list-item funds">
                          <a href="" data-toggle="tooltip" data-placement="right" :title="fund.fundName">
                            <i class="fa fa-suitcase"></i>
                            {{fund.fundName | truncate(14)}}
                          </a>
                        </li>
                      </div>
                    </ul>
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
              <router-link :to="`/${auth.user.username}/new-watchlist`">
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
    ...mapActions(["getUserCoverages"])
  },
  filters: {
    truncate(string, number) {
      if (string.length >= number) {
        return string.slice(0, number) + " ...";
      } else {
        return string;
      }
    }
  },
  async created() {
    await this.getUserCoverages();
    $('[data-toggle="tooltip"]').tooltip()
  },
  computed: {
    ...mapState(["auth", "investments"])
  }
};
</script>

<style scoped>
.admin-sidebar header
.brand {
  padding: 3px;
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  font-size: 16px;
  border-radius: 50px;
}

.admin-sidebar header
i {
  color: rgba(255, 255, 255, 0.5);
  font-size: 18px;
}

.admin-sidebar header 
.col-auto a:hover i {
  color: #ffffff;
}

.admin-sidebar header
.user label {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
}

.admin-sidebar .body 
.heading,
.admin-sidebar .body 
.heading a {
  color: rgba(255, 255, 255, 0.7) !important;
}

.admin-sidebar .body 
.heading h4 {
  font-size: 16px;
  margin-top: 1px;
}

.admin-sidebar .body 
ul li {
  font-size: 14px;
}

.admin-sidebar .body
.fund-manager {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0rem;
}

.admin-sidebar .body
.fund-manager:hover {
  color: rgba(255, 255, 255, 1.0);
  text-decoration: none;
}

.admin-sidebar .body
li.funds {
  font-size: 13px;
}

.admin-sidebar .body
li.funds a {
  color: rgba(255, 255, 255, 0.8) !important;
}

.admin-sidebar .body
li.funds a:hover {
  color: rgba(255, 255, 255, 1.0) !important;
  text-decoration: none;
}

.admin-sidebar footer {
  position: absolute;
  bottom: 1rem;
}

.admin-sidebar footer 
.views-anchor {
  color: #ffffff;
  font-weight: bold;
  font-size: 14px;
}

.admin-sidebar footer 
ul li a {
  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
}

.admin-sidebar footer 
ul li a:hover {
  color: rgba(255, 255, 255, 1.0);
  text-decoration: none;
}
</style>