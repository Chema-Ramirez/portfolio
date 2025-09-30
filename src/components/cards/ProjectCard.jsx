import styled from 'styled-components';

const ProjectCard = ({ title, description, linkGithub, linkLinkedin, thumbnail }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <img src={thumbnail} alt={`${title} thumbnail`} className="thumbnail" />
        <div className="content">
          <p className="heading">{title}</p>
          <p>{description}</p>
          <div className="links">
            <a href={linkGithub} target="_blank" rel="noopener noreferrer" className="github">
              Ver en GitHub
            </a>
            <a href={linkLinkedin} target="_blank" rel="noopener noreferrer" className="linkedin">
              Ver en LinkedIn
            </a>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    z-index: 1;
    width: 300px;
    background-color: #000;
    border-radius: 8px;
    overflow: visible;
    cursor: default;
    color: white;
    user-select: none;
    display: flex;
    height:90%;
    flex-direction: column;
    box-shadow: 0 0 15px rgba(232, 27, 255, 0.7);
    transition: transform 0.3s ease;
    margin: 16px;
    font-family: 'Poppins', sans-serif;
  }

  .card:hover {
    transform: scale(1.05);
  }

  .thumbnail {
  width: calc(100% - 32px); /* 100% menos 16px a cada lado */
  height: 180px;
  object-fit: cover;
  margin: 0 auto; /* centra la imagen */
  border-radius: 6px;
  display: block;
}

  .content {
    padding: 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color:  #000;
  }

  .heading {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 8px;
    text-transform: capitalize;
    color: #000;
  }

  p:not(.heading) {
    font-size: 14px;
    margin-bottom: 12px;
    flex-grow: 1;
    color: #000;
  }

  .links {
  color: #000;
    display: flex;
    gap: 12px;
  }

  .links a {
    background-color: #3C3C3C;
     color: #fff;
    font-weight: 600;
    font-size: 14px;
    text-decoration: none;
    border: 1.5px solid #e81cff;
    padding: 6px 12px;
    border-radius: 6px;
    border-color: #000;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .links a:hover {
    background-color: #000;
    color: #40c9ff;
  }

  /* Gradientes y efectos de fondo como antes */
  .card::before {
    content: '';
    position: absolute;
    top: -25px;
    width: 300px; 
    height: 480px; 
    border-radius: 60px;
    background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%);
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card::after {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }

  .card:hover::after {
    filter: blur(30px);
  }

  .card:hover::before {
    transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
  }

  /* Responsive */
  @media (max-width: 600px) {
    .card {
      width: 100%;
    }

  }
`;

export default ProjectCard;
