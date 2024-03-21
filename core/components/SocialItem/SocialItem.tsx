import Image from "next/image";
import { ISocialItemProps } from ".";

export const SocialItem = (_props: ISocialItemProps) => {
	const { title, imageUrl, onClick } = _props;

	return (
		<div
			onClick={onClick}
			className="flex gap-4 items-center hover:cursor-pointer hover:text-primary hover:font-medium hover:border-b hover:pb-2 ease-in-out transition-all hover:border-primary"
		>
			<Image src={imageUrl} alt={title} />
			<h5 className="text-2xl">{title}</h5>
		</div>
	);
};
