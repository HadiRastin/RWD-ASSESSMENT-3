export default {

  authors(state) {
    return state.authors;
  },

  isAuthor(_, getters, _2, rootGetters) {
    const authors = getters.authors;
    const userId = rootGetters.userId;
    return authors.some(author => author.userID === userId);
  },

  /*

  isAuthor(state) {
    const authors = state.authors;
    const userId = state.rootGetters.userId;
    console.log("the author ID is:(author getter) " + userId)
    console.log("the author length is:(author getter) " + authors.length)
    for (let i=0; i< authors.length;i++)
    {
      if (authors[i].userId = userId)
      {
        return true;
      }
    }
    return false; 
    //authors.some(author => author.id === userId);
  },
  */

  sortAuthors(state) {
    var sortedauthors = state.authors;
    for (let i = 0; i < sortedauthors.length; i++) {
      for (let j = i + 1; j < sortedauthors.length; j++) {
        if (sortedauthors[j].score > sortedauthors[i].score) {
          let temp = sortedauthors[j];
          sortedauthors[j] = sortedauthors[i];
          sortedauthors[i] = temp;
        }
      }
    }
    return { sortedauthors };

  }

}