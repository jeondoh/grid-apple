import styled, { css } from "styled-components";

interface IRows {
  repeatNum: number;
}

const HF = css`
  background-color: slategrey;
  height: 10rem;
`;

export const Header = styled.div`
  ${HF}
`;

export const Footer = styled.div`
  ${HF};
`;

export const Wrapper = styled.div``;

export const Title = styled.section`
  margin: 2.5rem 0;
  padding: 1.5em 0;
  font-size: 30px;
  text-align: center;
`;

export const Main = styled.section`
  position: relative;
  margin: 0 auto;
  width: 61.25em;
  text-align: center;
`;

export const SelectBox = styled.select`
  width: 25em;
  height: 2.5em;
  font-size: 18px;
`;

export const StickyCompanyName = styled.div`
  position: sticky;
  top: -1px;
  z-index: 10;
  background-color: white;
`;

export const RowWrapper = styled.div`
  margin-top: 2.5rem;
`;

export const Rows = styled.div<IRows>`
  margin: 3rem 0;
  display: grid;
  grid-gap: 5%;
  grid-template-columns: repeat(${(props) => props.repeatNum}, 1fr);
  overflow-x: auto;
  //background-color: gainsboro;
`;

export const RowGroup = styled.div`
  //background-color: gold;
`;

export const RowTitle = styled.div`
  margin: 5em 0;
  text-align: left;
  padding-bottom: 2em;
  border-bottom: 1px solid lightgray;
  span {
    font-size: 25px;
    font-weight: bold;
  }
`;

export const Row = styled.div`
  margin: 1em 0;
  font-size: 20px;
  //background-color: tomato;
`;
