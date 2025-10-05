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
    width: 100%;
    max-width: 300px;
    background-color: #000;
    border-radius: 8px;
    overflow: visible;
    cursor: default;
    color: white;
    user-select: none;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 15px rgba(232, 27, 255, 0.7);
    transition: transform 0.3s ease;
    margin: 16px auto;
    font-family: 'Poppins', sans-serif;
    height: 90%;
  }

  .card:hover {
    transform: scale(1.03);
  }

  .thumbnail {
    width: calc(100% - 32px);
    height: auto;
    max-height: 200px;
    object-fit: cover;
    margin: 40px auto;
    border-radius: 80px;
    display: block;
  }

  .content {
  margin-top: -20px;
    padding: 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #000;
  }

  .heading {
  font-family: 'Poppins', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 8px;
    text-transform: capitalize;
    color: #000;
  }

  p:not(.heading) {
    font-size: 0.95rem;
    margin-bottom: 12px;
    color: #000;
    line-height: 1.5;
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
  }

  .links a {
    background-color: #3c3c3c;
    color: #fff;
    font-weight: 600;
    font-size: 0.85rem;
    text-decoration: none;
    border: 1.5px solid #000;
    padding: 6px 12px;
    border-radius: 6px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .links a:hover {
    background-color: #000;
    color: #40c9ff;
  }

  .card::before {
    content: '';
    position: absolute;
    top: 10px;
    width: 100%;
    height: 95%;
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
  @media (max-width: 450px) {
    .card {
      max-width: 70%;
      margin: 16px auto;
    }

    .thumbnail {
      width: 85%;
    }

    .heading {
      font-size: 1.2rem;
    }

    .links {
      justify-content: center;
    }

    .links a {
      font-size: 0.8rem;
      padding: 6px 5px;
    }
  }
`;

export default ProjectCard;
