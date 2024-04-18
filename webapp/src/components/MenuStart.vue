<template>
  <q-card class="bg-primary text-white" style="width: 69vw">
    <q-card-section class="text-h5 text-center">
      <div>Words or Phrases</div>
      <div class="q-pt-md">Small / Medium / Large</div>
    </q-card-section>

    <q-card-actions align="center">
      <q-btn flat label="Random" @click="random" />
      <q-btn flat label="Custom" @click="custom" />
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const gametype = ref('phrase')
const gamelevel = ref('medium')
const revealInput = ref(false)
const goal = ref('')

const emit = defineEmits<{
  (e: 'random', category: string, level: string): void;
  (e: 'custom', goal: string): void;
}>()

function custom () {
  if (goal.value.length === 0) {
    // TODO: show popover about needing a valid goal input.
  }

  // TODO: do we want to allow out-of-lexicon words?  There is a risk of getting
  // offensive goal words/phrases.  Perhaps only for trusted users?
}

function random () {
  // Validate the category and level inputs.
  if (gametype.value.length === 0 || gamelevel.value.length === 0) {
    // TODO: show popover about needing required inputs.
    return
  }

  // Fire an event for the parent menu to manage.
  emit('random', gametype.value, gamelevel.value)
}
</script>
