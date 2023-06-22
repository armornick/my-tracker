<script>
  import LogRecord from "./lib/LogRecord";

  let errorMessage = null;

  /** @returns {Promise<LogRecord[]>} */
  const fetchLogs = async () => {
    try {
      const response = await fetch('/misc-log.json');
      const data = await response.json();
      return data.map(item => new LogRecord(item));
    } catch (error) {
      console.error(error);
      errorMessage = error.msg || error;
      return [];
    }
  };

  let logsP = fetchLogs();

</script>

<main>
  <h1 class="site-title">Tracker</h1>

  {#if errorMessage}
    <p>
      {errorMessage}
    </p>
  {/if}
  {#await logsP}
    <p>
      Loading data.
    </p>
  {:then logs} 
    {#each logs as log}
      <article class="tracker-item">
        <h2>{log.name}</h2>
        <p class="text-muted">{log.date.toDateString()}</p>
        <p>{log.note}</p>
      </article>
    {/each}
  {/await}
</main>

<style>
  
  main {
    max-width: 45rem;
    margin-inline: auto;
  }

  .site-title {
    text-align: center;
    margin-block-end: 1rem;
  }

  .tracker-item {
    background-color: var(--tw-neutral-100);
    border: 1px solid var(--tw-neutral-400);
    border-radius: var(--tw-rounded);
    padding: .5rem 1rem;
  }

  .tracker-item + .tracker-item {
    margin-block-start: 1rem;
  }

</style>
