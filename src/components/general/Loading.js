import React, {Component} from 'react';
import {Modal} from "antd";
import {LoadingIcon} from "../../assets/customIcons";

class Loading extends Component {
  render(){
    return (
        <Modal visible={true} footer={null} closable={false} keyboard={false}
               className={"loading-modal"}>
          <LoadingIcon />
        </Modal>
    );
  }
};

export default Loading;