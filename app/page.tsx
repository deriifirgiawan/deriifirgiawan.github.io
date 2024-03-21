import { App } from "@/core";
import { Data } from "@/data";

const Home = () => (
	<main className="w-screen h-screen">
		<section className="container-content">
			<App.Header />
			<App.About data={Data} />
			<App.DownloadCv />
			<App.SectionContent data={Data} title="Skills" typeContent="SKILLS" />
			<App.SectionContent
				data={Data}
				title="Recent Activity"
				typeContent="RECENT_ACTIVITY"
			/>
			<App.SectionContent
				data={Data}
				title="Work Experiences"
				typeContent="WORK_EXPERIENCE"
			/>

			<div className="pb-12">
				<App.SectionContent
					data={Data}
					title="Portfolio"
					typeContent="PORTFOLIO"
				/>
			</div>
			<App.Footer />
		</section>
	</main>
);

export default Home;
