<script>
    import LogRecord from "./LogRecord";
    import TrackerItem from "./TrackerItem.svelte";

    /** @type {LogRecord[]} */
    export let logs;
    /** @typedef {'earliest'|'latest'} SortOrder */
    /** @type {SortOrder} */
    let sortOrder = 'earliest';

    /**
     * @param {LogRecord[]} list
     * @param {SortOrder} sortOrder
     */
    const sortList = (list, sortOrder) => {
        // console.log(`sorting list by ${sortOrder}`);
        if (sortOrder === 'latest') {
            return [...list].sort((a, b) => (b.date.getTime() - a.date.getTime()));
        }
        else {
            return [...list].sort((a, b) => (a.date.getTime() - b.date.getTime()));
        }
    }

    const generateClickHandler = (/** @type {SortOrder} */ order) => {
        return () => {
            // console.log(`clicked ${order}`);
            sortOrder = order;
        }
    };

    $: sortedList = sortList(logs, sortOrder);
</script>

<section>
    <header class="action-panel">
        <p>
            <span>Sort by</span>
            <button class="btn" on:click={generateClickHandler('latest')}>Latest</button>
            <button class="btn" on:click={generateClickHandler('earliest')}>Earliest</button>
        </p>
    </header>

    {#each sortedList as log}
      <TrackerItem {log} />
    {/each}
</section>

<style>
    .action-panel {
        background-color: var(--tw-neutral-100);
        border: 1px solid var(--tw-neutral-400);
        border-radius: var(--tw-rounded);
        padding: .5rem 1rem;
        margin-block-end: 1rem;
    }
</style>
