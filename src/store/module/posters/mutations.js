export default {
    addPoster(state, payload) {
        state.posters.push(payload);
    },
    setPosters(state, payload) {
        state.posters = payload;
    },

    setFetchTimestamp(state) {
        state.lastFetch = new Date().getTime();
    },

    addScore(state, selectedPosterId, userID) {
        const selectedPoster = state.posters.find((poster) => poster.id === selectedPosterId);
        console.log("the selectedPoster is: " + selectedPoster);

        let Votedusers = selectedPoster['votedUsers'];
        console.log("the selectedPoster votedUsers are : " + Votedusers);
        for (const key in Votedusers) {
            if (Votedusers[key] === userID) {
                return;
            }
        }
    
        state.posters.find((poster) => poster.id === selectedPosterId).score++;
        state.posters.find((poster) => poster.id === selectedPosterId).votedUsers[userID] = userID;
        const selectedAuthor = state.posters.find((poster) => poster.id === selectedPosterId).author;
        return selectedAuthor;
    },

    /*

    addComment(state, selectedPosterId, payload) {
        state.posters.find((poster) => poster.id === selectedPosterId).comment.push(payload);
    },

    addVoteduser(state, selectedPosterId, payload) {
        state.posters.find((poster) => poster.id === selectedPosterId).votedUsers.push(payload);
    },
    */



}