import { StaticImageData } from "next/image";

export interface IAbout {
	title: string;
	description: string;
}

export interface ISocials {
	title: string;
	imageUrl: string;
	directUrl: string;
}

export interface IRecentActivity {
	title: string;
	imageUrl: StaticImageData | string;
	link: string;
	platform: string;
}

export interface IPortfolio {
	title: string;
	imageUrl: StaticImageData | string;
	link?: string | undefined;
	description: string;
}

export interface IExperiences {
	id: number;
	startDate: string;
	name: string;
	title: string;
	description: string;
}

export interface ISkills {
	imageUrl: string;
}

export interface IData {
	about: IAbout;
	socials: ISocials[];
	recentActivity: IRecentActivity[];
	portfolio: IPortfolio[];
	experiences: IExperiences[];
	skills: ISkills[];
}
