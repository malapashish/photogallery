import React  , {useState}from 'react'; 
import ProgressBar from './ProgressBar';

const UploadForm = () =>{

    const [inputFile , setInputFile] = useState(null);
    const [error , setError] = useState(null);

    const allowedTypes = ['image/png' , 'image/jpeg'];

    const changeHandler = (e) =>{
        let selectedPicture = e.target.files[0]; 
        if(selectedPicture && allowedTypes.includes(selectedPicture.type)){
            setInputFile(selectedPicture); 
            setError('');
        }else {
            setInputFile(null);
            setError('Please select an image file (png or jpeg)');
        }

    }

    return (
        <form>
            <label>
                <input type = "file" onChange = {changeHandler}/>
                <span style = {{fontSize : '50%'}}>Choose a file</span> 
            </label>
            <div className = "output">
                { error && <div className = "error">{error}</div> }
                { inputFile && <div>{inputFile.name}</div> }
                { inputFile && <ProgressBar  inputFile = {inputFile} setInputFile = {setInputFile} /> }
            </div>
        </form>
    )
}

export default UploadForm;