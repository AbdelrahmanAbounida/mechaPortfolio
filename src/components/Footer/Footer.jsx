import s from './Footer.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaLinkedinIn,
} from 'react-icons/fa';

import {SiUpwork} from 'react-icons/si'

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h3>Designed and Developed by Abdelrahman Abounida</h3>
        </div>

        <div className={s.copyright}>
          <h3>© {year} Aboneda</h3>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://github.com/AbdelrahmanAbounida"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
    
            <li>
              <a
                href="https://www.upwork.com/freelancers/~0116c9456260b794ca"
                target="_blank"
                rel="noreferrer"
              >
                <SiUpwork size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/abdelrahman-yousef-32464a175/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
