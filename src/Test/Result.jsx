import React, { useEffect, useState } from 'react';
import './Test.css'
import axios from 'axios';

export const Result = (body) => {
    const [sum,setSum] = useState(0)
    const [IMT,setIMT] = useState(false);
    const [Body,setBody] = useState({})

    // console.log(body)
    // console.log(body.body.slice(4,11))


    
    useEffect(() => {
        // if (body.body.length === 14){
        //     delete body.body[10]
        // };

        let summ = 0;
        const effect = () => {
            body.body.slice(4,11).map((m) => {
                m.answers.map((a) => {
                    if (a.selected === true) {
                        summ = summ + a.point  
                    }
                })
            
            }) 
            setSum(summ)
            let question13;
            body.body[12] != undefined ? question13=body.body[12].answers[7].selected : question13=true;
            if ( (body.body.Height / (body.body.Weight * body.body.Weight)) > 29.9) {
                setIMT(true)
            } 
            if (question13 == false) {
                setIMT(true)
            } 
            const test = body.body.map((m) => m.answers.filter((i) => i.selected == true))
            let temp = {
                height:body.body.Height,
                weight:body.body.Weight,
                age:body.body.Age,
                answers:[]
            }           
            body.body.map((m,index) => {
                let obj = {
                    question:m.id,
                    answer:m.answers.filter((i) => i.selected == true)[0].id
                }
            temp.answers[index]=obj

            })
            axios.post('http://localhost:8080/profile/save',temp).then()

        }
    effect();
    },[])


    

    return (
        <>

            <div className="result-container">
            { sum < 1 ? ("По отмеченным вами симптомам вероятность наличия аномальных маточных кровотечений минимальна. " +
            "Если у вас всё-таки есть подозрения на данное нарушение, рекомендуем вам обратиться к акушер-гинекологу.") : 
                 (<>{body.amk  == true && (
                    <>
                    <a> Рекомендуем вам обратиться за консультацией акушер-гинеколога в связи с подозрением на аномальные маточные кровотечения. </a>
                    <strong>Возможно, акушер-гинеколог назначит вам следующий перечень анализов:</strong>
                    <li>ХГЧ крови</li>
                    <li>Общий анализ крови</li>
                    <li>Коагулограмма</li>
                    <li>Ферритин</li>
                    <li>Микроскопическое исследование отделяемого из цервикального канала и заднего свода влагалища</li>
                    <li>УЗИ органов малого таза</li>
                    { IMT === true && (<li>Биопсия эндометрия под контролем гистероскопии</li>)}
                    { body.body[13].answers[8].selected == false && (<a>Также вам рекомендована консультация гематолога</a>)}
                    { body.body[11].answers[5].selected == false && (<a>Возможно, что аномальные маточные кровотечения вызваны приемом {body.body[11].answers.find(el => el.selected == true).answer}. Рекомендована консультация специалиста, назначившего лекарственное средство, для его замены или отмены.</a>)}

                    </>
                 )}</>) 
            }
            </div>

        </>
    )

}
export default Result;