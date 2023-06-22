<script>
    import LogRecord from "./LogRecord";
    /** @type {LogRecord}*/
    export let log;
</script>

<article class="tracker-item">
    <header>
        <h2>
            <a href="{log.url}">
                {log.name}
            </a>
        </h2>
        <p class="text-muted">
            {log.media}
            &nbsp;⁂&nbsp; {log.date.toDateString()}
            {#if log.author}&nbsp;⁂&nbsp; {log.author}{/if}
        </p>
    </header>
    <p>{log.note}</p>
</article>

<style>
.tracker-item {
    background-color: var(--tw-neutral-100);
    border: 1px solid var(--tw-neutral-400);
    border-radius: var(--tw-rounded);
    padding: .5rem 1rem;
    position: relative;
}

.tracker-item:not(:last-child) {
    margin-block-end: 1rem;
}

header {
    border-block-end: 1px solid var(--tw-neutral-300);
    margin-block-end: .75rem;
}

@media (prefers-color-scheme: dark) {

    .tracker-item {
        background-color: var(--tw-neutral-700);
    }

}
</style>