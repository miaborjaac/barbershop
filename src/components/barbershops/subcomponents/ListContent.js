import React, { Component } from "react";
import {List} from 'antd';
import * as PropTypes from "prop-types";
import CardContent from "./CardContent";

class ListContent extends Component {
  render() {
    const { barbershopList, onClickDetail } = this.props;

    return (
      <List itemLayout="vertical" size="large"
            pagination={{
              hideOnSinglePage: true,
            }}
            dataSource={barbershopList}
            renderItem={barbershop => (
              <CardContent hoverable={true}
                           barbershop={barbershop}
                           onClickDetail={onClickDetail}/>
            )}
      />
    );
  }
}

ListContent.propTypes = {
  barbershopList: PropTypes.array,
  onClickDetail: PropTypes.func
};

export default ListContent;