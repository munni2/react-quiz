import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";
import useQuestionList from "../../hooks/useQuestionList";
import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import Question from "../Question";
import _ from 'lodash';

const initialState = null;

const reducer = (state, action) => {
    switch(action.type) {
        case "questions":
            action.value.forEach(question => {
                Question.option.forEach (option => {
                    option.checked = false;
                })
            });
        return action.value;
        case "answer":
            const questions = _.cloneDeep(state);
            questions[action.questionID].options[action.optionIndex].checked = action.value;
        return questions;
        default:
            return state;
    }
}

const Quiz = () => {

    const {id} =  useParams();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const {loading, error, questions} = useQuestionList(id);
    const [qna, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({
            type: "questions",
            value: questions,
        });
    }, [questions]);

    return ( 
        <>
            <h1>{qna[currentQuestion].title}</h1>
            <h4>Question can have multiple answers</h4>
            <Answers option />
            <ProgressBar/>
            <MiniPlayer/>
        </>
    );
}
 
export default Quiz;