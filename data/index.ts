import { IData } from "./data.interface";

// Social
import Youtube from "@/public/socials/youtube.svg";
import Medium from "@/public/socials/medium.svg";
import Linkedin from "@/public/socials/linkedin.svg";

// Recent Activity
import Activity1 from "@/public/recentActivity/1.png";
import Activity2 from "@/public/recentActivity/2.webp";
import Activity3 from "@/public/recentActivity/3.jpg";

// Portfolio
import Fitcells from "@/public/porfolio/fitcells.png";
import Gelora from "@/public/porfolio/gelora.png";
import Inatti from "@/public/porfolio/inatti.png";
import MyDigiglearn from "@/public/porfolio/my-digilearn.png";
import Tuut from "@/public/porfolio/tuut.png";
import Umkm from "@/public/porfolio/umkm.png";

// Skills
import HtmlIcon from "@/public/skills/html.svg";
import CssIcon from "@/public/skills/css.svg";
import JsIcon from "@/public/skills/js.svg";
import TsIcon from "@/public/skills/ts.svg";
import ReactIcon from "@/public/skills/react.svg";
import FlutterIcon from "@/public/skills/flutter.svg";
import NestIcon from "@/public/skills/nest.svg";
import FigmaIcon from "@/public/skills/figma.svg";
import PostgreIcon from "@/public/skills/pg.svg";
import KotlinIcon from "@/public/skills/kotlin.svg";
import AndroidIcon from "@/public/skills/android.svg";
import MongoDbIcon from "@/public/skills/mongodb.svg";

export const Data: IData = {
	about: {
		title: "About Me",
		description:
			"A man who likes technology, especially mobile or website development. He likes photography and videography too and rides classic Vespa in his free time.",
	},

	socials: [
		{
			title: "YouTube",
			imageUrl: Youtube,
			directUrl: "https://www.youtube.com/@deriifirgiawan",
		},
		{
			title: "Medium",
			imageUrl: Medium,
			directUrl: "https://medium.com/@derifirgiawan",
		},
		{
			title: "Linkedin",
			imageUrl: Linkedin,
			directUrl: "https://www.linkedin.com/in/deri-firgiawan-b697761a4/",
		},
	],

	recentActivity: [
		{
			title: "Tutorial React Native\nBahasa Indonesia\nBasic Layout",
			imageUrl: Activity1,
			link: "https://youtu.be/TgLutlV1stc?si=Sju915C5n6KL6fPO",
			platform: "YouTube",
		},
		{
			title: "Basic Layout React Native",
			imageUrl: Activity2,
			link: "https://medium.com/@derifirgiawan/basic-layout-react-native-i-07990364cf8a",
			platform: "Medium",
		},
		{
			title: "Power Of Kopi",
			imageUrl: Activity3,
			link: "https://www.youtube.com/watch?v=4CW41aCM1gg&t=9s",
			platform: "YouTube",
		},
	],

	portfolio: [
		{
			title: "Gelora",
			description:
				"The Gelora application is an application for ordering futsal fields online using Android and IOS mobile devices built with React Native",
			imageUrl: Gelora,
			link: "https://play.google.com/store/apps/details?id=com.gelora&hl=id&gl=US&pli=1",
		},
		{
			title: "Tuut",
			description:
				"The Tuut application is an application for ordering online training using Android and iOS mobile devices built with React Native",
			imageUrl: Tuut,
			link: "https://www.tuutapp.com/",
		},
		{
			title: "Fitcells",
			description:
				"The Fitcells application is an application for ordering Gym, Classes online using Android and IOS mobile devices built with React Native",
			imageUrl: Fitcells,
			link: "https://www.fitcells.com/",
		},
		{
			title: "Inatti",
			description:
				"Inatti is a website for making appointments with hospitals for the Covid-19 vaccine",
			imageUrl: Inatti,
			link: "https://www.inatti.id/",
		},
		{
			title: "MyDigilearn",
			description:
				"My Digilearn is Telkom's online learning application which has features for viewing videos, podcasts, webinars and courses",
			imageUrl: MyDigiglearn,
			link: "https://mydigilearn.id/",
		},
		{
			title: "UMKM Bengkalis",
			description:
				"GIS UMKM is a mobile application built using Kotlin which functions to map MSME data spread across an area at a certain distance from each device.",
			imageUrl: Umkm,
			link: undefined,
		},
	],

	experiences: [
		{
			id: 1,
			startDate: "Nov 2021 - Dec 2023",
			name: "Xcidic PTE LTD",
			title: "Software Developer",
			description: "",
		},
		{
			id: 2,
			startDate: "Jun 2021 - Nov 2021",
			name: "PT Sahaware Teknologi Indonesia",
			title: "Front-End Engineer",
			description: "",
		},
	],

	skills: [
		{
			imageUrl: HtmlIcon,
		},
		{
			imageUrl: CssIcon,
		},
		{
			imageUrl: JsIcon,
		},
		{
			imageUrl: TsIcon,
		},
		{
			imageUrl: ReactIcon,
		},
		{
			imageUrl: FlutterIcon,
		},
		{
			imageUrl: NestIcon,
		},
		{
			imageUrl: FigmaIcon,
		},
		{
			imageUrl: PostgreIcon,
		},
		{
			imageUrl: KotlinIcon,
		},
		{
			imageUrl: AndroidIcon,
		},
		{
			imageUrl: MongoDbIcon,
		},
	],
};
