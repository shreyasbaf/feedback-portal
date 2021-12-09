import { css, ThemeProps } from "styled-components";
import { colors, ThemeStarter, screenSizes } from "../../styles/theme";
import styled from "styled-components";

export interface ButtonProps {
  margin?: string;
  priority?: string;
  theme: ThemeProps<ThemeStarter>;
  type?: string;
  background?: string;
  color?: string;
  gradient?: string;
}

export const ButtonGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const buttonStyles = css`
  display: inline-block;
  opacity: 0.8;
  margin: ${(props: ButtonProps) => props.margin};
  background: ${(props: ButtonProps) => props.background};
  color: ${(props: ButtonProps) => props.color};
  font-size: 12px;
  text-align: center;
  cursor: pointer;

  transition: all 0.1s;
  padding: 12px 24px 12px;
  height: 41px;
  letter-spacing: 0.1em;
  border: 1px solid #fff;
  width: 95%;
  border-radius: 4px;
  text-transform: uppercase;
  @media (min-width: ${screenSizes.mediaXL}px) {
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
  }

  &:hover {
    background: rgb(130, 127, 254);
  }

  &:active {
    transform: translate(1px, -1px);
    border: 1px solid #fff;
  }

  &:disabled {
    cursor: no-drop;
    background: #1d1b28;
    opacity: 0.5;
    color: white;
    height: 44px;
    &:hover {
      box-shadow: none;
    }
    &:after {
      content: "";
      border: none;
    }
  }

  + a {
    margin-left: 10px;
    cursor: initial;
  }
`;

export const Button = styled.button<any>`
  ${buttonStyles}
`;
