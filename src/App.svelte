<script>
  import LogRecord from "./lib/LogRecord";
  import TrackerList from "./lib/TrackerList.svelte";

  /** @type {LogRecord[]} */
  export let logs;
</script>

<main>
  <h1 class="site-title">My Tracker</h1>
  <TrackerList {logs} />
</main>

