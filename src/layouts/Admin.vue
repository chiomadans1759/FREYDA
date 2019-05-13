<template>
  <main class="admin-layout">
    <div class="sidebar-left">
      <sidebar-left/>
    </div>
    <div class="main-area">
      <router-view/>
    </div>
    <div class="sidebar-right">
      <sidebar-right/>
    </div>
  </main>
</template>

<script>
import SidebarLeft from "@/components/SidebarLeft.vue";
import SidebarRight from "@/components/SidebarRight.vue";

export default {
  components: {
    SidebarLeft,
    SidebarRight
  }
};
</script>

<style scoped>
.admin-layout {
  width: 100%;
  height: auto;
  overflow-x: hidden;
}
</style>

