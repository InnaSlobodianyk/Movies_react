import { LANGUAGE_STORE_ACTIONS } from 'store/actions/languageActions';

const languageInitialState = {
  currentLanguage: 'en',
};

const languageReducer = ( state = languageInitialState, action ) => {
  const { type, payload } = action;
  switch (type) {
    case LANGUAGE_STORE_ACTIONS.SET_LANGUAGE:
      return {
        ...state,
        currentLanguage: payload
      };
    default:
      return state;
  }
};

export default languageReducer;