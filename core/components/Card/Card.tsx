import Image from "next/image";
import { ICardProps } from "./Card.interface";

export const Card = (_props: ICardProps) => {
	const {
		title,
		imageUrl,
		onClick,
		platform,
		description,
		isHiddenButton = false,
	} = _props;
	return (
		<div className="w-full flex flex-col md:flex-row lg:flex-row gap-8">
			<Image
				src={imageUrl}
				alt={title}
				className="w-full md:w-[294px] lg:w-[294px] h-[181px rounded-tr-[32px] rounded-bl-[32px] bg-cover"
			/>
			<div className="w-[342px] flex flex-col justify-between">
				<div>
					<h2 className="font-bold text-[32px]">{title}</h2>
					<p className="text-base">
						{description && description.length >= 142
							? `${description.substring(0, 142)}...`
							: description}
					</p>
				</div>

				{!isHiddenButton && (
					<button
						onClick={onClick}
						className="mt-6 md:mt-0 lg:mt-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-[200px] flex items-center justify-center gap-2 bg-white px-[1em] py-[calc(0.5em - 1px)] text-black"
					>
						Go to {platform ?? title}
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
								/>
							</svg>
						</span>
					</button>
				)}
			</div>
		</div>
	);
};
