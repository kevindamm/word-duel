<template>
  <q-card>
    <q-input v-model="code" label="Room code"></q-input>
    <q-btn
      v-ripple
      label="Join Match"
      to="/join">

      <q-tooltip>Join a challenge that was already started</q-tooltip>
    </q-btn>
  </q-card>

</template>

<script setup lang="ts">
import { ref } from 'vue'

const code = ref('')

</script>