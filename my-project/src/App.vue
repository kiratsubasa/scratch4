<template lang='pug'>
  #app
    transition(name="page" mode="out-in")
      router-view
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style lang='sass'>
#app
  font-family: 'Microsoft JhengHei', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50

.page-enter-active, .page-leave-active
    transition: 0.3s

.page-enter, .page-leave-to
    opacity: 0
</style>
