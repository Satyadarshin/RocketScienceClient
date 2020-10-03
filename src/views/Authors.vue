<template>
<div id="authors">
    <h2>Authors</h2>
    <p>This is a reference for SF authors of <em>significance</em>, that is an author that has either won or been nominated for a literary award for a text that is recgnised as Science Fiction.</p>
  <div class="md-layout">
   <div class="md-layout-item">
    <router-view/>
   </div>
    <div class="md-layout-item">
      <app-author-table :authorList="authors"></app-author-table>
    </div>
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
