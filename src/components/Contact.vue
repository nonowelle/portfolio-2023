<template>
	<section id="contact">
		<div class="contact">
			<div class="wrapper">
				<h2
					class="title-contact"
					data-sal="slide-up"
					data-sal-delay="200"
					data-sal-duration="800"
				>
					Contact
				</h2>
				<p
					data-sal="slide-up"
					data-sal-delay="200"
					data-sal-duration="800"
				>
					Don't hesitate to reach out for any question!
				</p>
				<a
					data-sal="slide-up"
					data-sal-delay="200"
					data-sal-duration="800"
					class="contact-link"
					href="mailto:menoel888@gmail.com"
				>
					menoel888@gmail.com</a
				>
				<div
					class="res"
					data-sal="slide-up"
					data-sal-delay="200"
					data-sal-duration="800"
				>
					<a
						target=" _blank"
						href=" mailto:menoel888@gmail.com"
						><i class="far fa-envelope"></i
					></a>
					<a
						target="_blank"
						href="https://www.linkedin.com/in/marie-ève-noël
                  "
						><i class="fab fa-linkedin"></i
					></a>
					<a
						href="https://github.com/nonowelle"
						target="_blank"
						><i class="fab fa-github"></i
					></a>
				</div>
				<p
					data-sal="slide-up"
					data-sal-delay="200"
					data-sal-duration="800"
					id="copyright"
					class=""
				>
					&copy; Marie-Ève Noël 2023
				</p>
				<a
					id="button"
					ref="button"
					class="button"
					v-smooth-scroll
					href="#app"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
					>
						<path
							d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
						/></svg
				></a>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'Contact',
	};
</script>
