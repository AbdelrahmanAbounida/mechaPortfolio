import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Abdelrahman Aboneda </span>
        A master of Mechatronics Engineering Student (TUHH).
        In 2016, I graduated from Secondary School in the top 10 students (2nd) of the whole country , out of 600,000 students. I got 99.8% average (Math-branch).<br />
        After that, I got a full scholarship to study Engineering at the German university in Cairo andI  graduated with a bachelor's degree (honours-degree) in Mechatronics Engineering with GPA 1.03 (German scale). <br/>
        I have been working at different componeies , and research institutes
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> <span className={s.purple}>2018-2020</span> circuits Lab Tutor - <span className={s.purple}>(German University in Cairo)</span> <br />
          <ImPointRight /> <span className={s.purple}>2020</span> Digital Industry Internship - <span className={s.purple}>(Siemens)</span><br />
          <ImPointRight /> <span className={s.purple}>2022-2023</span> Software Design Lab - <span className={s.purple}>(TUHH)</span><br />
          <ImPointRight /> <span className={s.purple}>2022-2023</span> Computer Vision Research Assistant - <span className={s.purple}>(Fraunhofer)</span> <br/>
          <ImPointRight /> <span className={s.purple}>2022-2023</span> Mechatronics System - Student Assistant - <span className={s.purple}>(Helmut Schmidt University)</span>
        </li>

      </ul>


    </div>
  );
};

export default AboutTextCard;
