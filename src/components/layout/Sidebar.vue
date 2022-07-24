<script setup>
import {ref} from 'vue';

const props = defineProps({
  isOpenMenu: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['toggleMenu'])

const links = ref([
  {
    id: 0, name: 'typography', href: '/typography'
  },
  {
    id: 1, name: 'button', href: '/button'
  },
])
</script>

<template>
  <div :class="['sidebar',{'sidebar_is-open': isOpenMenu}]">
    <div class="sidebar__layout">
      <button type="button" class="sidebar__toggle reset-btn" @click="emit('toggleMenu')">&#9205;</button>
      <div class="sidebar__wrapper">
        <div class="sidebar__links">
          <router-link
              class="sidebar__link"
              v-for="link in links"
              :key="'sidebar-link-' + link.id"
              :to="link.href"
          >{{ link.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 62px;
  height: calc(100% - 87px);

  &_is-open {
    .sidebar {
      &__wrapper {
        transform: translateX(-250px);
      }

      &__toggle{
        transform: rotateY(0deg);
      }
    }
  }

  &__layout{
    display: flex;
    height: 100%;
  }

  &__toggle {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    padding: 5px;
    transform: rotateY(180deg);
    background-color: var(--primary-color);
    color: #fff;

    &:hover{
      background-color: var(--primary-color-hover);
    }
  }

  &__wrapper {
    width: 230px;
    height: 100%;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.07);
    transition: 0.2s;
    transform: translateX(0);
  }

  &__link {
    display: block;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 12px;
    border: 2px solid #fff;
    font-weight: 700;

    &:hover {
      border-color: var(--primary-color-hover);
    }
  }
}
</style>