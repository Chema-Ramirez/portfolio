import styled from 'styled-components';

const InputSideWrapper = styled.form`
  width: 100%;
  max-width: 670px;
  padding: 20px;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
`;

const InputWrapper = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #ffffff;
  font-weight: 500;
  margin-bottom: 8px;
  font-size: 15px;
`;

const Input = styled.input`
  width: 100%;
  font-size: 1rem; /* usa rem en lugar de px */
  padding: 0.75rem;
  color: #ffffff;
  width: 80%;
  font-size: 16px;
  padding: 12px;
  border: 1.5px solid #00dbde;
  background-color: #1a1a1a;
  border-radius: 6px;
  outline: none;
  transition: border-color 0.3s ease;
  font-family: 'Poppins', sans-serif;

  &:focus {
    border-color: #fc00ff;
  }
`;

const MessageInput = styled.textarea`
  color: #ffffff;
  width: 85%;
  font-size: 16px;
  padding: 12px;
  border: 1.5px solid #00dbde;
  background-color: #1a1a1a;
  border-radius: 6px;
  resize: vertical;
  outline: none;
  transition: border-color 0.3s ease;
  min-height: 150px;
  font-family: 'Poppins', sans-serif;

  &:focus {
    border-color: #fc00ff;
  }
`;

const SubmitButton = styled.button`
  margin-top: 10px;
  background: linear-gradient(45deg, #fc00ff, #00dbde);
  border: none;
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  border-radius: 6px;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.85;
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
