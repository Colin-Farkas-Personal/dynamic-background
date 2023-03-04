import React, { MouseEvent } from 'react';
import { Component, useState } from 'react';
import file from '@/assets/icons/file.svg';
import { getLinearGradientStyle, getBoxShadowStyle } from '@/helpers/getGradient';
import styles from './DropImageCard.module.scss'
import classNames from 'classnames';

function DropImageCard() {

    const handleHover = (e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        e.preventDefault();
        
        const gradient = getLinearGradientStyle();
        const boxShadow = getBoxShadowStyle();
        e.currentTarget.style.background = gradient;
        e.currentTarget.style.boxShadow = boxShadow;
    };
    const handleLeave = (e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        e.preventDefault();

        // Test commit
        e.currentTarget.style.background = '';
        e.currentTarget.style.boxShadow = '';
    }

    return (
        <div 
            onMouseEnter={(e) => handleHover(e)} 
            onMouseLeave={(e) => handleLeave(e)}
            className={styles.card} 
           
        >
            <span className={classNames(styles['card__text'])}>Drop your image here</span>
            <img src={file} alt="file" className={classNames(styles['card__icon'])}/>
            <button type='button' className={classNames(styles['card__button'])}>Select a file</button>
        </div> 
    );
}

export default DropImageCard;