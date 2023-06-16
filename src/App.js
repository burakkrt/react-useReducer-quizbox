import {useReducer, useRef, Fragment} from "react";
import {reducer} from "./reducer";
import QuestData from './questionsData.json'
import Question from './Quesiton';
import questionData from './questionsData.json';
import Results from './Results';

const initialState = {
    soruNo: 1,
    correctAnswer: 0,
    wrongAnswer: 0,
    nextQuestBtn: true
}

function App() {

    const [state, dispatch] = useReducer(reducer, initialState);
    const nextQuest = useRef();

    function soruNoCount() {
        dispatch({type: 'SORUNO_COUNT'});
    }

    function wrongAnswer() {
        dispatch({type: 'WRONG_ANSWER'});
    }

    function correctAnswer() {
        dispatch({type: 'CORRECT_ANSWER'});
    }

    function nextBtn() {
        dispatch({type: 'NEXTBTN_UPDATE'});
    }

    function clearBtn() {
        document.querySelectorAll(".answer").forEach((btn) => {
            btn.disabled = false;
            btn.className = "answer btn btn-outline-dark text-start"
        })

        soruNoCount();
        nextBtn();
    }

    function restartQuestions() {
        dispatch({type: "RESTART"});

    }

    return (
        <div className="bg-secondary-subtle p-5 rounded shadow-lg border border-2 border-secondary"
             style={{width: "600px"}}>
            {state.soruNo <= questionData.sorular.length ?
                <Fragment>
                    <Question soruNoCount={soruNoCount} wrongAnswer={wrongAnswer} correctAnswer={correctAnswer}
                              nextBtnUp={nextBtn}
                              quest={QuestData.sorular[state.soruNo - 1]}>

                    </Question>
                    <button className="btn btn-dark mt-3 w-100" disabled={state.nextQuestBtn} ref={nextQuest}
                            onClick={clearBtn}>Sonraki Soru
                    </button>
                    <div className="mt-5 d-flex justify-content-evenly">
                <span>Soru No : <strong>{state.soruNo}</strong> <span
                    className="text-secondary">(Kalan {questionData.sorular.length - state.soruNo} soru)</span></span>
                        <span>Doğru Cevap : <strong>{state.correctAnswer}</strong></span>
                        <span>Yanlış Cevap : <strong>{state.wrongAnswer}</strong></span>
                    </div>
                </Fragment>
                : <Results state={state} res={restartQuestions}/>}
        </div>
    );
}

export default App;