import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';

export default function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleEnviar = () => {
    if (!nome.trim() || !email.trim() || !mensagem.trim()) {
      Alert.alert('Campos obrigatórios', 'Por favor, preencha todos os campos antes de enviar.');
      return;
    }

    Alert.alert(
      'Mensagem Enviada!',
      `Obrigado pelo contato, ${nome}! Recebemos sua mensagem e responderemos em breve.`
    );

    setNome('');
    setEmail('');
    setMensagem('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Fale Conosco</Text>
        <Text style={styles.subtitulo}>
          Tem alguma dúvida, sugestão ou pedido especial? Envie sua mensagem abaixo:
        </Text>

        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome completo"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>E-mail ou WhatsApp</Text>
        <TextInput
          style={styles.input}
          placeholder="exemplo@email.com ou (11) 99999-9999"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Mensagem</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Escreva sua mensagem aqui..."
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          value={mensagem}
          onChangeText={setMensagem}
        />

        <TouchableOpacity style={styles.botao} onPress={handleEnviar} activeOpacity={0.85}>
          <Text style={styles.textoBotao}>Enviar Mensagem</Text>
        </TouchableOpacity>
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
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e50021',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 14,
    color: '#555555',
    textAlign: 'center',
    marginBottom: 18,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#fff9e6',
    borderWidth: 1.5,
    borderColor: '#e50021',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    marginBottom: 14,
    color: '#222222',
  },
  textArea: {
    height: 100,
  },
  botao: {
    backgroundColor: '#e50021',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 4,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});