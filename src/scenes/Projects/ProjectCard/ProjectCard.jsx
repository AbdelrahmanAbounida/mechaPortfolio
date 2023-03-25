import s from './ProjectCard.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Button } from '@mui/material';

const ProjectCard = ({ id, image, title, description }) => {
  const location = useLocation();

  return (
    <li className={s.card}>
      <div className={s.cardWrapper}>
      <Link
          to={`/project/${id}`}
          state={{ background: location }}
        >
          <LazyLoadImage
            alt="card-img"
            effect="blur"
            src={image.src}
            width="100%"
            style={{ height: '12rem' }}
            placeholderSrc={image.placeholderSrc}
          />
        
        </Link>
        <div className={s.cardBody}>
          <h3 className={s.title}>{title}</h3>
          <p className={s.description}>{description}</p>
        </div>
        {/* <Button variant='contained' className={s.button}>
        <Link
          to={`/project/${id}`}
          state={{ background: location }}
        >
          More details
          </Link>
        </Button> */}

      </div>
    </li>
  );
};

export default ProjectCard;
