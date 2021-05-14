import{createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './Reducers/Index';

const Store = createStore(
    reducers,
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__()
    )

);

export default Store;