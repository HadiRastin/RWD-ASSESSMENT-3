export default {

    addAuthor(state, payload) {
        console.log("we are in addAuthor section")
        state.authors.push(payload);
    },
    setAuthors(state, payload) {
        state.authors = payload;
    },

    addScore(state, selectedPosterId, selectedAuthor) {
        //const selectedAuthor = state.getters["posters/posters"].find((poster) => poster.id === selectedPosterId).author;
        for (let i = 0; i < state.authors.length; i++) {
            if (state.authors[i]['userID'] === selectedAuthor) {
                state.authors[i]['score']++;
                console.log(state.authors[i]['score']);
            }
        }
        
    },

}