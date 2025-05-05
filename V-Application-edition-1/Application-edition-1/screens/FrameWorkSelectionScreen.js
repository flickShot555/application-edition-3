import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, CheckBox } from 'react-native';

const frameworks = [
  { id: 1, name: 'National Constitution' },
  { id: 2, name: 'European Union Law' },
  { id: 3, name: 'Intellectual Property Law' },
  { id: 4, name: 'Criminal Law and Justice' },
  { id: 5, name: 'Anti-Discrimination Law' },
  { id: 6, name: 'Consumer Protection...' },
  { id: 7, name: 'United Nations Conve...' },
];

const FrameworkSelectionScreen = ({ navigation, route }) => {
  const [selectedFrameworks, setSelectedFrameworks] = useState([]);

  const toggleFramework = (frameworkId) => {
    if (selectedFrameworks.includes(frameworkId)) {
      setSelectedFrameworks(selectedFrameworks.filter(id => id !== frameworkId));
    } else {
      setSelectedFrameworks([...selectedFrameworks, frameworkId]);
    }
  };

  const handleConfirm = () => {
    navigation.navigate('AnalysisResult', {
      narrative: route.params.narrative,
      frameworks: selectedFrameworks,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ConstituCheck</Text>
      <Text style={styles.subtitle}>Select Legal Framework</Text>
      
      <ScrollView style={styles.listContainer}>
        {frameworks.map((framework) => (
          <View key={framework.id} style={styles.checkboxContainer}>
            <CheckBox
              value={selectedFrameworks.includes(framework.id)}
              onValueChange={() => toggleFramework(framework.id)}
            />
            <Text style={styles.label}>{framework.name}</Text>
          </View>
        ))}
      </ScrollView>
      
      <TouchableOpacity 
        style={[styles.button, selectedFrameworks.length === 0 && styles.disabledButton]}
        onPress={handleConfirm}
        disabled={selectedFrameworks.length === 0}
      >
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#555',
  },
  listContainer: {
    flex: 1,
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FrameworkSelectionScreen;