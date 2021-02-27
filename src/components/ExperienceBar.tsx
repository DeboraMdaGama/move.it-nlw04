import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import stlyes from '../styles/components/ExperienceBar.module.css';
export function ExperienceBar(){
    const {currentExperience, experienceToNextLevel} = useContext(ChallengesContext);
    const percentToNextLevel = Math.round(currentExperience*100)/experienceToNextLevel; 

    return(
        <header className={stlyes.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width:`${percentToNextLevel}%` }}/>
                <span className={stlyes.currentExperience} style={{left:`${percentToNextLevel}%`}}>
                    {currentExperience}xp
                </span>
            </div>
            <span>{experienceToNextLevel}xp</span>
        </header>
    );
}