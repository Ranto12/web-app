const LandingSection = () => {
  return (
    <div className="relative w-full h-[50vh] md:h-[75vh] lg:h-[80vh]">
      <video
        className={`absolute top-0 left-0 w-full h-full object-cover object-bottom z-0 lg:max-w-[1110px] lg:rounded-2xl lg:left-1/2 lg:transform lg:-translate-x-1/2`}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/video-section-tengah.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="layout-main">
        <div className="relative z-10 mt-8 space-y-4 w-full md:top-6 md:flex md:flex-col md:items-center">
          <h1 className="text-2xl font-bold text-center md:text-[52px] md:font-semibold">
            Bangun Kebiasan Sehat
          </h1>
          <p className="dark-gray text-sm text-center md:text-base md:font-medium md:max-w-[680px] lg:max-w-[750px]">
            Dengan KPoin, kamu ga hanya dapat poin dari belanja produk
            kesehatan, tapi juga bisa bikin pola hidup kamu lebih sehat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
