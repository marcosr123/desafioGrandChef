import {Card, Row, Col, Avatar, Typography, Divider} from  'antd'

const { Text } = Typography;

const rowProps = {
    gutter: 16,
    wrap: false,
  };

const CardBurger = () => {
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
              src="https://imagensemoldes.com.br/wp-content/uploads/2020/03/Foto-X-Burguer-Hamburguer-Cheeseburguer-PNG-1024x853.png"
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
                  X-Burger
                </Text>
              </Col>
              <Col span={24}>
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
              <Col span={21} style={{ padding: "0", marginLeft: "2px" }}>
                <Text
                  style={{
                    fontSize: "10px",
                    color: "gray",
                  }}
                >
                  Quantidade: 55
                </Text>
              </Col>
              <Col span={20}>
                <Text
                  style={{
                    fontSize: "12px",
                    color: "gray",
                    marginLeft: "34px"
                  }}
                >
                  {"R$ 42,35 / "}
                </Text>
                <Text
                  style={{
                    fontSize: "12px",
                    color: "green",
                  }}
                >
                  R$ 40,00
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
              120 pts
            </Text>
          </Col>
          <Col span={11}>
            <Text
              style={{
                fontSize: "12px",
                color: "gray",
                marginLeft: "30px"
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
              20 pts
            </Text>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default CardBurger;
