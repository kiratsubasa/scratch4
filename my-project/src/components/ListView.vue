<template lang="pug">
.newsContainer
    .newsTitleBlock(v-for="(item,index) in articleList" @click="changePath(item.id)")
        .newsTitle {{item.updated_at.split("T")[0]}}
            span {{item.title}}
        #underline
    .pageContainter(v-if='pageStatus')
        a#myhref.pageBtn.firstPage(v-if="currentPage!=1" @click="setPage(1)") {{ firstPage }}
        a#myhref.pageBtn.previous(v-if="currentPage!=1" @click="setPage(currentPage - 1)") {{ prev }}
        select#pageSel(v-model="currentPage")
            option(v-for="idx in totalPage") {{ idx }}
        a#myhref.pageBtn.next(v-if="currentPage!=totalPage" @click="setPage(currentPage + 1)") {{ next }}
        a#myhref.pageBtn.finalPage(v-if="currentPage!=totalPage" @click="setPage(totalPage)") {{ finalPage }}
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
            articleList: '',
            pageStatus: true,
            pageDataNum: 8,
            currentPage: 1,
            totalPage: 1,
            firstPage: '第一頁',
            prev: '上一頁',
            next: '下一頁',
            finalPage: '最末頁'
        }
    },
    created() {
        this.ApiListArticles(2);
        this.pageInit();
    },
    watch:{
        currentPage: function(page){
            this.$router.push({query: {page: page} });
            // window.scrollTo(0,0);
        },
        '$route': function(){
            this.name = this.$route.params.PID;
            this.articleList = (this.createList(this.name));
        }
    },
    mounted() {
        if(this.sectionName!=null){
            this.name = this.sectionName;
            this.pageStatus = false;
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
        },
        pageInit: function(){
            this.totalPage = Math.ceil(this.articleList.length/this.pageDataNum)+1;
        },
        setPage: function(page) {
            if (page <= 0 || page > this.totalPage) {
                return;
            }
            else{
                this.currentPage = page;
            }
        }
    }
}
</script>

<style lang="sass">
@import "@/style/TextList.sass"

.newsTitleBlock:hover #underline
    width: 100%
.pageContainter
    position: absolute
    bottom: 100px
    left: 50%
</style>
