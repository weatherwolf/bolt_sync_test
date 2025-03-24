import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Sun as Run, Dumbbell, Bike, SwissFranc as Swim, Plus } from 'lucide-react-native';

const workoutTypes = [
  { icon: Run, label: 'Running', color: '#ef4444' },
  { icon: Dumbbell, label: 'Strength', color: '#3b82f6' },
  { icon: Bike, label: 'Cycling', color: '#10b981' },
  { icon: Swim, label: 'Swimming', color: '#6366f1' },
];

export default function Track() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Track Workout</Text>
        <Text style={styles.subtitle}>What are you doing today?</Text>
      </View>

      <View style={styles.grid}>
        {workoutTypes.map((type, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <View style={[styles.iconContainer, { backgroundColor: type.color }]}>
              <type.icon size={32} color="#ffffff" />
            </View>
            <Text style={styles.cardLabel}>{type.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Start</Text>
        <TouchableOpacity style={styles.startButton}>
          <Plus size={24} color="#ffffff" />
          <Text style={styles.startButtonText}>Start Workout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    padding: 24,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#4b5563',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 12,
  },
  card: {
    width: '50%',
    padding: 12,
    alignItems: 'center',
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  section: {
    padding: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  startButton: {
    backgroundColor: '#3b82f6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
  },
  startButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 12,
  },
});