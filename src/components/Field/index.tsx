import React from 'react';
import { Container, Input, Label } from './styles';

type FieldProps = {
    valueField: string;
    onChangeField: (value: string) => void;
}
export function Field({ valueField, onChangeField }: FieldProps) {
    return (
        <Container>
            <Label>CEP:</Label>
            <Input
                placeholder="Digite o CEP"
                keyboardType="numeric"
                placeholderTextColor={'#a1a1aa'}
                maxLength={8}
                value={valueField}
                onChangeText={(text) => onChangeField(text)}
            />
        </Container>
    );
}
