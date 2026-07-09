import styled from 'styled-components';

const ProjectCard = ({ title, description, linkGithub, linkLinkedin, thumbnail }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <img src={thumbnail} alt={`${title} thumbnail`} className="thumbnail" />
        <div className="content">
          <div>
            <p className="heading">{title}</p>
            <p className="description">{description}</p>
          </div>
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
    width: 100%;
    max-width: 300px;
    background-color: #0d0d0d; 
    border-radius: 8px;
    overflow: visible;
    cursor: default;
    color: #fff; 
    user-select: none;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 15px rgba(232, 27, 255, 0.4);
    transition: transform 0.3s ease;
    margin: 16px auto;
    font-family: 'Poppins', sans-serif;
    height: 400px; 
  }

  .card:hover {
    transform: scale(1.03);
  }

  .thumbnail {
    width: calc(100% - 32px);
    height: 150px;
    object-fit: cover;
    margin: 16px auto 0 auto; 
    border-radius: 12px; 
    display: block;
  }

  .content {
    padding: 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .heading {
    font-family: 'Poppins', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 8px;
    text-transform: capitalize;
    color: #fff; 
  }

  .description {
    font-size: 0.90rem;
    margin-bottom: 12px;
    color: #ccc; 
    line-height: 1.5;
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: auto; 
  }

  .links a {
    background-color: #1f1f1f;
    color: #fff;
    font-weight: 600;
    font-size: 0.85rem;
    text-decoration: none;
    border: 1.5px solid #333;
    padding: 6px 12px;
    border-radius: 6px;
    transition: all 0.3s ease;
    flex: 1; 
    text-align: center;
  }

  .links a:hover {
    background-color: #fff;
    color: #000;
    border-color: #fff;
  }

  /* Efectos de fondo flotantes */
  .card::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;
    height: 95%;
    border-radius: 8px;
    background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%);
    z-index: -2;
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
    opacity: 0.6;
  }

  .card:hover::after {
    filter: blur(25px);
    opacity: 0.9;
  }

  .card:hover::before {
    transform: rotate(-3deg) scale(1.05); 
  }

  /* Responsive */
  @media (max-width: 450px) {
    .card {
      max-width: 90%;
    }

    .thumbnail {
      width: calc(100% - 24px);
    }

    .links a {
      font-size: 0.8rem;
      padding: 8px 4px;
    }
  }
`;

export default ProjectCard;