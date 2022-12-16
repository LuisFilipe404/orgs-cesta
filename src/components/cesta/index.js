import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native'
import Detalhes from './components/Detalhes';
import Item from './components/Item';
import Topo from './components/Topo'
import Texto from '../Texto';

export default function Cesta({ topo, detalhes, itens }) {
    return (
        <>
            <FlatList
                data={itens.lista}
                renderItem={Item}
                keyExtractor={({ nome }) => nome }
                ListHeaderComponent={() => {
                    return <>
                        <Topo {...topo}/>
                        <View style={styles.container}>
                            <Detalhes {...detalhes}/>
                            <Texto style={styles.titulo}>{ itens.titulo }</Texto>
                        </View>
                    </>
                }}
            />
            
        </>  
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    titulo: {
        color: "464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
});
