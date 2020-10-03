<template>
    <figure class="md-elevation-2">
        <img :src="uri" :alt="altText" />
        <figcaption>{{caption}}</figcaption>
    </figure>
</template>

<script>
export default {
    props: {
        uri: String,
        altText: String,
        caption: String
    }
}
</script>

<style lang="scss" scoped>
figure {
    margin: 0;
    padding-bottom: 1rem;
    figcaption {
        padding-top: .5rem;
        padding-left: .5rem;
        text-align: left;
    }
}
</style>