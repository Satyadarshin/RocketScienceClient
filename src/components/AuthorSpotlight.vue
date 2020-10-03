<template>
    <div id="author-spotlight" class="card-expansion">
        <md-card md-with-hover>
            <md-card-media>
                <img :src="imageAttributer('src', authorName )" :alt="imageAttributer('alt', authorName )"/>
            </md-card-media>

            <md-card-header>
                <div class="md-title">{{ cleanAuthorName(authorName) }}</div>
                <div class="md-subhead">Born &ndash; died?</div>
            </md-card-header>

            <md-card-expand>
                <md-card-actions md-alignment="space-between">
                    <div>
                        <md-button><a href="#">Works</a></md-button>
                        <md-button><a href="#">Website</a></md-button>
                    </div>

                    <md-card-expand-trigger>
                        <md-button class="md-icon-button">
                            <md-icon>keyboard_arrow_down</md-icon>
                        </md-button>
                    </md-card-expand-trigger>
                </md-card-actions>

                <md-card-expand-content>
                    <md-card-content>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.</p>
                    </md-card-content>
                </md-card-expand-content>
            </md-card-expand>
        </md-card>
    </div>
</template>

<script>

export default {
    data() {
        return {
            imageSrc: `/assets/authors/`,
            imageAlt: `Photograph of Science Fiction author`,
        }
    },
    props: {
        authorName: String
    },
    methods: {
        findAuthor(name, authorRecords){
            for (let i=0; i < authorRecords.length; i++) {
                if (authorRecords[i].name === name) {
                    return authorRecords[i];
                }
            }
        },
        imageAttributer(attribute, author) {
            if (attribute === 'src') return `${this.imageSrc}${author}.jpg`
            if (attribute === 'alt') return `${this.imageAlt} ${this.cleanAuthorName(author)}`
        },
        cleanAuthorName(webSafeName) {
            return webSafeName.replace(/_/g, " ")
        }
    }
}
</script>

<style lang="scss" scoped>
#author-spotlight{

max-width: 30rem
}
</style>