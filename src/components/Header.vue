<template>
	<header class="header">
		<div class="wrapper">
			<div
				class="menu-icon"
				@click="openMobileNav"
				ref="menuIcon"
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<nav
				class="navbar"
				ref="navbar"
			>
				<ul class="menu">
					<li
						class="navli"
						@click="openMobileNav"
					>
						<a
							class="nav"
							id="liapropos"
							v-smooth-scroll
							href="#apropos"
							>About</a
						>
					</li>
					<li
						class="navli"
						@click="openMobileNav"
					>
						<a
							class="nav"
							id="liprojets"
							v-smooth-scroll
							href="#projets"
							>Projects</a
						>
					</li>
					<li
						class="navli"
						@click="openMobileNav"
					>
						<a
							class="nav"
							id="licontact"
							v-smooth-scroll
							href="#contact"
							>Contact</a
						>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script>
	export default {
		name: 'Header',
		props: {
			msg: String,
		},
		methods: {
			openMobileNav() {
				console.log('opening');
				if (!this.$refs.navbar.classList.contains('expand')) {
					this.$refs.navbar.classList.add('expand');
					this.$refs.menuIcon.classList.add('span-animate');
				} else {
					this.$refs.navbar.classList.remove('expand');
					this.$refs.menuIcon.classList.remove('span-animate');
				}
			},
		},
	};
</script>
