const fetchGenreCollection = (collection) => 
    fetch(`/api/${collection}`)
    .then((response) => response.json())

export default {
    fetchGenreCollection
}
