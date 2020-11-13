<template>
  <div class="front_page page">
    <section id="introduction">
      <h2>Science Fiction:<br>a literary genre</h2>
      <blockquote>
        <p>Today we live in a society in which spurious realities are manufactured by the media, by governments, by big corporations, by religious groups, political groups... So I ask, in my writing, What is real? Because unceasingly we are bombarded with pseudo-realities manufactured by very sophisticated people using very sophisticated electronic mechanisms. I do not distrust their motives; I distrust their power. They have a lot of it. And it is an astonishing power: that of creating whole universes, universes of the mind. I ought to know. I do the same thing.</p>
       <router-link :to="'/authors/Phillip_K._Dick'">Phillip K. Dick</router-link>
      </blockquote>
    </section>
    <section id="recent-reading">
      <app-recent-reading />
    </section>
    <section id="recommended-reading">
      <app-recommended-reading />
    </section>
  </div>
</template>

<script>
import recentReading from '@/components/RecentReading';
import recommendedReading from '@/components/RecommendedReading';

export default {
  components: {
    appRecentReading: recentReading,
    appRecommendedReading: recommendedReading,
  },
};
</script>

<style lang="scss" scoped>

#introduction {
  display: flex;
  h2 {
    margin: 1rem 0;
  }
  blockquote {
    width:75%;
    margin-top: 0;
    p:first-child {
      line-height: 1.5;
      font-size: 1.25rem;
    }
  }
}
</style>
