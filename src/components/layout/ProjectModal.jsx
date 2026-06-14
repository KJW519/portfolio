import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 200;
  background-color: rgba(0, 0, 0, 0.4);
`
const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: #333333;
  margin-bottom: 1rem;
`

const MetaList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  font-size: 0.85rem;
  color: #777777;
  margin-top: 0.5rem;
`

const Sheet = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 201;
  background-color: #FFFFFF;
  border-radius: 16px 16px 0 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`

const CloseButton = styled.button`
  position: sticky;
  top: 0.75rem;
  align-self: flex-end;
  margin-right: 0.75rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background-color: #F0F0F0;
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 10;
`

const DragHandle = styled.div`
  width: 40px;
  height: 4px;
  border-radius: 2px;
  background-color: #DDDDDD;
  margin: 0.75rem auto 0;
`

const Content = styled.div`
  padding: 0 1.25rem 2rem;
`

const Poster = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`

const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`

const Meta = styled.p`
  font-size: 0.85rem;
  color: #777777;
`

const ProjectModal = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <>
          <Overlay
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <Sheet
            key="sheet"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
            onDragEnd={(event, info) => {
              if (info.offset.y > 150) {
                onClose()
              }
            }}
          >
            <DragHandle />
            <CloseButton onClick={onClose}>✕</CloseButton>
<Content>
  {project.images.map((img, i) => (
    <Poster key={i} src={img} alt={`${project.title} ${i + 1}`} />
  ))}
  <Title>{project.title}</Title>
  <Meta>{project.category} · {project.year}</Meta>

  <Description>{project.description}</Description>

  <MetaList>
    <span>Tools: {project.tools}</span>
    <span>Size: {project.size}</span>
  </MetaList>
</Content>
          </Sheet>
        </>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal