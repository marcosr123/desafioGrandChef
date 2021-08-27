import { Layout, Menu, Divider, Input, Col, Row, Card, Space } from "antd";
import {
  MenuOutlined,
  SearchOutlined,
  LineChartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import Title from "antd/lib/typography/Title";
import "./App.css";

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

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={styleHeader}>
          <MenuOutlined style={{ padding: "20px" }} />
          <Title level={3} style={{ padding: "20px" }}>
            Desempenho de Promoções
          </Title>
        </Header>
        <Content style={{ margin: "25px 24px 24px 72px", display: "block" }}>
          <Row>
            <Col span={4}>
              <Input prefix={<SearchOutlined />} />
            </Col>
          </Row>
          <Row>
            <Col xs={4} sm={4} md={4} lg={4}>
              <Card style={{ marginTop: "24px", backgroundColor: "rgba(239, 108, 0, 0.75)", color: "white" }}>
                <LineChartOutlined /> Teste
              </Card>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <Card style={{ marginTop: "24px", marginLeft: "24px" }}>
                <TeamOutlined />
                Teste 2
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
