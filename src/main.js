import './app.css'
import App from './App.svelte'

const target = document.getElementById('app');
const logsUrl = target.dataset.logs;

const app = new App({
  target,
  props: {
    // @ts-ignore
    logsUrl,
  }
})

export default app
