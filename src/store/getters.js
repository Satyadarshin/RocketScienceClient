export default {
    readingList(state) {
        return state.recommended
    },
    selectText: (state) => (index) => {
        return state.recommended[index] 
    }
};
