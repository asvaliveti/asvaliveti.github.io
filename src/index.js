import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render((
    <BrowserRouter basename={window.location.pathname}>
        <App />
    </BrowserRouter>
))