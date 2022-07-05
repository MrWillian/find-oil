import React from 'react';
import { Container, InfoContainer, QuantityContainer, Name, Local, Quantity, Arrow } from './styles';

interface ItemProps {
    institutionName?: string;
    local?: string;
    quantity?: string;
}

const Item: React.FC<ItemProps> = ({ institutionName, local, quantity }) => {
    return (
        <Container>
            <InfoContainer>
                <Name>{institutionName}</Name>
                <Local>{local}</Local>
            </InfoContainer>
            <QuantityContainer>
                <Quantity>{quantity}</Quantity>
                <Arrow>--{'>'}</Arrow>
            </QuantityContainer>
        </Container>
    );
}

export default Item;
