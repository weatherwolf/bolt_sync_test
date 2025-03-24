import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TrendingUp, Clock, Flame, Award } from 'lucide-react-native';

const stats = [
  { icon: TrendingUp, label: 'Total Distance', value: '42.5 km', color: '#3b82f6' },
  { icon: Clock, label: 'Active Time', value: '5h 23m', color: '#10b981' },
  { icon: Flame, label: 'Calories', value: '2,847', color: '#ef4444' },
  { icon: Award, label: 'Achievements', value: '8', color: '#6366f1' },
];

export default function Stats() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Progress</Text>
        <Text style={styles.subtitle}>This Week</Text>
      </View>

      <View style={styles.statsGrid}>
        {stats.map((stat, index) => (
          <View key={index} style={styles.statCard}>
            <View style={[styles.iconContainer, { backgroundColor: stat.color }]}>
              <stat.icon size={24} color="#ffffff" />
            </View>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Activity Graph</Text>
        <View style={styles.graphPlaceholder}>
          <Text style={styles.placeholderText}>Activity visualization coming soon!</Text>
        </View>
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
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 12,
  },
  statCard: {
    width: '50%',
    padding: 12,
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 16,
    color: '#4b5563',
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
  graphPlaceholder: {
    height: 200,
    backgroundColor: '#f4f4f5',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#6b7280',
    fontSize: 16,
  },
});