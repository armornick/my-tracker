<script>

  let errorMessage = null;

  const fetchLogs = async () => {
    try {
      const response = await fetch('/misc-log.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      errorMessage = error.msg || error;
      return [];
    }
  };

  let logsP = fetchLogs();

</script>

<main>
  <h1>Tracker</h1>
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
      <p>{ JSON.stringify(log) }</p>
    {/each}
  {/await}
</main>

<style>
  
  main {
    max-width: 40rem;
    margin-inline: auto;
  }

</style>
