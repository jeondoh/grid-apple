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
  const titleData = setTitleData;
  const rowData = setRowData;
  const repeatNum = rowData.length;

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
              {rowData.map((data) => (
                <RowGroup key={data.title}>
                  <Row>{data.title}</Row>
                </RowGroup>
              ))}
            </Rows>
          </StickyCompanyName>

          {Object.entries(titleData).map(([key, value]) => (
            <RowWrapper key={key}>
              <RowTitle>
                <span>{value}</span>
              </RowTitle>
              <Rows repeatNum={repeatNum}>
                {rowData.map((data: any) => (
                  <RowGroup>
                    <Row>{data[key]}</Row>
                  </RowGroup>
                ))}
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
