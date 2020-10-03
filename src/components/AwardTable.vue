<template>
    <div class="content">
        <md-table>
            <md-table-toolbar>
                <caption v-if="selectedAward.length === 0">Choose an Award category, above</caption>
                <caption v-else>Your selected award category is the <span>{{ who }}</span> for <span>{{ what }}</span></caption>
            </md-table-toolbar> 
            <thead>
                <!-- <tr class="filter" v-if="selectedAward.length!== 0">
                    <th coslpan="">     
                        <input v-model="search" class="form-control" placeholder="Filter by year, author, or title">
                    </th>
                </tr> -->
                <md-table-row v-show="selectedAward.length >= 1">
                    <md-table-head
                        v-for="(column, index) in columns"
                        :key="index"
                        >
                        <span @click="sortBy(column)">{{ column }}</span>
                    </md-table-head>
                </md-table-row>
            </thead>
            <tfoot>
                <md-table-row>
                    <md-table-cell>
                       <md-button class="md-icon-button md-raised">
                            <md-icon>keyboard_arrow_left</md-icon>
                        </md-button> 
                     </md-table-cell> 
                     <md-table-cell> 
                         1
                     </md-table-cell>
                    <md-table-cell>
                        <md-button class="md-icon-button md-raised">
                            <md-icon>keyboard_arrow_right</md-icon>
                        </md-button>
                    </md-table-cell>
                </md-table-row>
            </tfoot>
            <tbody>
                <md-table-row
                    v-for="(award, index) in sortedWinners"
                    :key="index"
                    itemscope itemtype="http://schema.org/Book"
                >
                    <md-table-cell>{{ award.year }}</md-table-cell>
                    <md-table-cell itemprop="creator"><router-link :to="`/authors/${award.winner.author}`">{{ award.winner.author }}</router-link></md-table-cell>
                    <md-table-cell itemprop="name">{{ award.winner.title }}</md-table-cell>
                </md-table-row>
            </tbody>
        </md-table>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            search: '',
            searched: [],
            sortKey: 'year',
            sortDirection: 'asc',
            columns: ['year', 'author','title']
        }
    },
    props: {
        who: String,
        what: String,
        selectedAward: Array
    },
    methods: {
        sortBy(sortCriteria) {
            if (sortCriteria === this.sortKey) {
                this.sortDirection = (this.sortDirection === 'asc') ? 'desc':'asc' 
            }
            this.sortKey = sortCriteria
        },
        searchOnTable () {
            this.searched = searchByName(this.users, this.search)
      }
    },
    filters: {
            lastFirstLastNameURL: ( lastFirstName ) => {
            //Make an SEO friendly URL.
            //Reverse to first-surname order, and replace space and commas with underscores to be properly formatted URLs
            let firstLastName = ""
            return firstLastName = lastFirstName.split(", ").reverse().join(" ").replace(/[ ,]/g, "_")
        }
    },
    computed: {
        sortedWinners() {
            return this.selectedAward.sort((a,b) => {
                let modifier = 1; 
                if(this.sortDirection === 'desc') modifier = -1;
                if(a[this.sortKey] < b[this.sortKey]) return -1 * modifier;
                if(a[this.sortKey] > b[this.sortKey]) return 1 * modifier;
                return 0;
            })
        }
    },
    created () {
        this.searched = this.sortedWinners
    }
}
</script>

<style lang="scss" scoped>
table {
    th {
        cursor: pointer;
        text-transform: capitalize;
    }
}
</style>