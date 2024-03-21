"use client";
import { ISectionContentProps } from "./SectionContent.interface";
import { useContent } from "./hooks";

export const SectionContent = (_props: ISectionContentProps) => {
	const { data, title, typeContent } = _props;
	const {
		titleColor,
		renderContent,
		listRenderData,
		seeMore,
		handleOnSeemore,
	} = useContent(typeContent, data);

	return (
		<section aria-label={title} className="lg:mt-[124px] md:mt-[124px] mt-12">
			{typeContent !== "SKILLS" && (
				<h2 className={`text-4xl font-bold ${titleColor}`}>{title}</h2>
			)}

			<section aria-label="List Content" className="mt-12">
				{renderContent()}
			</section>
			{typeContent !== "SKILLS" && listRenderData.length > 3 && (
				<div className="flex items-center justify-center">
					<button
						onClick={() => handleOnSeemore()}
						className="mt-6 md:mt-0 lg:mt-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-lg w-[800px] flex items-center justify-center gap-2 bg-white px-[1em] py-[calc(0.5em - 1px)] text-black"
					>
						See {seeMore ? "Less" : "More"}
					</button>
				</div>
			)}
		</section>
	);
};
