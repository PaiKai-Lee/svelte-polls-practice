<script>
  export let type = 'primary';
  export let flat = false;
  export let inverse = false;
</script>

<button
  class="text-white cursor-pointer rounded-md py-2 px-3 font-bold 
  {flat ? 'shadow-[1px_2px_3px_rgba(0,0,0,2)]' : 'shadow-none'} 
  {type === 'primary' ? 'bg-orange-600 ' : 'bg-emerald-500'} 
  {type === 'secondary' && inverse ? 'text-emerald-500 bg-white border-2 border-emerald-500' : ''}
  {type === 'primary' && inverse ? 'text-orange-600 bg-white border-2 border-orange-600' : ''}
"
>
  <slot />
</button>
