import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ICardProps {
	title: string;
	imageUrl: StaticImport | string;
	onClick?: () => void;
	platform?: string;
	description?: string;
	isHiddenButton?: boolean;
}
