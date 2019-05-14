<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  mounted () {
    this.renderChart({
      labels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017' ,'2018'],
      datasets: [
        {
          label: 'Two',
          backgroundColor: '#B8D5D9',
          data: [230, 160, 280, 305, 285, 250,220, 225],
          borderColor: '#B8D5D9',
          pointBackgroundColor: '#B8D5D9',
          pointBorderColor: '#B8D5D9',
          borderWidth: 2,
          fill: false,
          lineTension: 0,
        }
      ]
    }, 
    {
      scales: {
        xAxes: [{
          gridLines: {
            display: false,
          },
          ticks: {
            fontSize: 15,
          }
        }],
        yAxes: [{
          gridLines: {
            display: false,
          },
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 5,
          
          }
        }]
      },
      legend: {
        display: false
      },
      responsive: true, maintainAspectRatio: false
    })
  }
}
</script>
