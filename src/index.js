import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';

ReactDOM.render((
    <BrowserRouter basename={window.location.pathname || ''}>
        <Route exact path={"/"} component={App}/>
    </BrowserRouter>
))