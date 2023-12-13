import App from './App.svelte';
import scrape from './lib/tracker-item-scraper';

const target = document.querySelector('[data-tracker]');
const logs = scrape(target);

// console.log(data);

target.innerHTML = '';
const app = new App({
  target,
  props: {
    // @ts-ignore
    logs,
  }
})

export default app
