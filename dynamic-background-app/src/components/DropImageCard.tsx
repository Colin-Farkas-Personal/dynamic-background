import * as React from 'react';
import { Component } from 'react';

import styles from './DropImageCard.module.scss'

function DropImageCard() {
    return ( <div className={styles['card-container']}>
        <h2>Drop you image below</h2>
    </div> );
}

export default DropImageCard;