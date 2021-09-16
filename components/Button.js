import React, { Component } from 'react';
import styles from '../styles/Button.module.css'

const Button = (props) => {
    const { background, text } = props
    return <div style={{background: background}} className={styles.button}>{text}</div>
}

export default Button;