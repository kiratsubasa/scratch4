<template lang="pug">
#menuContainer
    a#Lego(href='#')
        img(:src='iconSrc')
    h1.TitleB {{name}}
    a.menuItem(v-for='item in menuList' :href="'#'+item.id") {{item.name}}
        #underline
    #drawer(v-if="drawerStatus")
        .drawerItem(v-for='(item,i) in menuList' @click='opentheDrawer()') 
            a(:href="'#'+item.id") {{item.name}}
                #underline
    .menuIcon(@click='opentheDrawer()' :class="menuclassList")
        .menuIconBar1
        .menuIconBar2
        .menuIconBar3
</template>

<script>
import { ListMenus } from '@/api/Menu';
export default {
    
    data () {
        return {
            iconSrc: 'https://caepo.org/images/menu-logo.svg',
            menuList: [
                {name: "計畫簡介"},
                {name: "最新消息"},
                {name: "成果專區"},
                {name: "影音專區"},
                {name: "輔導團隊"},
                {name: "教學資源"},
                {name: "聯絡資訊"}
            ],
            drawerStatus: false,
            menuclassList: {
                menuIconContainer: true,
                change: false
            },
            name: 'Oppps'
        }
    },
    created() {
        this.ApiListMenus(2);
    },
    watch:{
        '$route': function(){
            this.name = this.$route.params.PID;
        }
    },
    mounted() {
        this.name = this.$route.params.PID;
    },
    methods: {
        opentheDrawer: function(){
            this.drawerStatus = !this.drawerStatus;
            this.menuclassList.change = !this.menuclassList.change;
        },
        ApiListMenus(id) {
            ListMenus(id)
                .then(response => {
                    this.menuList = response.data;
                })
                .catch(err => {
                console.log(err);
            });
        }
    }
}

</script>

<style lang="sass">
//common style
$c-text: #333
$c-bg: #eee
a
    color: $c-text
    text-decoration: none

#underline
    height: 1px
    width: 0
    margin: auto
    background-color: $c-text
    transition: all .3s ease-Out

.drawerItem:hover #underline
    width: 100px
.menuItem:hover #underline
    width: 100%

#Lego
    background-size: contain
    width: 100px
    height: auto
    position: fixed
    top: 20px
    left: 10px
.TitleB
    position: fixed
    top: -10px
    left: 120px
    padding-left: 10px
    border-left: 2px $c-text solid
//local style
#menuContainer
    position: fixed
    top: 0px
    right: 0px
    left: 0px
    display: flex
    flex-wrap: nowrap
    justify-content: flex-end
    padding: 10px
    background-color: #ffffffaa

.menuItem
    cursor: pointer
    margin-right: 10px
    margin-top: 10px

.menuIcon
    cursor: pointer

.menuIconBar1, .menuIconBar2, .menuIconBar3
    width: 35px
    height: 3px
    background-color: $c-text
    transition: 0.3s
    margin: 8px
    position: relative
    border-radius: 25px
.change .menuIconBar1
    opacity: 0
    
.change .menuIconBar2 
    -webkit-transform: rotate(-20deg) translate(-6px, 6px)
    transform: rotate(-20deg)

.change .menuIconBar3 
    -webkit-transform: rotate(225deg) 
    transform: rotate(225deg) translate(8px, 8px)
    transition-delay: 0.2s
    
#drawer
    background-color: #fff
    opacity: 0.9
    position: fixed
    text-align: center
    width: 100%
    right: 0px
    top: 0px
    bottom: 0px
    padding-top: 20%
    
.drawerItem
    cursor: pointer
    padding: 15px

@media all and (min-width: 960px)
    .menuItem
        opacity: 1
    .menuIcon,#drawer
        opacity: 0
        transition: 0.3s
        visibility: hidden
    
@media all and (max-width: 960px)
    .menuItem
        opacity: 0
        transition: 0.3s
        visibility: hidden
    .menuIcon,#drawer
        opacity: 0.9


</style>
