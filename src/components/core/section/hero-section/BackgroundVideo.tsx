const BackgroundVideo = () => (
  <>
    {/* Potrait (mobile) */}
    <video
      className="absolute top-0 left-0 w-full h-full object-cover object-bottom z-0 block md:hidden"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/videos/video-header-potrait.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Landscape (desktop) */}
    <video
      className="absolute top-0 left-0 w-full h-full object-cover object-bottom z-0 hidden md:block"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/videos/video-header-landscape.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </>
);

export default BackgroundVideo