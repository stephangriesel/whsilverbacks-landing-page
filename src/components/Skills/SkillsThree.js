import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import { useScroll } from '../useScroll';
import { fade } from '../../animation';

const SkillsThree = () => {
    const [element, controls] = useScroll();
    return (
        <div className='two-column-alt'>
            <div className='txt-box'>
                <h3>
                    Core <strong>Values</strong>
                </h3>
                <ul>
                    <li>Commitment to customers above all else</li>
                    <li>We can generate profit without acting unethically</li>
                    <li>Great just isn’t good enough</li>
                    <li>Connect with transparency, dignity and respect</li>
                    <li>Act with courage</li>
                    <li>Awareness of social and physical environment</li>
                    <li>We look beyond the present to deliver future value</li>
                </ul>
            </div>
            <motion.div
                className='img-box'
                variants={fade}
                initial='hidden'
                ref={element}
                animate={controls}
            >
                <StaticImage
                    src='https://res.cloudinary.com/dvme554nj/image/upload/v1621572153/coleman/pexels-pixabay-461789_lih0jj.jpg'
                    alt='excavators'
                    placeholder='tracedSVG'
                    width={800}
                    className='border-radius-50'
                ></StaticImage>
            </motion.div>
        </div>
    );
};

export default SkillsThree;
