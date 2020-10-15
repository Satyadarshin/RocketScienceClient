<template>
<div class="md-elevation-2 picture-canvas">
    <picture>
        <div>

        <img :src="'/assets/illustrations/' + illustration +'-medium.jpg'" 
            :srcset="
                '/assets/illustrations/' + illustration +'-large.jpg 1500w, ' +
                '/assets/illustrations/' + illustration +'-medium.jpg 1000w,' +
                '/assets/illustrations/' + illustration +'-small.jpg 500w'
            "
            :alt="altText" 
            />
        </div>
        <p class="picture_caption">{{caption}}</p>
    </picture>
</div>
</template>

<script>
export default {
    props: {
        illustration: String,
        altText: String,
        caption: String
    }
}
</script>

<style lang="scss" scoped>
.picture-canvas {
    border-radius: 0 0 5px 5px;
    picture {
        padding: 0 .5rem;
        div {
            margin: -1.3rem .5rem 0;
            img {display: block;
                width: 100%;
                object-fit: cover;
            }
        }
        .picture_caption {
            text-align: center; 
            font-weight: bold
        }
    }
}
</style>