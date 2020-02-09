<template lang="pug">
.sraffPage
    h1.TitleU {{name}}
    .staffContainer
        .staffListContainer(v-for='item in data')
            .staffShortIro
                .staffListImage(:style="{'background-image': 'url(' + item.media + ')'}") 
            .staffListContentBlock
                .staffListTitle {{item.name}}
                .staffListTitle {{item.agency}}

</template>

<script>
export default {
    components: {
        
    },
    data () {
        return {
            name: "美感人才",
            data: [
                {name: '顏名宏Yen, Ming-Hung',agency: '國立臺中教育大學文化創意產業設計與營運學系副教授',media: 'https://caepo.org/images/personal1.jpg'},
                {name: '顏名宏Yen, Ming-Hung',agency: '國立臺中教育大學文化創意產業設計與營運學系副教授',media: 'https://caepo.org/images/personal1.jpg'},
                {name: '顏名宏Yen, Ming-Hung',agency: '國立臺中教育大學文化創意產業設計與營運學系副教授',media: 'https://caepo.org/images/personal1.jpg'},
                {name: '顏名宏Yen, Ming-Hung',agency: '國立臺中教育大學文化創意產業設計與營運學系副教授',media: 'https://caepo.org/images/personal1.jpg'}
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

.staffContainer
    display: flex
    justify-content: center
    max-width: 1280px
    margin: auto

@media (min-width: 960px)
    .staffListContentBlock
        width: 60%
    .staffListContainer
        width: 720px

@media (max-width: 960px)
    .staffListContentBlock
        width: 100%
    .staffListContainer
        width: 100%
        padding-left: 100px
    .staffContainer
        flex-flow: wrap
    .staffListContentBlock
        padding-left: 50px
        padding-top: 55px
        
.staffListContentBlock
    margin: 30px 
    width: 200px
    margin-left: 40px
.staffListContainer
    display: flex
    flex-flow: wrap
    margin: 30px
    margin-bottom: 50px
.staffListImage
    width: 175px
    height: 175px
    border-radius: 50%
    margin: 25%
    background-position: center
.staffListTitle
    font-size: 16spx
    font-weight: bold
    width: 100%
    
</style>
