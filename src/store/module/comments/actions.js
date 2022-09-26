export default {
    async addComment(context, payload) {
      const newComment = {
        comment: payload.comment,
        posterID: payload.posterID,
      };
  
      console.log("the comment is: "+ newComment.comment);
      const response = await fetch(`https://vue-http-demo-25e69-default-rtdb.firebaseio.com/comments.json`, {
        method: 'POST',
        body: JSON.stringify(newComment)
      });
  
      if (!response.ok) {
        // error ...
      }
  
      //const responseData = await response.json();
      context.commit('addComment', newComment);
    },
  
  
  
    async loadComments(context) {
      //const userId = context.rootGetters.userId;
      const response = await fetch(`https://vue-http-demo-25e69-default-rtdb.firebaseio.com/comments.json`);
      const responseData = await response.json();
  
      const comments = [];
      for (const key in responseData) {
        const comment = {
          comment: responseData[key].comment,
          posterID: responseData[key].posterID,
        };
        comments.push(comment);
      }
      console.log(comments.length);
      context.commit('setComments', comments);
    }
  };