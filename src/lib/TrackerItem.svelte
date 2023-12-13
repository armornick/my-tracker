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
