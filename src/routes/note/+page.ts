import type { PageLoad } from './$types';
import { initLocalStorage } from '$lib/store';

export const load = (async () => {
    // Not sure if this is a good idea to run this on every page load
    initLocalStorage();
    return {};
}) satisfies PageLoad;