// styled.d.ts
import { StringifyOptions } from "querystring";
import "styled-components";
import { ETextColor } from "../utils/Enums";

declare module "styled-components" {
	export interface DefaultTheme {
		defaultColors: {
			bgWhite: string;
			bgDark: string;
		};
		radius: {
			s: string;
			m: string;
			l: string;
			xl: string;
		};
		spacing: {
			"7xs": string;
			"6xs": string;
			"5xs": string;
			"4xs": string;
			"3xs": string;
			"2xs": string;
			xs: string;
			s: string;
			m: string;
			l: string;
			xl: string;
			"2xl": string;
			"3xl": string;
			"4xl": string;
		};
		fontSize: {
			xs: string;
			s: string;
			m: string;
			l: string;
			ml: string;
			xl: string;
		}
		colors: {
			typo: string;
			typoButton: string;
			lightGray: string;
			primary: string;
			secondary: string;
			gray: string;
			bg: string;
			bgTransparent: string;
			accent: string;
			negative: string;
			deepBlue: string;
			lightBlue: string;
			textBlue: string;
			green: string;
			bgGreen: string;
			orange: string;
		};
	}
}
