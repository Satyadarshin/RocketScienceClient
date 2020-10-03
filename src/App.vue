<template>
  <div id="app">
    <md-tabs class="md-primary" md-alignment="centered">
      <md-tab id="tab-home" md-label="Home" to="/" exact></md-tab>
      <md-tab id="tab-about" md-label="About" to="/about"></md-tab>
      <md-tab id="tab-authors" md-label="Authors" to="/authors"></md-tab>
      <md-tab id="tab-texts" md-label="Texts" to="/texts"></md-tab>
      <md-tab id="tab-awards" md-label="Awards" to="/awards"></md-tab>
    </md-tabs>
    <main id="content">
      <transition name="router-animation" mode="out-in">
        <router-view/>
      </transition>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    appFooter: footer
  }
}
</script>

<style lang="scss">

@import url("https://fonts.googleapis.com/css?family=Material+Icons");
#nav {
  padding: 30px;
  a { 
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.page {
  width: inherit;
}
.router-animation-enter-active {
  animation: coming 1s;
  animation-delay: .5s;
  opacity: 0;
}
.router-animation-leave-active {
  animation: going 1s;
}
@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}
</style>
