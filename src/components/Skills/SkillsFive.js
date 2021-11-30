import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import { useScroll } from '../useScroll';
import { fade } from '../../animation';

const SkillsFive = () => {
    const [element, controls] = useScroll();
    return (
        <div className='two-column-alt'>
            <div className='txt-box'>
                <h3>
                    The <strong>Hows</strong>
                </h3>
                <ul>
                    <li>Do the right thing, the first time - Always</li>
                    <li>Lead by example, follow ethically</li>
                    <li>Bring out the best in everyone</li>
                    <li>Make them enquire again</li>
                    <li>Embrace transparency</li>
                    <li>Do it all in the spirit of Coleman Traders</li>
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
                    src='https://res.cloudinary.com/dvme554nj/image/upload/v1621572145/coleman/pexels-joseph-fuller-5578887_glotxr.jpg'
                    alt='excavators'
                    placeholder='tracedSVG'
                    width={800}
                    className='border-radius-50'
                    ref={element}
                ></StaticImage>
            </motion.div>
        </div>
    );
};

export default SkillsFive;
