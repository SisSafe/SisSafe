import React from "react";
import styled from "styled-components";
import { EMediaQuery, ESize, EDirection } from "../../utils/Enums";
import { isMedia } from "../../utils/functions";

interface ISpacing {
  size: ESize;
  xs?: EDirection;
  sm?: EDirection;
  md?: EDirection;
  lg?: EDirection;
  xl?: EDirection;
  className?: string;
}

const setRect = (spacing: string, mq: string, index: EMediaQuery) => {
  return isMedia(
    index,
    `
	${mq === EDirection.vertical
      ? `margin: ${spacing} 0;`
      : mq === EDirection.horizontal
        ? `margin: 0 ${spacing};`
        : ""
    }`
  );
};

const StyledSpacing = styled.span<{
  size: ESize;
  xs?: EDirection;
  sm?: EDirection;
  md?: EDirection;
  lg?: EDirection;
  xl?: EDirection;
}>`
	display: inline-block;

	${({ size, xs, sm, md, lg, xl, theme }) => {
    // @ts-ignore
    const spacing = theme.spacing[size];
    return `
		height: 0;
		width: 0;

		margin: ${spacing};

		${xs === EDirection.vertical
        ? `margin: ${spacing} 0;`
        : xs === EDirection.horizontal
          ? `margin: 0 ${spacing};`
          : ""
      }

		${sm ? setRect(spacing, sm, EMediaQuery.sm) : ""}
		${md ? setRect(spacing, md, EMediaQuery.md) : ""}
		${lg ? setRect(spacing, lg, EMediaQuery.lg) : ""}
		${xl ? setRect(spacing, xl, EMediaQuery.xl) : ""}

		margin-left: 0;
		margin-bottom: 0;
		`;
  }}
`;

const Spacing: React.FC<ISpacing> = ({ className = "", size = ESize.l, xs, sm, md, lg, xl, ...otherProps }) => {
  return <StyledSpacing className={className} size={size} xs={xs} sm={sm} md={md} lg={lg} xl={xl} {...otherProps} />;
};

export { Spacing };
