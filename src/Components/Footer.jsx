const Footer = () => {
  return (
    <>
      <div className="w-full h-52 bg-gradient-to-b from-slate-800 to-black flex flex-col items-center justify-center">
        <p className="font-serif text-white">
          copyright &copy;
          <span id="date">{new Date().getFullYear()}</span>
        </p>
        <span className="text-black text-base">Mashwim</span>
      </div>
    </>
  );
};

export default Footer;
