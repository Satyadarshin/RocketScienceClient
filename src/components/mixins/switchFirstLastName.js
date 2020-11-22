export const switchFirstLastName = {
    //Make an SEO friendly URL.
    //Reverse to first-surname order, and replace space and commas with underscores to be properly formatted URLs
    filter: {
        firstLastNameURL: ( lastFirstName ) => {
            let firstLastName = ""
            return firstLastName = lastFirstName.split(", ").reverse().join(" ").replace(/[ ,]/g, "_")
        }
    },
  };