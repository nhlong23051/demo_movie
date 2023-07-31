import React from 'react'
import { styled } from 'styled-components'
// import Loader from '../../../component/loader/loader'
import { Button, DatePicker, Space } from 'antd';

const Container = styled.section`
  background: white;
  color: black;
`

const Title = styled.h1`
  background-color: yellow;
  color: grey;
  padding: 20px;
`

const Loader = styled.div`
border: 16px solid #f3f3f3;
    /* Light grey */
    border-top: 16px solid red;
    /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;

    @keyframes spin {
      0% {
          transform: rotate(0deg);
      }
  
      100% {
          transform: rotate(360deg);
      }
  }
`
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
export default function HomePage() {
  return (
    <Container>
      <Title>
        Hello
        <Loader />
      </Title>
      <Space direction="vertical">
        <DatePicker onChange={onChange} />
      </Space>
      <Button type="primary">Primary Button</Button>

    </Container>
  )
}
