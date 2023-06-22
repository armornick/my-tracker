<script>
    import LogRecord from "./LogRecord";
    /** @type {LogRecord}*/
    export let log;
</script>

<article class="tracker-item">
    <h2>{log.name}</h2>
    <p class="text-muted">{log.date.toDateString()}</p>
    <p>{log.note}</p>
</article>

<style>
.tracker-item {
    background-color: var(--tw-neutral-100);
    border: 1px solid var(--tw-neutral-400);
    border-radius: var(--tw-rounded);
    padding: .5rem 1rem;
}

.tracker-item:not(:last-child) {
    margin-block-end: 1rem;
}
</style>