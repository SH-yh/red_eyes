import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './components/App';
ReactDOM.render(
    <AppRouter />,
    document.getElementById('container')
);
/*
if(module.hot){
    module.hot.accept(()=>{
        ReactDOM.render(
            "hello hy",
            document.getElementById('container')
        );
    })
};
*/