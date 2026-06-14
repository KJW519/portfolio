import { useEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'

const morph = keyframes`
  0%   { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  20%  { border-radius: 30% 70% 70% 30% / 30% 70% 30% 70%; }
  40%  { border-radius: 70% 30% 50% 50% / 40% 60% 40% 60%; }
  60%  { border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%; }
  80%  { border-radius: 50% 50% 30% 70% / 50% 50% 70% 30%; }
  100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
`

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #E8F0FE;
`

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Blob = styled.div`
  position: absolute;
  background: radial-gradient(circle at 30% 30%, #6FA8FF, #2563EB);
  filter: blur(2px);
  opacity: 0.8;
  will-change: transform;
  animation: ${morph} ${({ $duration }) => $duration}s ease-in-out infinite;
`

const BlobInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: inherit;
  animation: ${rotate} ${({ $duration }) => $duration * 3}s linear infinite;
`

const TitleWrap = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  pointer-events: none;
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #111111;
  mix-blend-mode: multiply;
`

const initialBlobs = [
  { size: 180, x: 60, y: 100, vx: 0.6, vy: 0.4, duration: 8 },
  { size: 240, x: 200, y: 300, vx: -0.5, vy: 0.5, duration: 10 },
  { size: 140, x: 80, y: 450, vx: 0.4, vy: -0.6, duration: 7 },
]

const Home = () => {
  const containerRef = useRef(null)
  const blobRefs = useRef([])
  const blobsData = useRef(initialBlobs.map((b) => ({ ...b })))

  useEffect(() => {
    let animationId

    const animate = () => {
      const container = containerRef.current
      if (!container) return

      const width = container.offsetWidth
      const height = container.offsetHeight

      blobsData.current.forEach((blob, i) => {
        blob.x += blob.vx
        blob.y += blob.vy

        if (blob.x <= 0 || blob.x + blob.size >= width) {
          blob.vx *= -1
          blob.x = Math.max(0, Math.min(blob.x, width - blob.size))
        }
        if (blob.y <= 0 || blob.y + blob.size >= height) {
          blob.vy *= -1
          blob.y = Math.max(0, Math.min(blob.y, height - blob.size))
        }

        const el = blobRefs.current[i]
        if (el) {
          el.style.transform = `translate(${blob.x}px, ${blob.y}px)`
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <Container ref={containerRef}>
      {initialBlobs.map((blob, i) => (
  <Blob
    key={i}
    $duration={blob.duration}
    ref={(el) => (blobRefs.current[i] = el)}
    style={{
      width: `${blob.size}px`,
      height: `${blob.size}px`,
    }}
  >
    <BlobInner $duration={blob.duration} />
  </Blob>
))}
      <TitleWrap>
        <Title>강준원</Title>
      </TitleWrap>
    </Container>
  )
}

export default Home