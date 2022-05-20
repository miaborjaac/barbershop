import React, { Component } from "react";
import {Row, Col, Card, List} from 'antd';
import {getDateFormat} from "../../../utils/functions";
import {RightOutlined} from "@ant-design/icons";
import * as PropTypes from "prop-types";

class CardContent extends Component {
  render() {
    const { hoverable, isHeader, className, barbershop, onClickDetail } = this.props;

    return (
      <Card size={"small"} hoverable={hoverable} bordered
            className={className}
            key={isHeader ? "header" : barbershop.barbershopId}
            onClick={() => isHeader ? null : onClickDetail(barbershop.barbershopId)}>
        <Row>
          <Col md={3} xs={24}>
            <p>{isHeader ? "Nombre" : barbershop.name}</p>
          </Col>
          <Col md={5} xs={24} className={"center-align"}>
            <p>{isHeader ? "Fecha de apertura" : getDateFormat(barbershop.createdDate)}</p>
          </Col>
          <Col md={5} xs={24} className={"center-align"}>
            <p>{isHeader ? "Horario" : barbershop.schedule}</p>
          </Col>
          <Col md={3} xs={24} className={"center-align"}>
            <p>{isHeader ? "Activa" : barbershop.isActive ? "SI" : "NO"}</p>
          </Col>
          <Col md={6} xs={24} className={"center-align"}>
            <p>{isHeader ? "Dirección" : barbershop.address}</p>
          </Col>
          <Col md={2} xs={24} className={"center-align"}>
            {!isHeader && <RightOutlined />}
          </Col>
        </Row>
      </Card>
    );
  }
}

CardContent.propTypes = {
  hoverable: PropTypes.bool,
  isHeader: PropTypes.bool,
  className: PropTypes.string,
  barbershop: PropTypes.object,
  onClickDetail: PropTypes.func,
};

export default CardContent;