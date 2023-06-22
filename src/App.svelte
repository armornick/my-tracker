<script>
  import LogRecord from "./lib/LogRecord";
  import TrackerList from "./lib/TrackerList.svelte";

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
  <h1 class="site-title">My Tracker</h1>

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
    <TrackerList {logs} />
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
