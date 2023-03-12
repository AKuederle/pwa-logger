<script lang="ts">
	import { notesStore } from '$lib/store';
</script>

<div class="table-container">
	<!-- Native Table Element -->
	<table class="table table-hover">
		<thead>
			<tr>
				<th>ID</th>
				<th>Title</th>
				<th>Description</th>
				<th>content</th>
				<th>Datetime</th>
			</tr>
		</thead>
		<tbody>
			{#each $notesStore as note}
				<tr>
					<td>{note.id}</td>
					<td>{note.title}</td>
					<td>{note.description}</td>
					<td>{note.content}</td>
					<td>{note.timestamp}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
