import React, { Component } from "react";
import * as PropTypes from "prop-types";
import {Col, Comment, List} from "antd";

class CommentList extends Component {
  render() {
    const { comments } = this.props;

    return (
      <Col xs={24} md={24} className={"comment-container"}>
        <List className="comment-list"
              header={`${comments.length} replies`}
              itemLayout="horizontal"
              dataSource={comments}
              renderItem={item => (
                <li>
                  <Comment
                    actions={item.actions}
                    author={item.author}
                    avatar={item.avatar}
                    content={item.content}
                    datetime={item.datetime}
                  />
                </li>
              )}
        />
      </Col>
    );
  }
}

CommentList.propTypes = {
  comments: PropTypes.array
};

export default CommentList;