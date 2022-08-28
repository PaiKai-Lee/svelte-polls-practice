<script>
  import PollDetails from './PollDetails.svelte';
  export let polls = [];

  const voteHandler = (e) => {
    const { option, id } = e.detail;

    let copiedPolls = [...polls];
    let upVotedPoll = copiedPolls.find((poll) => poll.id === id);

    if (option === 'a') {
      upVotedPoll.votesA++;
    }
    if (option === 'b') {
      upVotedPoll.votesB++;
    }

    polls = copiedPolls;
  };
</script>

<div class="grid grid-cols-2 gap-5">
  {#each polls as poll (poll.id)}
    <PollDetails {poll} on:vote={voteHandler} />
  {/each}
</div>
