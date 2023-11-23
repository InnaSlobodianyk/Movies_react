import { makeActionCreator } from 'store/actions';

export const LANGUAGE_STORE_ACTIONS = {
  SET_LANGUAGE: 'SET_LANGUAGE',
};

export const setLanguage = ( payload ) => makeActionCreator( LANGUAGE_STORE_ACTIONS.SET_LANGUAGE, payload );