<template>
    <div>
        <img :src="focusNovel" />
    </div>
</template>

<script>
export default {
  data() {
    return {
      focusNovel: '',
    };
  },
  props: {
    novel: Number,
  },
  created() {
    console.log(`the index is ${this.novel}`);
    const source = this.$store.getters.selectText(this.novel);
    this.focusNovel = `/assets/publications/${source}.jpg`;
  },
};
</script>

<style lang="scss" scoped>

</style>
