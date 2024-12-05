import React from 'react';
import { Bairro, Cep, Cidade, Container, Estado, Logradouro } from './styles';

export type addressProps = {
    cep: string;
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
}

type CardProps = {
    address: addressProps | undefined;
}
export function Card({ address }: CardProps) {
    return (
        <Container>
            <Cep>
                CEP: {
                    address?.cep ? address.cep : 'CEP não encontrado'
                }
            </Cep>
            <Logradouro>
                Logradouro: {
                    address?.logradouro ? address.logradouro : ' Logradouro não encontrado'
                }
            </Logradouro>
            <Bairro>
                Bairro:
                {
                    address?.bairro ? address.bairro : ' Bairro não encontrado'
                }
            </Bairro>
            <Cidade>
                Cidade:
                {
                    address?.localidade ? address.localidade : ' Cidade não encontrada'
                }
            </Cidade>
            <Estado>
                Estado:
                {
                    address?.uf ? address.uf : ' Estado não encontrado'
                }
            </Estado>
        </Container>
    );
}

