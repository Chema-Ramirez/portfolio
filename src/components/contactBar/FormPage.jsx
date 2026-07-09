import styled from 'styled-components';
import DetailsBar from '../components/DetailsBar';
import InputSide from '../components/InputSide';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  background-color: #f5f5f5; 
  padding-bottom: 50px;
  font-family: 'Poppins', sans-serif;
`;

const PageHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 0 20px; 
`;

const TextOne = styled.h1` 
  font-size: 32px;
  color: rgb(4, 4, 59);
  text-align: center;
  margin: 0;
  font-weight: 700;
`;

const TextTwo = styled.p`
  color: #555555; 
  font-size: 15px;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 35px;
`;

const FormContainer = styled.div`
  width: 80%; 
  max-width: 1100px; 
  background-color: #fff;
  padding: 40px; /* Padding uniforme */
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(100, 21, 173, 0.1); 
  display: flex;
  gap: 40px;

  @media (max-width: 900px) {
    width: 90%;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }
`;

const FormPage = () => {
  return (
    <PageWrapper>
      <PageHeadingWrapper>
        <TextOne>Contacto</TextOne>
        <TextTwo>¿Tienes alguna pregunta o comentario? Escríbeme un mensaje.</TextTwo>
      </PageHeadingWrapper>

      <FormContainer>
        <DetailsBar />
        <InputSide />
      </FormContainer>
    </PageWrapper>
  );
};

export default FormPage;