import styled from 'styled-components';
import { Phone, Mail, MapPin } from 'react-feather';

const DetailsBarWrapper = styled.div`
  background-color: #1a1a1a;
  border-radius: 10px;
  padding: 30px 25px; 
  flex: 1;
  max-width: 300px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); 

  @media (max-width: 900px) {
    max-width: 100%;
    margin-bottom: 25px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 22px;
  margin-top: 0;
  margin-bottom: 25px;
  color: #ffffff;
  border-bottom: 2px solid #fc00ff;
  padding-bottom: 10px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
  &:last-child {
    margin-bottom: 0; 
  }
`;

const IconWrapper = styled.div`
  margin-right: 15px; 
  color: #00dbde;
  display: flex;
  align-items: center; 
`;

const Text = styled.div`
  font-size: 15px;
  color: #dddddd;
  word-break: break-all; 
  line-height: 1.4;
`;

const LinkText = styled.a`
  font-size: 15px;
  color: #dddddd;
  text-decoration: none;
  word-break: break-all;
  line-height: 1.4;
  transition: color 0.2s ease;

  &:hover {
    color: #00dbde;
  }
`;

const DetailsBar = () => {
  return (
    <DetailsBarWrapper>
      <SectionTitle>Información de Contacto</SectionTitle>

      <ContactItem>
        <IconWrapper><Phone size={18} /></IconWrapper>
        <LinkText href="tel:+34649193888">+34 649 193 888</LinkText>
      </ContactItem>

      <ContactItem>
        <IconWrapper><Mail size={18} /></IconWrapper>
        <LinkText href="mailto:Josemaria.ramirez.dev@gmail.com">
          Josemaria.ramirez.dev@gmail.com
        </LinkText>
      </ContactItem>

      <ContactItem>
        <IconWrapper><MapPin size={18} /></IconWrapper>
        <Text>Jerez de la Fra. (Cádiz), España</Text>
      </ContactItem>
    </DetailsBarWrapper>
  );
};

export default DetailsBar;