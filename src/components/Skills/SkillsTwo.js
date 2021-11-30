import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import { useScroll } from '../useScroll';
import { fade } from '../../animation';

const SkillsTwo = () => {
    const [element, controls] = useScroll();
    return (
        <div className='two-column'>
            <motion.div
                className='img-box'
                variants={fade}
                initial='hidden'
                ref={element}
                animate={controls}
            >
                <StaticImage
                    src='https://res.cloudinary.com/dvme554nj/image/upload/v1621572144/coleman/excavator_wzpmia.jpg'
                    alt='aerial construction site'
                    placeholder='tracedSVG'
                    width={800}
                    className='border-radius-50'
                ></StaticImage>
            </motion.div>
            <div className='txt-box'>
                <h3>
                    Our <strong>Vision</strong>
                </h3>
                <p>
                    Our key success factors are strategic focus, people, operations,
                    marketing and finances. Depending on these factors we strive to be
                    recognised as a premier Fuel Wholesale, Plant Hire and Containers
                    distributing company in South Africa.
                </p>
            </div>
        </div>
    );
};

export default SkillsTwo;
