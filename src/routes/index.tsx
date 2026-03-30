import { Route, Switch } from 'react-router-dom';
import PaginaInicial from '../pages/PaginaInicial';
import '../i18n'

const Routes = () => {

  return (

    <Switch>
      <Route exact path="/" component={PaginaInicial} />
    </Switch>
  )
};

export default Routes;
