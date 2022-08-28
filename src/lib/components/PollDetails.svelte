<script>
  import { createEventDispatcher } from 'svelte';
  import Card from './common/Card.svelte';
  export let poll;
  const dispatch = createEventDispatcher();

  $: totalVotes = poll.votesA + poll.votesB;
  $: percentA = Math.floor((100 / totalVotes) * poll.votesA);
  $: percentB = Math.floor((100 / totalVotes) * poll.votesB);

  const voteHandler = (option, id) => () => {
    dispatch('vote', { option, id });
  };
</script>

<Card>
  <div>
    <h3 class="text-2xl mx-auto text-gray-600">{poll.question}</h3>
    <p class="mt-[6px] mb-[30px] text-[14px] text-gray-400">Total votes: {totalVotes}</p>
    <div
      class="bg-neutral-100 cursor-pointer my-[10px] mx-auto relative hover:opacity-60"
      on:click={voteHandler('a', poll.id)}
    >
      <div class="percent border-l-4 border-green-500 bg-green-500/20" style="width: {percentA}%;" />
      <span class="inline-block py-[10px] px-5">{poll.answerA} ({poll.votesA})</span>
    </div>
    <div
      class="bg-neutral-100 cursor-pointer my-[10px] mx-auto relative hover:opacity-60"
      on:click={voteHandler('b', poll.id)}
    >
      <div class="percent border-l-4 border-red-500 bg-red-500/20" style="width: {percentB}%;" />
      <span class="inline-block py-[10px] px-5">{poll.answerB} ({poll.votesB})</span>
    </div>
  </div>
</Card>
