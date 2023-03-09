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
import Icon from '@/helpers/Icon';

function DropImageCard() {
    // HOOKS
    const [isDrageEnterStyle, setIsDrageEnterStyle] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // FUNCTIONS
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
        setIsDrageEnterStyle(true);
    }
    const handleDragLeave = (e: DragEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsDrageEnterStyle(false);    
    }

    const handleButtonClick = () => {
        fileInputRef.current?.click()
    };

    // JSX
    return (
        <form 
            className={classNames(
                styles['card'], 
                {[styles['card--onDrageEnter']] : isDrageEnterStyle }
            )}
            onMouseEnter={(e) => handleHover(e)} 
            onMouseLeave={(e) => handleLeave(e)}
            onDragEnter={(e) => handleDragEnter(e)}
            onDragLeave={(e) => handleDragEnter(e)}
            onSubmit={(e) => e.preventDefault()}
        >
            <input
                id='file-upload'
                ref={fileInputRef}
                type="file"
            />
            <div 
                className={classNames(styles['card__header'])}
                onClick={e => e.stopPropagation()}
            >
                <span className={classNames(styles['card__text'])}>Drop your image here</span>
                <Icon />
            </div>
            <label htmlFor="file-upload">
                <button type='button' className={classNames(styles['card__button'])} onClick={handleButtonClick}>Select a file</button>
            </label>
        </form>
    );
}

export default DropImageCard;