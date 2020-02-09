<template lang="pug">
SlideShow
//- #Slider(:style="{'background-image': 'url(' + src + ')'}")
//-     .introContainer
//-         h1.intro {{name}}
//-         p {{text}}
</template>

<script>
import SlideShow from '@/components/SlideShow.vue'
export default {
    components: {
        SlideShow
    },
    data () {
        return {
            name: "計畫簡介",
            src: 'https://www.aade.org.tw/website/wp-content/uploads/2018/06/q-23.jpg',//image less than 5
            text: '媒體對於北歐的國民教育創新，有許多他們開創對於教育對策的相關報導。處在全球化的時代，一個國民的基礎教育早已不只是專業技能與知識科考的傳授解惑，而是如何藉由清晰而細膩的環境教育，提供學子觀察世界與自己所在的土地上，那份相同又何等差異的思考美學，這不但形成我方進入世界溝通的語言，同時亦提供彼方對我方認知的鑰匙。'
        }
    },
    methods: {

    }
}
</script>

<style lang="sass">


</style>
