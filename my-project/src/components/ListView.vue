<template lang="pug">
.newsContainer
    .newsTitleBlock(v-for="(item,index) in articleList" @click="changePath(item.id)")
        .newsTitle {{item.updated_at.split("T")[0]}}
            span {{item.title}}
        #underline

</template>

<script>
import { ListArticles } from '@/api/Articles';
export default {
    components: {
        
    },
    props: ['section-name'],
    data () {
        return {
            name: "",
            data: '',
            articleList: ''
        }
    },
    created() {
        this.ApiListArticles(2);
    },
    watch:{
        '$route': function(){
            this.name = this.$route.params.PID;
            this.articleList = (this.createList(this.name));
        }
    },
    mounted() {
        if(this.sectionName!=null){
            this.name = this.sectionName;
        }
        else{
            this.name = this.$route.params.PID;
        }
        
    },
    methods: {
        ApiListArticles(id) {
            ListArticles(id)
                .then(response => {
                    this.data= response.data;
                    this.articleList = (this.createList(this.name));
                })
                .catch(err => {
                console.log(err);
            });
        },
        createList(n) {
            return this.data.filter(function(item) {
                for(var i=0;i<item.categories.length;i++){
                    var temp = item.categories[i].name;
                        if(temp == n){
                            return true;
                        }
                    }
                })
        },
        changePath: function(idx){
            this.$router.push({ path: '/section/'+this.name+'/page/'+ idx})
        }
    }
}
</script>

<style lang="sass">
@import "@/style/TextList.sass"

.newsTitleBlock:hover #underline
    width: 100%

</style>
