export default {
  posters(state) {
    return state.posters;
  },

  hasPosters(state) {
    return state.posters && state.posters.length > 0;
  },

  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  },

  sortPosters: (state) => {
    var sortedposters = state.posters;
    for (let i = 0; i < sortedposters.length; i++) {
      for (let j = i + 1; j < sortedposters.length; j++) {
        if (sortedposters[j].score > sortedposters[i].score) {
          let temp = sortedposters[j];
          sortedposters[j] = sortedposters[i];
          sortedposters[i] = temp;
        }
      }
    }
    return { sortedposters };
  },

}

