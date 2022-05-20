import React, { Component } from "react";
import * as PropTypes from "prop-types";
import { connect } from 'react-redux';
import {Button, Col, Row, Image, Rate, Tag, Space, Tooltip, Divider, Modal} from "antd";
import {EditOutlined, DeleteOutlined, ExclamationCircleOutlined, FormOutlined} from "@ant-design/icons";
import moment from "moment";

//Services
import {deleteBarbershop, getDetailById, updateBarbershop} from "../../store/redux/actions/barbershopActions";

//Components
import CommentList from "./CommentList";
import Map from "./Map";
import BarbershopForm from "./BarbershopForm";

//Constants and Functions
import baseURL from "../../api/baseURL";
import routes from "../../utils/routes";
import {getCurrencyFormat, getRandomColor} from "../../utils/functions";
const { confirm, info } = Modal;
const comments = [
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: 'Han Solo',
    avatar: 'https://joeschmoe.io/api/v1/random',
    content: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit justo, cursus nulla dictumst morbi aptent proin nibh ridiculus, pellentesque imperdiet inceptos etiam curabitur dis primis. Dictumst habitasse condimentum felis aenean cras aliquam dignissim hac himenaeos id, tempor cubilia magnis turpis orci volutpat tortor cursus a. Tempus bibendum dui sapien neque lacinia mauris, commodo in eleifend rutrum tempor morbi, suspendisse iaculis ornare himenaeos nisl.
      </p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(1, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: 'Han Solo',
    avatar: 'https://joeschmoe.io/api/v1/random',
    content: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit justo, cursus nulla dictumst morbi aptent proin nibh ridiculus, pellentesque imperdiet inceptos etiam curabitur dis primis. Dictumst habitasse condimentum felis aenean cras aliquam dignissim hac himenaeos id, tempor cubilia magnis turpis orci volutpat tortor cursus a. Tempus bibendum dui sapien neque lacinia mauris, commodo in eleifend rutrum tempor morbi, suspendisse iaculis ornare himenaeos nisl.
      </p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(2, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
];

class BarbershopDetail extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isMounted: false,
    };
  };
  componentDidMount() {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let barbershopId = url.searchParams.get("barbershopId");

    if(barbershopId){
      this.props.getDetailById(barbershopId);
    } else {
      window.location.href = routes.barbershopsRoutes.home;
    }
  }

  handleShowDeleteModal = () => {
    const { deleteBarbershop, barbershopDetail } = this.props;

    confirm({
      className: "confirm-modal",
      title: '¿Desea eliminar esta barbería?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Eliminar',
      okType: 'primary',
      cancelType: 'danger',
      onOk() {
        deleteBarbershop(barbershopDetail);
      },
    });
  };
  handleEditBarbershop = () => {
    const { barbershopDetail } = this.props;

    info({
      className: "form-modal",
      title: 'Actualizar barbería',
      icon: <FormOutlined />,
      content: <BarbershopForm isNewBarber={false} barbershopToEdit={barbershopDetail} onSubmit={this.props.updateBarbershop} />,
      width: "800px",
      closable: true
    });
  };

  render() {
    const { barbershopDetail } = this.props;
    const barbershopDetailIsEmpty = Object.keys(barbershopDetail).length === 0;

    return (
      !barbershopDetailIsEmpty &&
      <Row>
        {/*<Col xs={24} md={16}>
          <h1 className={"main-title"}>Detalle de barbería</h1>
        </Col>
        <Col xs={24} md={8} className={"right-align"}>
          <Space size={"middle"}>
            <Button type="primary" shape="round" icon={<EditOutlined />}
                    onClick={this.handleEditBarbershop}>
              Editar
            </Button>
            <Button type="danger" shape="round" icon={<DeleteOutlined />}
                    onClick={this.handleShowDeleteModal}>
              Eliminar
            </Button>
          </Space>
        </Col>

        <Col xs={24} md={24} className={"description-container"}>
          <Col xs={24} md={8}>
            <Image src={baseURL + barbershopDetail.imageUrl} />
          </Col>
          <Col xs={24} md={16}>
            <h1>
              {barbershopDetail.name} {!barbershopDetail.isActive && <Tag color={"red"}>Inactiva</Tag>}
            </h1>
            <span className={"rating-container"}>
              <Rate disabled defaultValue={4.5} /> {`${Math.floor(Math.random() * 100)} clientes`}
            </span>

            <br /><br />
            <Space size={[8, 8]} wrap>
              {barbershopDetail.services.map(service =>
                <Tag key={service.barbershopAttentionId} color={getRandomColor()}>
                  {service.name} ({getCurrencyFormat(service.value)})
                </Tag>
              )}
            </Space>

            <br /><br />
            <i>
              <b>Dirección:</b> {barbershopDetail.address} <br />
              <b>Horario de atención:</b> {barbershopDetail.schedule} <br />
              <b>Teléfono:</b> {barbershopDetail.phone} <br />
              <b>Correo:</b> {barbershopDetail.email} <br />
            </i>
          </Col>
        </Col>

        <Divider />
        <CommentList comments={comments} />
        <Divider />
        <Map coordinates={{ lat: barbershopDetail.latitude, lng: barbershopDetail.longitude }} />*/}
      </Row>
    );
  }
}

BarbershopDetail.propTypes = {
  barbershopDetail: PropTypes.object,
  getDetailById: PropTypes.func,
  updateBarbershop: PropTypes.func,
  deleteBarbershop: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    barbershopDetail: state.barbershopReducer.barbershopDetail
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDetailById: (barbershopId) => dispatch(getDetailById(barbershopId)),
    updateBarbershop: (data) => dispatch(updateBarbershop(data)),
    deleteBarbershop: (data) => dispatch(deleteBarbershop(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BarbershopDetail);