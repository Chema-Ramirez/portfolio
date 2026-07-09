import styled from 'styled-components';

const InputSideWrapper = styled.form`
  width: 100%;
  max-width: 670px;
  padding: 10px 20px;
  font-family: 'Poppins', sans-serif;
`;

const InputWrapper = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #e0e0e0; 
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 14px;
  letter-spacing: 0.5px;
`;

const Input = styled.input`
  width: 100%; 
  font-size: 15px;
  padding: 12px;
  color: #ffffff;
  border: 1.5px solid #00dbde;
  background-color: #1a1a1a;
  border-radius: 6px;
  outline: none;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box; 

  &:focus {
    border-color: #fc00ff;
    box-shadow: 0 0 8px rgba(252, 0, 255, 0.2);
  }

  &::placeholder {
    color: #888888;
    opacity: 1;
  }
`;

const MessageInput = styled.textarea`
  width: 100%; 
  color: #ffffff;
  font-size: 15px;
  padding: 12px;
  border: 1.5px solid #00dbde;
  background-color: #1a1a1a;
  border-radius: 6px;
  resize: vertical;
  outline: none;
  transition: all 0.3s ease;
  min-height: 140px;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;

  &:focus {
    border-color: #fc00ff;
    box-shadow: 0 0 8px rgba(252, 0, 255, 0.2);
  }

  &::placeholder {
    color: #888888;
    opacity: 1;
  }
`;

const SubmitButton = styled.button`
  width: 100%; 
  margin-top: 10px;
  background: linear-gradient(45deg, #fc00ff, #00dbde);
  border: none;
  color: white;
  padding: 14px 24px;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.3s ease;

  &:hover {
    opacity: 0.95;
    transform: translateY(-1px);

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const InputSide = () => {
  return (
    <InputSideWrapper
      action="https://formspree.io/f/xwproylj"
      method="POST"
    >
      <InputWrapper>
        <Label htmlFor="name">Nombre</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Tu nombre"
          required
        />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="email">Correo electrónico</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="correo@ejemplo.com"
          required
        />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="phone">Teléfono</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+34 612 345 678"
        />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="message">Mensaje</Label>
        <MessageInput
          id="message"
          name="message"
          placeholder="Escribe tu mensaje aquí"
          required
        />
      </InputWrapper>

      <SubmitButton type="submit">Enviar mensaje</SubmitButton>
    </InputSideWrapper>
  );
};

export default InputSide;