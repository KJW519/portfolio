import { useState } from 'react'
import styled from 'styled-components'
import { projects } from '../data/project'
import ProjectModal from '../components/layout/ProjectModal'

const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`

const ListSection = styled.div`
  width: 100%;
  padding: 5rem 1rem 2rem;
  background-color: #FFFFFF;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 60%;
    height: 100vh;
    overflow-y: auto;
    border-right: 1px solid ${({ theme }) => theme.colors.border};
    padding: 5rem 1.5rem 2rem;
  }
`

const DetailSection = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 100vh;
    overflow: hidden;
  }
`

const DetailImageArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 5rem 1.5rem 0;
`

const DetailFooter = styled.div`
  flex-shrink: 0;
  padding: 1rem 1.5rem 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
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
  gap: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`

const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
  opacity: ${({ $active }) => ($active ? 1 : 0.6)};
  transition: opacity 0.2s ease;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    &:hover {
      opacity: 1;
    }
  }
`

const PosterWrapper = styled.div`
  width: 100%;
  aspect-ratio: 2 / 3;
  overflow: hidden;
  border-radius: 4px;
`

const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
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

const DetailPoster = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`

const DetailTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`

const DetailMeta = styled.p`
  font-size: 0.85rem;
  color: #777777;
`

const DetailDescription = styled.p`
  font-size: 0.7rem;
  line-height: 1.6;
  color: #333333;
  margin-top: 1rem;
`

const DetailMetaList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  font-size: 0.85rem;
  color: #777777;
  margin-top: 0.75rem;
`

const EmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #AAAAAA;
  font-size: 0.9rem;
`

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeProject, setActiveProject] = useState(projects[0] || null)

  const handleClick = (project) => {
    setSelectedProject(project)
    setActiveProject(project)
  }

  return (
    <PageWrapper>
      <ListSection>
        <Title>Work</Title>
        <List>
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              $active={activeProject?.id === project.id}
              onClick={() => handleClick(project)}
            >
              <PosterWrapper>
                <Poster src={project.images[0]} alt={project.title} />
              </PosterWrapper>
              <Info>
                <ProjectTitle>{project.title}</ProjectTitle>
                <span>{project.category} · {project.year}</span>
              </Info>
            </ProjectItem>
          ))}
        </List>
      </ListSection>

      <DetailSection>
        {activeProject ? (
          <>
            <DetailImageArea>
              {activeProject.images.map((img, i) => (
                <DetailPoster key={i} src={img} alt={`${activeProject.title} ${i + 1}`} />
              ))}
            </DetailImageArea>
            <DetailFooter>
              <DetailTitle>{activeProject.title}</DetailTitle>
              <DetailMeta>{activeProject.category} · {activeProject.year}</DetailMeta>
              <DetailDescription>{activeProject.description}</DetailDescription>
              <DetailMetaList>
                <span>Tools: {activeProject.tools}</span>
                <span>Size: {activeProject.size}</span>
              </DetailMetaList>
            </DetailFooter>
          </>
        ) : (
          <EmptyState>프로젝트를 선택해주세요</EmptyState>
        )}
      </DetailSection>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </PageWrapper>
  )
}

export default Work