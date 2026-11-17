import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

export default function BannerPromocao({ titulo, descricao, preco }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/promocao.jpg')}
        style={styles.banner}
        imageStyle={styles.bannerImagem}
      >
        <View style={styles.overlay}>
          <Text style={styles.titulo}>{titulo}</Text>
          <View style={styles.rodapeBanner}>
            <Text style={styles.descricao}>{descricao}</Text>
            <View style={styles.badgePreco}>
              <Text style={styles.preco}>{preco}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 14,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    backgroundColor: '#e50021',
  },
  banner: {
    height: 160,
    justifyContent: 'space-between',
  },
  bannerImagem: {
    borderRadius: 14,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    borderRadius: 14,
    padding: 14,
    justifyContent: 'space-between',
  },
  titulo: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
    textShadowColor: '#e50021',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  rodapeBanner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descricao: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  badgePreco: {
    backgroundColor: '#e50021',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#ffe18c',
  },
  preco: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});