import { Route, Switch } from 'react-router-dom';
import '../i18n'
import PaginaInicial from '../pages/PaginaInicial';
import Cadastro from '../pages/Cadastro';

const Routes = () => {

  return (

    <Switch>
      <Route exact path="/" component={PaginaInicial} />
      <Route exact path="/publ/cadastro" component={Cadastro} />

    </Switch>
  )
};

export default Routes;
