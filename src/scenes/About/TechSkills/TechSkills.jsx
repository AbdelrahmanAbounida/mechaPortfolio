import s from './TechSkills.module.scss';
import { Typography } from '@mui/material';

const TechSkills = () => {
  return (
    <ul className={s.container}>
    
      <li className={s.techIcon}>
        {/* <DiPython /> */}
        <Typography variant='h3'>Python</Typography>
      </li>
      <li className={s.techIcon}>
        <Typography variant='h3'>ROS</Typography>
      </li>
      <li className={s.techIcon}>
        <Typography variant='h3'>TensorFlow</Typography>
      </li>
      <li className={s.techIcon}>
        <Typography variant='h3'>React</Typography>
      </li>
      <li className={s.techIcon}>
          <Typography variant='h3'>Flask</Typography>
      </li>
      <li className={s.techIcon}>
          <Typography variant='h3'>Bootstrap</Typography>
      </li>
      <li className={s.techIcon}>
          <Typography variant='h3'>Django</Typography>
      </li>
      <li className={s.techIcon}>
        <Typography variant='h3'>Computer Vision</Typography>
      </li>
  
      <li className={s.techIcon}>
        <Typography variant='h3'>Raspberrypi/Arduino</Typography>
      </li>
    </ul>
  );
};

export default TechSkills;
