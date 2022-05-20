import React, { Component } from "react";
import * as PropTypes from "prop-types";
import { connect } from 'react-redux';
import {Button, Col, Row, Modal, Table, InputNumber, Space, Select, Alert} from "antd";
import {EditOutlined, DeleteOutlined, FormOutlined, PlusOutlined} from "@ant-design/icons";

//Actions
import {addService, getAllServices, updateService} from "../../store/redux/actions/serviceActions";
import {getAllBarbershops} from "../../store/redux/actions/barbershopActions";

//Components
import ServiceForm from "./ServiceForm";

//Constants and Functions
const { info } = Modal;

class Services extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isMounted: false,
      barbershopId: null,
    };
  };
  componentDidMount() {
    this.setState({ isMounted: true }, () => {
      if (this.state.isMounted) {
        this.props.getAllBarbershops();
        this.setState({ isMounted: false });
      }
    });
  }

  handleServiceForm = (isNewService, serviceToEdit) => {
    const { barbershopId } = this.state;
    const { addService, updateService } = this.props;

    info({
      className: "form-modal",
      title: isNewService ? 'Crear servicio' : 'Actualizar servicio',
      icon: <FormOutlined />,
      content: <ServiceForm isNewService={isNewService} barbershopId={barbershopId}
                            serviceToEdit={serviceToEdit}
                            onSubmit={isNewService ? addService : updateService} />,
      width: "800px",
      closable: true
    });
  }
  handleSelectBarbershop = (barbershopId) => {
    this.setState({ barbershopId: barbershopId });
    this.props.getAllServices(barbershopId);
  }

  render() {
    const { barbershopId } = this.state;
    const { barbershopList, serviceList } = this.props;
    const columns = [
      {
        title: 'Nombre',
        dataIndex: 'name',
        key: 'name',
        width: '100px',
      },
      {
        title: 'Precio',
        dataIndex: 'value',
        key: 'value',
        width: '100px',
        render: (value) => <InputNumber value={value} readOnly bordered={false}
                                        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                        parser={value => value.replace(/\$\s?|(,*)/g, '')} />
      },
      {
        title: 'Acciones',
        key: 'actions',
        dataIndex: 'actions',
        width: '50px',
        render: (value, service) => <Space size="small">
          <a>
            <EditOutlined onClick={() => this.handleServiceForm(false, service)} />
          </a>
          <a>
            <DeleteOutlined onClick={() => console.log('Deleting...', service)} />
          </a>
        </Space>,
      },
    ];

    return (
      <Row gutter={[16, 16]}>
        {/*<Col span={18}>
          <h1 className={"main-title"}>Servicios</h1>
        </Col>
        <Col span={6} className={"right-align"}>
          <Button type="primary" shape="round" icon={<PlusOutlined />}
                  disabled={!barbershopId}
                  onClick={() => this.handleServiceForm(true, {})}>
            Nuevo servicio
          </Button>
        </Col>

        <Col span={8}>
          <Select placeholder={"Selecciona una barbería"} onSelect={this.handleSelectBarbershop}>
            {barbershopList.map(barbershop =>
              <Select.Option key={barbershop.barbershopId} value={barbershop.barbershopId}>
                {barbershop.name}
              </Select.Option>
            )}
          </Select>
        </Col>

        <Col span={24}>
          {serviceList.length === 0
            ?
            <Alert type={"info"} message={"No hay servicios para la barbería seleccionada"} showIcon={true} />
            :
            <Table columns={columns} dataSource={serviceList} scroll={{ x: '500px' }} size={'small'}
                   bordered={true}
                   pagination={{ hideOnSinglePage: true }}/>
          }
        </Col>*/}
      </Row>
    );
  }
}

Services.propTypes = {
  barbershopList: PropTypes.array,
  serviceList: PropTypes.array,
  getAllBarbershops: PropTypes.func,
  getAllServices: PropTypes.func,
  addService: PropTypes.func,
  updateService: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    barbershopList: state.barbershopReducer.barbershopList,
    serviceList: state.serviceReducer.serviceList
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllBarbershops: () => dispatch(getAllBarbershops()),
    getAllServices: (barbershopId) => dispatch(getAllServices(barbershopId)),
    addService: (data) => dispatch(addService(data)),
    updateService: (data) => dispatch(updateService(data)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Services);