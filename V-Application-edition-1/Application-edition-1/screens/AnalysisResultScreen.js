import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AnalysisResultScreen = ({ navigation }) => {
  const handleDownloadReport = () => {
    // Implement report download functionality
    alert('Report download functionality would be implemented here');
  };

  const handleFeedback = () => {
    navigation.navigate('Feedback');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.time}>12:30</Text>
      <Text style={styles.title}>Analysis Result</Text>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>
          Compliant with Selected Legal Framework.
        </Text>
        <Text style={styles.resultText}>
          No issues of non-compliance have been detected in your submission. You may proceed with confidence, knowing that your content is compliant.
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleDownloadReport}>
        <Text style={styles.buttonText}>Download Report</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.feedbackButton} onPress={handleFeedback}>
        <Text style={styles.feedbackButtonText}>Provide Feedback</Text>
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
  time: {
    fontSize: 16,
    color: '#888',
    textAlign: 'right',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  resultText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
    lineHeight: 26,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  feedbackButton: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  feedbackButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AnalysisResultScreen;