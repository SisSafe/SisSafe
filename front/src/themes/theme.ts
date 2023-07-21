import { DefaultTheme } from "styled-components";

export const defaultTheme = {
	defaultColors: {
		bgDark: "#161E25",
		bgWhite: "#FFF"
	},
	radius: {
		s: "4px",
		m: "6px",
		l: "7px",
		xl: "12px",
	},
	spacing: {
		"7xs": "1px",
		"6xs": "2px",
		"5xs": "4px",
		"4xs": "8px",
		"3xs": "10px",
		"2xs": "16px",
		xs: "20px",
		s: "24px",
		m: "30px",
		l: "40px",
		xl: "48px",
		"2xl": "64px",
		"3xl": "80px",
		"4xl": "100px"
	},
	fontSize: {
		xs: "12px",
		s: "14px",
		m: "16px",
		l: "20px",
		ml: "24px",
		xl: "36px"
	}
};

export const darkTheme: DefaultTheme = {
	...defaultTheme,
	colors: {
		typo: "#E7EAED",
		typoButton: "#FFF",
		lightGray: "#EBEBF5",
		bg: "#161E25",
		bgTransparent: "#FCFCFF",
		accent: "#7AD1BF",
		negative: "#E35656",
		primary: "#8579FA",
		secondary: "#B9C2E2",
		gray: "#80829E",
		deepBlue: "#1F1F3F",
		lightBlue: "#E0E8F0",
		textBlue: "#C4D6FF",
		green: "#6FCF97",
		bgGreen: "#95FFC1",
		orange: "#F2994A"
	}
};

export const lightTheme: DefaultTheme = {
	...defaultTheme,
	colors: {
		typo: "#000",
		typoButton: "#FFF",
		lightGray: "#EBEBF5",
		bg: "#FAFAFF",
		bgTransparent: "#F2F7FD",
		accent: "#43A591",
		negative: "#E35656",
		primary: "#8579FA",
		secondary: "#B9C2E2",
		gray: "#80829E",
		deepBlue: "#1F1F3F",
		lightBlue: "#E0E8F0",
		textBlue: "#C4D6FF",
		green: "#6FCF97",
		bgGreen: "#95FFC1",
		orange: "#F2994A"
	}
};
