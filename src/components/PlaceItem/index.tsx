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
        <Container elevation={10}>
            <InfoContainer>
                <Name>{name}</Name>
                <Local>{street}</Local>
                <Local>{city} - {cep}</Local>
            </InfoContainer>
            <QuantityContainer>
                <Quantity elevation={2}>{quantity} Litro(s)</Quantity>
                {/* <Arrow>--{'>'}</Arrow> */}
            </QuantityContainer>
        </Container>
    );
}

export default Item;
