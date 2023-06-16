import QuestData from './questionsData.json'
import Question from './Quesiton';

function App() {
    return (
        <div className="bg-secondary-subtle p-5 rounded shadow-lg border border-2 border-secondary">
            <Question quest={QuestData.sorular[1]}></Question>
            <div className="mt-5 d-flex justify-content-evenly">
                <span>Soru No : <strong>2</strong> <span className="text-secondary">(Kalan 2 soru)</span></span>
                <span>Doğru Cevap : <strong>3</strong></span>
                <span>Yanlış Cevap : <strong>2</strong></span>
            </div>
        </div>
    );
}

export default App;