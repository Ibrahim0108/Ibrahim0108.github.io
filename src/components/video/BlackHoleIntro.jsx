import blackHole from "../../assets/videos/blackhole.webm";

export default function TopVideo() {
  return (
    <div
      className="
        top-0
        left-0
        w-full
        h-[200px]
        overflow-hidden
      "
    >
      <video
        src={blackHole}
        autoPlay
        loop
        muted
        playsInline
        className="
    absolute
    top-[-20px]
    left-0
    w-full
    h-auto
    object-cover
    mix-blend-lighten
    opacity-90
    sm:top-[-28px]     
    md:top-[-169px]     
    lg:top-[-212px]     
    xl:top-[-280px]   
    2xl:top-[-340px] 
  "
      />

      <div
        className="
      pointer-events-none
      absolute
      bottom-0
      left-0
      w-full
      h-24
      bg-gradient-to-b
      from-transparent
      to-[#060119]
    "
      />
    </div>
  );
}
