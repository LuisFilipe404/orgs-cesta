import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import Texto from '../../Texto';
import topo from '../../../../assets/topo.png' // imagem

const width = Dimensions.get('screen').width // pegar o tamanho da tela

export default function Topo ({ titulo }) {
    return (
        <>
            <Image source={topo} style={styles.topo}/>
            <Texto style={styles.titulo}>{titulo}</Texto>
        </>
    )
}

const styles = StyleSheet.create({
    topo:  {
        width: '100%',
        height: 578 / 768 * width,
    },
    titulo: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
        padding: 16
    },
})