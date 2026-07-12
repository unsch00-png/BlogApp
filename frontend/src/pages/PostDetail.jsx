import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import API from '../api';

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    const res = await API.get(`/posts/${id}`);
    setPost(res.data);
    setTitle(res.data.title);
    setContent(res.data.content);
    setCategory(res.data.category);
  };

  const handleUpdate = async () => {
    await API.put(`/posts/${id}`, { title, content, category });
    setEditing(false);
    fetchPost();
  };

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this post?')) {
      await API.delete(`/posts/${id}`);
      navigate('/');
    }
  };

  if (!post) return <p style={{ padding: 20 }}>Loading...</p>;

  return (
    <div style={{ padding: '32px 24px', maxWidth: 600, margin: '0 auto' }}>
      <Link
  to="/"
  style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    fontSize: 14,
    fontWeight: 600,
    color: '#1B2A4A',
    backgroundColor: '#fff',
    padding: '8px 14px',
    borderRadius: 8,
    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
  }}
>
  ← Back to all posts
</Link>

      {editing ? (
        <div className="card" style={{ marginTop: 20 }}>
          <h2 style={{ marginTop: 0 }}>Edit Post</h2>

          <label style={{ fontSize: 13, fontWeight: 600, color: '#6B7280' }}>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input"
          />

          <label style={{ fontSize: 13, fontWeight: 600, color: '#6B7280' }}>Category</label>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input"
          />

          <label style={{ fontSize: 13, fontWeight: 600, color: '#6B7280' }}>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={8}
            className="input"
          />

          <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
            <button onClick={handleUpdate} className="btn btn-primary" style={{ flex: 1 }}>
              Save Changes
            </button>
            <button onClick={() => setEditing(false)} className="btn btn-outline" style={{ flex: 1 }}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="card" style={{ marginTop: 20 }}>
          <span className="category-tag">{post.category || 'General'}</span>
          <h1 style={{ margin: '8px 0' }}>{post.title}</h1>
          <p style={{ color: '#6B7280', fontSize: 13, marginBottom: 16 }}>
            {new Date(post.createdAt).toLocaleDateString()}
          </p>
          <p style={{ lineHeight: 1.7, color: '#1A1A1A' }}>{post.content}</p>

          <div style={{ display: 'flex', gap: 10, marginTop: 24, borderTop: '1px solid #E5E7EB', paddingTop: 16 }}>
            <button onClick={() => setEditing(true)} className="btn btn-primary" style={{ flex: 1 }}>
              ✏️ Edit
            </button>
            <button onClick={handleDelete} className="btn btn-danger" style={{ flex: 1 }}>
              🗑️ Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}