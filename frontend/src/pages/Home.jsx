import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../api';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await API.get('/posts');
      setPosts(res.data);
    } catch (err) {
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p style={{ padding: 20 }}>Loading posts...</p>;

  return (
    <div style={{ padding: '32px 24px', maxWidth: 700, margin: '0 auto' }}>
      <h1>Blog Posts</h1>
      

      {posts.length === 0 && (
  <div style={{ textAlign: 'center', marginTop: 60 }}>
    <p style={{ fontSize: 40, marginBottom: 10 }}>📝</p>
    <p style={{ fontSize: 16, fontWeight: 600, color: '#1A1A1A' }}>No posts yet</p>
    <p style={{ fontSize: 13, color: '#6B7280', marginTop: 4 }}>Click "+ New Post" to write your first blog</p>
  </div>
)}

      {posts.map((post) => (
        <div key={post._id} style={{ border: '1px solid #ddd', padding: 15, marginTop: 15, borderRadius: 8 }}>
          <h2>
            <Link to={`/post/${post._id}`}>{post.title}</Link>
          </h2>
          <p style={{ color: '#666', fontSize: 13 }}>
            {post.category} · {new Date(post.createdAt).toLocaleDateString()}
          </p>
          <p>{post.content.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}