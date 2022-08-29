<script>
  import { v4 as uuidv4 } from 'uuid';
  import pollsStore from '../stores/PollStore';
  import { createEventDispatcher } from 'svelte';
  import Button from './common/Button.svelte';

  const disptach = createEventDispatcher();

  let fields = { question: '', answerA: '', answerB: '' };
  let errors = { question: '', answerA: '', answerB: '' };
  // let valid = false;
  const submitHandler = () => {
    let valid = true;
    if (fields.question.trim().length < 5) {
      valid = false;
      errors.question = 'Question must be at least 5 characters long';
    } else {
      errors.question = '';
    }
    if (fields.answerA.trim().length < 1) {
      valid = false;
      errors.answerA = 'Answer A cannot be empty';
    } else {
      errors.answerA = '';
    }
    if (fields.answerB.trim().length < 1) {
      valid = false;
      errors.answerB = 'Answer B cannot be empty';
    } else {
      errors.answerB = '';
    }
    if (valid) {
      const poll = { ...fields, votesA: 0, votesB: 0, id: uuidv4() };
      $pollsStore = [poll, ...$pollsStore];
      disptach('add')
      fields.question = '';
      fields.answerA = '';
      fields.answerB = '';
    }
  };
</script>

<form class="w-[400px] mx-auto text-center" on:submit|preventDefault={submitHandler}>
  <div class="form-field">
    <label class="my-[10px] mx-auto" for="question">Poll Question:</label>
    <input
      class="w-full rounded-md border-2 p-1"
      type="text"
      id="question"
      bind:value={fields.question}
    />
    <div class="error">{errors.question}</div>
  </div>
  <div class="form-field">
    <label class="my-[10px] mx-auto" for="answer-a">Answer A:</label>
    <input
      class="w-full rounded-md border-2 p-1"
      type="text"
      id="answer-a"
      bind:value={fields.answerA}
    />
    <div class="error">{errors.answerA}</div>
  </div>
  <div class="form-field">
    <label class="my-[10px] mx-auto" for="answer-b">Answer B:</label>
    <input
      class="w-full rounded-md border-2 p-1"
      type="text"
      id="answer-b"
      bind:value={fields.answerB}
    />
    <div class="error">{errors.answerB}</div>
  </div>
  <Button type="primary" flat={true} inverse={true}>Add Poll</Button>
</form>
