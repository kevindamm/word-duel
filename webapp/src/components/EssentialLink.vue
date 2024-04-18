<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    :href="link"
    :to="route"
    class="q-px-none"
  >
    <q-icon size="2em" :name="icon" />

    <q-tooltip>{{ caption }}</q-tooltip>
    <q-item-section class="q-px-sm">
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { EssentialLinkProps } from './models'
withDefaults(defineProps<EssentialLinkProps>(), {
  caption: '',
  icon: ''
})
</script>
