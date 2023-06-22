<script>
  import LogRecord from "./lib/LogRecord";
  import TrackerItem from "./lib/TrackerItem.svelte";

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
      <TrackerItem {log} />
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

</style>
