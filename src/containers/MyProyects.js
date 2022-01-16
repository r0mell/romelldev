import blog from '../assets/proyectImage/blog.png';
import cloneGoogle from '../assets/proyectImage/cloneGoogle.png';
import portafolio from '../assets/proyectImage/portafolio.png';
import tecnyAge from '../assets/proyectImage/tecnyAge.png';
import unick from '../assets/proyectImage/unick.png';


const proyects = [
   {
      id: 0,
      title: "TecnyAge",
      description: "Propuesta para la descripción de productos enfocados en tecnología.",
      image: tecnyAge,
      tasks: ["Angular", "BootStrap", "Node"],
      code: "https://github.com/r0mell/tecnyAge",
      source: "https://tecny-age.vercel.app/home"

   },
   {
      id: 1,
      title: "Mi blog Personal",
      description: "Blog personal donde redacto ideas y resumenes de libros de diferentes temas. ",
      image: blog,
      tasks: ["Html", "Css", "JavaScript"],
      code: "https://github.com/r0mell/bloguu",
      source: "https://r0mell.github.io/bloguu/"
   },
   {
      id: 2,
      title: "Clone Google",
      description: "Clone de la página principal de Google basado en su UI. ",
      image: cloneGoogle,
      tasks: ["React", "Css"],
      code: "https://github.com/r0mell/cloneGoogle",
      source: "https://clone-google-self.vercel.app/"
   },
   {
      id: 3,
      title: "Portafolio",
      description: "Mi portafolio creado con el objetivo de mostrar mi trabajo y donde puedan conocerme mejor.",
      image: portafolio,
      tasks: ["React", "Sass"],
      code: "https://github.com/r0mell/romelldev",
      source: "https://romelldev.vercel.app/"
   },
   {
      id: 4,
      title: "E-Commers Unick",
      description: "Aplicación web en desarrollo, enfocada en compra de productos personalizados.",
      image: unick,
      tasks: ["React", "Sass", "Node", "PrimeReact"],
      code: "https://github.com/r0mell/primeDashboard",
      source: ""
   },
]

export default proyects;