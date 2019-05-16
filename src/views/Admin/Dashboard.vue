<template>
  <main class="dashboard py-3">
    <div class="container">
      <div class="row mb-3 stat-cards">
        <div class="col">
          <div class="card">
            <div class="card-header text-center pb-1 px-0">
              <p class="card-header-title mb-0">Capital Commited</p>
            </div>
            <div class="card-body text-center pb-1">
              <h3 class="mb-0">
                <b>$2.0BN</b>
              </h3>
              <p>USD</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <div class="card-header text-center pb-1 px-0">
              <p class="card-header-title mb-0">Residual Value</p>
            </div>
            <div class="card-body text-center pb-1">
              <h3 class="mb-0">
                <b>$113M</b>
              </h3>
              <p>USD</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <div class="card-header text-center pb-1 px-0">
              <p class="card-header-title mb-0">Capital Called</p>
            </div>
            <div class="card-body text-center pb-1">
              <h3 class="mb-0">
                <b>$1.6BN</b>
              </h3>
              <p>USD</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <div class="card-header text-center pb-1 px-0">
              <p class="card-header-title mb-0">Capital Distributed</p>
            </div>
            <div class="card-body text-center pb-1">
              <h3 class="mb-0">
                <b>$2.2BN</b>
              </h3>
              <p>USD</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <div class="card-header text-center pb-1 px-0">
              <p class="card-header-title mb-0">Current IRR</p>
            </div>
            <div class="card-body text-center pb-1">
              <h3 class="mb-0">
                <b>17.2%</b>
              </h3>
              <p>IRR</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-3 stat-cards">
        <div class="col">
          <div class="card">
            <div class="card-header text-center pb-1 px-0">
              <p class="card-header-title mb-0">Net Cash Flow</p>
            </div>
            <div class="card-body text-center pb-1">
              <h3 class="mb-0">
                <b>$628M</b>
              </h3>
              <p>USD</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <div class="card-header text-center pb-1 px-0">
              <p class="card-header-title mb-0">Distributed to paid-in Capital</p>
            </div>
            <div class="card-body text-center pb-1">
              <h3 class="mb-0">
                <b>$1.4x</b>
              </h3>
              <p>DPI</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <div class="card-header text-center pb-1 px-0">
              <p class="card-header-title mb-0">Residual value to paid-in Capital</p>
            </div>
            <div class="card-body text-center pb-1">
              <h3 class="mb-0">
                <b>0.1x</b>
              </h3>
              <p>RVPI</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <div class="card-header text-center pb-1 px-0">
              <p class="card-header-title mb-0">Total value to paid-in Capital</p>
            </div>
            <div class="card-body text-center pb-1">
              <h3 class="mb-0">
                <b>1.5x</b>
              </h3>
              <p>TVPI</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <div class="card-header text-center pb-1 px-0">
              <p class="card-header-title mb-0">75th - 25th Percentile IRR</p>
            </div>
            <div class="card-body text-center pb-1">
              <h3 class="mb-0">
                <b>12.4%</b>
              </h3>
              <p>SPREAD</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col">
          <div class="card border-0 rounded-0">
            <div class="card-body">
              <div class="container">
                <div class="d-flex">
                  <div class="col-2 mx-3">
                    <doughnut-chart/>
                    <p class="text-center mt-3 mb-0">By Geography</p>
                  </div>

                  <div class="col-2 mx-3">
                    <doughnut-chart/>
                    <p class="text-center mt-3 mb-0">By Strategy</p>
                  </div>

                  <div class="col-2 mx-3">
                    <doughnut-chart/>
                    <p class="text-center mt-3 mb-0">By Industry</p>
                  </div>

                  <div class="col-2 mx-3">
                    <doughnut-chart/>
                    <p class="text-center mt-3 mb-0">By Currency</p>
                  </div>

                  <div class="col-2 mx-3">
                    <doughnut-chart/>
                    <p class="text-center mt-3 mb-0">By Vintage Year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col">
          <div class="card border-0 rounded-0">
            <div class="card-body">
              <bar-chart/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal"
      id="openModal"
      tabindex="-1"
      data-backdrop="static"
      data-keyboard="false"
      role="dialog"
    >
      <i @click="closeModal()" class="far fa-times-circle closes"></i>
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div v-show="pdfFile == null" class="card modal-card">
            <div class="upload-title py-2">Upload file from...</div>

            <div class="card-body">
              <div class="px-4 d-flex align-items-center mb-3 disabled">
                <i class="fab fa-google-drive upload-icon"></i>
                <span class="pl-4 upload-text">Google Drive</span>
              </div>
              <div class="px-4 d-flex align-items-center mb-3 pt-2">
                <input
                  accept="application/pdf"
                  id="computer"
                  type="file"
                  class="d-none"
                  @change="doSomething($event.target.files)"
                >
                <label for="computer" class="laptop-text upload-text pr-1">
                  <i class="fas fa-laptop"></i>My Computer
                </label>
              </div>
              <div class="px-4 d-flex align-items-center disabled">
                <i class="fab fa-dropbox upload-icon"></i>
                <span class="pl-4 upload-text">Dropbox</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="pdfFile">
        <div class="mx-1 row">
          <div class="col-md-6 pdf-preview mt-3">
            <embed :src="pdfFile" type="application/pdf" width="100%" height="900px">
          </div>
          <div class="col-md-6 pdf-post mt-3">
            <h4>stuff</h4>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import DoughnutChart from "@/components/DoughnutChart";
