import { Layout, Input, Col, Row, Card, Typography, Cascader } from "antd";
import {
  MenuOutlined,
  SearchOutlined,
  LineChartOutlined,
  TeamOutlined,
  DownOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import Title from "antd/lib/typography/Title";
import "./App.css";
import Chart from "./components/Chart";
import CardCoca from "./components/Card";
import CardBurger from "./components/CardBurger";
import CardEspeto from "./components/CardEspeto";
import ChartPizza from "./components/ChartPizza";
import "../public/lata.svg";

const { Text } = Typography;

const { Header } = Layout;
const rowProps = {
  gutter: 16,
  wrap: false,
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
        <Layout
          style={{
            alignSelf: "center",
            marginTop: "25px",
            display: "grid",
            alignItems: "center",
            backgroundColor: "white",
            width: "1024px",
            height: "768px",
          }}
        >
          <Row>
            <Col span={13}>
              <Row>
                <Col span={12}>
                  <Input
                    prefix={<SearchOutlined />}
                    style={{ borderRadius: "5px" }}
                    defaultValue={["Procurar um cliente"]}
                  />
                </Col>
              </Row>
              <Row wrap={false}>
                <Col span={12}>
                  <Card
                    style={{
                      marginTop: "24px",
                      backgroundImage:
                        "linear-gradient(to top, #EF6C00 , #EF6C00)",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    <Row {...rowProps}>
                      <Col>
                        <LineChartOutlined style={{ fontSize: "44px" }} />
                      </Col>
                      <Col>
                        <Row>
                          <Text style={{ color: "white", fontSize: "12px" }}>
                            Faturamento
                          </Text>
                        </Row>
                        <Row>
                          <Text
                            style={{
                              color: "white",
                              fontSize: "20px",
                              fontWeight: "bold",
                            }}
                          >
                            R$ 300,00
                          </Text>
                        </Row>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card
                    style={{
                      marginTop: "24px",
                      marginLeft: "20px",
                      borderRadius: "5px",
                    }}
                  >
                    <Row {...rowProps}>
                      <Col>
                        <TeamOutlined
                          style={{ color: "gray", fontSize: "44px" }}
                        />
                      </Col>
                      <Col>
                        <Row>
                          <Text style={{ color: "gray", fontSize: "12px" }}>
                            Participantes
                          </Text>
                        </Row>
                        <Row>
                          <Text
                            style={{
                              color: "gray",
                              fontSize: "20px",
                              fontWeight: "bold",
                            }}
                          >
                            100 clientes
                          </Text>
                        </Row>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
              <Row {...rowProps}>
                <Col span={24}>
                  <Card style={{ marginTop: "24px", borderRadius: "5px" }}>
                    <Chart />
                  </Card>
                </Col>
              </Row>
              <Row {...rowProps}>
                <Col span={24}>
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
            </Col>
            <Col span={11}>
              <Row {...rowProps}>
                <Col>
                  <Cascader
                    suffixIcon={<DownOutlined />}
                    style={{ marginLeft: "24px" }}
                    defaultValue={["Porcentagem"]}
                  />
                </Col>
                <Col>
                  <Cascader
                    placeholder="Data"
                    suffixIcon={<CalendarOutlined />}
                    style={{ marginLeft: "24px" }}
                    defaultValue={["Ultimos 7 dias"]}
                  />
                </Col>
              </Row>
              <Card
                style={{
                  marginTop: "24px",
                  marginLeft: "24px",
                  borderRadius: "5px",
                  height: "450px",
                }}
              >
                <Row>
                  <Col span={17}>
                    <Text
                      style={{
                        color: "gray",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      Produtos
                    </Text>
                  </Col>
                  <Col>
                    <Text style={{ color: "gray", fontSize: "12px" }}>
                      Mais vendidos <DownOutlined />
                    </Text>
                  </Col>
                </Row>
                <CardCoca />
                <CardBurger />
                <CardEspeto />
              </Card>
              <Card
                style={{
                  marginTop: "24px",
                  marginLeft: "24px",
                  borderRadius: "5px",
                }}
              >
                <Row>
                  <Col span={17}>
                    <Text
                      style={{
                        color: "gray",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      Serviços
                    </Text>
                  </Col>
                  <Col>
                    <Text style={{ color: "gray", fontSize: "12px" }}>
                      Mais utilizados <DownOutlined />
                    </Text>
                  </Col>
                </Row>
                <Card
                  style={{
                    marginTop: "16px",
                    borderRadius: "5px",
                  }}
                >
                  <Row>
                    <Text
                      style={{
                        fontSize: "10px",
                      }}
                    >
                      Permite cobrar taxa de entrega de pedidos
                    </Text>
                  </Row>
                  <Row>
                    <Text
                      style={{
                        color: "gray",
                        fontSize: "10px",
                      }}
                    >
                      Quantidade: 33 · R$ 20,00 em média
                    </Text>
                  </Row>
                </Card>
              </Card>
            </Col>
          </Row>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
