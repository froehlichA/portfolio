import styled from "styled-components";
import { Link } from "gatsby";

/**
 * Renders a big title.
 */
export const Hero = styled.h1`
  color: ${props => props.color || props.theme.fg};
  font-weight: bold;
  ${props =>
    props.inverted &&
    `
    -webkit-text-fill-color: ${props.theme.bg};
    -webkit-text-stroke: 2px ${props.theme.fg};
  `}
  margin: 0.2rem 0px 0.2rem -5px;
  font-size: 38px;
  ${props => props.shadow && `text-shadow: 5px 5px ${props.theme.fg}`};
  @media (min-width: 350px) {
    font-size: 56px;
  }
  @media (min-width: 750px) {
    font-size: 70px;
  }
`;

/**
 * Renders text with an increased font size.
 */
export const BigLink = styled.p`
  color: ${props => props.color || props.theme.fg};
  font-size: 42px;
  font-weight: bold;
`;

const resetToP = `
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.1px;
  line-height: 1.8;
`;

export const BoldLinkContainer = styled.div`
  display: inline-block;
  background-color: black;
  color: white;
  padding: 5px 10px;
  margin-bottom: 30px;
`;

export const BoldLink = styled(Link)`
  font-weight: bold;
  font-size: 18px;
  color: inherit;
  text-decoration: none;
`;

/**
 * Renders a simple h1 element.
 */
export const TextH1 = styled.h1`
  color: ${props => props.color || props.theme.fg};
  ${resetToP}
  font-weight: bold;
`;

/**
 * Renders a simple h2 element.
 */
export const TextH2 = styled.h2`
  color: ${props => props.color || props.theme.fg};
  ${resetToP}
`;

/**
 * Renders a simple p element.
 */
export const TextP = styled.p`
  color: ${props => (props.inverted ? props.theme.bg : props.theme.fg)};
  ${resetToP}
`;

/**
 * Renders a simple ul element.
 */
export const List = styled.ul`
  padding-left: 0;
`;

/**
 * Renders a simple li element.
 */
export const ListItem = styled.li`
  color: ${props => props.color || props.theme.fg};
  ${resetToP}
`;

/**
 * Renders a simple small element.
 */
export const Small = styled.small`
  color: ${props => props.color || props.theme.fg};
`;
