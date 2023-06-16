import questionsData from './questionsData.json';

const Results = ({state, res}) => {

    return (
        <div>
            <h1 className="fs-3 text-success text-center">Tebrikler ! Tüm soruları cevapladın.</h1>
            <div className="my-4 text-center fs-5">
                <span>Toplam <strong>{questionsData.sorular.length}</strong> sorudan <strong
                    className="text-success">{state.correctAnswer}</strong> soruyu doğru cevapladın.</span>
                <h1 className="my-3">Puan : {(state.correctAnswer / questionsData.sorular.length) * 100}</h1>
            </div>
            <button className="btn btn-danger w-100" onClick={res}>Tekrar Çöz</button>
        </div>
    )
}

export default Results;