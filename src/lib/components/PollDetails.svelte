<script>
  import { tweened } from 'svelte/motion';
  import pollsStore from '../stores/PollStore';
  import Button from './common/Button.svelte';
  import Card from './common/Card.svelte';
  export let poll;

  $: totalVotes = poll.votesA + poll.votesB;
  $: percentA = Math.floor((100 / totalVotes) * poll.votesA) || 0;
  $: percentB = Math.floor((100 / totalVotes) * poll.votesB) || 0;

  // tweened percentages
  const tweenedA = tweened(0);
  const tweenedB = tweened(0);
  $: tweenedA.set(percentA);
  $: tweenedB.set(percentB);

  const voteHandler = (option, id) => () => {
    let copiedPolls = [...$pollsStore];
    let upVotedPoll = copiedPolls.find((poll) => poll.id === id);

    if (option === 'a') {
      upVotedPoll.votesA++;
    }
    if (option === 'b') {
      upVotedPoll.votesB++;
    }

    $pollsStore = copiedPolls;
  };

  const deleteHandler = (id) => () => {
    $pollsStore = $pollsStore.filter((currentPoll) => currentPoll.id != id);
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
      <div
        class="percent border-l-4 border-green-500 bg-green-500/20"
        style="width: {$tweenedA}%;"
      />
      <span class="inline-block py-[10px] px-5">{poll.answerA} ({poll.votesA})</span>
    </div>
    <div
      class="bg-neutral-100 cursor-pointer my-[10px] mx-auto relative hover:opacity-60"
      on:click={voteHandler('b', poll.id)}
    >
      <div class="percent border-l-4 border-red-500 bg-red-500/20" style="width: {$tweenedB}%;" />
      <span class="inline-block py-[10px] px-5">{poll.answerB} ({poll.votesB})</span>
    </div>
    <div class="mt-[30px] text-center">
      <Button flat={false} on:click={deleteHandler(poll.id)}>Delete</Button>
    </div>
  </div>
</Card>
