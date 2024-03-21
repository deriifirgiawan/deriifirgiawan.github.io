"use client";
import { useDownload } from "@/hooks";
import { useDirectPage } from "@/hooks/useDirectPage";

export const DownloadCv = () => {
	const { redirectToEmail } = useDirectPage();
	const { onDownloadFile } = useDownload();
	return (
		<section
			aria-label="download-resume"
			className="lg:mt-[72px] md:mt-[72px] mt-12 flex lg:flex-row md:flex-row flex-col justify-center items-center md:gap-6 lg:gap-6 gap-0"
		>
			<button
				onClick={() => onDownloadFile()}
				className="hover:ring-4 hover:ring-primary mt-6 md:mt-0 lg:mt-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-xl font-semibold md:w-[800px] lg:w-[800px] w-full flex items-center justify-center gap-2 bg-primary  px-[1em] py-2 text-black"
			>
				Download Resume{" "}
				<span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
						/>
					</svg>
				</span>
			</button>
			<button
				onClick={() => redirectToEmail()}
				className="hover:ring-4 hover:ring-primary mt-6 md:mt-0 lg:mt-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-xl font-semibold md:w-[800px] lg:w-[800px] w-full flex items-center justify-center gap-2 bg-primary  px-[1em] py-2 text-black"
			>
				Contact Me{" "}
				<span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
						/>
					</svg>
				</span>
			</button>
		</section>
	);
};
