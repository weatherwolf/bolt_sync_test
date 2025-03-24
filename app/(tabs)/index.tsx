import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Heart, MessageCircle, Share2 } from 'lucide-react-native';

interface Post {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  workout: {
    type: string;
    duration: string;
    image: string;
  };
  likes: number;
  comments: number;
}

const posts: Post[] = [
  {
    id: 1,
    user: {
      name: 'Sarah Wilson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&q=80',
    },
    workout: {
      type: 'Morning Run 🏃‍♀️',
      duration: '45 minutes',
      image: 'https://images.unsplash.com/photo-1502904550040-7534597429ae?w=600&h=400&q=80',
    },
    likes: 128,
    comments: 24,
  },
  {
    id: 2,
    user: {
      name: 'Mike Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&q=80',
    },
    workout: {
      type: 'Weight Training 💪',
      duration: '1 hour',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&q=80',
    },
    likes: 256,
    comments: 42,
  },
];

function PostCard({ post }: { post: Post }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image source={{ uri: post.user.avatar }} style={styles.avatar} />
        <Text style={styles.userName}>{post.user.name}</Text>
      </View>
      
      <Image source={{ uri: post.workout.image }} style={styles.workoutImage} />
      
      <View style={styles.cardContent}>
        <Text style={styles.workoutType}>{post.workout.type}</Text>
        <Text style={styles.duration}>{post.workout.duration}</Text>
        
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton}>
            <Heart size={24} color="#374151" />
            <Text style={styles.actionText}>{post.likes}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <MessageCircle size={24} color="#374151" />
            <Text style={styles.actionText}>{post.comments}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <Share2 size={24} color="#374151" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default function Feed() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>FitShare</Text>
      </View>
      
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f5',
  },
  header: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e4e4e7',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userName: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  workoutImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 16,
  },
  workoutType: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  duration: {
    fontSize: 16,
    color: '#4b5563',
    marginBottom: 16,
  },
  actions: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#e4e4e7',
    paddingTop: 16,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  actionText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#374151',
  },
});