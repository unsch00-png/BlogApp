export default function Button({ children, onClick, type = 'button', variant = 'primary', style }) {
  const bg =
    variant === 'primary' ? 'var(--color-primary)' : variant === 'danger' ? 'var(--color-danger)' : 'transparent';
  const border = variant === 'outline' ? '1.5px solid var(--color-primary)' : 'none';
  const color = variant === 'outline' ? 'var(--color-primary)' : '#fff';

  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        backgroundColor: bg,
        color,
        border,
        padding: '10px 20px',
        borderRadius: 'var(--radius-md)',
        fontWeight: 600,
        fontSize: 14,
        ...style,
      }}
    >
      {children}
    </button>
  );
}