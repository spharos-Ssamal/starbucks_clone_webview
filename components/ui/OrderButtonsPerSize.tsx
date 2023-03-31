import styled from "styled-components";

export const OrderToggleButton = styled.div`
  width: 40px;
  height: 5px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  margin-bottom: 1rem;
`;
export const OrderButton = styled.div`
  width: 100%;
  border-radius: 30px;
  background-color: rgb(0, 155, 57);
  color: white;
  font-size: 1.1rem;
  font-weight: 300;
  text-align: center;
  padding: 8px 0;
`;
export const OrderButton35width = styled(OrderButton)`
  width: 40%;
  padding: 9px 0px;
  font-weight: 400;
`;
export const OrderButton38widthColorReverse = styled(OrderButton35width)`
  background: white;
  color: rgb(0, 155, 57);
  border: 1px solid rgb(0, 155, 57);
  padding: 7px 0px;
`;
