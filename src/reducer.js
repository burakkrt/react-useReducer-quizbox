export const reducer = (state, action) => {

    switch (action.type) {
        case "SORUNO_COUNT":
            return {...state, soruNo: state.soruNo + 1};
        case "WRONG_ANSWER":
            return {...state, wrongAnswer: state.wrongAnswer + 1};
        case "CORRECT_ANSWER":
            return {...state, correctAnswer: state.correctAnswer + 1};
        case "NEXTBTN_UPDATE":
            return {...state, nextQuestBtn: !state.nextQuestBtn}
        default:
            return state;
    }

}