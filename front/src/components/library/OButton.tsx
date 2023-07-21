import React, { useRef } from "react";
import styled, { css } from "styled-components";
import { OText } from "./OText";
import { ESize, EPosition, ETextType } from "../../utils/Enums";
import { addTransition } from "../../utils/functions";

interface IButton {
  children?: React.ReactNode | string;
  onClick?: () => void;
  size?: ESize;
  tertiary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  iconPosition?: EPosition;
  square?: boolean;
  glassBackground?: boolean;
  clickable?: boolean;
  selected?: boolean;
  customWidth?: string;
  className?: string;
  style?: string;
  ariaLabel?: string;
}

const StyledButton = styled.button<{
  secondary?: boolean;
  disabled?: boolean;
  size?: ESize;
  iconPosition?: EPosition;
  square?: boolean;
  glassBackground?: boolean;
  clickable?: boolean;
  selected?: boolean;
  customWidth?: string;
  style?: string;
  tertiary?: boolean;
}>`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	z-index: 1;

	cursor: ${(p) => (p.disabled || !p.clickable ? "default" : "pointer")};
	border-radius: ${({ theme }) => theme.radius.m};
  height: 50px;
	${(p) =>
    p.square
      ? css`
					background-color: transparent;

					padding: 0;
					border: none;

					${p.size === ESize.s
          ? css`
								height: 32px;
								width: 32px;
						  `
          : p.size === ESize.m
            ? css`
								height: 40px;
								width: 40px;
						  `
            : p.size === ESize.l &&
            css`
								height: 54px;
								width: 54px;
						  `}

					${p.customWidth
          ? css`
								width: ${p.customWidth};
								height: ${p.customWidth};
						  `
          : ""}
			  `
      : css`
					${!p.glassBackground
          ? css`
								overflow: hidden;
						  `
          : ""}

					${p.iconPosition === EPosition.left
          ? css`
								flex-direction: row-reverse;
						  `
          : ""}


	${p.secondary || p.glassBackground
          ? css`
								background-color: #FFF;
						  `
          : p.tertiary ?
            css`
								background-color: ${p.theme.colors.deepBlue};
						  `
            : p.disabled ?
              css`
								background: ${p.theme.colors.lightBlue};
						  `
              : css`
								background: ${p.theme.colors.primary};
						  `}

          ${p.tertiary !== undefined // Check if tertiary prop is defined
          ? `tertiary="${p.tertiary ? 'true' : 'false'}"` // Include tertiary attribute with the prop value as a string
          : ""};

	${!p.square && !p.glassBackground
          ? css`
								padding: ${p.size === ESize.s
              ? "8px 16px"
              : p.size === ESize.m
                ? "9.5px 20px"
                : p.size === ESize.l
                  ? "17px 20px"
                  : "0px"};
						  `
          : !p.square && p.glassBackground
            ? css`
								padding: 0;
								border: none;
								& > div {
									padding: 4px 8px;
								}
						  `
            : ""}	

	border: ${p.disabled && !p.glassBackground && !p.tertiary
          ? "1px solid rgba(231, 234, 237, 0.1)"
          : p.secondary
            ? `1px solid ${p.theme.colors.lightGray};`
            : "none"};

					${p.customWidth ? `width: ${p.customWidth};` : ""}


					p,
					span,
					i {
						${addTransition()}
						  color: ${p.secondary
          ? `#000`
          : p.disabled ?
            `#1D222D`
            : "#FFF"};
						font-weight: bold;
						font-size: ${p.theme.fontSize.s};
						line-height: 18px;
					}

					/* &:hover {
						p,
						span,
						i {
							color: ${p.disabled || p.tertiary
          ? p.theme.colors.typo + "33"
          : !p.glassBackground
            ? p.theme.colors.bg
            : p.theme.colors.typo};
						}
					} */

					&.force-selected {
						p,
						span,
						i {
							color: ${p.disabled || p.tertiary ? p.theme.colors.typo + "33" : p.theme.colors.bg};
						}
					}
			  `}


`;

const OButton: React.FC<IButton> = ({
  children,
  onClick = () => { },
  size = ESize.l,
  className = "",
  tertiary = false,
  secondary = false,
  disabled = false,
  iconPosition = EPosition.none,
  square = false,
  glassBackground = false,
  clickable = true,
  selected = false,
  customWidth,
  style,
  ariaLabel = "",
  ...otherProps
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <StyledButton
      onClick={!disabled ? onClick : () => { }}
      size={size}
      secondary={secondary}
      disabled={disabled}
      iconPosition={iconPosition}
      ref={btnRef}
      square={square}
      glassBackground={glassBackground}
      clickable={clickable}
      selected={selected}
      customWidth={customWidth}
      className={`${className}${selected ? " force-selected" : ""}`}
      style={style}
      aria-label={typeof children === "string" ? children : ariaLabel}
      tertiary={tertiary}
      {...otherProps}
    >
      <>
        {typeof children === "string" ? (
          <>
            <OText inheritStyle={false} type={ETextType.span} size={size}>
              {children || ""}
            </OText>
          </>
        ) : (
          children
        )}
      </>
    </StyledButton>
  );
};

export { OButton };
