import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { setLanguage } from 'store/actions/languageActions';
import { selectorLanguageState } from 'store/selectors/languageSelectors';

import styles from './LanguageSwitcher.module.scss';

const languages = [
  {
    value: 'en-US',
    label: 'EN'
  },
  {
    value: 'uk-UA',
    label: 'UA'
  },
  {
    value: 'ru-RU',
    label: 'RU'
  },
];

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const { currentLanguage } = useSelector( selectorLanguageState );

  const handleLanguageChange = ( e ) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    dispatch( setLanguage( newLang ) )
  };

  return (
    <select
      onChange={ handleLanguageChange }
      defaultValue={ currentLanguage.toString() }
      className={ styles.langSwitcherSelect }
    >
      { languages.map( language => <option key={ language.value } value={ language.value }>{ language.label }</option> ) }
    </select>
  );
}

export default LanguageSwitcher;
