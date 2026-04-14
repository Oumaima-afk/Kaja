import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>KAJA</Text>
      <Text style={styles.subtitle}>Organisez. Sortez. Profitez.</Text>

      {/* On prépare les futurs boutons ici */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonPrimary}>
          <Text style={styles.buttonTextPrimary}>M'inscrire</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0630',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#e6f9af',
    fontSize: 48,
    fontWeight: 'bold',
    letterSpacing: 4,
  },
  subtitle: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
    opacity: 0.8,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 50,
  },
  buttonPrimary: {
    backgroundColor: '#e6f9af',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonTextPrimary: {
    color: '#0d0630',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
