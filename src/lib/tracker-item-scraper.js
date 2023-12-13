
/**
 * 
 * @param {Element} item 
 */
function scrapeItem(item) {
    const result = {};
    result.url = item.querySelector('a[data-tracker-item-url]')['href']; // to avoid typescript error
    result.name = item.querySelector('[data-tracker-item-title]').textContent.trim();
    result.media = item.querySelector('[data-tracker-item-media]').textContent.trim();
    result.date = new Date(item.querySelector('[data-tracker-item-date]').textContent.trim());
    result.author = item.querySelector('[data-tracker-item-author]').textContent.trim();
    result.note = item.querySelector('[data-tracker-item-note]').textContent.trim();
    return result;
}

/**
 * 
 * @param {Element} container 
 */
export default function scrape(container) {
    const result = [];
    const items = container.querySelectorAll('[data-tracker-item]');
    for (const item of items) {
        result.push( scrapeItem(item) );
    }
    return result;
}
