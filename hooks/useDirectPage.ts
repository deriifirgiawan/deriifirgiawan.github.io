export const useDirectPage = () => {
	const redirect = (path: string) => {
		return window.open(path, "_blank", "noopener,noreferrer")?.focus();
	};

	const redirectToEmail = () => {
		const emailAddress = "mailto:derifirgiawan025@gmail.com";
		const subject = "Create Web / Mobile Apps";
		const body = "Hello, i want to create Web / Mobile Apps";

		var mailtoUrl =
			"mailto:" +
			encodeURIComponent(emailAddress) +
			"?subject=" +
			encodeURIComponent(subject) +
			"&body=" +
			encodeURIComponent(body);

		// Redirect to the email client
		return (window.location.href = mailtoUrl);
	};

	return {
		redirect,
		redirectToEmail,
	};
};
