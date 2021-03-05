import VDOM from './framework/vdom.js';
import App from './src/app.js';

new VDOM(
  new App(),
  document.getElementById('app')
);

