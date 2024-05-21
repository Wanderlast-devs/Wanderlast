<script>
	import '../app.css';
	import firebaseConfig from '../lib/config/firebase.json';
	import { initializeApp } from "firebase/app";
	import { getAnalytics } from "firebase/analytics";
	import { onMount } from 'svelte';
	import { firebase_analytics, firebase_app } from '$lib/store';

	onMount(() => {
		// Init Firebase as singleton to be shared across pages
		if($firebase_app == null) {
			$firebase_app = initializeApp(firebaseConfig);
			$firebase_analytics = getAnalytics($firebase_app);
		}
	})
</script>

<slot></slot>

<style></style>
