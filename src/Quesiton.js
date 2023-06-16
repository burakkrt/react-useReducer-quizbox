export default function Question({quest}) {
    const {cevaplar, soru, dogru_cevap} = quest;

    console.log(quest)


    function answerCheck(e) {

        document.querySelectorAll(".btn").forEach((btn) => {
            console.log(btn);
            btn.setAttribute("disabled", "true")
        })

        if (e.currentTarget.value === dogru_cevap) {
            e.currentTarget.className = "btn text-start btn-success text-white";
        } else {
            e.currentTarget.className = "btn text-start btn-danger text-white";
            alert("Doğru cevap : " + dogru_cevap)
        }

    }

    return (
        <div style={{width: "600px"}}>
            <h1 className="fs-5 mb-5">{soru}</h1>
            <div className="d-flex flex-column gap-3">
                {cevaplar.map((answer, index) => <button className="btn btn-outline-dark text-start"
                                                         key={index} value={answer}
                                                         onClick={answerCheck}>{answer}</button>)}
            </div>

        </div>
    )
}