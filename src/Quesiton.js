export default function Question({quest, wrongAnswer, correctAnswer, nextBtnUp}) {
    const {cevaplar, soru, dogru_cevap} = quest;

    function answerCheck(e) {

        document.querySelectorAll(".answer").forEach((btn) => {
            btn.disabled = true;
        })

        if (e.currentTarget.value === dogru_cevap) {
            correctAnswer();
            e.currentTarget.className = "answer btn text-start btn-success text-white";

        } else {
            wrongAnswer();
            e.currentTarget.className = "answer btn text-start btn-danger text-white";
            alert("Doğru cevap : " + dogru_cevap);
        }

        nextBtnUp();
    }

    return (
        <div>
            <h1 className="fs-5 mb-5">{soru}</h1>
            <div className="d-flex flex-column gap-3">
                {cevaplar.map((answer, index) => <button className="answer btn btn-outline-dark text-start"
                                                         key={index} value={answer}
                                                         onClick={answerCheck} disabled={false}>{answer}</button>)}
            </div>
        </div>
    )
}