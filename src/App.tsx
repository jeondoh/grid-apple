import { GlobalStyle } from "./GlobalStyle";
import {
  Footer,
  Header,
  Main,
  Title,
  Wrapper,
  Rows,
  RowGroup,
  Row,
  SelectBox,
  RowTitle,
  RowWrapper,
  StickyCompanyName,
} from "./Style";
import { setRowData, setTitleData } from "./DummyData";

function App() {
  const titleData = setTitleData();
  const rowData = setRowData();
  const repeatNum = rowData.data.length;

  console.log(rowData.data);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Main>
          <Title>관심공고 비교</Title>
          <SelectBox>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </SelectBox>

          <StickyCompanyName>
            <Rows repeatNum={repeatNum}>
              {rowData.data.map((data) => (
                <RowGroup key={data.title}>
                  <Row>{data.title}</Row>
                </RowGroup>
              ))}
            </Rows>
          </StickyCompanyName>

          {titleData.map((data) => (
            <RowWrapper key={data}>
              <RowTitle>
                <span>{data}</span>
              </RowTitle>
              <Rows repeatNum={repeatNum}>
                <RowGroup>
                  <Row>안녕하세요</Row>
                </RowGroup>
                <RowGroup>
                  <Row>안녕하세요</Row>
                </RowGroup>
                <RowGroup>
                  <Row>안녕하세요</Row>
                </RowGroup>
              </Rows>
            </RowWrapper>
          ))}
        </Main>
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
