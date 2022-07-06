import React, { useEffect, useLayoutEffect, useState } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import Item from '../../components/PlaceItem';
import firestore from '@react-native-firebase/firestore';

interface ItemProps {
    id: string;
    name: string;
    quantity: string;
    city: string;
    street: string;
    cep: string;
}

const PlacesList = () => {
  const [points, setPoints] = useState<ItemProps[]>();

  useLayoutEffect(() => {
    async function fetchData() {
      try {
        await firestore().collection('Points').orderBy('createdAt', 'desc').get().then(querySnapshot => {
          console.log('querySnapshot', querySnapshot.docs);
          let aux: ItemProps[] = [];

          querySnapshot?.docs?.map(doc => {
            const point = doc.data() as ItemProps;
            aux.push({
              id: doc.id,
              name: point.name,
              quantity: point.quantity,
              city: point.city,
              street: point.street,
              cep: point.cep,
            });
          });
          setPoints(aux);
        });
      } catch (error) {
        console.log('ERROR - ', error);
      }      
    }
    fetchData();
  }, [points]);

  const renderItem = ({item}: ListRenderItemInfo<ItemProps>) => (
    <Item 
      id={item.id}
      name={item.name} 
      quantity={item.quantity}  
      city={item.city} 
      street={item.street} 
      cep={item.cep} />
  );

  return (
    <FlatList
      style={{margin: 10}}
      data={points}
      renderItem={renderItem}
      keyExtractor={item => item.id} />
  );
}

export default PlacesList;
