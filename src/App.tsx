import { GlobalStyle } from "./GlobalStyle";
import {
  Footer,
  Header,
  Main,
  Title,
  Rows,
  RowGroup,
  Row,
  SelectBox,
  RowTitle,
  RowWrapper,
  StickyCompanyName,
  CompanyNameRow,
  SelectWrapper,
} from "./Style";
import { setRowData, setTitleData } from "./DummyData";
import dompurify from "dompurify";

function App() {
  const titleData = setTitleData;
  const rowData = setRowData;
  const repeatNum = rowData.length;
  const sanitizer = dompurify.sanitize;

  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <Title>관심공고 비교</Title>
        <SelectWrapper>
          <SelectBox>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </SelectBox>
        </SelectWrapper>

        <StickyCompanyName>
          <Rows repeatNum={repeatNum}>
            {rowData.map((data) => (
              <RowGroup key={data.title}>
                <Row>
                  <CompanyNameRow>{data.title}</CompanyNameRow>
                </Row>
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
                <RowGroup key={data.title}>
                  <Row
                    dangerouslySetInnerHTML={{
                      __html: sanitizer(`${data[key]}`),
                    }}
                  ></Row>
                </RowGroup>
              ))}
            </Rows>
          </RowWrapper>
        ))}
      </Main>
      <Footer />
    </>
  );
}

export default App;
