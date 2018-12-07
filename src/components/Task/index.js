import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
<<<<<<< HEAD
import { Icon, Row, Col, Tag } from 'antd';
=======
import { Icon, Row, Col } from 'antd';
>>>>>>> 15eab82d42fc7de4cb5a3f2f29002c97d1fa2765
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { withRouter } from "react-router";

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: ${props => (props.isDragging ? "lightblue" : "white")};
`;

class Task extends React.Component {
<<<<<<< HEAD
  segmentTag = (segmento) => {
    let myColor = "";
    if(segmento === "Consultoria"){
      myColor = "#CC4F46"
    } else if (segmento === "Comércio") {
      myColor = "#CCA838"
    } else {
      myColor = "#60A82C"
    }
    return (
      <Tag color={myColor}>{segmento}</Tag>
    );
  }
=======
>>>>>>> 15eab82d42fc7de4cb5a3f2f29002c97d1fa2765
  render() {
    return (
      <Link to='/lead'>
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
          {(provided, snapshot) => (
            <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            >                       
              <Row>
                  <Col>
                  <Icon type={'user'} />{`  ${this.props.task.content}`}
                  </Col>
              </Row>
              <Row>
                  <Col>
<<<<<<< HEAD
                      <span>{`R$ ${this.props.task.price} `}{this.segmentTag(this.props.task.segment)}</span>
=======
                      <span>{`R$ ${this.props.task.price} ${this.props.task.segment}`}</span>
>>>>>>> 15eab82d42fc7de4cb5a3f2f29002c97d1fa2765
                  </Col>
              </Row>
            </Container>
          )}
      </Draggable>
      </Link>
    );
  }
}
export default withRouter(Task);
