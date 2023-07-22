import React from "react";
import styled from "styled-components";
import { EFlex, EMediaQuery } from "../../utils/Enums";
import { isMedia } from "../../utils/functions";

interface IFlex {
  children: React.ReactNode;
  fullwidth?: boolean;
  fullheight?: boolean;

  direction?: EFlex.row | EFlex.rowReverse | EFlex.column | EFlex.columnReverse;
  horizontal?: EFlex.start | EFlex.end | EFlex.between | EFlex.around | EFlex.center;
  vertical?: EFlex.start | EFlex.end | EFlex.between | EFlex.around | EFlex.center;

  smdirection?: EFlex.row | EFlex.rowReverse | EFlex.column | EFlex.columnReverse;
  mddirection?: EFlex.row | EFlex.rowReverse | EFlex.column | EFlex.columnReverse;
  lgdirection?: EFlex.row | EFlex.rowReverse | EFlex.column | EFlex.columnReverse;
  xlDirection?: EFlex.row | EFlex.rowReverse | EFlex.column | EFlex.columnReverse;

  smHorizontal?: EFlex.start | EFlex.end | EFlex.between | EFlex.around | EFlex.center;
  mdHorizontal?: EFlex.start | EFlex.end | EFlex.between | EFlex.around | EFlex.center;
  lgHorizontal?: EFlex.start | EFlex.end | EFlex.between | EFlex.around | EFlex.center;
  xlHorizontal?: EFlex.start | EFlex.end | EFlex.between | EFlex.around | EFlex.center;

  smVertical?: EFlex.start | EFlex.end | EFlex.between | EFlex.around | EFlex.center;
  mdVertical?: EFlex.start | EFlex.end | EFlex.between | EFlex.around | EFlex.center;
  lgVertical?: EFlex.start | EFlex.end | EFlex.between | EFlex.around | EFlex.center;
  xlVertical?: EFlex.start | EFlex.end | EFlex.between | EFlex.around | EFlex.center;

  style?: string;
  className?: string;
}

const StyledFlex = styled.div<IFlex>`
	display: flex;


	${(p) => (p.fullwidth ? `width: 100%;` : "")}
	${(p) => (p.fullheight ? `height: 100%;` : "")}
	${(p) => {
    return `
		${p.direction ? `flex-direction: ${p.direction};` : ""}
		${p.horizontal ? `justify-content: ${p.horizontal};` : ""}
		${p.vertical ? `align-items: ${p.vertical};` : ""}

		${p.smdirection || p.smHorizontal || p.smVertical
        ? isMedia(
          EMediaQuery.sm,
          `
			${p.smdirection ? `flex-direction: ${p.smdirection};` : ""}
			${p.smHorizontal ? `justify-content: ${p.smHorizontal};` : ""}
			${p.smVertical ? `align-items: ${p.smVertical};` : ""}
		`
        )
        : ""
      }

		${p.mddirection || p.mdHorizontal || p.mdVertical
        ? isMedia(
          EMediaQuery.md,
          `
			${p.mddirection ? `flex-direction: ${p.mddirection};` : ""}
			${p.mdHorizontal ? `justify-content: ${p.mdHorizontal};` : ""}
			${p.mdVertical ? `align-items: ${p.mdVertical};` : ""}
		`
        )
        : ""
      }

		${p.lgdirection || p.lgHorizontal || p.lgVertical
        ? isMedia(
          EMediaQuery.lg,
          `
			${p.lgdirection ? `flex-direction: ${p.lgdirection};` : ""}
			${p.lgHorizontal ? `justify-content: ${p.lgHorizontal};` : ""}
			${p.lgVertical ? `align-items: ${p.lgVertical};` : ""}
		`
        )
        : ""
      }

		${p.xlDirection || p.xlHorizontal || p.xlVertical
        ? isMedia(
          EMediaQuery.xl,
          `
			${p.xlDirection ? `flex-direction: ${p.xlDirection};` : ""}
			${p.xlHorizontal ? `justify-content: ${p.xlHorizontal};` : ""}
			${p.xlVertical ? `align-items: ${p.xlVertical};` : ""}
		`
        )
        : ""
      }

		`;
  }}
`;

const Flex: React.FC<IFlex> = ({
  children,
  fullwidth = true,
  fullheight = true,
  direction = EFlex.row,
  horizontal = EFlex.start,
  vertical = EFlex.start,
  smdirection,
  mddirection,
  lgdirection,
  xlDirection,
  smHorizontal,
  mdHorizontal,
  lgHorizontal,
  xlHorizontal,
  smVertical,
  mdVertical,
  lgVertical,
  xlVertical,
  style,
  className = "",
  ...otherProps
}) => {
  return (
    <StyledFlex
      direction={direction}
      fullwidth={fullwidth}
      fullheight={fullheight}
      horizontal={horizontal}
      vertical={vertical}
      smdirection={smdirection}
      mddirection={mddirection}
      lgdirection={lgdirection}
      xlDirection={xlDirection}
      smHorizontal={smHorizontal}
      mdHorizontal={mdHorizontal}
      lgHorizontal={lgHorizontal}
      xlHorizontal={xlHorizontal}
      smVertical={smVertical}
      mdVertical={mdVertical}
      lgVertical={lgVertical}
      xlVertical={xlVertical}
      style={style}
      className={className}
      {...otherProps}
    >
      {children}
    </StyledFlex>
  );
};

export { Flex };
