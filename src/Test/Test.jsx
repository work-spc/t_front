import React, { useState } from 'react';
import './Test.css'



export const Test = ({func, data, count}) => {
    
    const [Quest,setQuest] = useState(data)
    const [AMK,setAMK] = useState(false)
    const [ansValue,setValue]= useState(0)
    const [err,setErr] = useState(false);
    const [Count,setCount] = useState(count)
    const [Selected,setSelect] = useState(null);
    const [Index,setIndex] = useState();
    
    const handleClick = (data, index) => {
        { // Если отрывок не дошел до конца
            if (Selected != null){
                data[Count-1].answers[index].selected = true // Помечаем выделение в обьекте
                setQuest(data); // Записываем результат
                setSelect(null); // Убираем выделение
                setCount(Count+1) // Меняем вопрос
                if (Count == 10) { // Если не ответили на 0.5 баллов в 10 вопросе
                    const list = [] 
                    for (var i=4; i<7; i++){
                        list.push(Quest[9].answers[i].selected) // заполняем массив 3 ответами
                    }
                    if (list.includes(true)){ // Если ответили - доп. вопрос

                    } else { func(Quest.slice(0,-1), AMK) } // Если нет - идем дальше
                }
                setErr(false); // Если была ошибка, убираем её
                setValue(ansValue + data[Count-1].answers[index].point) // Записываем балл (Для АМК)
                if (ansValue + data[Count-1].answers[index].point >= 1){ setAMK(true) } // Если балл = 1 или более - АМК = true
                // console.log(2,data)
            } else setErr(true);
        } 
        if (Count == Quest.length) {

            if (Count == 7){
                const list = []
                for (var i=0; i<3; i++){
                    list.push(Quest[6].answers[i].selected)
                }
                if (list.includes(true)){
                    if (ansValue <= 1) {
                        func(Quest, false)
                    }
                } else {
                    func(Quest, AMK)
                }
            } 
            func(Quest, AMK)// идем дальше
            // console.log(3,Quest)
            
        }
    }
    const funcs = (index) => {
        setSelect(index)
        setIndex(index)
    }


    return (
        <>
        <div className="test-questions-container">
            <div className="test_question-text">
            <h3>{Quest[Count-1].id}. {Quest[Count-1].question}</h3>
                </div>  
        
        {Quest[Count-1].answers.map((ans, index)=>(
            <div key={index} className={'test-answers-container'+(Selected === index ? ' test-answers-selected':'')}
            onClick={() => funcs(index)}>
            {ans.answer}
            </div>
            
        ))}    
            
        <div type="submit" className="profile_btn" ><a className={(err ? 'red':'test-disable')}>Ответ обязателен!</a> <button onClick={() => handleClick(Quest, Index)}>Далее</button></div>    
        </div>
        
        </>
    )
}
export default Test;
