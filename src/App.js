import { useEffect, useState } from 'react'
import ProjectCard from './modules/projectCard'
import { yamlParser } from './utils'
import Header from './header'
import Footer from './footer'

function App() {

  const [projects, setProjects] = useState([])
  useEffect(() => {
    yamlParser('/assets/yamls/project.yaml')
      .then((res) => {
        // console.log(res)
        setProjects(res)
      })
  }, [])

  return (
    <>
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          {projects.map((project, i) => {
            console.log(project)
            return (
              <div className="col-md-4 col-xl-3 col-12 mt-3" key={i}>
                <ProjectCard {...project} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default App;
