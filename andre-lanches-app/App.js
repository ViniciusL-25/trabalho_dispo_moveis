import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, StatusBar, Platform } from 'react-native';
import Header from './src/components/Header.jsx';
import ListaProdutos from './src/components/ListaProdutos.jsx';
import SobreNos from './src/components/SobreNos.jsx';
import Contato from './src/components/Contato.jsx';
import EntregaFlutuante from './src/components/EntregaFlutuante.jsx';

export default function App() {
  const [telaAtiva, setTelaAtiva] = useState('Lanches');

  const renderizarTela = () => {
    switch (telaAtiva) {
      case 'Sobre Nós':
        return <SobreNos />;
      case 'Contato':
        return <Contato />;
      case 'Lanches':
      default:
        return <ListaProdutos />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#e50021" barStyle="light-content" />
      <Header telaAtiva={telaAtiva} setTelaAtiva={setTelaAtiva} />
      <View style={styles.conteudo}>{renderizarTela()}</View>
      <EntregaFlutuante />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffe18c',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  conteudo: {
    flex: 1,
    backgroundColor: '#ffe18c',
  },
});