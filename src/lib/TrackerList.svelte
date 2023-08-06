<script>
    import LogRecord from "./LogRecord";
    import TrackerItem from "./TrackerItem.svelte";

    /** @type {LogRecord[]} */
    export let logs;
    /** @typedef {'earliest'|'latest'} SortOrder */
    /** @type {SortOrder} */
    let sortOrder = 'earliest';
    /** @type {null | string} */
    let currentFilter = null;

    /** @type {string[]} */
    const mediaTypes = (() => {
        const /** @type {Set<string>} */ set = new Set();
        logs.map(log => set.add(log.media));
        return [...set];
    })();

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

    const createSortHandler = (/** @type {SortOrder} */ order) => {
        return () => {
            // console.log(`clicked ${order}`);
            sortOrder = order;
        }
    };

    const createFilterHandler = (/** @type {string | null} */ filter) => {
        return () => {
            console.log(`clicked ${filter}`);
            currentFilter = filter;
        }
    };

    $: filteredList = currentFilter ? logs.filter(item => item.media === currentFilter) : logs;
    $: sortedList = sortList(filteredList, sortOrder);
</script>

<section>
    <header class="action-panel">
        <p>
            <span>Sort by</span>
            <button class="btn" on:click={createSortHandler('latest')}>Latest</button>
            <button class="btn" on:click={createSortHandler('earliest')}>Earliest</button>
        </p>
        <p>
            <span>Filter by</span>
            <button  class="btn" on:click={createFilterHandler(null)}>Any</button>
            {#each mediaTypes as mediaType}
                <button class="btn" on:click={createFilterHandler(mediaType)}>{mediaType}</button>
            {/each}
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

    .action-panel > p:not(:last-child) {
        margin-bottom: .5rem;
    }
</style>
