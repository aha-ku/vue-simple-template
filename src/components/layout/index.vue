<template>
  <div class="layout">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <slot />
  </div>
</template>
<script>
export default {
  name: "Layout",
  setup() {},
};
</script>