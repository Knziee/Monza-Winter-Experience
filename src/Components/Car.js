import styles from '../Assets/Styles/Styles.module.css';
import Monza from '../Assets/Images/monza.png';
import { useEffect, useState } from 'react' ;
import { Howl } from 'howler';
import gilEngine from '../Assets/Audio/gilTryingEngine.mp3';
import originalEngine from '../Assets/Audio/originalTryingEngine.mp3';

const Car = ()=> {

   const [engineOn, setEngineOn]=useState(false);



       const sound = new Howl({
           src: ['/Assets/Audio/gilTryingEngine.mp3'],
           html5: true
       })



    function downHandler({key}) {
        if(key === 'a') {
            setEngineOn(true) 

        }
    }
    function upHandler({key}) {
        if(key === 'a') {
            setEngineOn(false);

        }
    }

    useEffect(()=> {
        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);
        return () => {
            window.addEventListener('keydown', downHandler);
            window.addEventListener('keyup', upHandler);
        }
    }, []);
    if(engineOn === false) {
        return ( 

            <img alt='monza' src={Monza} className={styles.car}/>
            
        )
        
    }
    sound.play()
    console.log('ligoumotor')
    return ( 
        
    <img alt='monza' onClick={() => sound.play()} src={Monza} className={styles.car__engineOn}/>
    )


}

export default Car
