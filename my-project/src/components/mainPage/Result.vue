<template lang="pug">
.resultContainer
    h1.TitleU {{name}}
    .SHContainer
        .SHL
            a#imgHref(href="#")
                .imgBlock-1.imgBlock(:style="{'background-image': 'url(' + data[0].src + ')'}")
                    .imageMask
                        h1#maskTitle {{data[0].title}}
                            #maskTag(v-for="(tag,index) in data[0].tags" v-if="index<1") {{tag.name}}
        .SHR
            a#imgHref(href="#")
                .imgBlock-2.imgBlock(:style="{'background-image': 'url(' + data[1].src + ')'}")
                    .imageMask
                        h1#maskTitle {{data[1].title}}
                            #maskTag(v-for="(tag,index) in data[1].tags" v-if="index<1") {{tag.name}}
            a#imgHref(href="#")
                .imgBlock-3.imgBlock(:style="{'background-image': 'url(' + data[2].src + ')'}")
                    .imageMask
                        h1#maskTitle {{data[2].title}}
                            #maskTag(v-for="(tag,index) in data[2].tags" v-if="index<1") {{tag.name}}
    
</template>

<script>
export default {
    components: {
        
    },
    data () {
        return {
            name: "成果專區",
            data: [
                {title: '校園美感',id: "1","tags": [
                {
                    "id": 1,
                    "name": "美感教育"
                }
            ],src: 'http://fbilab.cc:8080//storage//photos//53ac3facdfcfb1d4bed8eab108c487ff8c5ae05b62f29f6dcaa2ea96fdc45f0d.jpeg',created_at: '2019.10.02'},
                {title: '轉發-108年度教育部',id: "2","tags": [
                {
                    "id": 1,
                    "name": "美感教育"
                },
                {
                    "id": 3,
                    "name": "創客"
                }
            ],src: 'http://fbilab.cc:8080//storage//photos//53ac3facdfcfb1d4bed8eab108c487ff8c5ae05b62f29f6dcaa2ea96fdc45f0d.jpeg',created_at: '2019.10.02'},
                {title: '校園美感環境再造',id: "3","tags": [
                {
                    "id": 1,
                    "name": "美感教育"
                },
                {
                    "id": 3,
                    "name": "創客"
                },
                {
                    "id": 3,
                    "name": "創客"
                }
            ],src: 'http://fbilab.cc:8080//storage//photos//53ac3facdfcfb1d4bed8eab108c487ff8c5ae05b62f29f6dcaa2ea96fdc45f0d.jpeg',created_at: '2019.10.02'}
            ]
        }
    },
    methods: {

    }
}
</script>

<style lang="sass" scoped>
.TitleU
    text-align: center
div
    // border: 1px #ecc solid

#maskTitle
    position: relative
    top: 70%
    color: white
    font-weight: lighter
    margin: 10px
    font-size: 32px
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis
    
#maskTag
    position: relative
    top: 100%
    color: white
    font-size: 0.6em
    

#imgHref
    text-decoration: none
.SHContainer
    display: flex
    flex-flow: nowrap
    justify-content: center
    max-width: 1280px
    margin: auto
    
.imgBlock
    background-size: cover
    background-position: center
    transition: 0.8s

.imgBlock:hover
    .imageMask
        opacity: 0.2
    
.imageMask
    background-color: #0007
    width: 100%
    height: 100%
    transition: 0.6s
    border: 1px white solid

@media all and (min-width: 760px)
    .SHL
        width: 65%
        height: 640px
    .SHR
        width: 35%
    .imgBlock-1
        height: 643px
        margin-top: 3px
    .imgBlock-2,.imgBlock-3
        height: 320px
        margin: 3px

@media all and (max-width: 760px)
    .SHL,.SHR
        width: 100%
    .imgBlock-1,.imgBlock-2,.imgBlock-3
        width: 100vw
        height: 420px
        margin-top: 15px
    .SHContainer
        flex-flow: row wrap 
</style>
