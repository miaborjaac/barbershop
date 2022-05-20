import React, { Component } from "react";
import * as PropTypes from "prop-types";
import { connect } from 'react-redux';
import {Row, Col, Button, Modal} from 'antd';
import {PlusOutlined, FormOutlined} from '@ant-design/icons';

//Actions
import {addBarbershop, getAllBarbershops} from "../../store/redux/actions/barbershopActions";

//Components
import BarbershopForm from "./BarbershopForm";
import ListHeader from "./subcomponents/ListHeader";

//Constants and Functions
import routes from "../../utils/routes";
import ListContent from "./subcomponents/ListContent";
const { info } = Modal;

class Barbershops extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isMounted: false,
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

  handleBarbershopDetail = (barbershopId) => {
    window.location.href = `${routes.barbershopsRoutes.barbershopDetail}?barbershopId=${barbershopId}`;
  }
  handleNewBarbershop = () => {
    info({
      className: "form-modal",
      title: 'Crear barbería',
      icon: <FormOutlined />,
      content: <BarbershopForm isNewBarber={true} barbershopToEdit={{}} onSubmit={this.props.addBarbershop} />,
      width: "800px",
      closable: true
    });
  }

  render() {
    const { barbershopList } = this.props;

    return (
      <Row>
        {/*<Col xs={24} md={18}>
          <h1 className={"main-title"}>Barberías</h1>
        </Col>
        <Col xs={24} md={6} className={"right-align"}>
          <Button type="primary" shape="round" icon={<PlusOutlined />}
                  onClick={this.handleNewBarbershop}>
            Nueva barbería
          </Button>
        </Col>

        <Col xs={24} md={24} className={"barbershop-list"}>
          <ListHeader />
          <ListContent barbershopList={barbershopList}
                       onClickDetail={this.handleBarbershopDetail}/>
        </Col>*/}
      </Row>
    );
  }
}

Barbershops.propTypes = {
  barbershopList: PropTypes.array,
  getAllBarbershops: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    barbershopList: state.barbershopReducer.barbershopList
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllBarbershops: () => dispatch(getAllBarbershops()),
    addBarbershop: (data) => dispatch(addBarbershop(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Barbershops);