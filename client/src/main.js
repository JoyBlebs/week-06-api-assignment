import './style.css';
import { app } from './app.js';

document.addEventListener('DOMContentLoaded', () => {

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`
;

app.setupCounter(document.querySelector('#counter'))
});