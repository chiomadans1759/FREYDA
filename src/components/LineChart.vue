<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    this.renderChart({
      labels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017' ,'2018'],
      datasets: [
        {
          label: 'One',
          backgroundColor: '#58898F',
          data: [0,220,310,355 , 320, 310, 300, 295],
           borderColor: '#58898F',
          pointBackgroundColor: '#58898F',
          pointBorderColor: '#58898F',
          borderWidth: 2,
          fill:false,
          lineTension: 0,  
        },{
          label: 'Two',
          backgroundColor: '#B8D5D9',
          data: [0, 160, 280, 305, 285, 250,220, 225],
          borderColor: '#B8D5D9',
          pointBackgroundColor: '#B8D5D9',
          pointBorderColor: '#B8D5D9',
          borderWidth: 2,
          fill:false,
          lineTension: 0,
        },
        {
          label: 'Three',
          backgroundColor: '#CFE0DF',
          data: [0, 175, 202, 310, 290,277, 220, 200],
          borderColor: '#CFE0DF',
          pointBackgroundColor: '#CFE0DF',
          pointBorderColor: '#CFE0DF',
          borderWidth: 2,
          fill:false,
          lineTension: 0,
        },
        {
          label: 'Four',
          backgroundColor: '#CED2D0,',
          data: [0, 120,204, 248, 180, 156, 200, 310],
           borderColor: '#CED2D0',
          pointBackgroundColor: '#CED2D0',
          pointBorderColor: '#CED2D0',
          borderWidth: 2,
          fill:false,
          lineTension: 0,
        }
      ]
    }, {scales: {
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
      },responsive: true, maintainAspectRatio: false})
    
  }
}
</script>
