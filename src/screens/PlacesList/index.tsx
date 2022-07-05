import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import Item from '../../components/PlaceItem';
import { Container } from './styles';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      institutionName: 'Back LTDA',
      local: 'Rua Getúlio Vargas - S/N',
      quantity: '100 Litros',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      institutionName: 'Itausa Holding SA',
      local: 'Rua Das Amargosas - S/N',
      quantity: '10 Litros',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      institutionName: 'Banco do Brasil',
      local: 'Rua Das Amargosas - S/N',
      quantity: '50 Litros',
    },
] as ItemProps[];

interface ItemProps {
    id: string;
    institutionName: string;
    local: string;
    quantity: string;
}

const PlacesList = () => {
    const renderItem = ({item}: ListRenderItemInfo<ItemProps>) => (
      <Item institutionName={item.institutionName} local={item.local} quantity={item.quantity} />
    );

    return (
      <FlatList
        style={{margin: 10}}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id} />
    );
}

export default PlacesList;
