import React from 'react';
import { View, Image, StyleSheet } from 'react-native'
import Botao from '../../Botão';
import Texto from '../../Texto'

export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco, botao, alerta }) {
    return(
        <>
            <Texto style={styles.nome}>{nome}</Texto>
            <View style={styles.containerLogo}>
                <Image style={styles.logo} source={logoFazenda}/>
                <Texto style={styles.nomeFazenda}>{nomeFazenda}</Texto>
            </View>
            <Texto style={styles.descricao}>
                {descricao}
            </Texto>
            <Texto style={styles.preco}>{preco}</Texto>
            
            <Botao textoBotao={botao} textoAlerta={alerta}/>
            
        </>
    )
}

const styles = StyleSheet.create({
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold",
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    containerLogo: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    logo: {
        width: 32,
        height: 32,
    },
})
