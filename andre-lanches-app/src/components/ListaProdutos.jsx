import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import BannerPromocao from './BannerPromocao.jsx';

const PRODUTOS = [
  {
    id: '1',
    nome: 'X-Salada',
    descricao: 'Pão macio, hambúrguer suculento, queijo, alface e tomate fresco.',
    preco: 'R$ 8,00',
    imagem: require('../../assets/xsalada.jpg'),
  },
  {
    id: '2',
    nome: 'Cheddar',
    descricao: 'Hambúrguer artesanal coberto com muito queijo cheddar cremoso.',
    preco: 'R$ 17,00',
    imagem: require('../../assets/cheddar.jpg'),
  },
  {
    id: '3',
    nome: 'Batata Frita',
    descricao: 'Porção crocante e sequinha, temperada na medida certa.',
    preco: 'R$ 7,00',
    imagem: require('../../assets/batata.jpg'),
  },
  {
    id: '4',
    nome: 'X-Burguer',
    descricao: 'O clássico tradicional com pão, carne e queijo derretido.',
    preco: 'R$ 1,50',
    imagem: require('../../assets/cheese.jpg'),
  },
  {
    id: '5',
    nome: 'Big Tower',
    descricao: 'Torre dupla de hambúrguer, queijo, bacon e molho especial.',
    preco: 'R$ 20,50',
    imagem: require('../../assets/bigtower.jpg'),
  },
  {
    id: '6',
    nome: 'X-Frango',
    descricao: 'Filé de frango grelhado com requeijão cremoso e salada.',
    preco: 'R$ 12,90',
    imagem: require('../../assets/fragonrequeijao.jpg'),
  },
  {
    id: '7',
    nome: 'Nuggets (c/ 8)',
    descricao: 'Oito unidades crocantes de frango empanado dourado.',
    preco: 'R$ 6,50',
    imagem: require('../../assets/nuggets.jpg'),
  },
  {
    id: '8',
    nome: 'Refri (Lata)',
    descricao: 'Refrigerante gelado 350ml (diversos sabores disponíveis).',
    preco: 'R$ 4,50',
    imagem: require('../../assets/refri.jpg'),
  },
  {
    id: '9',
    nome: 'Sucos (Vários Sabores)',
    descricao: 'Suco natural refrescante preparado na hora.',
    preco: 'R$ 8,50',
    imagem: require('../../assets/sucos.jpg'),
  },
];

export default function ListaProdutos() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.imagem} style={styles.imagemProduto} />
      <View style={styles.infoProduto}>
        <Text style={styles.nomeProduto}>{item.nome}</Text>
        <Text style={styles.descricaoProduto}>{item.descricao}</Text>
        <Text style={styles.precoProduto}>{item.preco}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={PRODUTOS}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.listaContainer}
      ListHeaderComponent={
        <View>
          <BannerPromocao
            titulo="Promoção!"
            descricao="X-Salada + Batata"
            preco="R$ 9,90"
          />
          <Text style={styles.tituloSecao}>Nossos Lanches</Text>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  listaContainer: {
    paddingBottom: 110,
  },
  tituloSecao: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e50021',
    textAlign: 'center',
    marginBottom: 12,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#e50021',
  },
  imagemProduto: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 2,
    borderColor: '#e50021',
    marginRight: 14,
  },
  infoProduto: {
    flex: 1,
  },
  nomeProduto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e50021',
    marginBottom: 4,
  },
  descricaoProduto: {
    fontSize: 13,
    color: '#555555',
    marginBottom: 6,
  },
  precoProduto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1b5e20',
  },
});