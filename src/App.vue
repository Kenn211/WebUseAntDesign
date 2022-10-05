<script setup lang="ts">
import SliderPage from './components/Modal/Slider/SliderPage.vue';
import HeaderPage from './components/Modal/Header/HeaderPage.vue';
</script>

<template>
  <div class="page">
    <SliderPage></SliderPage>
    <HeaderPage></HeaderPage>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.page {
    width: 100%;
    height: auto;
}
</style>
