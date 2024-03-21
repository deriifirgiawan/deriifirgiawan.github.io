"use client";
import Hero from "@/public/image_user.svg";
import Image from "next/image";
import { SocialItem } from "@/core";
import { IData } from "@/data/data.interface";
import { useDirectPage } from "@/hooks/useDirectPage";

interface AboutProps {
	data: IData;
}

export const About = (_props: AboutProps) => {
	const { data } = _props;
	const { redirect } = useDirectPage();
	return (
		<section
			aria-label="About"
			className="mt-12 flex md:flex-row lg:flex-row flex-col gap-[32px] md:justify-start md:items-start lg:items-start lg:justify-start items-center justify-center"
		>
			<Image src={Hero} alt="photo-profile" />
			<section className="md:flex lg:flex block flex-col justify-between md:min-h-0 lg:min-h-[278px] min-h-0">
				<div className="md:text-start lg:text-start text-center">
					<h1 className="lg:text-5xl md:text-5xl text-4xl font-bold">
						{data.about.title}
					</h1>
					<p className="lg:text-2xl md:text-2xl text-lg font-normal mt-4">
						{data.about.description}
					</p>
				</div>

				<div className="md:mt-6 lg:mt-0 mt-6 flex flex-wrap md:gap-10 lg:gap-10 gap-6 lg:justify-start md:justify-start justify-center">
					{data.socials.map((value) => (
						<SocialItem
							key={value.title}
							{...value}
							onClick={() => redirect(value.directUrl)}
						/>
					))}
				</div>
			</section>
		</section>
	);
};
