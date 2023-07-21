import { ESize } from "./Enums";
import { EMediaQuery } from "./Enums";
// check media query
export const isMedia = (mq: EMediaQuery, children: string, minOrMax = "min") => {
	return `@media only screen and (${minOrMax}-width: ${mq}) {
		${children}
	}`;
};

// add transition
export const addTransition = (target: string = "all", duration: number = 0.4, timingFunction: string = "ease") => {
	return `
		@media screen and (prefers-reduced-motion: no-preference) {
			transition: ${target} ${duration}s ${timingFunction};
		}
	`;
};


// set font size for normal text
export const setFontSize = (size: ESize) => {
	return `
	${size === ESize.s
			? `
            font-size: 14px;
            line-height: 14px;
            `
			: size === ESize.m
				? `
            font-size: 16px;
            line-height: 16px;
            `
				: size === ESize.l ?
					`
            font-size: 18px;
            line-height: 18px;
            `
					: size === ESize.xs ?
						`
            font-size: 12px;
            line-height: 12px;

            `
						: size === ESize.mm ?
							`
            font-size: 20px;
            line-height: 20px;
            `
							: size === ESize.ml ?
								`
            font-size: 24px;
            line-height: 24px;
            `
								: size === ESize.xxl ?
									`
            font-size: 46px;
            line-height: 46px;
            `
									: size === ESize.xl &&
									`
            font-size: 36px;
            line-height:36px;
            `

		}

	@media only screen and (max-width: ${EMediaQuery.sm}) {
		${size === ESize.s
			? `
            font-size: 0.75rem;
            line-height: 1rem;
            `
			: size === ESize.m
				? `
            font-size: 0.93rem;
            line-height: 1.22rem;
            `
				: size === ESize.l ?
					`
            font-size: 1.125rem;
            line-height: 1.46rem;
            `
					: size === ESize.xl &&
					`
            font-size: 1.3rem;
            line-height: 1.46rem;
            `
		}
	}
	`
}

export function formatString(str: string): string {
	if (!str) return '';
	const firstPart = str.slice(0, 8);
	const latPart = str.slice(-2);

	return `${firstPart}...${latPart}`
}
