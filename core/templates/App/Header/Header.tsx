export const Header = () => (
	<header>
		<h1
			aria-label="Hi there"
			className="font-bold text-primary lg:text-5xl md:text-5xl text-4xl"
		>
			Hi <span className="text-white">there 👋🏻</span>
		</h1>
		<h4
			className="lg:text-4xl md:text-4xl text-3xl mt-4"
			aria-label="I’m Deri a Software Engineer"
		>
			I’m <span className="text-primary font-bold">Deri</span> a{" "}
			<span className="text-primary font-bold">Software Engineer 👨🏻‍💻</span>
		</h4>
	</header>
);
