import { useState } from 'react';


export default function LogicFilterBtns(props) {
  const [display, setDisplay] = useState(0);



  const All = () => {
    setDisplay(0);
  };

  const filtradoUx = () => {
    setDisplay(1);
  };

  const filtradoBranding = () => {
    setDisplay(2);
  }


  return (
    <div className='mx-auto'>
      <div className='flex space-x-4 justify-center pb-4 '>
        <button className='text-gray-400 outline outline-1 outline-gray-400 px-3 py-1 rounded-md hover:outline-gray-300 focus:outline-0 focus:ring-1 focus:ring-indigo-500' onClick={All}>
          Todo
        </button>
        <button className='text-gray-400 outline outline-1 outline-gray-400 px-3 py-1 rounded-md hover:outline-gray-300 focus:outline-0 focus:ring-1 focus:ring-indigo-500' onClick={filtradoUx}>
          UX | Frontend
        </button>
        <button className='text-gray-400 outline outline-1 outline-gray-400 px-3 py-1 rounded-md hover:outline-gray-300 focus:outline-0 focus:ring-1 focus:ring-indigo-500' onClick={filtradoBranding}>
          Branding
        </button>
      </div>
      <div>
        <div  style={{ display: display == 0 ? 'block' : 'none' }} >
            <ul className="flex flex-wrap justify-start px-4">
              {
                props.allPosts.map((project, index) => (
                  <li
                    key={index}
                    className="group text-gray-100  hover:cursor-pointer md:w-1/2 my-1 md:my-4"
                  >
                    <a
                      className="pointer rounded-md"
                      href={`/proyectos/${project.slug}`}
                    >
                      <div className="px-2 py-2">
                        <img
                          className="rounded-md"
                          src={project.data.image.src}
                          alt={project.data.image.alt}
                        />
                        <div className=" bottom-0 flex items-center space-x-2 pt-4 ml-2 lg:ml-0">
                          <div className="group-hover:text-gray-400 group-hover:outline group-hover:outline-1 group-hover:outline-blue-500 outline outline-1 outline-gray-300 p-1 rounded-md">
                            <p id="categoria">
                              {project.data.categoria.ux}
                              {project.data.categoria.branding}
                            </p>
                          </div>
                          <h3 className="group-hover:text-gray-400">{project.data.title}</h3>
                        </div>
                      </div>
                    </a>
                  </li>
                ))
              }
            </ul>
        </div>
        <div  style={{ display: display == 1 ? 'block' : 'none' }}>
            <ul className="flex flex-wrap justify-start mx-0 px-4 items-start" slot="Ux">
              {
                props.ux.map((project, index) => (
                  <li
                    key={index}
                    className="project text-gray-100  hover:cursor-pointer md:w-1/2 my-1 md:my-4"
                  >
                    <a
                      className="pointer rounded-md"
                      href={`/proyectos/${project.slug}`}
                    >
                      <div className="px-2 py-2">
                        <img
                          className="rounded-md"
                          src={project.data.image.src}
                          alt={project.data.image.alt}
                        />
                        <div className=" bottom-0 flex items-center space-x-2 pt-4 ml-2 lg:ml-0">
                          <div className="o outline outline-1 outline-gray-300 p-1 rounded-md">
                            <p id="categoria">
                              {project.data.categoria.ux}
                            </p>
                          </div>
                          <h3 className="title">{project.data.title}</h3>
                        </div>
                      </div>
                    </a>
                  </li>
                ))
              }
            </ul>
        </div>
        <div style={{ display: display == 2 ? 'block' : 'none' }}>
            <ul className="flex flex-wrap justify-start mx-0 px-4 items-start" slot="Branding">
              {
                props.branding.map((item, index) => (
                  <li
                    key={index}
                    className="project text-gray-100  hover:cursor-pointer md:w-1/2 my-1 md:my-4"
                  >
                    <a
                      className="pointer rounded-md"
                      href={`/proyectos/${item.slug}`}
                    >
                      <div className="px-2 py-2">
                        <img
                          className="rounded-md"
                          src={item.data.image.src}
                          alt={item.data.image.alt}
                        />
                        <div className=" bottom-0 flex items-center space-x-2 pt-4 ml-2 lg:ml-0">
                          <div className="o outline outline-1 outline-gray-300 p-1 rounded-md">
                            <p id="categoria">
                              {item.data.categoria.branding}
                            </p>
                          </div>
                          <h3 className="title">{item.data.title}</h3>
                        </div>
                      </div>
                    </a>
                  </li>
                ))
              }
            </ul>
        </div>
      </div>
    </div>
  );
}