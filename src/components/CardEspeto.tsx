import {Card, Row, Col, Avatar, Typography} from  'antd'

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
              src="https://kiespeto.com.br/site/wp-content/uploads/2017/03/espetinho-de-carne-min.png"
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
                  Espeto de Carne
                </Text>
              </Col>
              <Col span={14}>
                <Text
                  style={{
                    fontSize: "10px",
                    color: "gray",
                  }}
                >
                  Preço / Promoção
                </Text>
              </Col>
            </Row>
            <Row {...rowProps}>
              <Col span={23} style={{ padding: "0", marginLeft: "2px" }}>
                <Text
                  style={{
                    fontSize: "10px",
                    color: "gray",
                  }}
                >
                  Quantidade: 80
                </Text>
              </Col>
              <Col span={14}>
                <Text
                  style={{
                    fontSize: "12px",
                    color: "gray",
                  }}
                >
                  {"R$ 4,50 / "}
                </Text>
                <Text
                  style={{
                    fontSize: "12px",
                    color: "green",
                  }}
                >
                  R$ 3,50
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default CardCoca;
