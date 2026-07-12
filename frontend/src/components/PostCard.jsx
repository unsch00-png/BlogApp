import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-card)',
        borderRadius: 'var(--radius-lg)',
        padding: 20,
        marginBottom: 16,
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      }}
    >
      <span
        style={{
          display: 'inline-block',
          backgroundColor: 'var(--color-bg)',
          color: 'var(--color-primary)',
          fontSize: 12,
          fontWeight: 600,
          padding: '4px 10px',
          borderRadius: 20,
          marginBottom: 10,
        }}
      >
        {post.category || 'General'}
      </span>

      <h2 style={{ margin: '0 0 6px' }}>
        <Link to={`/post/${post._id}`} style={{ color: 'var(--color-text)' }}>
          {post.title}
        </Link>
      </h2>

      <p style={{ color: 'var(--color-text-light)', fontSize: 13, marginBottom: 10 }}>
        {new Date(post.createdAt).toLocaleDateString()} · {post.author}
      </p>

      <p style={{ color: 'var(--color-text)', lineHeight: 1.5 }}>
        {post.content.substring(0, 120)}...
      </p>

      <Link to={`/post/${post._id}`} style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: 14 }}>
        Read more →
      </Link>
    </div>
  );
}