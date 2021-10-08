import { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
  border: 1px solid #313131;
  width: 60px;
  background: #313131;
  color: white;
`;

class Number extends Component {
  render() {
    return (
      <Container onClick={() => this.props.onClick(this.props.value)}>
        {this.props.value}
      </Container>
    );
  }
}

export default Number;
