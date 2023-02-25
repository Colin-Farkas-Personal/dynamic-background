import * as React from 'react';
import { Component } from 'react';
import file from '@/assets/icons/file.svg';

import styles from './DropImageCard.module.scss'
import classNames from 'classnames';

function DropImageCard() {
    return (
        <div className={styles.card}>
            <p className={classNames(styles['card__text'])}>Drop your image here</p>
            <img src={file} alt="file" className={classNames(styles['card__icon'])}/>
            <button type='button' className={classNames(styles['card__button'])}>Select a file</button>
        </div> 
    );
}

export default DropImageCard;