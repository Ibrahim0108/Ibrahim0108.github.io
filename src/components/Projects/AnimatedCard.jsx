export function AnimatedCard({ children, index }) {
  return (
    <div
      style={{ animationDelay: `${index * 80}ms` }}
      className="
        opacity-0
        translate-y-6
        animate-card-in
      "
    >
      {children}
    </div>
  );
}
