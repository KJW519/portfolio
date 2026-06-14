import { useState } from 'react'
import styled from 'styled-components'
import { projects } from '../data/project'
import ProjectModal from '../components/layout/ProjectModal'

const Container = styled.div`
  min-height: 100vh;
  padding: 5rem 1rem 2rem;
  background-color: #FFFFFF;
`

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
`

const Poster = styled.img`
  width: 100%;
  border-radius: 4px;
`

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: #777777;
`

const ProjectTitle = styled.span`
  font-weight: 600;
  color: #111111;
`

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <Container>
      <Title>Work</Title>
      <List>
        {projects.map((project) => (
          <ProjectItem key={project.id} onClick={() => setSelectedProject(project)}>
            <Poster src={project.images[0]} alt={project.title} />
            <Info>
              <ProjectTitle>{project.title}</ProjectTitle>
              <span>{project.category} · {project.year}</span>
            </Info>
          </ProjectItem>
        ))}
      </List>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Container>
  )
}

export default Work