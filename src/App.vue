<template>
  <main-screen-vue v-if="statusMatch === 'default'" v-on:onStart="startGame($event)" />
  <interact-screen-vue v-if="statusMatch === 'match'" :cardContext="settings.cardContext" @onFinish="onResult" @toResult="statusMatch ='result'"/>
  <result-screen-vue v-if="statusMatch === 'result'" :timer="timer" @onStartAgain="onStartAgain()"/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MainScreenVue from './components/MainScreen.vue'
import InteractScreenVue from './components/InteractScreen.vue'
import { shuffed } from './utils/array'
import ResultScreenVue from './components/ResultScreen.vue'
// import { tsImportEqualsDeclaration } from '@babel/types'

export default {
  name: 'App',
  data() {
    return {
      statusMatch: 'default',
      settings: {
        totalBlock: 0,
        cardContext: [],
        startTime: null
      },
      timer: 0
    }
  },
  methods: {
    startGame(config) {
      console.log(config);
      this.settings.totalBlock = config.total;
      const firstCard = Array.from({ length: this.settings.totalBlock / 2 }, (_, i) => i + 1);
      console.log(firstCard);
      const secondCard = [...firstCard];
      const card = [...firstCard, ...secondCard];
      console.log(card);
      this.settings.cardContext = shuffed(shuffed(shuffed(card)));
      console.log(this.settings.cardContext);
      this.settings.startTime = new Date().getTime();
      this.statusMatch = 'match'
    },
    onResult() {
      this.timer = new Date().getTime() - this.settings.startTime;
      this.statusMatch = "result"
    },
    onStartAgain() {
      this.statusMatch ="default"
    }
  },
  components: {
    MainScreenVue,
    InteractScreenVue,
    ResultScreenVue
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
