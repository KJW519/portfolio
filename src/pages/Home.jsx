import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Title = styled.h1`
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.primary};
`

const Home = () => {
  return (
    <Container>
      <Title>Home</Title>
    </Container>
  )
}

export default Home