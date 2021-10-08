import { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
  border: 1px solid #F69807;
  width: 60px;
  background: #F69807;
  color: white;
  `;

class Operator extends Component {
  render() {
    return (
      <Container onClick={() => this.props.onClick(this.props.value)}>
        {this.props.value}
      </Container>
    );
  }
}

export default Operator;
