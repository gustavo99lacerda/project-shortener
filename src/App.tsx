import ErrorBoundary from './ErrorBoundary'
import Theme from './theme';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { Provider } from 'react-redux';
import MuiPickersUtilsProvider from '@material-ui/pickers/MuiPickersUtilsProvider';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import DateFnsUtils from "@date-io/date-fns"
import pt from 'date-fns/locale/pt';
import es from 'date-fns/locale/es';
import enGB from 'date-fns/locale/en-GB';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function App() {


  const { i18n } = useTranslation();
  const languageDefault = navigator.language;
  document.documentElement.lang = languageDefault;

  useEffect(() => {
    i18n.changeLanguage(languageDefault);
  }, [languageDefault]);

  const returnLocale = () => {
    switch (languageDefault) {
      case 'pt-BR':
        return pt
      case 'es':
        return es
      case 'en-GB':
        return enGB
      default:
        return pt
    }
  }

  return (
    <ErrorBoundary>
      <Theme>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={returnLocale()}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <BrowserRouter>
                <Routes />
              </BrowserRouter>
            </PersistGate>
          </Provider>
        </MuiPickersUtilsProvider>
      </Theme>
    </ErrorBoundary>
  )
}

export default App
