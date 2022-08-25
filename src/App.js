import oceanImage from "./Oceanimage.jpg";
import { ReactComponent as ReactLogo } from "./react-brands.svg";
import{ReactComponent as Csslogo} from "./css3-brands.svg";
import{ReactComponent as HtmlLogo} from "./html5-brands.svg";
import{ReactComponent as Javascript} from "./square-js-brands.svg";
import{ReactComponent as Github} from "./github-brands.svg";

function App() {

  const backgroundImageStyle = {
    backgroundImage: `url("${oceanImage}")`,
    backgroundSize: "cover",
  }

  const url = 'https://www.linkedin.com/in/nicolas-cozzo-saravia-3a1074129/'

  const url2 = 'https://github.com/Nicozzo'


  return (
  <div className="App">
    <div className=" text-white " style = {backgroundImageStyle}>
      <div className="bg-gradient-to-r from-black px-8 py-16">
      <div className=" max-w-xl grid grid-cols-1 gap-8">
      <div className="w-12">
      <ReactLogo className="fill-white"/>
      </div>
      <h2 className="text-xl uppercase font-bold">Hey i'm Nico Cozzo!</h2>
      <h1 className="text-6xl font-bold">
        Software Engineer
      </h1>
      <p className="text-lg">
      I am a Frontend Developer with knowledge in Backend Development based in Montevideo, Uruguay.
      Strongly interesed in technical software solutions.
      </p>
      <button onClick={() => window.open(url, '_blank') } 
      className="bg-gradient-to-r from-pink-600 to-orange-600 py-3 px-6 text-lg rounded-md w-48">
        Get in Touch
      </button>
      </div>
      </div>
    </div>

    <div className="px-8 py-16">
      <div className="max-w-sm mb-16">
      <h2 className="text-5xl">Your next chapter, made possible by web technologies</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 text-slate-600">
        <div>

          <h3 className="text-2xl font-bold mb-2">Technologies</h3>
          <p className="text-lg">
          The technologies I use are geared towards 
          speed and scalability, 
          providing a reliable service.
          I provide consulting, development services and software solutions 
          using the latest technologies and Open Source Software customization.
          </p>

        </div>

          <div>
          <h3 className="text-2xl font-bold mb-2" >About me</h3>
          <p className="text-lg">
            I love to code and learn new technologies every day.
            In my free time beside work 
            I like to hangout with my friends, play football and surf.
            Nice to meet you!
          </p>
          </div>
        </div>
    </div>
    <div className="bg-gradient-to-r from-black px-8 py-16 to-slate-500">
      <div className ="grid grid-cols-2 gap-4 place-content-stretch h-48">
        <div className="w-12"><ReactLogo className="fill-blue-500"/></div>
        <div className="w-12"><HtmlLogo className="fill-blue-500"/></div>
        <div className="w-12"><Csslogo className="fill-blue-500"/></div>
        <div className="w-12"><Javascript className="fill-blue-500"/></div>
        <div>
          <h1 className="text-1xl uppercase font-bold text-gray-50"> Visit my github!</h1>
          <div onClick={() => window.open(url2, '_blank') }
          className="w-12"><Github className="fill-blue-500" /></div>
        </div>
    </div>
    </div> 
  </div>
  );
}

export default App;
