import {logo} from "../assets"

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center flex-row w-full mb-10 pt-3">
            <img src={logo} alt="The logo of the app" className="w-28 object-contain"/>
            <a href="https://github.com/Sebaspallero" target="_blank" rel="noreferrer" className="rounded-full border border-black bg-black py-1.5 px-5 text-sm text-white transition-all hover:bg-white hover:text-black">
                Github
            </a>
        </nav>
        <h1 className="head_text">
            Summarize Articles with <br/>
            <span className="orange_gradient"> OpenAI GPT-4</span>
        </h1>
        <h2 className="desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus sint distinctio ullam illum, qui cumque saepe doloribus ab quis alias veniam quaerat in quam eius vel, error consectetur, voluptas sit?
        </h2>
    </header>
  )
}

export default Hero