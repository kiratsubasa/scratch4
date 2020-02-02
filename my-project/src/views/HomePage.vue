<template lang="pug">
#menuContainer
    router-link#Lego(to='/' :style="{'background-image': 'url(' + iconSrc + ')'}")
//- div#menuWrapper
//-     div#menuBar
        
//-         div.menuItem(v-for='item in menuList')
//-             router-link#menuItemLink(:to='item.link') {{item.title}}
//-         div(@click='opentheDrawer()' :class="menuclassList")
//-             .menuIconBar1
//-             .menuIconBar2
//-             .menuIconBar3
//-         SearchBar.searchBar-Header(:searchPlaceholder='searchPlaceholder' :search-lists='searchLists')
//-     transition(name="page" mode="out-in")
//-         div#drawer(v-if="drawerStatus")
//-             div.drawerItem(v-for='(item,i) in menuList' @click='drawerStatus = !drawerStatus') 
//-                 #underline
//-                 a(:href='item.link' style="color: black; text-decoration: none;") {{item.title}}
</template>

<script>
export default {
    name: 'HomePage',
    data () {
        return {
            iconSrc: 'src/assets/logo.png'
        }
    },
    methods: {
        opentheDrawer: function(){
            this.drawerStatus = !this.drawerStatus;
            this.menuclassList.change = !this.menuclassList.change;
        }
    }
}
</script>

<style lang="sass">
$c-primary: #B5CAA0
$c-secondary: #646A58
$textC-secondary: #FFFFFFaa
$c-bg: #eee
#menuWrapper
    padding-bottom: 5px
    background-color: $c-primary
#menuBar
    display: flex
    flex-wrap: nowrap
    justify-content: flex-end
    padding: 10px
    padding-top: 10px

.router-link-exact-active.router-link-active
    background-color: $c-primary
    padding: 5px

#myhref
    text-decoration: none
    color: #333
#sehref
    color: $textC-secondary
    text-decoration: none

@media all and (min-width: 1024px)
    .menuItem
        margin-top: 10px
        margin-right: 5px
        display: block
    .menuIconContainer
        display: none
    .drawerItem
        display: none

@media all and (max-width: 1024px)
    .menuItem
        display: none
    .menuIconContainer
        display: block
    .drawerItem
        display: block

#Lego
    background-size: contain
    height: 50px
    width: 50px
    position: absolute
    left: 20px
    border-radius: 10px

.menuIconBar1, .menuIconBar2, .menuIconBar3
    width: 35px
    height: 3px
    background-color: #777
    transition: 0.3s
    margin: 8px
    margin-right: 10px
    position: relative
    border-radius: 25px
.change .menuIconBar1
    opacity: 0
    
.change .menuIconBar2 
    -webkit-transform: rotate(-405deg) translate(-9px, 6px)
    transform: rotate(-405deg)

.change .menuIconBar3 
    -webkit-transform: rotate(225deg) 
    transform: rotate(225deg) translate(8px, 8px)
    transition-delay: 0.2s


.menuIconContainer
    cursor: pointer

@keyframes drawerOpen
    from
        height: 0
    
    to
        height: 450px
    
#drawer
    // animation-name: drawerOpen
    // animation-duration: 2s
    height: 100%

    
.drawerItem
    padding: 10px
    cursor: pointer


#underline
    width: 100%
    height: 2.5px
    margin-top: 15px
    align-self: flex-end
    left: -100%
    background: $c-secondary
    position: absolute
    transition: all .3s ease-Out
    bottom: 0
.drawerItem:hover #underline
    left: 0



#menuItemLink
    padding: 5px
    color: #28292D
    text-decoration: none 
    font-weight: bold
</style>
