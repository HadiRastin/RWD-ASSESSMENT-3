export default {
  async contactAuthor(context, payload) {
    const newMessage = {
      email: payload.email,
      message: payload.message,
      authourID: payload.authourID,
    };

    console.log("the authorID is: "+ newMessage.authourID);
    const response = await fetch(`https://vue-http-demo-25e69-default-rtdb.firebaseio.com/messages.json`, {
      method: 'POST',
      body: JSON.stringify(newMessage)
    });

    if (!response.ok) {
      // error ...
    }

    //const responseData = await response.json();
    context.commit('addMessages', newMessage);
  },



  async loadMessages(context) {
    //const userId = context.rootGetters.userId;
    const response = await fetch(`https://vue-http-demo-25e69-default-rtdb.firebaseio.com/messages.json`);
    const responseData = await response.json();

    const messages = [];
    for (const key in responseData) {
      const message = {
        email: responseData[key].email,
        message: responseData[key].message,
        authourID: responseData[key].authourID,
      };
      messages.push(message);
    }
    console.log(messages.length);
    context.commit('setMessages', messages);
  }
};