import { memo } from "react";
import { ITypography } from "./Typography.interface";

const DefaultTypography = (_props: ITypography) => {
	const { variant, className, children } = _props;
	const tagVariant = variant?.split("typography--")[1];

	const $style = () => {
		const $baseStyle = variant;
		if (className) {
			return `${className} ${$baseStyle}`;
		}
		return $baseStyle;
	};

	const Component = tagVariant as keyof JSX.IntrinsicElements;

	const WrappComponent = () => {
		switch (variant) {
			case "typography--dis-lg":
				return <h1 className={`${$style()}`}>{children}</h1>;
			case "typography--dis-sm":
				return <h2 className={$style()}>{children}</h2>;
			case "typography--p-base":
				return <p className={$style()}>{children}</p>;
			case "typography--p-lg":
				return <p className={$style()}>{children}</p>;
			case "typography--p-sm":
				return <p className={$style()}>{children}</p>;
			case "typography--p-xl":
				return <p className={$style()}>{children}</p>;
			default:
				return <Component className={$style()}>{children}</Component>;
		}
	};

	return <WrappComponent />;
};

export const Typography = memo(
	DefaultTypography,
	(prevProps, nextProps) =>
		prevProps.variant === nextProps.variant ||
		prevProps.className !== nextProps.className
);
