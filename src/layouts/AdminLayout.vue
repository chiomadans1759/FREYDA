<template>
  <div class="admin-container">
    <div class="sidebar-left">
      <sidebar-left/>
    </div>
    <div class="main-area">
      <router-view/>
    </div>
    <div class="sidebar-right">
      <sidebar-right/>
    </div>
  </div>
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
@import url("https://fonts.googleapis.com/css?family=Montserrat");

body {
  font-family: "Montserrat", sans-serif;
}
.admin-container {
  display: flex;
  width: 100%;
}
.sidebar-left {
  background: #578a8d;
  height: 100vh;
  width: 20%;
  padding: 18px;
  overflow-y: auto;
}
.main-area {
  overflow-x: hidden;
  overflow-y: auto;
  width: 60%;
  padding: 30px 18px 0;
  height: 100vh;
}
.sidebar-right {
  width: 20%;
  height: 100vh;
  overflow-y: auto;
}

.main-area::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #abc4c6;
}
.main-area::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.main-area::-webkit-scrollbar {
  width: 12px;
}

.main-area::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #abc4c6;
}
.sidebar-right::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #abc4c6;
}
.sidebar-right::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.sidebar-right::-webkit-scrollbar {
  width: 12px;
}

.sidebar-right::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #abc4c6;
}

.sidebar-left::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #abc4c6;
}
.sidebar-left::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.sidebar-left::-webkit-scrollbar {
  width: 12px;
}

.sidebar-left::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #abc4c6;
}
</style>

