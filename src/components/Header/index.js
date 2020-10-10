import React from 'react';
import { useAuth } from '../../hooks/auth';

import { Container, TituloTexto, BotaoSair, BotaoSairTexto } from './styles';

const Header = ({ titulo }) => {
    const { signOut } = useAuth();

return(
    <Container>
        <TituloTexto>{titulo}</TituloTexto>
        <BotaoSair>
            <BotaoSairTexto
            onPress={() => signOut()}
            >
                Sair
            </BotaoSairTexto>
        </BotaoSair>
    </Container>
);
}

export default Header;