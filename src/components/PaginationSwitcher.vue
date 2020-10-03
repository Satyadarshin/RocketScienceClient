<template>
    <md-table-row>
        <md-table-cell>
            <md-button class="md-icon-button md-raised" @click="previousPage">
                <md-icon>keyboard_arrow_left</md-icon>
            </md-button> 
            </md-table-cell> 
            <md-table-cell>
                <button 
                    v-for="button in buttons" 
                    :key="button"
                class="button">
                     <a href="#">{{page}}</a>
                </button>
            </md-table-cell>
            <md-table-cell>
            <md-button class="md-icon-button md-raised" @click="nextPage">
                <md-icon>keyboard_arrow_right</md-icon>
            </md-button>
        </md-table-cell>
    </md-table-row>
</template>

<script>
export default {
    data(){
        return {
            buttons: [],
            pageNumber: 1,
            traverse: 0
        }
    },
    props: {
        paginationRange: Number,
        pagePosition: Number
    },
    methods: 
    {
        nextPage(){
            this.traverse = this.pageNumber++
            this.$emit('update', this.traverse )
        },
        previousPage(){
            this.traverse = this.pageNumber--
            this.$emit('update', this.traverse )
        }
},
    computed: {
        buttons() {
      // return a set of buttons:
      // current page +2 possible steps forward, but not greater than the total number of paginted pages
      // cuurent page -2 possible steps backward, but not less than 1
        }

    }
}
</script>

<style lang="scss" scoped>
.button { 
    display:inline-block;
    width: 1.9rem;
    border-radius: 3px; 
    height: 2.1rem;
    border: 1px solid #949494; 
    margin: 0 .25rem .25rem 0;
    a { 
        color: $oil !important; 
        font-size: .9rem;
        height: 2rem; 
        padding-top: .25rem;  
        padding-bottom: .25rem; 
        line-height: 1.9;
        width: 1.8rem; 
        margin-left: -.5rem; 
        padding:0;
        display: block;
        border-radius: 3px;
        border: 1px solid white;
        background-color: #e0e0e0;
        &:hover { 
            color: white !important;
            text-decoration: none;
            background-color: grey;
        }
    }
}
</style>