import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

export default function SobreNos() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.titulo}>Sobre o André Lanches</Text>

        <Text style={styles.subtitulo}>Nossa História</Text>
        <Text style={styles.paragrafo}>
          Fundada com a paixão por preparar lanches artesanais generosos e acessíveis,
          a André Lanches nasceu como um ponto de encontro acolhedor para amigos e
          famílias que não abrem mão de sabor e qualidade.
        </Text>

        <Text style={styles.subtitulo}>Nossa Missão</Text>
        <Text style={styles.paragrafo}>
          Servir refeições rápidas preparadas na hora com ingredientes frescos,
          atendimento ágil e preços justos, garantindo uma experiência deliciosa tanto
          no balcão quanto no conforto da sua casa.
        </Text>

        <Text style={styles.subtitulo}>Nosso Diferencial</Text>
        <Text style={styles.paragrafo}>
          • Hambúrgueres grelhados no ponto certo e batatas sempre crocantes.{'\n'}
          • Combos promocionais pensados para matar a fome sem pesar no bolso.{'\n'}
          • Entrega rápida diretamente pelo nosso canal exclusivo de pedidos.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 110,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e50021',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e50021',
    marginTop: 12,
    marginBottom: 6,
  },
  paragrafo: {
    fontSize: 15,
    lineHeight: 22,
    color: '#333333',
    textAlign: 'justify',
  },
});