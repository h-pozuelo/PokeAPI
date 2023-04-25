<template>
  <MenuComponent></MenuComponent>
  <div class="container-fluid my-3">
    <router-view />
  </div>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue';

export default {
  components: {
    MenuComponent,
  },
}
</script>
