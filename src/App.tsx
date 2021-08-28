import { Layout, Menu, Divider, Input, Col, Row, Card, Space } from "antd";
import {
  MenuOutlined,
  SearchOutlined,
  LineChartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import Title from "antd/lib/typography/Title";
import "./App.css";
import Chart from "./components/Chart"

const { Header, Content } = Layout;
const { Search } = Input;
const rowProps = {
  gutter: 8,
};

const styleHeader = {
  padding: "10px",
  backgroundColor: "white",
  boxShadow: "0px 1px 4px #aaaaaa",
  display: "flex",
  alignItems: "center",
  FlexDirection: "column",
};

const App = () => {
  return (
    <div className="App">
      <Layout style={{ backgroundColor: "white" }}>
        <Header style={styleHeader}>
          <MenuOutlined style={{ padding: "20px" }} />
          <Title level={3} style={{ padding: "20px", marginTop: "10px" }}>
            Desempenho de Promoções
          </Title>
        </Header>
        <Content
          style={{
            margin: "25px 24px 24px 72px",
            display: "grid",
            alignItems: "center",
          }}
        >
          <Row>
            <Col span={6}>
              <Input
                prefix={<SearchOutlined />}
                style={{ borderRadius: "5px" }}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={6} sm={6} md={6} lg={6}>
              <Card
                style={{
                  marginTop: "24px",
                  backgroundImage: "linear-gradient(to top, #EF6C00 , #EF6C00)",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                <LineChartOutlined /> Teste
              </Card>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6}>
              <Card
                style={{
                  marginTop: "24px",
                  marginLeft: "24px",
                  borderRadius: "5px",
                }}
              >
                <TeamOutlined />
                Teste 2
              </Card>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Card style={{ marginTop: "24px", borderRadius: "5px" }}>
                <Chart/>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default App;
