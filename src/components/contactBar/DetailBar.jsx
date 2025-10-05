import styled from 'styled-components';
import { Phone, Mail, MapPin } from 'react-feather';

const DetailsBarWrapper = styled.div`
  background-color: #1a1a1a;
  border-radius: 10px;
  padding: 50px 25px 100px 25px;
  flex: 1;
  max-width: 300px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 900px) {
    max-width: 100%;
    margin-bottom: 25px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 22px;
  margin-top: -15px;
  margin-bottom: 20px;
  color: #ffffff;
  border-bottom: 2px solid #fc00ff;
  padding-bottom: 10px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
`;

const IconWrapper = styled.div`
  margin-right: 12px;
  color: #00dbde;
`;

const Text = styled.div`
  font-size: 15px;
  color: #dddddd;
  word-break: break-word;
`;

const DetailsBar = () => {
  return (
    <DetailsBarWrapper>
      <SectionTitle>Información de Contacto</SectionTitle>

      <ContactItem>
        <IconWrapper><Phone size={18} /></IconWrapper>
        <Text>+34 649 193 888</Text>
      </ContactItem>

      <ContactItem>
        <IconWrapper><Mail size={18} /></IconWrapper>
        <Text>Josemaria.ramirez.dev@gmail.com</Text>
      </ContactItem>

      <ContactItem>
        <IconWrapper><MapPin size={18} /></IconWrapper>
        <Text>Jerez de la Frontera (Cádiz), España</Text>
      </ContactItem>

    </DetailsBarWrapper>
  );
};

export default DetailsBar;
