import { useState } from 'react';
import styled from 'styled-components';


{/* Estilo de componentes */ }
const InputSideWrapper = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 20px;
  margin: 0 auto;
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
  color: #ffffff;
  width: 100%;
  font-size: 16px;
  padding: 12px;
  border: 1.5px solid #00dbde;
  background-color: #1a1a1a;
  border-radius: 6px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #fc00ff;
  }
`;

const MessageInput = styled.textarea`
  color: #ffffff;
  width: 100%;
  font-size: 16px;
  padding: 12px;
  border: 1.5px solid #00dbde;
  background-color: #1a1a1a;
  border-radius: 6px;
  resize: vertical;
  outline: none;
  transition: border-color 0.3s ease;
  min-height: 150px;

  &:focus {
    border-color: #fc00ff;
  }
`;

// --- NeonButton Component ---

const NeonButton = ({ loading }) => {
    return (
        <StyledWrapper>
            <button
                className="button button-item"
                type="submit"
                disabled={loading}
            >
                <span className="button-bg">
                    <span className="button-bg-layers">
                        <span className="button-bg-layer button-bg-layer-1 -purple" />
                        <span className="button-bg-layer button-bg-layer-2 -turquoise" />
                        <span className="button-bg-layer button-bg-layer-3 -yellow" />
                    </span>
                </span>
                <span className="button-inner">
                    <span className="button-inner-static">
                        {loading ? 'Enviando...' : 'Enviar mensaje'}
                    </span>
                    <span className="button-inner-hover">
                        {loading ? 'Enviando...' : 'Enviar mensaje'}
                    </span>
                </span>
            </button>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;

  button {
    all: unset;
  }

  .button {
    position: relative;
    display: inline-flex;
    height: 3.5rem;
    align-items: center;
    border-radius: 9999px;
    padding: 0 2rem;
    font-family: 'Segoe UI', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: #fafaf6;
    cursor: pointer;
  }

  .button-item {
    background-color: transparent;
  }

  .button-inner,
  .button-inner-hover,
  .button-inner-static {
    pointer-events: none;
    display: block;
  }

  .button-inner {
    position: relative;
  }

  .button-inner-hover {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transform: translateY(70%);
  }

  .button-bg {
    overflow: hidden;
    border-radius: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00dbde;
    transform: scale(1);
    transition: transform 1.8s cubic-bezier(0.19, 1, 0.22, 1);
  }

  .button-bg-layers {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: -60%;
    aspect-ratio: 1 / 1;
    width: max(200%, 10rem);
  }

  .button-bg-layer {
    border-radius: 9999px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale(0);
  }

  .button-bg-layer.-purple {
    background-color: #00dbde;
  }

  .button-bg-layer.-turquoise {
    background-color: #127275ff;
  }

    .button-bg-layer.-turquoise {
    background-color: #832485ff;
  }

  .button-bg-layer.-yellow {
    background-color: #fc00ff;
  }

  .button:hover .button-inner-static {
    opacity: 0;
    transform: translateY(-70%);
    transition: transform 1.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s linear;
  }

  .button:hover .button-inner-hover {
    opacity: 1;
    transform: translateY(0);
    transition: transform 1.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 1.4s cubic-bezier(0.19, 1, 0.22, 1);
  }

  .button:hover .button-bg-layer {
    transition: transform 1.3s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s linear;
  }

  .button:hover .button-bg-layer-1 {
    transform: scale(1);
  }

  .button:hover .button-bg-layer-2 {
    transition-delay: 0.1s;
    transform: scale(1);
  }

  .button:hover .button-bg-layer-3 {
    transition-delay: 0.2s;
    transform: scale(1);
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

{/* Componente Principal */ }

const InputSide = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        const response = await fetch('https://formspree.io/f/<your-form-id>', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        setLoading(false);

        if (response.ok) {
            alert('Formulario enviado con éxito!');
            setFormData({ name: '', email: '', phone: '', message: '' });
        } else {
            alert('Error al enviar el formulario. Intenta de nuevo.');
        }
    };

    return (
        <InputSideWrapper onSubmit={handleSubmit}>
            <InputWrapper>
                <Label htmlFor="name">Nombre</Label>
                <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.phone}
                    onChange={handleChange}
                />
            </InputWrapper>

            <InputWrapper>
                <Label htmlFor="message">Mensaje</Label>
                <MessageInput
                    id="message"
                    name="message"
                    placeholder="Escribe tu mensaje aquí"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </InputWrapper>

            <NeonButton loading={loading} />
        </InputSideWrapper>
    );
};

export default InputSide;
