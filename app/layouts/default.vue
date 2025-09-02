<template>
  <body>
    <a class="skip" href="#main-content">Skip to main</a>
    <SiteHeader />
    <main id="main-content">
      <slot />
    </main>
    <SiteFooter />
  </body>
</template>

<script setup lang="ts">
</script>

<style>
.skip {
  display: none;
}
</style>
