<template>
  <div>
    <h3>Recommended Reading</h3>
    <div id="recommended" ref="reading">
      <div v-for="(novel, index)  in recommendedReading" :key="index" :style="calculateHeightRatio" @click="toggleModal(index)"  >
        <img :src="`/assets/publications/${novel}.jpg`" :alt="index" />
      </div>
    </div>
    <app-recommended-modal v-if="showModal" @close="showModal = false" :focus="moreInfo">
      <template v-slot:body></template>
    </app-recommended-modal>
  </div>
</template>

<script>
import { flexItemWidth } from '@/components/mixins/flexItemWidth';
import RecommendedReadingModal from '@/components/RecommendedReadingModal';

export default {
  mixins: [flexItemWidth],
  components: {
    appRecommendedModal: RecommendedReadingModal,
  },
  data() {
    return {
      threeToFour: '',
      moreInfo: '',
      recommendedReading: [],
      showModal: false,
    };
  },
  methods: {
    toggleModal(text) {
      this.showModal = !this.showModal;
      this.moreInfo = text;
    },
  },
  computed: {
    calculateHeightRatio() {
      return {
        height: `${this.threeToFour}px`,
      };
    },
  },
  mounted() {
    // State needs to be pulled in at the mounted hook, not in a computed property.
    // If not done this way, the $nextTick has nowhere to go.
    this.recommendedReading = this.$store.getters.readingList;
    // Gets the width of a flex item after the items have been rendered.
    // Proportionally calculates the height of the item(s) at 2:3
    this.$ready(
      () => {
        this.$nextTick(() => {
          const firstTile = this.$refs.reading.firstChild.clientWidth;
          const aThird = firstTile / 2;
          this.threeToFour = aThird * 3;
        });
      },
    );
  },
};
</script>

<style lang="scss" scoped>
/* https://css-tricks.com/seamless-responsive-photo-grid/ */

div {
  background-color: $lightgrey;
  h3 {
    margin: 1rem;
    padding-top: 1rem;
  }
  #recommended {
    line-height: 0;
    border-left: 1px solid white;
    border-top: 1px solid white;
    -webkit-column-count: 5;
    -webkit-column-gap:   0px;
    -moz-column-count:    5;
    -moz-column-gap:      0px;
    column-count:         5;
    column-gap:           0px;
    div {
      overflow: hidden;
      background-color: black; opacity: 1;
      border-bottom: 1px solid white;
      border-right: 1px solid white;
      transition: opacity 1s ease-out;
      &:hover {
        opacity: .4;
      }
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
  @media (max-width: 1200px) {
    #recommended {
    -moz-column-count:    6;
    -webkit-column-count: 6;
    column-count:         6;
    }
  }
  @media (max-width: 1000px) {
    #recommended {
    -moz-column-count:    3;
    -webkit-column-count: 3;
    column-count:         3;
    }
  }
  @media (max-width: 800px) {
    #recommended {
    -moz-column-count:    2;
    -webkit-column-count: 2;
    column-count:         2;
    }
  }
  @media (max-width: 400px) {
    #recommended {
    -moz-column-count:    1;
    -webkit-column-count: 1;
    column-count:         1;
    }
  }
}
</style>
