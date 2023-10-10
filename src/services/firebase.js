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
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore';

// App's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBgTI0l4WZbfZ6nyMcxyWQrkQlmjzA1rq8',
  authDomain: 'movies-db-60fae.firebaseapp.com',
  projectId: 'movies-db-60fae',
  storageBucket: 'movies-db-60fae.appspot.com',
  messagingSenderId: '29484899128',
  appId: '1:29484899128:web:310ea68813831d4890ffcd'
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

export const addCollectionAndDocuments = async (
  collectionKey,
  userId,
  movieId
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  const docRef = doc(collectionRef, userId);
  const favoritesData = {
    userId,
    favoriteMovies: [ movieId ]
  };

  const userFavoritesSnapshot = await getDoc( docRef );

  if ( !userFavoritesSnapshot.exists() ) {
    batch.set(docRef, favoritesData);
  } else {
    const userFavoritesSnapshotData = await userFavoritesSnapshot.data();
    const favoriteMoviesUpdated = (userFavoritesSnapshotData.favoriteMovies.length && userFavoritesSnapshotData.favoriteMovies.indexOf( movieId ) >= 0)
      ? userFavoritesSnapshotData.favoriteMovies
      : [movieId, ...userFavoritesSnapshotData.favoriteMovies];
    batch.update(docRef, 'favoriteMovies', favoriteMoviesUpdated);
  }

  await batch.commit();
};

export const removeFromDocument = async (
  collectionKey,
  userId,
  movieId
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  const docRef = doc(collectionRef, userId);
  const userFavoritesSnapshot = await getDoc( docRef );

  if ( userFavoritesSnapshot.exists() ) {
    const userFavoritesSnapshotData = await userFavoritesSnapshot.data();
    const favoriteMoviesUpdated = (userFavoritesSnapshotData.favoriteMovies.length && userFavoritesSnapshotData.favoriteMovies.indexOf( movieId ) >= 0)
      ? userFavoritesSnapshotData.favoriteMovies.filter( ( movie ) => movie !== movieId )
      : userFavoritesSnapshotData.favoriteMovies;
    batch.update( docRef, 'favoriteMovies', favoriteMoviesUpdated );
  }

  await batch.commit();
};

export const getFavoritesAndDocuments = async () => {
  const collectionRef = collection(db, 'favorites');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const userFavoritesSnapshot = querySnapshot.docs.filter( ( docSnapshot ) => docSnapshot.id === auth.currentUser.uid )[0];
  const userFavoritesSnapshotData = await userFavoritesSnapshot.data();

  return userFavoritesSnapshotData.favoriteMovies;
};

export const createUserDocumentFromAuth = async ( userAuth, additionalInformation = {} ) => {
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
        ...additionalInformation
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