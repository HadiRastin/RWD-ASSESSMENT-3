export default {
    async addPoster(context, data) {
        const userId = context.rootGetters.userId;
        console.log("the userId is: "+ userId);
        const posterData = {
          title: data.title,
          abstract: data.abstract,
          fields: data.fields,
          author: userId,
          score: 0 ,
          comment:{0:''}, 
          votedUsers: {0:''},
          id: new Date().getTime()
        };
        
    
        const response = await fetch(
          `https://vue-http-demo-25e69-default-rtdb.firebaseio.com/posters.json`,
          {
            method: 'POST',
            body: JSON.stringify(posterData)
          }
        );

        if (!response.ok) {
          // error ...
        }
    
        context.commit('addPoster', {
          posterData
        });
      },


      async loadPosters(context) {
        if (!context.getters.shouldUpdate) {
          return;
        }

        const response = await fetch(
            `https://vue-http-demo-25e69-default-rtdb.firebaseio.com/posters.json`
        );
        const responseData = await response.json();
        
        const posters = [];
        for (const key in responseData) {
          const poster = {
            id: responseData[key].id,
            title: responseData[key].title,
            abstract: responseData[key].abstract,
            author: responseData[key].author,
            fields: responseData[key].fields,
            score: responseData[key].score ,
            comment:responseData[key].comment, 
            votedUsers:responseData[key].votedUsers
          };
          posters.push(poster);
          
        }
        console.log("the whole number of posters are: " + posters.length);
        context.commit('setPosters', posters);
        context.commit('setFetchTimestamp');
      },

      
    
};