<template>
    <div class="md-elevation-2" id="recent-reading">
        <div class="panel">
            <h3>Recent reading</h3>
            <div class="reading_history">
                <p class="author-work">
                    <span><router-link :to="'/authors/Keith_Roberts'">Keith Roberts</router-link></span>
                    <br>
                    <cite>Pavane</cite>
                </p>
                <div class="precis">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, in?</p>
                    <p> Maecenas tempor erat quis commodo sollicitudin. Sed convallis eu ipsum at fermentum. Nunc eget nisl vitae quam pellentesque tristique. Integer hendrerit consectetur mi vitae tincidunt. Etiam quis aliquet magna. Integer tincidunt justo quis scelerisque lobortis. Morbi a rutrum mi. Donec elit diam, auctor sit amet eleifend non, vestibulum at nibh.</p>
                    <p>Nam fermentum bibendum elementum. Nunc mi justo, suscipit viverra dui id, eleifend laoreet felis. Aliquam imperdiet viverra faucibus. Nulla nec feugiat justo. Nam ut finibus quam. Suspendisse potenti. Ut mauris tellus, tempor eu enim eget, elementum tempor dui. Nullam bibendum, mi malesuada hendrerit commodo, magna ex semper nulla, malesuada tincidunt turpis sem sed sapien. Curabitur pellentesque efficitur eros in faucibus. Nam suscipit erat eget urna tempus, ac condimentum libero feugiat. Fusce fringilla, felis id suscipit elementum, ligula lorem fringilla metus, eget convallis enim turpis in urna. Quisque accumsan justo ut semper rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div class= "bookcover">    
                    <img  src="/assets/publications/Pavane_Keith-Roberts.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}

</script>

<style lang="scss" scoped>
#recent-reading {
    width: 1000px;
    height: 25rem;
    padding: .5rem 1rem;
    h3 { 
        padding: .5rem 0;
        margin: .5rem;
        border-bottom: 1px solid white;
    }
    .panel {
        height: 22.75rem;
        background-color: lightgray;
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