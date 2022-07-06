import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #EDEDED;
    border-radius: 15px;
    padding: 10px;
    margin: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const InfoContainer = styled.View`
    padding: 10px;
    flex-direction: column;
`;

export const QuantityContainer = styled.View`
    padding: 10px;
    justify-content: center;
    align-items: center;
`;

export const Name = styled.Text`
    color: #011438;
    font-weight: bold;
    font-size: 20px;
`;

export const Local = styled.Text`
    color: #ADACCB;
    font-size: 14px;
`;

export const Quantity = styled.Text`
    color: #4442A4;
    font-size: 20px;
`;

export const Arrow = styled.Text`
    background-color: #FFF;
    font-weight: bold;
    font-size: 20px;
    border-radius: 35px;
    width: 35px;
    height: 35px;
`;