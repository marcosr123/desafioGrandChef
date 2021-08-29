import {Card, Row, Col, Avatar, Typography, Divider} from  'antd'

const { Text } = Typography;

const rowProps = {
    gutter: 16,
    wrap: false,
  };

const CardCoca = () => {
  return (
    <>
      <Card
        style={{
          marginTop: "16px",
          borderRadius: "5px",
          padding: "0px",
        }}
        bodyStyle={{
          padding: "8px",
        }}
      >
        <Row {...rowProps}>
          <Col style={{ padding: "2px" }}>
            <Avatar
              size="large"
              shape="circle"
              src="https://www.hotdogdomarcio.com.br/wp-content/uploads/2020/04/coca-cola-sombra-02.png"
            />
          </Col>
          <Col>
            <Row {...rowProps}>
              <Col span={24} style={{ padding: "2px" }}>
                <Text
                  style={{
                    fontSize: "12px",
                  }}
                >
                  Coca-Cola 350mL
                </Text>
              </Col>
              <Col span={14}>
                <Text
                  style={{
                    fontSize: "10px",
                    color: "gray",
                    marginLeft: "30px"
                  }}
                >
                  Preço / Promoção
                </Text>
              </Col>
            </Row>
            <Row {...rowProps}>
              <Col span={22} style={{ padding: "0", marginLeft: "2px" }}>
                <Text
                  style={{
                    fontSize: "10px",
                    color: "gray",
                  }}
                >
                  Quantidade: 35
                </Text>
              </Col>
              <Col span={18}>
                <Text
                  style={{
                    fontSize: "12px",
                    color: "gray",
                    marginLeft: "38px"
                  }}
                >
                  {"R$ 3,50 / "}
                </Text>
                <Text
                  style={{
                    fontSize: "12px",
                    color: "green",
                  }}
                >
                  R$ 2,99
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>
        <Divider style={{ margin: "5px 0px 5px 0px" }} />
        <Row {...rowProps}>
          <Col span={16}>
            <Text
              style={{
                fontSize: "12px",
                color: "gray",
              }}
            >
              {"Pontos: "}
            </Text>
            <Text
              style={{
                fontSize: "12px",
                color: "orange",
              }}
            >
              150 pts
            </Text>
          </Col>
          <Col span={11}>
            <Text
              style={{
                fontSize: "12px",
                color: "gray",
                marginLeft: "28px"
              }}
            >
              {"Resgates: "}
            </Text>
            <Text
              style={{
                fontSize: "12px",
                color: "orange",
              }}
            >
              33 pts
            </Text>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default CardCoca;
