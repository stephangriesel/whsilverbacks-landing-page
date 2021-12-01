import React from 'react';
import { motion } from 'framer-motion';
import { useScroll } from '../useScroll';
import { fade } from '../../animation';
import img1 from '../../images/aboutus.jpg'

const SkillsOne = () => {
    const [element, controls] = useScroll();
    return (
        <div className='two-column-alt'>
            <div className='txt-box'>
                <h1>Test</h1>
            </div>
            <motion.div
                className='img-box'
                variants={fade}
                initial='hidden'
                ref={element}
                animate={controls}
            >
                <img
                    src={img1}
                    alt='trucks'
                    placeholder='tracedSVG'
                    width={800}
                    className='border-radius-50' />
            </motion.div>
        </div>
    );
};

export default SkillsOne;
