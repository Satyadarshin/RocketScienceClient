<template>
  <div class="md-layout">
    <div class="md-layout-item">
      <h2>About the Rocket Science project</h2>
      <app-figure 
        uri="/assets/illustrations/Asimov_Foundation_trilogy_Chris_Foss_art.png" 
        altText="Asimov's Foundation trilogy, cover art by Chris Foss" 
        caption="Issac Asimov's Foundation trilogy with cover art by Chris Foss" 
      />
    </div>
    <div class="md-layout-item">
      <p>This is a resource for people interested in SF as a genre of literature.</p>    
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a neque, autem ab unde tempora maiores id asperiores laborum aut provident facere nobis ipsum molestias.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi possimus tempora nobis debitis placeat molestias nulla corrupti, autem ipsum nostrum dolor omnis voluptatibus optio illum! Facere corporis esse molestiae laboriosam.</p>
      <h3>sub heading</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non eius deserunt minima voluptatibus et inventore dolorem unde dolore sint explicabo qui itaque, recusandae, assumenda aliquam facilis ullam eveniet blanditiis eos commodi. Natus, cupiditate ipsum suscipit velit alias odio et aperiam perferendis officia sequi commodi molestiae. Quidem corporis dignissimos recusandae amet?</p>
    </div>
  </div>
</template>

<script>
import Figure from '@/components/Figure'

export default {
  components: {
    appFigure: Figure
  }
}

</script>
