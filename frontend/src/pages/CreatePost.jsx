import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert('Title aur Content zaroori hain');
      return;
    }

    try {
      await API.post('/posts', { title, content, category });
      navigate('/');
    } catch (err) {
      console.error('Error creating post:', err);
      alert('Post create nahi ho saka');
    }
  };

  return (
    <div style={{ padding: 24, maxWidth: 600, margin: '40px auto' }} className="card">
      <h1 style={{ marginTop: 0 }}>Create New Post</h1>
      <p style={{ color: '#6B7280', fontSize: 14, marginBottom: 20 }}>Share your thoughts with the world</p>
      <form onSubmit={handleSubmit}>
        <label style={{ fontSize: 13, fontWeight: 600, color: '#6B7280' }}>Title</label>
        <input
          type="text"
          placeholder="Enter a catchy title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
        />
        <label style={{ fontSize: 13, fontWeight: 600, color: '#6B7280' }}>Category</label>
        <input
          type="text"
          placeholder="e.g. Technology, Lifestyle"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="input"
        />
        <label style={{ fontSize: 13, fontWeight: 600, color: '#6B7280' }}>Content</label>
        <textarea
          placeholder="Write your content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={8}
          className="input"
        />
        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: 8 }}>
          Publish Post
        </button>
      </form>
    </div>
  );}