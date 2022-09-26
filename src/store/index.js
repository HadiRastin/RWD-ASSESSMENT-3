import { createStore } from 'vuex';
import authorModules from './module/author/index.js';
import posterModules from './module/posters/index';
import messagesModule from './module/messages/index.js';
import authModule from './module/authentication/index.js'
import commentModule from './module/comments/index.js';


const store = createStore({

    modules: {
        authors: authorModules,
        posters: posterModules,
        messages: messagesModule,
        comments: commentModule,
        auth: authModule
    }
});

export default store
