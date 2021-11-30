import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import { useScroll } from '../useScroll';
import { fade } from '../../animation';

const SkillsOne = () => {
    const [element, controls] = useScroll();
    return (
        <div className='two-column-alt'>
            <div className='txt-box'>
                <h3>
                    Our <strong>Mission</strong>
                </h3>
                <p>
                    Coleman Traders (Pty) Ltd is dedicated to delivering effective,
                    efficient, respectful services with integrity and accountability using
                    all our proven innovative methods, and still expanding our knowledge
                    to embrace the needs of a continuously changing industry. We proudly
                    offer quality assurance, operational excellence and a fanatical
                    concern for our customer’s needs whilst complying with all
                    environmental and employee development responsibilities.
                </p>
            </div>
            <motion.div
                className='img-box'
                variants={fade}
                initial='hidden'
                ref={element}
                animate={controls}
            >
                <StaticImage
                    src='https://res.cloudinary.com/dvme554nj/image/upload/v1628135732/coleman/26_l0dwgj.png'
                    alt='trucks'
                    placeholder='tracedSVG'
                    width={800}
                    className='border-radius-50'
                ></StaticImage>
            </motion.div>
        </div>
    );
};

export default SkillsOne;
