import React, { Component } from "react";
import * as PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Layout } from 'antd';

//Components
import Router from "./components/general/Router";
import Loading from "./components/general/Loading";
import SideMenu from "./components/general/SideMenu";

//Constants
const { Sider } = Layout;

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      collapsed: false,
    };
  };

  render() {
    const { collapsed } = this.state;
    const { isLoading } = this.props;

    return (
        <>
          {/*{isLoading && <Loading />}*/}

          <Layout className={"main-layout"} hasSider>
            {/*<Sider collapsible collapsed={collapsed}
                   onCollapse={() => this.setState({ collapsed: !collapsed })}>
              <SideMenu collapsed={collapsed} />
            </ Sider>*/}
            {/*<Layout.Content className={"layout-content"}>
              <Router />
            </Layout.Content>*/}
          </Layout>
        </>
    );
  }
}

export default App;
/*
App.propTypes = {
  isLoading: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.generalReducer.isLoading,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);*/
