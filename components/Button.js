import React, { Component } from 'react';
import styles from '../styles/Button.module.css'
import { motion } from '../node_modules/framer-motion';

const Button = (props) => {
    const { background, text, link } = props
    return <motion.a 
    href={link}
    target="_blank"
    style={{background: background}} 
    className={styles.button} 
    whileHover={{ 
        x: -15,
        
    }}>
        {text}
    </motion.a>
}

export default Button;