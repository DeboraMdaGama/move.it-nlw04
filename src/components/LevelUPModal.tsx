import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUPModal.module.css';

export function LevelUPModal(){
    const {level, closeLevelUPModal} = useContext(ChallengesContext)
    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo nível</p>

                <button type="button" onClick={closeLevelUPModal}>
                    <img src="icons/close.svg" alt="Fechar"/>
                </button>
            </div>
        </div>
    );
}