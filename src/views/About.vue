<template>
  <div id="project-about" class="page">
    <h2>About the Rocket Science project</h2>
    <div class="text">
      <p>This is a resource for people interested in SF as a genre of literature.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a neque, autem ab unde tempora maiores id asperiores laborum aut provident facere nobis ipsum molestias.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi possimus tempora nobis debitis placeat molestias nulla corrupti, autem ipsum nostrum dolor omnis voluptatibus optio illum! Facere corporis esse molestiae laboriosam.</p>
      <h3>sub heading</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non eius deserunt minima voluptatibus et inventore dolorem unde dolore sint explicabo qui itaque, recusandae, assumenda aliquam facilis ullam eveniet blanditiis eos commodi. Natus, cupiditate ipsum suscipit velit alias odio et aperiam perferendis officia sequi commodi molestiae. Quidem corporis dignissimos recusandae amet?</p>
    </div>
    <app-figure
      illustration="Chris_Foss"
      altText="Asimov's Foundation trilogy, cover art by Chris Foss"
      caption="Artwork by Chris Foss"
      classes="illustration"
    />
</div>
</template>

<script>
import Figure from '@/components/Figure';

export default {
  components: {
    appFigure: Figure,
  },
};
</script>

<style lang="scss" scoped>
#project-about {
  @include base-grid-structure;
  grid-template-areas:
  " title text text text illustration illustration";
  h2 {
    grid-area: title;
  }
  .illustration {
    grid-area: illustration;
  }
  .text {
    grid-area: text;
  }

}

</style>
