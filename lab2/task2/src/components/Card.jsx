
export default function Card({ title, children, className = "" }) {
    return (
      <article className={`card ${className}`}>
        <h3>{title}</h3>
        {children}
      </article>
    );
  }
  