<template>
    <main class="equity">
    <div class="private-equity">
       <input type="text" name="" id="">
       <i class="fas fa-search"></i>
    </div>
    <p class="pt-2 font-weight-bold header">At a glance</p>
    <div class="equity-top">
 <div class="row">
   <div class="col">
       <div class="contain">
        <div class="first-text">USD</div>
        <div class="second-text">$2.0bn</div>
       </div>
      <div class="third-text pt-2">Capital Commited</div>
   </div>
   <div class="col">
       <div class="contain">
        <div class="first-text">USD</div>
        <div class="second-text">$113mn</div>
       </div>
      <div class="third-text pt-2">Residual Value</div>
   </div>
   <div class="col">
       <div class="contain">
        <div class="first-text">USD</div>
        <div class="second-text">$1.6bn</div>
       </div>
      <div class="third-text pt-2">Capital Called</div>
   </div>
   <div class="col">
      <div class="contain">
        <div class="first-text">USD</div>
        <div class="second-text">$2.2bn</div>
       </div>
      <div class="third-text pt-2">Capital Distributed</div>
   </div>
   <div class="col">
       <div class="contain">
        <div class="first-text">IRR</div>
        <div class="second-text">17.2%</div>
       </div>
      <div class="third-text pt-2">Current IRR</div>
   </div>
</div>
<div class="row mt-4">
   <div class="col">
        <div class="contain">
        <div class="first-text">USD</div>
        <div class="second-text">$639m</div>
       </div>
      <div class="third-text pt-2">Net Cash FLow</div>
   </div>
   <div class="col">
      <div class="contain">
        <div class="first-text">DPI</div>
        <div class="second-text">1.4x</div>
       </div>
      <div class="third-text pt-2">Distributed to paid-in Capital</div>
   </div>
   <div class="col">
       <div class="contain">
        <div class="first-text">RVPI</div>
        <div class="second-text">0.1x</div>
       </div>
      <div class="third-text pt-2">Residual Value to paid-in Capital</div>
   </div>
   <div class="col">
           <div class="contain">
        <div class="first-text">TVPI</div>
        <div class="second-text">1.5x</div>
       </div>
      <div class="third-text pt-2">Total Value to paid-in Capital</div>
   </div>
   <div class="col">
           <div class="contain">
        <div class="first-text">Spread</div>
        <div class="second-text">12.4%</div>
       </div>
      <div class="third-text pt-2">75th - 25th percentile IRR</div>
   </div>
</div>
</div>
<div class="equity-chart-area mt-5">
    <div class="container mt-5">
    <div class="row d-flex justify-content-around mt-5">
        <div v-for="i in 5" :class="col" :key="i">
            <div class="chart-container">
            <doughnutchart  />
            <p class="text-center pt-1">By Exercise</p>
            </div>
         </div>
        </div>
        </div>
    </div>
<div class="equity-line-chart mt-5">
<linechart />
</div>
    </main>
</template>

<script>
import doughnutchart from '@/components/Doughnutchart.vue'
import linechart from '@/components/Linechart.vue'

export default {
components:{
    doughnutchart,
    linechart
}
}
</script>

<style scoped>

.equity{
    color: #578A8D
}

.equity .private-equity{
    position: relative;
}

.equity .private-equity input{
    width:100%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #578A8D;
}

.equity .private-equity input:focus{
    outline: none;
}

.private-equity i{
    position: absolute;
    right:14px;
    top: 9px;
    font-size: 25px;
    color: #578A8D;
}
.first-text{
    font-size: 28px;
    opacity: .5;
}
.second-text{
    font-size: 32px;
    opacity: .5;
}
.third-text{
    opacity: .5;
    font-weight: bold;
}
.header{
    font-size: 16px
}
.contain{
    line-height: 1.3
}
.chart-container{
    width:120px;
    
}
</style>
