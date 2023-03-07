import React, 
{ 
    MouseEvent, 
    DragEvent, 
    useRef
} from 'react';
import { Component, useState } from 'react';
import file from '@/assets/icons/file.svg';
import { getLinearGradientStyle, getBoxShadowStyle } from '@/helpers/getGradient';
import styles from './DropImageCard.module.scss'
import classNames from 'classnames';

function DropImageCard() {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleHover = (e: MouseEvent<HTMLFormElement, globalThis.MouseEvent>) => {
        e.preventDefault();
        
        const gradient = getLinearGradientStyle();
        const boxShadow = getBoxShadowStyle();
        e.currentTarget.style.background = gradient;
        e.currentTarget.style.boxShadow = boxShadow;
    };
    const handleLeave = (e: MouseEvent<HTMLFormElement, globalThis.MouseEvent>) => {
        e.preventDefault();
        e.stopPropagation();

        // Test commit
        e.currentTarget.style.background = '';
        e.currentTarget.style.boxShadow = '';
    }

    const handleDragEnter = (e: DragEvent<HTMLFormElement>) => {
        e.preventDefault();

        alert("Hey!");
    }

    const handleButtonClick = () => {
        fileInputRef.current?.click()
    };

    return (
        <form 
            className={styles.card}
            onDragEnter={(e) => handleDragEnter(e)}
            onSubmit={(e) => e.preventDefault()}
            onMouseEnter={(e) => handleHover(e)} 
            onMouseLeave={(e) => handleLeave(e)}
        >
            <input
                id='file-upload'
                ref={fileInputRef}
                type="file"
            />
            <label htmlFor="file-upload">
                <div className={classNames(styles['card__header'])}>
                    <span className={classNames(styles['card__text'])}>Drop your image here</span>
                    <img src={file} alt="file" className={classNames(styles['card__icon'])}/>
                </div>
                <button type='button' className={classNames(styles['card__button'])} onClick={handleButtonClick}>Select a file</button>
            </label>
        </form>
    );
}

export default DropImageCard;