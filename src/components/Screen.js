import { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid black;
  width: 325px;
  height: 70px;
  background: black;
  text-align: right;
  color: white; 
`;

class Screen extends Component {
  render() {
    return <Container>{this.props.value}</Container>;
  }
}

export default Screen;
