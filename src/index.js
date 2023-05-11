import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

import { disableReactDevTools } from '@fvilers/disable-react-devtools';

if (process.env.REACT_APP_NODE_ENV === 'production') {
  console.log(process.env.REACT_APP_NODE_ENV);
  disableReactDevTools();
}

// Отключить щелчок правой кнопкой (запретить щелчок правой кнопкой мыши для просмотра исходного кода) 
window.oncontextmenu=function(){return false;} 

// Отключите ключ отладки f12 (но Firefox не поддерживается)
document.onkeydown=function (e){
  var currKey=0,evt=e||window.event;
   currKey=evt.keyCode||evt.which||evt.charCode;
   if (currKey == 123) {
       window.event.cancelBubble = true;
       window.event.returnValue = false;
   }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

