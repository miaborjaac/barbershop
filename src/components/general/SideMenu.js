//Libraries
import React, { Component } from 'react';
import { Menu } from 'antd';
import * as PropTypes from "prop-types";
import { connect } from 'react-redux';
import { ProfileOutlined, AppstoreAddOutlined } from '@ant-design/icons';

//Actions
import { setCurrentRoute } from "../../store/redux/actions/generalActions";

//Constants and Functions
import routes from "../../utils/routes";
import logo from "../../assets/images/barbershop-icon.png";
function getItem(label, key, icon) {
  return { key, icon, label };
}

class SideMenu extends Component{
  constructor (props) {
    super(props);

    this.state = {
      isMounted: false,
    };
  };

  componentDidMount(){
    this.setState({ isMounted: true }, () => {
      if (this.state.isMounted) {
        this.setState({ isMounted: false });
        this.props.setCurrentRoute(window.location.pathname);
      }
    });
  }

  handleClickMenu = (route) => {
    const newRoute = route.key;

    this.props.setCurrentRoute(newRoute);
    window.location.href = newRoute;
  };

  render(){
    const { currentRoute, collapsed } = this.props;
    const items = [
      getItem('Barberías', routes.barbershopsRoutes.home, <ProfileOutlined />),
      getItem('Servicios', routes.services, <AppstoreAddOutlined />),
    ];

    return (
      <div>
        <div className="logo center-align"
             onClick={ () => this.handleClickMenu({ key: routes.barbershopsRoutes.home })}>
          <img src={logo} alt={'logo'} /> {!collapsed && "BARBERSHOP"}
        </div>
        <Menu theme={"dark"}
              onClick={this.handleClickMenu}
              selectedKeys={[currentRoute]}
              mode="inline"
              items={items} />
      </div>
    );
  };
}

SideMenu.propTypes = {
  currentRoute: PropTypes.string,
  collapsed: PropTypes.bool,
  setCurrentRoute: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    currentRoute: state.generalReducer.currentRoute
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentRoute: (route) => dispatch(setCurrentRoute(route))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);