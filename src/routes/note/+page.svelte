<script lang="ts">
	import { addNote } from "$lib/store";
	import { toastStore } from "@skeletonlabs/skeleton";
	import NoteList from "./NoteList.svelte";


const submit = async (event: Event) => {
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);

    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const content = formData.get('content') as string;
    const time = formData.get('time') as string;
    const date = formData.get('date') as string;

    const timestamp = new Date(`${date}T${time}`).getTime();
    // create uuid4
    const id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });

    addNote({
        id,
        title,
        description,
        content,
        timestamp
    })

    toastStore.trigger({
        message: 'Note added',
        timeout: 3000,
        background: 'success'
    });

    formElement.reset();
}
</script>

<form on:submit|preventDefault={submit} method="POST">
    <label class="label" for="title">
        <span>Title</span>
        <input class="input" type="text" name="title" id="title" />
    </label>
    <label class="label" for="description">
        <span>Description</span>
        <textarea class="textarea" rows="4" name="description" id="description" />
    </label>
    <label class="label" for="content">
        <span>Content</span>
        <textarea class="textarea" rows="4" name="content" id="content" />
    </label>
    <div class="flex">
        <label class="label flex-1" for="time">
            <span>Time</span>
            <input class="input" type="time" name="time" id="time" />
        </label>
        <label class="label flex-1" for="date">
            <span>Date</span>
            <input class="input" type="date" name="date" id="date" />
        </label>
    </div>
    <button type="submit" class="btn variant-filled">Submit</button>

</form>
<h2>List of Notes</h2>
<NoteList />