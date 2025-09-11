const Video = ({url, className}:{url:string, className?: string}) => {
  return (
    <video
      className={`absolute top-0 left-0 w-full h-full object-cover object-bottom z-0 ${className}`}
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag
    </video>
  );
};

export default Video;
