<template>
  <div class="divider">
    <p class="or-divider">Or</p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.or-divider{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color:rgba(112, 112, 112, .48);
}
.or-divider::before{
  content: '';
  height: .1rem;
  background: #D9D9D9;
  flex: 1;
  margin: 0 1em 0 0;
}
.or-divider::after{
  content: '';
  height: .1rem;
  background:#D9D9D9;
  flex: 1;
  margin: 0 0 0 1em;
}
</style>
