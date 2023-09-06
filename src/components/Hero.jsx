import {logo} from "../assets"

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center flex-row w-full mb-10 pt-3">
            <div className="flex flex-row items-center justify-center gap-2">
                <img src={logo} alt="The logo of the app" className="w-8 h-8 object-contain"/>
                <h1 className="font-bold text-2xl ">Resumy</h1>
            </div>
            <a href="https://github.com/Sebaspallero" target="_blank" rel="noreferrer" className="rounded-full border border-black bg-black py-1.5 px-5 text-sm text-white transition-all hover:bg-white hover:text-black">
                Github
            </a>
        </nav>
        <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center">
        Resumí artículos con
            <br/>
            <span className="orange_gradient"> OpenAI GPT-4</span>
        </h1>
        <h2 className="mt-6 text-lg text-gray-600 sm:text-xl text-center max-w-2xl">
            Simplifique su lectura con Resumy, una herramienta para hacer resumenes con inteligencia artificial. Transforme artículos extensos en resúmenes claros y concisos con la ayuda de GPT-4 y consiga optimizar su tiempo.
        </h2>
    </header>
  )
}

export default Hero