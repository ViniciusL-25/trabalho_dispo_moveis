import React from 'react';
import { TouchableOpacity, View, Text, Image, Linking, StyleSheet } from 'react-native';

export default function EntregaFlutuante() {
  const fazerLigacao = () => {
    Linking.openURL('tel:+551111111111');
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={fazerLigacao}
      activeOpacity={0.9}
    >
      <Image
        source={require('../../assets/telefone.png')}
        style={styles.icone}
      />
      <View style={styles.textos}>
        <Text style={styles.telefone}>(11) 1111-1111</Text>
        <Text style={styles.legenda}>Entregamos na sua casa!</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 16,
    left: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e50021',
    borderRadius: 35,
    paddingVertical: 8,
    paddingHorizontal: 14,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  icone: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#ffffff',
    marginRight: 12,
  },
  textos: {
    flex: 1,
  },
  telefone: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  legenda: {
    color: '#ffe18c',
    fontSize: 13,
    fontWeight: '600',
  },
});