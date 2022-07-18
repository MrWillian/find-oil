import React, { useState } from 'react';
import { Alert, GestureResponderEvent, Text, TextInput, View } from 'react-native';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './../../routes';

import firestore from '@react-native-firebase/firestore';
import LinearGradient from 'react-native-linear-gradient/index.android.js';
import { RegisterButton } from './styles';

const fieldValidationSchema = yup.object().shape({
    name: yup.string().required('O nome do estabelecimento não pode ser vazio'),
    quantity: yup.string().required('A quantidade não pode ser vazia'),
    city: yup.string().required('A cidade não pode ser vazia'),
    street: yup.string().required('A rua não pode ser vazia'),
    cep: yup.string().required('O CEP não pode ser vazio')
});

type Place = yup.InferType<typeof fieldValidationSchema>;

type NewPlaceScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function NewPlace() {
    const [name, setName] = useState();
    const [quantity, setQuantity] = useState();
    const [city, setCity] = useState();
    const [street, setStreet] = useState();
    const [cep, setCEP] = useState();
    const navigation = useNavigation<NewPlaceScreenProp>();

    const handleSubmit = (event: GestureResponderEvent) => {
        if (fieldValidationSchema.isValidSync({name, quantity, city, street, cep})) {
            const point = {name, quantity, city, street, cep, createdAt: Date.parse(Date.now().toString())};
            firestore().collection('Points').add(point).then(() => {
                navigation.navigate('Home');
            }).catch(error => {
                console.log('error', error);
            });
        } else {
            Alert.alert('Há erros no cadastro, verifique novamente!!');
        }
    }

    return (
        <LinearGradient
            colors={['#110233', '#580979', '#4c258c']}
            style={{
                flex: 1,
                width: '100%',
                paddingLeft: 15,
                paddingRight: 15,
            }}>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <TextField
                    label={'Nome'}
                    // error={errors?.name}
                    placeholder={'Digite o nome do estabelecimento'}
                    onChangeText={text => setName(text)}
                />
                <TextField
                    label={'Quantidade (Litros)'}
                    // error={errors?.quantity}
                    placeholder={'Digite a quantidade'}
                    onChangeText={text => setQuantity(text)}
                />
                <TextField
                    label={'Cidade'}
                    // error={errors?.city}
                    placeholder={'Digite a cidade'}
                    onChangeText={text => setCity(text)}
                />
                <TextField
                    label={'Rua'}
                    // error={errors?.street}
                    placeholder={'Digite a rua'}
                    onChangeText={text => setStreet(text)}
                />
                <TextField
                    label={'CEP'}
                    // error={errors?.cep}
                    placeholder={'Digite o CEP'}
                    onChangeText={text => setCEP(text)}
                />
                <RegisterButton 
                    style={{ fontSize: '20', fontWeight: 'bold', padding: '10', marginTop: '30' }}
                    color="#2e096b" 
                    fontSize="5" 
                    title={'Cadastrar'} 
                    onPress={handleSubmit} />
            </View>
        </LinearGradient>
    );
}

const TextField = ({ label, ...inputProps }) => (
    <View style={{
        width: '80%',
        borderRadius: 10,
        marginBottom: 10
    }}>
        <Text style={{
            fontSize: 20,
            color: '#fff',
            marginBottom: 4
        }}>
            {label}
        </Text>
        <TextInput
            style={{
                height: 40,
                fontSize: 18,
                backgroundColor: '#fff',
                paddingHorizontal: 8,
                borderRadius: 8
            }}
            // , !!error && {
            //     borderWidth: 1,
            //     borderColor: 'rgba(200,0,50,1)'
            // }
            {...inputProps}
        />
        {/* {!!error && <Text style={{
                        fontSize: 12,
                        color: 'rgba(200,0,50,1)',
                        textAlign: 'center',
                        marginTop: 5
                    }}>{error.message}</Text>
        } */}
    </View>
)