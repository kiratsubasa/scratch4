<template lang="pug">
div#Slider
    .mySlides(v-for='(jumpImage,index) in jumpBar')
        #slideImg(:style="{'background-image': 'url(' + jumpImage.media.info.src + ')'}")
    .introContainer
        h1.intro {{jumpBar[slideIndex].title}}
        p {{jumpBar[slideIndex].subtitle}}
    span.dot(v-for="(dot,index) in jumpBar")

</template>


<script>
var slide;
import { ListSlider } from '@/api/Slider';
export default {
    components: {
    },
    data() {
        return {
            slideIndex: 0,
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
        showSlides(n){
            var i;
            var slides = document.getElementsByClassName("mySlides");
            if(this.slideIndex == slides.length-1){
                this.slideIndex=0;
            }
            else{
                this.slideIndex += n;
            }
            for(i=0;i<slides.length;i++){
                var idx = (i+this.slideIndex)%slides.length;
                if(i == 0){
                    slides[idx].style= "display: block"
                    // slides[idx].style= "-webkit-clip-path : polygon-webkit-clip-path: polygon(50% 0, 100% 0, 100% 90%, 50% 100%, 0 90%, 0 0)"; 
                }
                else{
                    slides[idx].style= "display: none";
                    // slides[idx].style= "-webkit-clip-path : polygon-webkit-clip-path: polygon(50% 0, 100% 0, 100% 10%, 50% 20%, 0 10%, 0 0)"; 
                }
            }
        }
    },
    created() {
        this.ApiListSlider(2);
        slide = setInterval(() => this.showSlides(1), 5000);
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
    
.mySlides
    -webkit-clip-path: polygon(50% 0, 100% 0, 100% 90%, 50% 100%, 0 90%, 0 0)
    transition: 0.4s
    position: absolute
    animation-name: fade
    animation-duration: 0.8s
    animation-timing: ease-out
    // animation-delay: 0.2s
    

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
        -webkit-clip-path: polygon(50% 0, 100% 0, 100% 10%, 50% 20%, 0 10%, 0 0)
    to
        opacity: 1
        -webkit-clip-path: polygon(50% 0, 100% 0, 100% 90%, 50% 100%, 0 90%, 0 0)
        
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