import React, { Component } from "react";
import * as PropTypes from "prop-types";
import {Button, Col, Form, Input, Row} from "antd";

//Components

class ServiceForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isMounted: false,
    };
  };

  render() {
    const { isNewService, barbershopId, serviceToEdit } = this.props;
    const onFinish = (values) => {
      values.barbershopId = barbershopId;
      this.props.onSubmit(values);
    };
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    return (
      <Form name="basic"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
      >
        <Row gutter={[8, 8]}>
          {!isNewService &&
            <Form.Item name="barbershopAttentionId" initialValue={serviceToEdit.barbershopAttentionId}>
              <></>
            </Form.Item>
          }
          <Col span={12}>
            <Form.Item label="Nombre" name="name"
                       initialValue={serviceToEdit.name}
                       rules={[{ required: true, message: 'Campo requerido' }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Precio" name="value"
                       initialValue={serviceToEdit.value}
                       rules={[{ required: true, message: 'Campo requerido' }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} className={"right-align"}>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}
                       rules={[{ required: true, message: 'Campo requerido' }]}>
              <Button type="primary" htmlType="submit">
                {isNewService ? "Crear" : "Actualizar"}
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    )
  }
}

ServiceForm.propTypes = {
  isNewService: PropTypes.bool,
  barbershopId: PropTypes.string,
  serviceToEdit: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default ServiceForm;