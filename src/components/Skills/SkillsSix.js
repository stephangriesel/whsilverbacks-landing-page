import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import { useScroll } from '../useScroll';
import { fade } from '../../animation';

const SkillsSix = () => {
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
                    src='https://res.cloudinary.com/dvme554nj/image/upload/v1621572150/coleman/pexels-roger-brown-5125783_ndnh1x.jpg'
                    alt='excavators'
                    placeholder='tracedSVG'
                    width={800}
                    className='border-radius-50'
                    ref={element}
                ></StaticImage>
            </motion.div>
            <div className='txt-box'>
                <h3>
                    The <strong>What's</strong>
                </h3>
                <ul>
                    <li>Identify & invest in improvement & development</li>
                    <li>Delight our customers</li>
                    <li>Honour our commitments</li>
                    <li>Incorporate new technology</li>
                    <li>Improve financial security</li>
                </ul>
            </div>
        </div>
    );
};

export default SkillsSix;
