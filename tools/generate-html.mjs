import { readFileSync, writeFileSync } from "fs";

const output = [];
const items = JSON.parse(readFileSync('./tools/misc-log.json'));

for (const item of items) {
    output.push(`
    <article data-tracker-item>
        <header>
            <h2 data-tracker-item-title>
                <a data-tracker-item-url href="${ item.url }">
                    ${ item.name }
                </a>
            </h2>
            <p class="metadata">
                <span data-tracker-item-media>${ item.media }</span>
                <span data-tracker-item-date>${ item.date }</span>
                <span data-tracker-item-author>${ item.author }</span>
            </p>
        </header>
        <p data-tracker-item-note>
            ${ item.note }
        </p>
    </article>
    `);
}

const content = `
<section data-tracker>
    ${ output.join('') }
</section>
`
writeFileSync('./tools/tracker-data.html', content, 'utf-8');

