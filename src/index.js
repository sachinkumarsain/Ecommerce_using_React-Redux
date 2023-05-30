import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Store from './Ecommerce_with_redux/Store';
// import Home from './Ecommerce_with_redux/Home';
// import Header from './Ecommerce_with_redux/Header/Header';
import First from './Ecommerce_with_redux/First';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={Store}>
   <First/>
   
 </Provider>
);


