<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat");

#app {
  font-family: "Montserrat", sans-serif;
  background: rgb(243, 248, 248);
  min-height: 100vh;
}
.tooltip-inner {
  min-width: 50px;
  max-width: 500px;
  background-color:rgb(253, 251, 251); 
  box-shadow: 1px 1px 2px 1px #eee;
  color:rgb(19, 92, 97);
}
.bs-tooltip-auto[x-placement^=right] .arrow::before, .bs-tooltip-right .arrow::before {
  border-right-color:rgb(253, 251, 251) !important;
}
</style>
