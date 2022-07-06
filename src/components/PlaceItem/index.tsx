import React from 'react';
import { Container, InfoContainer, QuantityContainer, Name, Local, Quantity, Arrow } from './styles';

interface ItemProps {
    id: string;
    name: string;
    quantity: string;
    city: string;
    street: string;
    cep: string;
}

const Item: React.FC<ItemProps> = ({ name, quantity, city, street, cep }) => {
    return (
        <Container>
            <InfoContainer>
                <Name>{name}</Name>
                <Local>{city} - {street}</Local>
                <Local>{cep}</Local>
            </InfoContainer>
            <QuantityContainer>
                <Quantity>{quantity} Litros</Quantity>
                {/* <Arrow>--{'>'}</Arrow> */}
            </QuantityContainer>
        </Container>
    );
}

export default Item;
