<template>
    <div>
        <md-table>
            <md-table-toolbar>
                <div class="md-toolbar-section-start">
                    <div class="md-layout-item">
                    <md-field>
                        <md-select v-model="pageSize" name="pageSize" id="pageSize" placeholder="Number of rows">
                            <!-- <md-option value="10">10</md-option> -->
                            <md-option value="25">25</md-option>
                            <md-option value="50">50</md-option>
                            <md-option value="75">75</md-option>
                            <md-option value="100">100</md-option>
                        </md-select>
                    </md-field>
                    </div>
                </div>
                <md-field md-clearable class="md-toolbar-section-end">
                    <md-input placeholder="Search by name..." v-model="search" />
                </md-field>
            </md-table-toolbar> 
            <md-table-row>
                <md-table-head
                    v-for="(column, index) in columns"
                    :key="index"
                    >
                    <span @click="sortBy(column)">{{ column }}</span>
                </md-table-head>
            </md-table-row>
            <md-table-row 
                v-for="author in resultQuery"
                :key="author._id"
                itemscope itemtype="http://schema.org/author"
            >
                <md-table-cell><router-link :to="'/authors/' + lastFirstLastNameURL(author.name)">{{ author.name }}</router-link></md-table-cell>
                <md-table-cell>{{ author.born | dateFormat }}</md-table-cell>
                <md-table-cell>{{ author.died | dateFormat}}</md-table-cell>
            </md-table-row>
            <app-pagination-switcher :paginationRange="count" :pagePosition="currentPage" @update="traversePagination" />
        </md-table>
    </div>
</template>

<script>
import PaginationSwitcher from '@/components/PaginationSwitcher'
export default {
    data() {
        return {
            search: '', //for table search
            searched: [], //for table search
            sortKey: 'name',
            sortDirection: 'asc',
            columns: ['name', 'born', 'died'],
            theDate: '',
            pageSize: 10,
            currentPage: 1,
            count: 1
        }
    },
    props: {
        authorList: Array
    },
    components: {
        appPaginationSwitcher: PaginationSwitcher
    },
    methods: {
        sortBy(sortCriteria) {
            if (sortCriteria === this.sortKey) {
                this.sortDirection = (this.sortDirection === 'asc') ? 'desc':'asc'
            }
            this.sortKey = sortCriteria
        },
        lastFirstLastNameURL: ( lastFirstName ) => {
            //Make an SEO friendly URL.
            //Reverse to first-surname order, and replace space and commas with underscores to be properly formatted URLs
            let firstLastName = ""
            return firstLastName = lastFirstName.split(", ").reverse().join(" ").replace(/[ ,]/g, "_")
        },
        pageSwitcher() {
            const totalPageSet = this.pageCount
        },    
        traversePagination(traverse) {
            this.currentPage = traverse
        }  
    },
    filters: {
       dateFormat: (bornDied) => {
           if (bornDied === '') return
            const months = {
                "01": "January",
                "02": "February",
                "03": "March",
                "04": "April",
                "05": "May",
                "06": "June",
                "07": "July",
                "08": "August",            // for (i=0, i <= totalPageSet, i++) {
            //    let  
            //}
                "09": "September",
                "10": "October",
                "11": "November",
                "12": "December"
            };
            const date_components = bornDied.split("-");
            const year = date_components[0];
            const month = months[date_components[1]];
            const day = date_components[2];
            const current = `${day} ${month} ${year}`;
            return current
        }
    },
    computed: {
        sortedAuthors() {
            return this.authorList.sort( (a,b) => {
                let modifier = 1;
                if(this.sortDirection === 'desc') modifier = -1
                if(a[this.sortKey] < b[this.sortKey]) return -1 * modifier
                if(a[this.sortKey] > b[this.sortKey]) return 1 * modifier
                return 0;
            })
        },
        pageCount() {
            const length = this.sortedAuthors.length
            return this.count = Math.ceil(length/this.pageSize)
        }, 
        paginatedTable() {
            const start = this.currentPage * this.pageSize
            const end = start + this.pageSize
            const paginated = this.sortedAuthors.slice(start, end)
            //this.paginationLength = Object.keys(paginated)
            return paginated
        },
        resultQuery(){
            if(this.search){
                return this.sortedAuthors.filter((item)=>{
                    return this.search.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
                })
            }
            else {
                return this.paginatedTable;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
th {
    text-transform: capitalize;
    cursor: pointer;
}
</style>
