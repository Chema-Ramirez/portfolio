import styled from 'styled-components';
import DetailsBar from '../components/contactBar/DetailBar';
import InputSide from '../components/contactBar/InputSide';

const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  color: #ffffff;
`;

const PageHeadingWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 36px;
  background: linear-gradient(45deg, #fc00ff, #00dbde);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
`;

const Subtitle = styled.p`
  color: #cccccc;
  font-size: 16px;
  max-width: 600px;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Contact = () => {
    return (
        <PageWrapper id="contact">
            <PageHeadingWrapper>
                <Title>Contáctame</Title>
                <Subtitle>¿Tienes alguna pregunta o comentario? ¡Escríbeme un mensaje!</Subtitle>
            </PageHeadingWrapper>
            <ContentWrapper>
                <DetailsBar />
                <InputSide />
            </ContentWrapper>
        </PageWrapper>
    );
};

export default Contact;
