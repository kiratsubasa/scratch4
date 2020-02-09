<template lang="pug">
#newsApp
    h1.articlePageTitle {{data.title}}
    .author 作者 ： {{data.author.name}}
    .dateNote 發布日期 ： {{data.created_at.split("T")[0]}}
    .dateNote 更新日期 ： {{data.updated_at.split("T")[0]}}
    .articlePageJumpbar(v-if='data.media' :style="{'background-image': 'url(' + data.media.info.src + ')'}")
    .HTMLContainer(v-html="data.body")
    div
        a#hashTag(v-for='tag in data.tags') &#35;{{tag.name}}


</template>

<script>
import { GetArticle } from '@/api/Articles';
export default {
    components: {
        
    },
    data() {
        return {
                data: ''
            }
    },
    created() {
        var id = this.$route.params.id;
        this.ApiListArticles(id);
    },
    methods: {
        ApiListArticles(id) {
            GetArticle(id)
                .then(response => {
                    this.data= response.data;
                })
                .catch(err => {
                console.log(err);
            });
        },
    }
}

</script>

<style lang="sass" scoped>
#newsApp
    max-width: 1280px
    margin: auto
.HTMLContainer
    max-width: 1280px
    margin: auto
@media all and (max-width: 760px)
    img
        width: 100%
// .articlePageTitle
//     padding-top: 10vh
.articlePageJumpbar
    background-size: cover
    max-width: 1280px
    height: 640px
    margin: auto
    background-position: center
#hashTag
    color: #777
    margin-right: 20px
.author,.dateNote
    margin: 10px
</style>