<!-- Menu as a collection of morphing cards and the state machine for transitions. -->

<template>

  <q-card
  v-morph:start:menu:250="state"
  >
    <q-btn ripple label="New Challenge"
      @click="next('newgame')">
    </q-btn>
    <q-btn ripple label="Join Match"
      @click="next('join')">
    </q-btn>
    <q-btn ripple label="Options"
      @click="next('options')">
    </q-btn>
  </q-card>

  <q-card
    v-morph:newgame:menu:300="state"
    @random="handleRandom"
    @custom="handleCustom">
    <start-menu />
  </q-card>

  <q-card
    v-morph:join:menu:300="state">
    <join-menu />
  </q-card>

  <q-card
    v-morph:options:menu:300="state">
    <options-menu />
  </q-card>
</template>

<script setup lang="ts">
import StartMenu from '../components/MenuStart.vue'
import JoinMenu from '../components/MenuJoin.vue'
import OptionsMenu from '../components/MenuOptions.vue'
import {ref} from 'vue'

const parents : string[] = []
const state = ref('start')

// Closure around state transitions.
function next(name: string) {
  return function() {
    parents.push(state.value)
    state.value = name
  }
} 

// Handles going back to the previous menu state.
// TODO: may want to wire this up to an event, too.
function back() {
  state.value = parents.pop() || 'start'
}

function handleRandom(category: string, level: string) {
  alert(category + " @ " + level)
}

function handleCustom(goal: string) {
  alert("custom [" + goal + "]")
}
</script>
