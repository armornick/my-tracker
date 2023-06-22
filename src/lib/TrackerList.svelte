<script>
    import LogRecord from "./LogRecord";
    import TrackerItem from "./TrackerItem.svelte";

    /** @type {LogRecord[]} */
    export let logs;
</script>

<section>
    {#each logs as log}
      <TrackerItem {log} />
    {/each}
</section>
