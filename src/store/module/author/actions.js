export default {
    async addAuthor(context, data) {
      console.log("we are now in addUthor mutation");
        const userId = context.rootGetters.userId;
        console.log("the userId is: "+ userId);
        const authorData = {
          name: data.name,
          affiliation: data.affiliation,
          description: data.description,
          field: data.field,
          userID: userId,
          score:5
        };
        
    
        const response = await fetch(
          'https://vue-http-demo-25e69-default-rtdb.firebaseio.com/authors.json',
          {
            method: 'POST',
            body: JSON.stringify(authorData)
          }
        );

        if (!response.ok) {
          // error ...
        }
    
        context.commit('addAuthor', {
            authorData
        });
      },


      async loadAuthors(context) {
        const response = await fetch(
            'https://vue-http-demo-25e69-default-rtdb.firebaseio.com/authors.json'
        );
        const responseData = await response.json();
        
        const authors = [];
        for (const key in responseData) {
          const author = {
            name: responseData[key].name,
            affiliation: responseData[key].affiliation,
            description: responseData[key].description,
            field: responseData[key].field,
            userID: responseData[key].userID, 
            score: responseData[key].score 
          };
          authors.push(author);
          
        }
        console.log("the whole number of authors are: " + authors.length);
        context.commit('setAuthors', authors);
        //context.commit('setFetchTimestamp');
      },

      
    
};