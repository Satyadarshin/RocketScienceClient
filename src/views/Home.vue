<template>
  <div class="front_page page">
    <section class="band-a">
      <h2>Science Fiction:<br>a literary genre</h2>
      <blockquote>
        <p>Today we live in a society in which spurious realities are manufactured by the media, by governments, by big corporations, by religious groups, political groups... So I ask, in my writing, What is real? Because unceasingly we are bombarded with pseudo-realities manufactured by very sophisticated people using very sophisticated electronic mechanisms. I do not distrust their motives; I distrust their power. They have a lot of it. And it is an astonishing power: that of creating whole universes, universes of the mind. I ought to know. I do the same thing.</p>
       <router-link :to="'/authors/Phillip_K._Dick'">Phillip K. Dick</router-link>
      </blockquote>
    </section>
      <section class="band-b">
        <app-recent-reading />
      </section>
      <section class="band-c">
        <h3>Recommended Reading</h3>
        <div class="recommended">
          <img src="/assets/publications/The-Dispossessed_Ursula-K-Le-Guin.jpg" alt="">
          <img src="/assets/publications/Dune_Frank-Herbert.jpg" alt="">
          <img src="/assets/publications/The-Handmaids-Tale_Margaret-Attwood.png" alt="">
          <img src="/assets/publications/The-Man-In-The-High-Castle_Phillip-K-Dick.jpg" alt="">
          <img src="/assets/publications/The-Stars-My-Destination_Alfred-Bester.jpg" alt="">
          <img src="/assets/publications/The-Forever-War_Joe-Haldeman.jpg" alt="">
          <img src="/assets/publications/Neuromancer_William-Gibson.jpg" alt="">
          <img src="/assets/publications/Babel-17_Samuel-R-Delaney.jpg" alt="">
          <img src="/assets/publications/Flowers-For-Algernon_Daniel-Keyes.jpg" alt="">
          <img src="/assets/publications/The-Three-Body-Problem_Liu-Cixin.jpg" alt="">
          <img src="/assets/publications/The-Chrysalids_John-Wyndham.jpg" alt="">
          <img src="/assets/publications/Foundation_Isaac-Asimov.jpg" alt="">
        </div>
      </section>
  </div>
</template>

<script>
import recentReading from '@/components/RecentReading'

export default {
  components: {
    appRecentReading: recentReading
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 1000px;
}
.band-a {
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
.band-c {
  background-color: silver;
  h3 {
    margin: 1rem; padding-top: 1rem;
  }
  .recommended {
    justify-content: space-between;
    margin-right: auto;
    margin-left: auto;
    flex-wrap: wrap;
    display: flex;
    img { 
      // margin-right: 4px;
      margin-top: 6px;
      height: 250px
    }
  }
}
</style>