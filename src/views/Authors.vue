<template>
  <div id="authors" class="page">
    <h2>Science Fiction authors</h2>
    <p>This is a reference for SF authors of <em>significance</em>, that is an author that has either won or been nominated for a literary award for a text that is recgnised as Science Fiction.</p>
    <div class="author_table"> 
        <app-author-table :authorList="authors"></app-author-table>
      </div>
      <div class="author_spotlight">
        <router-view/>
      </div>
    </div>
</template>

<script>
import sfApiService from '@/services/sf-api-service'
import authorSpotlight from '@/components/AuthorSpotlight'
import authorTable from '@/components/AuthorTable'

export default {
  data() {
    return {
      authors: []
    }
  },
  props: {
    spotlightOn: String
  },
  components: {
    appAuthorTable: authorTable,
    appAuthorSpotlight: authorSpotlight
  },
  mounted() {
    sfApiService.fetchGenreCollection('authors')
    .then((jsonData) => {
        this.authors = jsonData
    })
    .catch((error) => {
        console.error('Error:', error);
    })
  }
}
</script>

<style lang="scss" scoped>
#authors {
  @include base-grid-structure;
  grid-template-areas:
    "title table table table spotlight spotlight";
  h2 {
    grid-area: title;
  }
  .author_table {
    grid-area: table
  }
  .author_spotlight {
    grid-area: spotlight;
  }
}
</style>