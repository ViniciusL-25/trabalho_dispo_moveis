import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Header({ telaAtiva, setTelaAtiva }) {
  const abas = ['Lanches', 'Sobre Nós', 'Contato'];

  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logoImg}
          resizeMode="contain"
        />
        <Text style={styles.tituloLogo}>André Lanches</Text>
      </View>

      <View style={styles.menuBar}>
        {abas.map((aba) => {
          const ativa = telaAtiva === aba;
          return (
            <TouchableOpacity
              key={aba}
              style={[styles.botaoMenu, ativa && styles.botaoMenuAtivo]}
              onPress={() => setTelaAtiva(aba)}
              activeOpacity={0.8}
            >
              <Text style={[styles.textoMenu, ativa && styles.textoMenuAtivo]}>
                {aba}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffe18c',
    paddingTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#e50021',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  logoImg: {
    width: 48,
    height: 48,
    marginRight: 10,
  },
  tituloLogo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#e50021',
  },
  menuBar: {
    flexDirection: 'row',
    backgroundColor: '#e50021',
    justifyContent: 'space-around',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  botaoMenu: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  botaoMenuAtivo: {
    backgroundColor: '#ffffff',
  },
  textoMenu: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
  textoMenuAtivo: {
    color: '#e50021',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});