import { ReactNode } from "react";
import { TagVariants } from "./Typography.type";

export interface ITypography {
	variant?: TagVariants;
	children: ReactNode;
	className?: string;
	onClick?: () => void;
}
