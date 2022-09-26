export default {
  addComment(state, payload) {
    console.log("we are now in addComment mutatins.")
      state.comments.push(payload);
    },
    setComments(state, payload) {
      state.comments = payload;
    }
  };