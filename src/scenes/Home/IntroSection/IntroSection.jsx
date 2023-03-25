import s from './IntroSection.module.scss';

import Tilt from 'react-parallax-tilt';
import { Box } from '@mui/material';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <Box sx={{display:"flex"}}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
              I fell in love with programming and I have at least
              learnt something, I think… 🤷‍♂️
            </p>

            <p>
              My field of Interest's are 
              <i>
                <b className={s.purple}>
                  {' '}
                  Robotics, Computer Vision and Web Developing
                </b>
              </i>
            </p>

            <p>
             I
              have an experience of building{' '}
              <i>
                <b className={s.purple}>Automation Systems using Raspberypi,Arduino,</b> other <br /> microcontrollers
              </i>{' '}
              I also implemented some custom computer vision systems (Yolo)<br />
              <i>
                <b className={s.purple}>
                  I have also a good experience in building complete control system using ROS 
                </b>
              </i>{' '}
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          {/* <LazyLoadImage alt="avatar" effect="blur" src={avatar} style={{width:"300px",paddingBottom:""}}/> */}
        </Tilt>
      </Box>

      
    </section>
  );
};

export default IntroSection;
