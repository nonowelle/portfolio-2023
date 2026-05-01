<template>
	<div id="app">
		<Hero />
		<Apropos />
		<Skills />
		<Projects />
		<Contact />
	</div>
</template>

<script>
	import Hero from './components/Hero.vue';
	import Apropos from './components/Apropos.vue';
	import Skills from './components/Skills.vue';
	import Projects from './components/Projects.vue';
	import Contact from './components/Contact.vue';
	import sal from 'sal.js';
	export default {
		name: 'App',
		components: {
			Hero,
			Apropos,
			Skills,
			Projects,
			Contact,
		},

		methods: {
			getScrollVar() {
				const htmlElement = document.documentElement;
				const percentageOfScreenHeightScrolled =
					htmlElement.scrollTop / htmlElement.clientHeight;

				htmlElement.style.setProperty(
					'--scroll',
					percentageOfScreenHeightScrolled * 100
				);
			},
		},
		mounted() {
			sal({
				threshold: 0.3,
			});
			window.addEventListener('scroll', this.getScrollVar);
			window.addEventListener('resize', this.getScrollVar);
		},
		beforeDestroy() {
			window.removeEventListener('scroll', this.handleDebouncedScroll);
		},
	};
</script>
