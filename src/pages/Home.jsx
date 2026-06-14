import styled from 'styled-components'
import BubbleCell from '../components/BubbleCell'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  background-color: #000000;
  overflow: hidden;
  gap: 8px;
  padding: 8px;

  /* 모바일: 3열 x 5행 */
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);

  /* 태블릿 */
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 12px;
    padding: 12px;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }

  /* 데스크탑 */
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 16px;
    padding: 16px;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
`

const Home = () => {
  const totalCells = 35 // 7 x 5 (데스크탑 최대 기준)

  return (
    <Container>
      {Array.from({ length: totalCells }).map((_, i) => (
        <BubbleCell key={i} />
      ))}
    </Container>
  )
}

export default Home