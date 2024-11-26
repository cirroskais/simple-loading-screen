<script>
	export let member;
</script>

<div class="flex w-[4.5rem] flex-col">
	<img
		class="h-[4.5rem] w-[4.5rem] rounded-full border-[3px]"
		style="border-color: {member.color};"
		src={member.avatar}
		alt=""
	/>
	<p class="overflow-clip pt-0.5 text-center text-xs font-bold" style="color: {member.color};">
		{member.name}
	</p>
</div>
