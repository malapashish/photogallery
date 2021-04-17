import React  , {useEffect}from 'react';
import useStorage from '../hooks/useStorage';
import {motion} from 'framer-motion';

const ProgressBar = ({ inputFile , setInputFile }) => {

    const {url , progress} = useStorage(inputFile);
    
    useEffect(() => {
        if(url){
            setInputFile(null);
        }
    }, [url , setInputFile])

    return(
        <motion.div className = "progress-bar"
        initial = {{width:0}}
        animate = {{width : progress + '%'}}
        ></motion.div>
    )
}

export default ProgressBar;