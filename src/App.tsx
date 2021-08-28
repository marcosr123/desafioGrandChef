// eslint-disable-next-line
import { Layout, Menu, Divider, Input, Col, Row, Card, Space } from "antd";
import {
  MenuOutlined,
  SearchOutlined,
  LineChartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import Title from "antd/lib/typography/Title";
import "./App.css";
import Chart from "./components/Chart";
import ChartPizza from "./components/ChartPizza";

const { Header, Content } = Layout;
const rowProps = {
  gutter: 16,
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
                <Row {...rowProps}>
                  <Col>
                    <LineChartOutlined style={{ fontSize: "30px" }} />
                  </Col>
                  <Col>Faturamento</Col>
                </Row>
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
                <Row {...rowProps}>
                  <Col>
                    <TeamOutlined style={{ fontSize: "30px" }} />
                  </Col>
                  <Col>Participantes</Col>
                </Row>
              </Card>
            </Col>
            <Col span={10}>
              <Card style={{
                  marginTop: "24px",
                  marginLeft: "24px",
                  borderRadius: "5px",
                }}>Teste</Card>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Card style={{ marginTop: "24px", borderRadius: "5px" }}>
                <Chart />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Card
                style={{
                  marginTop: "24px",
                  borderRadius: "5px",
                  height: "250px",
                }}
              >
                <ChartPizza />
              </Card>
            </Col>
          </Row>
          <Col></Col>
        </Content>
      </Layout>
    </div>
  );
};

export default App;
