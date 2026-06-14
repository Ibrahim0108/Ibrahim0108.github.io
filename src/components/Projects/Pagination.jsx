export function Pagination({ page, totalPages, setPage }) {
  return (
    <div className="flex items-center gap-5">
      <button
        disabled={page === 0}
        onClick={() => setPage(p => p - 1)}
        className="text-gray-400 hover:text-white disabled:opacity-30"
      >
        ◀
      </button>

      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          onClick={() => setPage(i)}
          className={`
            w-3 h-3 rounded-full transition
            ${
              page === i
                ? "bg-purple-400 shadow-[0_0_12px_rgba(160,100,255,0.9)]"
                : "bg-white/20 hover:bg-white/40"
            }
          `}
        />
      ))}

      <button
        disabled={page === totalPages - 1}
        onClick={() => setPage(p => p + 1)}
        className="text-gray-400 hover:text-white disabled:opacity-30"
      >
        ▶
      </button>
    </div>
  );
}
