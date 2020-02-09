<template lang="pug">
div#Slider
    .mySlides.mySlides1
        #slideImg(:style="{'background-image': 'url(' + jumpBar[0].media.info.src + ')'}")
    .mySlides.mySlides2(v-for='(jumpImage,index) in jumpBar' v-if="index!=0 &&index!= jumpBar.length-1")
        #slideImg(:style="{'background-image': 'url(' + jumpImage.media.info.src + ')'}")
    .mySlides.mySlides3
        #slideImg(:style="{'background-image': 'url(' + jumpBar[jumpBar.length-1].media.info.src + ')'}")
    .introContainer
        h1.intro {{jumpBar[slideIndex-1].title}}
        p {{jumpBar[slideIndex-1].subtitle}}
    //- span.dot(v-for="(dot,index) in jumpBar")

</template>


<script>
var slideIndex = 1;
var slide;
import { ListSlider } from '@/api/Slider';
export default {
    components: {
    },
    data() {
        return {
            slideIndex: 1,
            jumpBar: ''
        }
    },
    methods: {
        ApiListSlider(id) {
            ListSlider(id)
                .then(response => {
                    this.jumpBar = response.data;
                })
                .catch(err => {
                console.log(err);
            });
        },
        plusSlides(n) {
            this.showSlides(slideIndex += n);
        },

        currentSlide(n){
            this.showSlides(slideIndex = n);
        },

        showSlides(n){
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var subWidth = 5/(slides.length);
            if (n > slides.length) {slideIndex = 1}    
            if (n < 1) {slideIndex = slides.length}
            var numSubBlock = 0;
            for (i = 0; i < slides.length; i++) {
                //slides[i].style.display = "none"; 
                if(i!=slideIndex-1){
                    if(slideIndex==slides.length){
                        if(i!=0){
                            slides[i].style= "-webkit-clip-path : polygon(0 0, 100% 0%, 100% "+(95+subWidth*numSubBlock)+"%, 50% 100%, 0 "+(95+subWidth*numSubBlock)+"%)";  //else block 
                            numSubBlock ++;
                        }
                    }
                    else{
                        if(i!=slideIndex){
                            slides[i].style= "-webkit-clip-path : polygon(0 0, 100% 0%, 100% "+(95+subWidth*numSubBlock)+"%, 50% 100%, 0 "+(95+subWidth*numSubBlock)+"%)";  //else block 
                            numSubBlock ++;
                        }
                    }
                    
                }
            }
            if(slideIndex==slides.length){
                slides[0].style= "-webkit-clip-path : polygon(0 0, 100% 0%, 100% 95%, 50% 100%, 0 95%)";  //second block when slideIndex come to the end 
            }
            else{
                slides[slideIndex].style= "-webkit-clip-path : polygon(0 0, 100% 0%, 100% 95%, 50% 100%, 0 95%)";  //second block
            }
            slides[slideIndex-1].style = "-webkit-clip-path : polygon(0 0, 100% 0%, 100% 90%, 50% 100%, 0 90%)";  //first block
            this.slideIndex = slideIndex;
        }
    },
    created() {
        this.ApiListSlider(2);
        slide = setInterval(() => this.plusSlides(1), 5000);
    },
    beforeDestroy(){
        clearInterval(slide);
    }
}       
</script>

<style lang="sass">
$c-bg: #FFF
$c-primary: #333
$c-secondary: #eee
#Slider
    position: absolute
    top: 0px
    left: 0px
    right: 0px
    z-index: -1
    height: 100vh
    background: linear-gradient(to top, #fff 0%, #fff 100%)
    background-size: cover

.introContainer
    position: absolute
    width: 40%
    right: 100px
    bottom: 100px
    padding: 50px
    background-color: #FFF
    opacity: 0.9
@media all and (max-width: 960px)
    .introContainer
        padding: 0px
        bottom: 20vh
        width: 100%
        left: 0px
        h1,p
            padding-left: 20px
    
.mySlides1
    -webkit-clip-path: polygon(0 0, 100% 0%, 100% 90%, 50% 100%, 0 90%)
    position: absolute
    animation-name: fade
    animation-duration: 2s
    animation-timing: ease-in-out
    animation-delay: 0.2s
    

.mySlides2
    -webkit-clip-path: polygon(0 0, 100% 0%, 100% 95%, 50% 100%, 0 95%)
    position: absolute
    animation-name: fade
    animation-duration: 2s
    animation-timing: ease-in-out
    animation-delay: 0.3s
    

.mySlides3
    -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 50% 100%, 0 100%)
    animation-name: fade
    animation-duration: 2s
    animation-timing: ease-in-out
    animation-delay: 0.4s


@keyframes fade
    from
        opacity: 0
    to
        opacity: 1
        
@media only screen and (min-width: 480px)
    #slideImg
        height: 100%
        width: 100%
        
    .mySlides
        width: 100%
#slideImg
    background-size: cover
    background-position: center
    height: 100vh
#slideImg:hover
    opacity: 0.4
</style>