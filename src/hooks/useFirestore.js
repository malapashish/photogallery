import { useState , useEffect } from 'react';
import { projectFireStore } from '../firebase/config';

const useFirestore = (collection) => {
    const [docs , setDocs] = useState([]);

    useEffect(() => {
     const unSub =  projectFireStore.collection(collection)
        .orderBy('createdAt' , 'desc')
        .onSnapshot((snap) => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data() ,id : doc.id})
            })
            setDocs(documents);
        });
        return () => unSub();
    }, [collection])


    return{docs};
}

export default useFirestore;