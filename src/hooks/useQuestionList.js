import { useState, useEffect } from "react";
import { 
    getDatabase, 
    ref, 
    query, 
    orderByKey, 
    get
} from "firebase/database";

const useQuestionList = (videoID) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [questions, setquestions] =  useState([]);

    useEffect(() => {
    async function fetchQuestions() {
        //   database related works
        const db = getDatabase();
        const quizRef = ref(db, "quiz/" + videoID + "/questions");
        const quizQuery = query(
            quizRef,
            orderByKey()
        );

        try{
            setError(false); 
            setLoading(true);
            // request firebase database
            const snapshort = await get(quizQuery);
            setLoading(false);

            if(snapshort.exists()) {
                setquestions((preQuestion) => {
                    return [...preQuestion, ...Object.values(snapshort.val())];
                });
            }

        } catch(err) {
            console.log(err);
            setLoading(false);
            setLoading(true);
        }
    }

    setTimeout(() => {
        fetchQuestions(); 
    }, 1000);

    }, [videoID]);

    return {
        loading,
        error,
        questions
    }
}
 
export default useQuestionList;