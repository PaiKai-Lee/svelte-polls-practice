import { writable } from 'svelte/store';

const pollsStore = writable([
  {
    id: 1,
    question: 'Python or JavaScript?',
    answerA: 'Python',
    answerB: 'JavaScript',
    votesA: 10,
    votesB: 13,
  },
]);

export default pollsStore;