import BarChart from "@/components/BarChart";

export default {
  data() {
    return {
      pdfFile: null
    };
  },
  name: "dashboard",
  components: {
    DoughnutChart,
    BarChart
  },
  methods: {
    doSomething(files) {
      var reader = new FileReader();
      reader.onload = e => {
        this.pdfFile = e.target.result;
        console.log(this.pdfFile);
      };
      reader.readAsDataURL(files[0]);
    },
    closeModal() {
      this.pdfFile = null;
      $("#openModal").modal("hide");
    }
  }
};
</script>

<style scoped>
.dashboard .stat-cards .card {
  border-radius: 0px !important;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(214, 211, 214, 1);
  -moz-box-shadow: 2px 2px 5px 0px rgba(214, 211, 214, 1);
  box-shadow: 2px 2px 5px 0px rgba(214, 211, 214, 1);
}

.dashboard .stat-cards .card .card-header {
  background-color: #ffffff !important;
  border-color: rgba(87, 138, 141, 0.2);
}

.dashboard .stat-cards .card .card-header-title {
  font-size: 11px !important;
  font-weight: bold;
  color: #666666;
}

.dashboard .stat-cards .card .card-body {
  color: #578a8d;
}

.dashboard .modal-card {
  position: absolute;
  border: none;
  margin-top: 40px;
  left: -13px;
}

.dashboard .modal-content {
  border: none;
}

.dashboard .modal-body {
  border: none;
  border: 1px solid red;
  position: relative;
  width: 100%;
  float: right;
}

.dashboard .upload-title {
  font-size: 16px;
  text-align: center;
  color: #558c90;
  border-bottom: 0.5px solid #cccccc;
}

.dashboard .upload-text {
  opacity: 0.59;
}

.dashboard .upload-icon {
  opacity: 0.43;
}

.dashboard .fa-laptop {
  font-size: 15px;
  position: relative;
  right: 23px;
}

.dashboard .laptop-text {
  padding-left: 22px;
}

.dashboard .laptop-text:hover {
  color: #558c90;
}

.dashboard .closes {
  position: relative;
  pointer-events: visible;
  cursor: pointer;
  float: right;
  font-size: 30px;
  color: #ffffff;
  margin: 20px 15px 0 0;
}

.dashboard .disabled {
  pointer-events: none;
  opacity: 0.5;
}
</style>

