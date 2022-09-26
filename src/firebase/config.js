import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCW2eAHpd2tElCZHNvzKgQxeOgd2Qdbp7o",
    authDomain: "assessment-2-8d478.firebaseapp.com",
    projectId: "assessment-2-8d478",
    storageBucket: "assessment-2-8d478.appspot.com",
    messagingSenderId: "261514316201",
    appId: "1:261514316201:web:bfc7560f34bae0798edcb8"
  };

  initializeApp(firebaseConfig);

  const auth = getAuth();
  export {auth};