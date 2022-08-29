<script>
  import Header from './lib/components/Header.svelte';
  import Footer from './lib/components/Footer.svelte';
  import PollList from './lib/components/PollList.svelte';
  import CreatePollFrom from './lib/components/CreatePollFrom.svelte';
  import Tabs from './lib/components/common/Tabs.svelte';
  //tabs
  let items = ['Current Polls', 'Add New Poll'];
  let activeItem = 'Current Polls';
  const tabChange = (e) => {
    activeItem = e.detail;
  };

  const addHandler = () => {
    activeItem = 'Current Polls';
  };
</script>

<!-- head -->
<svelte:head>
  <title>Polls Kai</title>
</svelte:head>

<Header />
<main class="mx-auto my-10 max-w-5xl">
  <Tabs {items} {activeItem} on:tabChange={tabChange} />
  {#if activeItem === 'Current Polls'}
    <PollList />
  {:else if activeItem === 'Add New Poll'}
    <CreatePollFrom on:add={addHandler} />
  {/if}
</main>
<Footer />
