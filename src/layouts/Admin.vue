<template>
  <main class="admin-layout">
    <admin-sidebar class="sidebar" />

    <div class="main-content">
      <router-view />
    </div>
  </main>
</template>

<script>
import AdminSidebar from "@/components/AdminSidebar"

export default {
  components: {
    AdminSidebar
  }
}
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
}

.admin-layout .main-content {
  float: right;
  width: 82%;
  height: auto;
}
</style>

