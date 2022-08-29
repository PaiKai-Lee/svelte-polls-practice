<script>
  import { fade, scale } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import pollsStore from '../stores/PollStore';
  import PollDetails from './PollDetails.svelte';
</script>

<div class="grid grid-cols-2 gap-5">
  {#each $pollsStore as poll (poll.id)}
    <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
      <PollDetails {poll} />
    </div>
  {/each}
</div>
