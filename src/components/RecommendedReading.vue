<template>
    <div>
        <h3>Recommended Reading</h3>
        <div id="recommended">
<div v-for="novel in recommended"><img src="/assets/publications/{{novel}}.jpg" alt=""></div>
            <!-- <div><img src="/assets/publications/Flowers-For-Algernon_Daniel-Keyes.jpg" alt=""></div>
            <div><img src="/assets/publications/The-Three-Body-Problem_Liu-Cixin.jpg" alt=""></div>
            <div><img src="/assets/publications/The-Dispossessed_Ursula-K-Le-Guin.jpg" alt=""> </div>
            <div><img src="/assets/publications/Dune_Frank-Herbert.jpg" alt=""></div>
            <div><img src="/assets/publications/The-Handmaids-Tale_Margaret-Attwood.png" alt=""></div>
            <div><img src="/assets/publications/The-Man-In-The-High-Castle_Phillip-K-Dick.jpg" alt=""></div>
            <div><img src="/assets/publications/The-Stars-My-Destination_Alfred-Bester.jpg" alt=""></div>
            <div><img src="/assets/publications/The-Forever-War_Joe-Haldeman.jpg" alt=""></div>
            <div><img s-For-Algernon_Daniel-Keyes',
            'The-Three-Body-Problem_Liu-Cixin',
            'The-Dispossessed_Ursula-K-Le-Guin',
            'Dune_Frank-Herbert',
            'The-Handmaids-Tale_Margaret-Attwood',
            'The-Man-In-The-High-Castle_Phillip-K-Dick',
            'The-Stars-My-Destination_Alfred-Bester',
            'The-Forever-War_Joe-Haldeman',
            'Neuromancer_William-Gibson',
            'Babel-17_Samuel-R-Delaney',
            'The-Chrysalids_John-Wyndham',
            'Foundation_Isaac-Asimov',
            'Spin_Robert-Charles-Wilson',
            'Ancilliary-Justice_Ann-Leckie',
            'Brave-New-World_Aldous-Huxley']
    }
  }
 }
</script>

<style lang="scss" scoped>
  /* https://css-tricks.com/seamless-responsive-photo-grid/ */
div {
  background-color: silver;
  h3 {
    margin: 1rem; 
    padding-top: 1rem;
  }
  #recommended {
    line-height: 0;
    border-left: 1px solid white; 
    border-top: 1px solid white;      
    -webkit-column-count: 5;
    -webkit-column-gap:   0px;
    -moz-column-count:    5;
    -moz-column-gap:      0px;
    column-count:         5;
    column-gap:           0px;  
    div { 
      background-color: black; opacity: .4;
      border-bottom: 1px solid white;      
      border-right: 1px solid white; 
      transition: opacity 1s ease-out;
      &:hover {
        opacity: 1;
      }     
      img {  
        width: 100% !important;
        // height: auto !important;
      }
    }
  }
  @media (max-width: 1200px) {
    #recommended {
    -moz-column-count:    6;
    -webkit-column-count: 6;
    column-count:         6;
    }
  }
  @media (max-width: 1000px) {
    #recommended {
    -moz-column-count:    3;
    -webkit-column-count: 3;
    column-count:         3;
    }
  }
  @media (max-width: 800px) {
    #recommended {
    -moz-column-count:    2;
    -webkit-column-count: 2;
    column-count:         2;
    }
  }
  @media (max-width: 400px) {
    #recommended {
    -moz-column-count:    1;
    -webkit-column-count: 1;
    column-count:         1;
    }
  }
}
</style>
