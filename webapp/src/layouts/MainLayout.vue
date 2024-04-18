<template>
  <q-layout view="hHh lpR fFf">

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal bordered class="bg-grey-7 text-white float-right">
      <q-list>
        <essential-link
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          class="float-right"
        />
      </q-list>
    </q-footer>

  </q-layout>
</template>

<script setup lang="ts">
import { EssentialLinkProps } from 'components/models'
import EssentialLink from 'components/EssentialLink.vue'

const essentialLinks: EssentialLinkProps[] = [
  // {
  //   title: 'Learn',
  //   caption: 'GGP Dojo',
  //   icon: 'eva-book-open',
  //   link: 'https://ggpdojo.com'
  // },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'eva-github',
    link: 'https://github.com/kevindamm/word-duel'
  },
  {
    title: 'Discord',
    caption: 'dev chat',
    icon: 'eva-message-square',
    link: 'https://discord.gg/???'
  },
  {
    title: 'About',
    caption: 'more info...',
    icon: 'eva-info',
    route: '/about'
  }
]
</script>
