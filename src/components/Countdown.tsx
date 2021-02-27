import { useState, useEffect, useContext } from 'react';
import styles from '../styles/components/Countdown.module.css';
import { FiCheckCircle, FiX, FiPlay } from "react-icons/fi";
import { ChallengesContext } from '../contexts/ChallengesContext';
import {CountdownContext} from '../contexts/CountdownContext'

export function Countdown(){
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        resetCountdown,
        startCountdown
    } =useContext(CountdownContext);
   
    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');



    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                    <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button disabled className={styles.countdownButton}>
                    Ciclo encerrado
                    <FiCheckCircle className={styles.fiCheckCircle}/>
                </button>
            ) : (
                <>
                    { isActive ? (
                        <button onClick={resetCountdown} type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>
                            Abandonar ciclo 
                            <FiX className={styles.fiX}/>
                        </button>
                    ) : (
                        <button onClick={startCountdown} type="button" className={styles.countdownButton}>
                            Iniciar um ciclo
                            <FiPlay className={styles.fiPlay}/>
                        </button>
                    )}
                </>
            )}

        
        </div>
    );
}