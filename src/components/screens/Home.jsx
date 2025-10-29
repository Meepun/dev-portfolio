export default function Home() {
  return (
    <section className="relative flex flex-col items-center justify-center h-full w-full text-center overflow-visible">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] md:w-[800px] md:h-[400px] bg-gradient-to-r from-[#1B065E] via-[#C29200] to-[#FCC8C2] rounded-full blur-3xl opacity-30 animate-pulse-slow scale-110" />
      </div>

      <div className="relative z-10 px-6">
        <h1 className="text-6xl md:text-7xl font-bold mb-2">RJ Dollesin</h1>
        <h3 className="text-2xl md:text-3xl font-bold mb-2">aka.</h3>
        <h1 className="text-6xl md:text-7xl text-yellow-400 font-bold mb-2 drop-shadow-[0_0_6px_rgba(194,146,0,0.8)]">
          Orfevressu
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mt-2">
          Software developer passionate about modern web tech.
        </p>
      </div>
    </section>
  );
}
