<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  export let items;
  export let activeItem;
</script>

<div class="mb-10">
  <ul class="flex justify-center p-0 gap-4">
    {#each items as item}
      <li
        class="text-[18px] text-gray-400 cursor-pointer"
        on:click={() => {
          dispatch('tabChange', item);
        }}
      >
        <div class={item === activeItem && 'text-orange-600 border-b-2 border-orange-600 pb-2'}>
          {item}
        </div>
      </li>
    {/each}
  </ul>
</div>
