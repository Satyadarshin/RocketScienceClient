<template>
  <div class="md-layout">
    <div class="md-layout-item">
      <h2>Science Fiction Literary Awards</h2>  
        <div id="award-category-selector">
            <md-button class="md-raised md-primary selector" @click="viewAwardCategory(hugoAward, 'bestNovel')">Hugo Award for Best Novel</md-button>
            <md-button class="md-raised md-primary selector" @click="viewAwardCategory(nebulaAward, 'bestNovel')">Nebula Award for Best Novel</md-button>
        </div>
    </div>
    <div class="md-layout-item">
        <app-award-table :selectedAward="displayCategory" :who="awarder" :what="category"></app-award-table>
    </div>
  </div>
</template>

<script>
import awardTable from '@/components/AwardTable.vue'
//import sfApiService from '@/services/sf-api-service.js' TODO this now fails because of the shift to an api call 

export default { 
    data() {
        return {
            hugoAward: 'hugo_award',
            nebulaAward: 'nebula_award',
            displayCategory: [],
            awarder: '',
            category: ''
        }
    },
    methods: { 
        viewAwardCategory(awardBody, extractCategory) {
            //The two regex below break out the file  an object names to pass it down to the component as a header
            this.awarder = awardBody.replace(/_/g, " ")
            this.category = extractCategory.replace(/([A-Z])/g, ' $1')
            sfDataService.fetchTextRecords(awardBody)
            .then((jsonData) => {
                let awardHistory = jsonData.results
                this.displayCategory = awardHistory[0][extractCategory] 
            })
            .catch((error) => {
                console.error('Error:', error);
            })
        }
    },
    components: {
        appAwardTable: awardTable
    }
}
</script>

<style lang="scss" scoped>
// * {border: 1px solid red;}
#award-category-selector {
    max-width: 18rem;
    margin: 5px;
    display: flex;
    flex-direction: column;
    .selector { 
        margin: 0 auto .5rem;
        width: 100%; 
    }
}
</style>
