import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// App's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgTI0l4WZbfZ6nyMcxyWQrkQlmjzA1rq8",
  authDomain: "movies-db-60fae.firebaseapp.com",
  projectId: "movies-db-60fae",
  storageBucket: "movies-db-60fae.appspot.com",
  messagingSenderId: "29484899128",
  appId: "1:29484899128:web:310ea68813831d4890ffcd"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGoogleRedirect = () => signInWithRedirect( auth, googleProvider );

export const db = getFirestore();

export const createUserDocumentFromAuth = async ( userAuth ) => {
  if( !userAuth ) return;

  const userDocRef = doc( db, 'users', userAuth.uid );

  const userSnapshot = await getDoc( userDocRef );

  if ( !userSnapshot.exists() ) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async ( email, password ) => {
  if( !email || !password ) return;

  return await createUserWithEmailAndPassword( auth, email, password );
};

export const signInAuthUserWithEmailAndPassword = async ( email, password ) => {
  if( !email || !password ) return;

  return await signInWithEmailAndPassword( auth, email, password );
};

export const signOutUser = async () => await signOut( auth );

export const onAuthStateChangedListener = ( callback ) => onAuthStateChanged( auth, callback );

export const getCurrentUser = () => {
  return new Promise(( resolve, reject ) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      ( userAuth ) => {
        unsubscribe();
        resolve( userAuth );
      },
      reject
    );
  });
};