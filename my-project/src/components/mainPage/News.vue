<template lang="pug">
.newsContainer
    h1.TitleU(@click='changePath(name)') {{name}}
    ListView(:section-name='name')
    div(@click='changePath(name)' title="see more")
        img.iconMore(src="@/assets/more.svg")
</template>

<script>
import ListView from "@/components/ListView.vue"
export default {
    components: {
        ListView,
    },
    props: ['name'],
    data () {
        return {
            data: [
                {title: '校園美感環境再造計畫卓越學校參訪工作坊',date: '2019.10.02'},
                {title: '轉發-108年度教育部《學美‧美學》設計校園生活美感實踐計畫徵選辦法',date: '2019.10.02'},
                {title: '校園美感環境再造計畫卓越學校參訪工作坊',date: '2019.10.02'},
                {title: '轉發-108年度教育部《學美‧美學》設計校園生活美感實踐計畫徵選辦法',date: '2019.10.02'},
                {title: '校園美感環境再造計畫卓越學校參訪工作坊',date: '2019.10.02'},
                {title: '校園美感環境再造計畫卓越學校參訪工作坊',date: '2019.10.02'}
            ]
        }
    },
    methods: {
        changePath: function(name){
            this.$router.push({ path: '/section/'+ name})
        }
    }
}
</script>

<style lang="sass">
@import "@/style/TextList.sass"
.iconMore
    margin-left: 90%
    margin-top: 30px
    transition: 0.4s
    border-radius: 20%
    cursor: pointer
.iconMore:hover
    background-color: #bbb
    border-radius: 50%
</style>
