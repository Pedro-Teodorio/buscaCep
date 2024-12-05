import React, { useState } from 'react';
import { Button, ButtonText, Container, Title } from './styles';
import { Field } from '../../components/Field';
import { addressProps, Card } from '../../components/Card';
import { getAddressByCep } from '../../services/api';
import { Alert, Keyboard } from 'react-native';


export function Home() {
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState<addressProps>();

    const searchCep = async () => {
        if (cep.length !== 8) {
            Alert.alert('CEP inválido', 'O CEP deve conter 8 dígitos');
            return;
        }
        getAddressByCep(cep).then(data => setAddress(data));
        Keyboard.dismiss();

    };
    return (
        <Container>
            <Title>Buscar CEP</Title>
            <Field
                valueField={cep}
                onChangeField={(text: string) => setCep(text)}
            />
            <Button onPress={searchCep}>
                <ButtonText>Buscar</ButtonText>
            </Button>
            {address && <Card address={address} />}
        </Container>
    );
}
