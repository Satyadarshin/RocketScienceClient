<template>
    <div class="md-elevation-2" id="recent-reading">
        <div class="panel">
            <h3 @click="viewRecent">Recent reading</h3>
            <div v-if="show" transition="expand">
                <div class="reading_history">
                    <p class="author-work">
                        <span><router-link :to="'/authors/Keith_Roberts'">Keith Roberts</router-link></span>
                        <br>
                        <cite>Pavane</cite>
                        <br>
                        <span>1968</span>
                    </p>
                    <div class="precis">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, in?</p>
                        <p>Maecenas tempor erat quis commodo sollicitudin. Sed convallis eu ipsum at fermentum. Nunc eget nisl vitae quam pellentesque tristique. Integer hendrerit consectetur mi vitae tincidunt. Etiam quis aliquet magna. Integer tincidunt justo quis scelerisque lobortis. Morbi a rutrum mi. Donec elit diam, auctor sit amet eleifend non, vestibulum at nibh.</p>
                    </div>
                    <div class= "bookcover">
                        <img  src="/assets/publications/Pavane_Keith-Roberts.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
      return {

          show: false,
    transitionName: 'fade'
      }
  },
  methods: {
      viewRecent() {
          console.log('hit');
          this.show = !this.show;
      }
  }
};

</script>

<style lang="scss" scoped>
.expand-transition {
            transition: all .3s ease;
            height: 22.75rem;
            // padding: 10px;
            // background-color: #eee;
            // overflow: hidden;
        }
        /* .expand-enter defines the starting state for entering */
        /* .expand-leave defines the ending state for leaving */
        .expand-enter, .expand-leave {
            height: 0;
            // padding: 0 10px;
            opacity: 0;
        }
#recent-reading {
   // height: 25rem;
    background-color:$lightgrey;
    h3 {
        cursor: pointer;
        padding: .5rem 0;
        margin: .5rem;
        border-bottom: 1px solid $white;
    }
    .panel {
        
        
        .reading_history {
            display: flex;
            align-items: flex-start;;
            justify-content: space-between;
            .author-work {
                width: 10%;
                margin-left: .5rem;
                span {
                    font-weight: bold
                }
            }
            .precis {
                // flex-grow: 2
                margin: 0 1rem;
                width: 60%;
            }
            .bookcover {
                img {
                    margin: 0 auto;
                    flex-grow: 1;
                    display: block;
                    height: 18rem
                }
            }
        }
    }
}
</style>
