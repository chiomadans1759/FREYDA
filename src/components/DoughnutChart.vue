<script>
import { Doughnut } from "vue-chartjs"

export default {
  extends: Doughnut,
  mounted() {
    this.renderChart(
      {
        labels: ["One", "Two", "Three", "Four", "Five"],
        datasets: [
          {
            data: [20, 40, 60, 80],
            backgroundColor: [, "#58898F", "#CED2D0", "#CFE0DF", "#B8D5D9"]
          }
        ]
      },
      {
        legend: {
          display: false
        }
      }
    );
  }
};
</script>
