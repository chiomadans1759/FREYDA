<template>
  <main class="sidebar-rightside">
    <div class="dropdown-area">
      <div data-toggle="collapse" data-target="#about" aria-controls="collapseExample">About</div>
      <i class="fas fa-caret-down" data-target="#about" data-toggle="collapse"></i>
    </div>
    <div class="collapse" id="about">
      <div
        class="card card-body"
      >Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</div>
    </div>
    <div class="dropdown-area">
      <div
        data-toggle="collapse"
        data-target="#activity"
        aria-controls="collapseExample"
      >Recent Activity</div>
      <i class="fas fa-caret-down" data-target="#activity" data-toggle="collapse"></i>
    </div>
    <div class="collapse" id="activity">
      <div
        class="card card-body"
      >Todays activity Lorem, ipsum dolor sit amet consectetur adipisicing.</div>
    </div>
    <div class="dropdown-area">
      <div data-toggle="collapse" data-target="#document" aria-controls="collapseExample">Document</div>
      <i class="fas fa-caret-down" data-target="#document" data-toggle="collapse"></i>
    </div>
    <div class="collapse" id="document">
      <div
        class="card card-body"
      >Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</div>
    </div>
  </main>
</template>

<script>
</script>

<style scoped>
.sidebar-rightside {
  color: #578a8d;
}
.dropdown-area {
  display: flex;
  justify-content: space-between;
  padding: 5px 25px;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #578a8d;
}
.fas {
  font-size: 25px;
}
</style>
