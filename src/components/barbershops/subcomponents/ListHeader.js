import React, { Component } from "react";
import CardContent from "./CardContent";

class ListHeader extends Component {
  render() {
    return (
      <CardContent hoverable={false}
                   isHeader={true}
                   className={"barbershop-list-header"} />
    );
  }
}

export default ListHeader;