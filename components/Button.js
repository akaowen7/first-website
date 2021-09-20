import React, { Component, useState } from 'react';
import styles from '../styles/Button.module.css'
import { motion } from '../node_modules/framer-motion';

const Button = (props) => {

    const { background, text, link } = props

    const [isActive, setIsActive] = useState(false);
    const [hover, click, timeout] = [25, 18, 100]

    return <motion.a 
    style={{background: background}} 
    className={styles.button} 
    whileHover={{ x: isActive ? click : hover }}
    animate={{x: isActive ? click : 0}}
    onClick={() => {
        setIsActive(true)
        setTimeout(window.open, timeout, link, null)
        setTimeout(setIsActive, timeout, false)
    }}>
        {text}
    </motion.a>
}

export default Button;