<template lang="pug">
#NewApp
    Menu
    router-view
</template>
<script>
import Menu from "@/components/Menu.vue"
export default {

    components: {
        Menu
    },
    data() {
        return {
            
        }
    }

}
</script>

<style lang="sass" scoped>
#NewApp
    padding-top: 10vh
</style>

