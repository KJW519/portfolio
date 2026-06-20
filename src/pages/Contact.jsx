import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  padding: 5rem 1.5rem 4rem;
  background-color: #FFFFFF;
`

const PCLayout = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 4rem;
    align-items: start;
  }
`

const MobileLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`

const LeftPanel = styled.div`
  position: sticky;
  top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const Name = styled.h1`
  font-size: 1rem;
  font-weight: 700;
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`

const ContactLink = styled.a`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const RightPanel = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
`

const BioText = styled.p`
  font-size: 0.9rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.primary};
  word-break: keep-all;

  & + & {
    margin-top: 1.5rem;
  }
`

const MobileName = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
`

const MobileBio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const MobileContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 1rem;
`

const About = () => {
  const krBio = (
    <>
      <BioText>
        강준원은 그래픽 디자인을 공부하는 한동대학교 학부생이다. 시각적 표현과 디지털 기술의 접점을 탐구하며, 디자인이 사람의 감정과 경험에 어떠한 영향을 미칠 수 있는지에 관심을 두고 있다. 특히 타이포그래피, 편집 디자인, 웹 기반 인터랙션을 매개로 메시지를 효과적으로 전달하는 방법을 공부하고 있으며, 단순한 정보 전달을 넘어 관객과 상호작용하는 경험을 만드는 데 관심을 가지고 있다.
      </BioText>
      <BioText>
        주요 작업 분야는 그래픽 디자인, 편집 디자인, 인터랙티브 웹에 관심을 두고 공부하고 있으며, 디자인과 기술을 결합한 창의적인 결과물을 통해 사람들에게 새로운 경험과 인상을 남기는 디자이너가 되고자 한다.
      </BioText>
    </>
  )

  const enBio = (
    <>
      <BioText>
        Junwon Kang is an undergraduate student at Handong Global University studying graphic design. He explores the intersection of visual expression and digital technology, with a particular interest in how design can influence human emotion and experience. He is currently studying how to effectively communicate messages through typography, editorial design, and web-based interaction — with a focus on creating experiences that go beyond simple information delivery and engage audiences in meaningful ways.
      </BioText>
      <BioText>
        His main areas of interest include graphic design, editorial design, and interactive web. Through creative work that combines design and technology, he aspires to become a designer who offers people new experiences and lasting impressions.
      </BioText>
    </>
  )

  const contacts = (
    <>
      <ContactLink>jwkang519@gmail.com</ContactLink>
      <ContactLink>+82 10 5485 7681</ContactLink>
      <ContactLink href="https://www.instagram.com/kjw_519/" target="_blank" rel="noreferrer">@kjw.519</ContactLink>
    </>
  )

  return (
    <Container>
      {/* PC 레이아웃 */}
      <PCLayout>
        <LeftPanel>
          <Name>강준원</Name>
          <ContactInfo>
            {contacts}
          </ContactInfo>
        </LeftPanel>

        <RightPanel>
          <div>{krBio}</div>
          <div>{enBio}</div>
        </RightPanel>
      </PCLayout>

      {/* 모바일 레이아웃 */}
      <MobileLayout>
        <MobileName>강준원</MobileName>
        <MobileBio>
          {krBio}
          {enBio}
        </MobileBio>
        <MobileContact>
          {contacts}
        </MobileContact>
      </MobileLayout>
    </Container>
  )
}

export default About