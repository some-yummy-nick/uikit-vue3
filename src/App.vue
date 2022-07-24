<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import {ref} from 'vue';

import LayoutHeader from '@/components/layout/Header.vue'
import LayoutFooter from '@/components/layout/Footer.vue'
import LayoutSidebar from '@/components/layout/Sidebar.vue'

const isOpenMenu = ref(false);

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value
}
</script>

<template>
  <div class="wrapper">
    <layout-header/>
    <div class="content">
      <div :class="['layout',{'layout_full-width': isOpenMenu}]">
        <layout-sidebar @toggleMenu="toggleMenu" :isOpenMenu="isOpenMenu"/>
        <router-view/>
      </div>
    </div>
    <layout-footer/>
  </div>
</template>

<style>
#app {
  height: 100%;
}
</style>
