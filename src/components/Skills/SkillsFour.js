import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import { useScroll } from '../useScroll';
import { fade } from '../../animation';

const SkillsFour = () => {
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
                    src='https://res.cloudinary.com/dvme554nj/image/upload/v1621572139/coleman/pexels-chanaka-906494_jd59pp.jpg'
                    alt='excavators'
                    placeholder='tracedSVG'
                    width={800}
                    className='border-radius-50'
                ></StaticImage>
            </motion.div>
            <div className='txt-box'>
                <h3>
                    The <strong>Why</strong>
                </h3>
                <p>
                    Empower People Today to Build a Better Future for the Next Generation
                </p>
            </div>
        </div>
    );
};

export default SkillsFour;
