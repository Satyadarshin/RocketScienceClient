export const flexboxWidth = {
  // See https://github.com/vuejs/Discussion/issues/394
  // After component load, this mixin makes the width of a flex item div available.
  methods: {
    $ready(fn) {
      if (process.env.NODE_ENV === 'production') {
        return this.$nextTick(fn);
      }
      setTimeout(() => {
        this.$nextTick(fn);
      });
    }
  }
}