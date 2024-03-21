import { IData } from "@/data/data.interface";
import { TypeContent } from "./SectionContent.type";

export interface ISectionContentProps {
	data: IData;
	title: string;
	typeContent: TypeContent;
}
