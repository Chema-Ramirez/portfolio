import styled from 'styled-components';
import DetailsBar from '../components/DetailsBar';
import InputSide from '../components/InputSide';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  background-color: whitesmoke;
  padding-bottom: 50px;
`;

const PageHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const TextOne = styled.b`
  font-size: 30px;
  color: rgb(4, 4, 59);
  text-align: center;
`;

const TextTwo = styled.p`
  color: rgb(4, 4, 34);
  font-size: 15px;
  text-align: center;
  margin-bottom: 30px;
`;

const FormContainer = styled.div`
  width: 70%;
  background-color: #fff;
  padding: 40px 20px 60px 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(100, 21, 173, 0.2);
  display: flex;
  gap: 40px;

  @media (max-width: 900px) {
    width: 90%;
    flex-direction: column;
    padding: 20px 10px 40px 10px;
  }
`;

const FormPage = () => {
  return (
    <PageWrapper>
      <PageHeadingWrapper>
        <TextOne>Contact US</TextOne>
        <TextTwo>Any Question or remarks? Just write us a message</TextTwo>
      </PageHeadingWrapper>
      <FormContainer>
        <DetailsBar />
        <InputSide />
      </FormContainer>
    </PageWrapper>
  );
};

export default FormPage;
