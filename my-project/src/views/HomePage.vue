<template lang="pug">
#app
    MenuM
    section.top(id="top")
        Intro
    section(v-for="(item,index) in menuList" :id="item.id")
        News(:name='item.name')
        
    //- section.Result
    //-     Result
    //- section.Staff
    //-     Staff
    //- section.Resource
    //- section.OtherWeb
    //- section.QA
    //- section.Contact
</template>

<script>
import MenuM from "@/components/MenuM.vue"
import Intro from "@/components/mainPage/Intro.vue"
import News from "@/components/mainPage/News.vue"
import Result from "@/components/mainPage/Result.vue"
import Staff from "@/components/mainPage/Staff.vue"
import Resources from "@/components/mainPage/Resources.vue"
import WebOther from "@/components/mainPage/WebOther.vue"
import QA from "@/components/mainPage/QA.vue"
import Contact from "@/components/mainPage/Contact.vue"

import { ListMenus } from '@/api/Menu';
export default {
    name: 'HomePage',
    components: {
        MenuM,
        Intro,
        News,
        Result,
        Staff,
        Resources,
        WebOther,
        QA,
        Contact
    },
    data () {
        return {
            data: '',
            menuList: ''
        }
    },
    created() {
        this.ApiListMenus(2);
    },
    methods: {
        ApiListMenus(id) {
            ListMenus(id)
                .then(response => {
                    this.menuList = response.data;
                })
                .catch(err => {
                console.log(err);
            });
        }
    },
}

</script>

<style lang="sass">
@import "@/style/TextList.sass"
.top
    // border: 1px #AB6 solid
    padding: 50vh 0

section
    padding: 10vh 0

//commom style
h1 
    font-size: 28px
p
    font-size: 18px
    line-height: 24px

.TitleU
    text-decoration: underline
    cursor: pointer
</style>
