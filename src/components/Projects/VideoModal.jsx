import { useEffect } from "react";

export default function VideoModal({ videoId, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

 const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`;
 const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
  return (
    <div
      className="
        fixed inset-0 
        bg-black/70 backdrop-blur-lg
        flex items-center justify-center
        px-4 z-[9999]
      "
      onClick={onClose}
    >
      {/* STOP CLICK BUBBLE */}
      <div
        onClick={e => e.stopPropagation()}
        className="
          relative
          w-full
          max-w-3xl
          lg:max-w-2xl
          aspect-video
          rounded-2xl
          border border-white/10
          bg-[#060119]/60
          backdrop-blur-xl
        "
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="
            absolute
            top-3
            right-3
            z-10
            w-8
            h-8
            rounded-full
            bg-white/10
            border border-white/20
            text-white
            text-lg
            flex items-center justify-center
            hover:bg-white/20
            transition
          "
        >
          ✕
        </button>

        <iframe
          src={embedUrl}
          className="w-full h-full rounded-2xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />

        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 right-4 text-xs text-white/70 underline"
        >
          Watch on YouTube
        </a>
      </div>
    </div>
  );
}
