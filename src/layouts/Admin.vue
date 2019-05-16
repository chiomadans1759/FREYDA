<template>
  <main class="admin-layout">
    <admin-sidebar class="sidebar"/>

    <div class="main-content">
      <admin-header/>
      <div style="padding-top: 4rem;">
        <router-view/>
      </div>
    </div>
  </main>
</template>

<script>
import AdminSidebar from "@/components/AdminSidebar/AdminSidebar";
import AdminHeader from "@/components/AdminHeader/AdminHeader";

export default {
  components: {
    AdminSidebar,
    AdminHeader
  }
};
</script>

<style scoped>
.admin-layout {
  width: 100%;
  height: auto;
  overflow-x: hidden;
}

.admin-layout .sidebar {
  float: left;
  width: 18%;
  height: 100vh;
  background-color: #578a8d;
  position: fixed;
}

.admin-layout .main-content {
  float: right;
  width: 82%;
  height: auto;
  z-index: 1000;
}
</style>

