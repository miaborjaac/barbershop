import React, { Component } from "react";
import * as PropTypes from "prop-types";
import {Row, Form, Input, Button, Col, Modal, Checkbox, Upload, message} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import baseURL from "../../api/baseURL";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

class BarbershopForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isMounted: false,
      fileList: [],
      previewImage: null,
      previewVisible: false,
    };
  };

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };

  render() {
    const { fileList, previewVisible, previewImage } = this.state;
    const { isNewBarber, barbershopToEdit, onSubmit } = this.props;
    const onFinish = (values) => {
      let formData = new FormData();
      Object.keys(values).map(key =>
        formData.append(key, values[key])
      );
      if(values.image){
        formData.append("image", values.image.file.originFileObj, values.image.file.originFileObj.name);
      }
      onSubmit(formData);
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
          {!isNewBarber &&
            <Form.Item name="barbershopId" initialValue={barbershopToEdit.barbershopId}><></></Form.Item>
          }
          <Col span={24}>
            {!isNewBarber && fileList.length === 0 &&
              <Button onClick={() => this.setState({
                previewImage: baseURL + barbershopToEdit.imageUrl,
                previewVisible: true
              })}>
                Ver imagen cargada
              </Button>
            }
            <Form.Item label="Imagen" name="image"
                       rules={[{ required: isNewBarber, message: 'Campo requerido' }]}>
              <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      listType="picture-card"
                      accept={"image/png,image/jpg,image/jpeg"}
                      fileList={fileList}
                      onPreview={this.handlePreview}
                      onChange={(info) => this.setState({ fileList: info.fileList })}
              >
                {fileList.length === 0 &&
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Cargar nueva imagen</div>
                  </div>
                }
              </Upload>
            </Form.Item>
            <Modal visible={previewVisible}
                   title={"Imagen cargada"}
                   footer={null}
                   onCancel={() => this.setState({ previewVisible: false })}
            >
              <img alt="image" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </Col>
          <Col span={12}>
            <Form.Item label="Name" name="name"
                       initialValue={barbershopToEdit.name}
                       rules={[{ required: true, message: 'Campo requerido' }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Dirección" name="address"
                       initialValue={barbershopToEdit.address}
                       rules={[{ required: true, message: 'Campo requerido' }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Horario" name="schedule"
                       initialValue={barbershopToEdit.schedule}
                       rules={[{ required: true, message: 'Campo requerido' }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Teléfono" name="phone"
                       initialValue={barbershopToEdit.phone}
                       rules={[{ required: true, message: 'Campo requerido' }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Correo" name="email"
                       initialValue={barbershopToEdit.email}
                       rules={[{ required: true, message: 'Campo requerido', type: "email" }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12} />
          <Col span={12}>
            <Form.Item label="Latitud" name="latitude"
                       initialValue={barbershopToEdit.latitude}
                       rules={[{ required: true, message: 'Campo requerido' }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Longitud" name="longitude"
                       initialValue={barbershopToEdit.longitude}
                       rules={[{ required: true, message: 'Campo requerido' }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="" name="isActive"
                       initialValue={barbershopToEdit.isActive}
                       valuePropName={"checked"}>
              <Checkbox>
                Activa
              </Checkbox>
            </Form.Item>
          </Col>
          <Col span={24} className={"right-align"}>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}
                       rules={[{ required: true, message: 'Campo requerido' }]}>
              <Button type="primary" htmlType="submit">
                {isNewBarber ? "Crear" : "Actualizar"}
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}

BarbershopForm.propTypes = {
  isNewBarber: PropTypes.bool,
  barbershopToEdit: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default BarbershopForm;