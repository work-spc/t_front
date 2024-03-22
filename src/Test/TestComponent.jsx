import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Result from './Result';
import SetProfile from './SetProfile';
import Test from './Test';
import './Test.css';

export const TestComponent = (add) => {
    const navigate = useNavigate()
    const data = [
        {
            id:1,
            question:"Частота менструаций (от первого дня предыдущих менструаций до первого дня последующих менструаций ",
            answers:[
                {
                    id:1,
                    answer:"менее 24 дней",
                    point:1,
                    selected:false
                },
                {
                    id:2,
                    answer:"от 24 до 38 дней ",
                    point:0,
                    selected:false
                },
                {
                    id:3,
                    answer:"более 38 дней",
                    point:0,
                    selected:false
                }
                
            ]
        },
        {
            id:2,
            question:"Регулярность менструального цикла (отклонение от жаты предыдущих менструаций)",
            answers:[
                {
                    id:4,
                    answer:"менее или равно 9 дням",
                    point:0,
                    selected:false
                },
                {
                    id:5,
                    answer:"более 9 дней",
                    point:1,
                    selected:false
                }   
            ]
        },
        {
            id:3,
            question:"Длительность менструальных кровотечений",
            answers:[
                {
                    id:6,
                    answer:"8 дней и менее",
                    point:0,
                    selected:false
                },
                {
                    id:7,
                    answer:"более 8 дней",
                    point:1,
                    selected:false
                }     
            ]
        },
        {
            id:4,
            question:"Есть ли межменструальные кровянистые выделения?",
            answers:[
                {
                    id:8,
                    answer:"Нет",
                    point:0,
                    selected:false
                },
                {
                    id:9,
                    answer:"Мажущие кровянистые выделения перед началом менструального цикла 2 и более дней",
                    point:1,
                    selected:false
                },
                {
                    id:10,
                    answer:"Беспорядочные менструации",
                    point:1,
                    selected:false
                },
                {
                    id:11,
                    answer:"Межменструальные кровянистые выделения ",
                    point:1,
                    selected:false
                }     
            ]
        },
        {
            id:5,
            question:"Присутствуют ли сгустки в менструальных выделениях?",
            answers:[
                {
                    id:12,
                    answer:"Да",
                    point:0.5,
                    selected:false
                },
                {
                    id:13,
                    answer:"Нет",
                    point:0,
                    selected:false
                },   
            ]
        },
        {
            id:6,
            question:"Пользуетесь ли Вы двойной защитой от «протеканий» - тампон+прокладка?",
            answers:[
                {
                    id:15,
                    answer:"Да",
                    point:0.5,
                    selected:false
                },
                {
                    id:16,
                    answer:"Нет",
                    point:0,
                    selected:false
                },   
            ]    
            
        },
        {
            id:7,
            question:"Приходится ли Вам подбирать более тёмную и свободную одежду во время менструаций из-за страха «протеканий»?",
            answers:[
                {
                    id:17,
                    answer:"Да",
                    point:0.5,
                    selected:false
                },
                {
                    id:18,
                    answer:"Нет",
                    point:0,
                    selected:false
                },     
            ]
        },
        {
            id:8,
            question:"Оказывает ли менструальное кровотечение негативное влияние на качество жизни (например, необходимость брать отгулы на работе в первые дни менструаций, отказ от развлекательных мероприятий и прогулок)?",
            answers:[
                {
                    id:19,
                    answer:"Да",
                    point:0.5,
                    selected:false
                },
                {
                    id:20,
                    answer:"Нет",
                    point:0,
                    selected:false
                },
                {
                    id:21,
                    answer:"Затрудняюсь ответить",
                    point:0.5,
                    selected:false
                }     
            ]
        },
        {
            id:9,
            question:"Приходится ли Вам вставать ночью для смены гигиенической прокладки?",
            answers:[
                {
                    id:22,
                    answer:"Нет",
                    point:0,
                    selected:false
                },
                {
                    id:23,
                    answer:"1 раз за ночь",
                    point:0.5,
                    selected:false
                },
                {
                    id:24,
                    answer:"Более 1 раза за ночь",
                    point:1,
                    selected:false
                }     
            ]
        },
        {
            id:10,
            question:"Какой степенью защиты гигиенических прокладок Вы пользуетесь в дни менструаций с наибольшим количеством кровопотери?",
            answers:[
                {
                    id:25,
                    answer:"1 капля",
                    point:0,
                    selected:false
                },
                {
                    id:26,
                    answer:"2 капли",
                    point:0,
                    selected:false
                },
                {
                    id:27,
                    answer:"3 капли",
                    point:0,
                    selected:false
                },
                {
                    id:28,
                    answer:"4 капли",
                    point:0,
                    selected:false
                },
                {
                    id:29,
                    answer:"5 капель",
                    point:0.5,
                    selected:false
                },
                {
                    id:30,
                    answer:"6 капель",
                    point:0.5,
                    selected:false
                },
                {
                    id:31,
                    answer:"Урологические прокладки",
                    point:0.5,
                    selected:false
                }      
            ]
        },
        {
            id:11,
            question:"Как быстро происходит 3/4 наполнения гигиенической прокладки в наиболее обильные дни МЦ?",
            answers:[
                {
                    id:32,
                    answer:"Не наполняется, меняю из гигиенических соображений",
                    point:0,
                    selected:false
                },
                {
                    id:33,
                    answer:"3-4 часа",
                    point:0,
                    selected:false
                },
                {
                    id:34,
                    answer:"1-2 часа",
                    point:0,
                    selected:false
                },
                {
                    id:35,
                    answer:"30-60 мин",
                    point:0.5,
                    selected:false
                },
                {
                    id:36,
                    answer:"менее 30 мин",
                    point:1,
                    selected:false
                },    
            ]
        },
        {
            id:12,
            question:"Принимаете ли Вы нижеуказанные препараты?",
            answers:[
                {
                    id:37,
                    answer:"Препараты, содержащие эстрогены и гестагены (комбинированные оральные контрацептивы, заместительниц гормонотерапия, ВМИ с левоноргестрелом- Кайлина, Мирена)",
                    point:1,
                    selected:false
                },
                {
                    id:38,
                    answer:"Нестероидный противовоспалительные препараты",
                    point:1,
                    selected:false
                },
                {
                    id:39,
                    answer:"Антидепрессанты",
                    point:1,
                    selected:false
                },
                {
                    id:40,
                    answer:"Антикоагулянты",
                    point:1,
                    selected:false
                },
                {
                    id:41,
                    answer:"Тамоксифен",
                    point:1,
                    selected:false
                },
                {
                    id:42,
                    answer:"Нет",
                    point:0,
                    selected:false
                }   
            ]
        },
        {
            id:13,
            question:"Есть ли у Вас нижеперчисленные факторы?",
            answers:[
                {
                    id:43,
                    answer:"Ожирение",
                    point:1,
                    selected:false
                },
                {
                    id:44,
                    answer:"Отсутствие родов",
                    point:1,
                    selected:false
                },
                {
                    id:45,
                    answer:"Начало менструаций ранее 10 лет",
                    point:1,
                    selected:false
                },
                {
                    id:46,
                    answer:"Продолжение менструаций после 55 лет",
                    point:1,
                    selected:false
                },
                {
                    id:47,
                    answer:"Синдром поликистозных яичников",
                    point:1,
                    selected:false
                },
                {
                    id:48,
                    answer:"Носительство мутации BRCA 1/2",
                    point:1,
                    selected:false
                },
                {
                    id:49,
                    answer:"Рак эндометрия у матери, бабушки или сестры",
                    point:1,
                    selected:false
                },
                {
                    id:50,
                    answer:"Нет",
                    point:0,
                    selected:false
                }   
            ]
        },
        {
            id:14,
            question:"Есть ли у Вас нижеперечисленные факторы?",
            answers:[
                {
                    id:51,
                    answer:"Обильные менструации с момента, как они пришли впервые",
                    point:1,
                    selected:false
                },
                {
                    id:52,
                    answer:"Послеродовые кровотечения",
                    point:1,
                    selected:false
                },
                {
                    id:53,
                    answer:"Кровотечение во время операций",
                    point:1,
                    selected:false
                },
                {
                    id:54,
                    answer:"Кровотечения во время лечения у стоматолога",
                    point:1,
                    selected:false
                },
                {
                    id:55,
                    answer:"Появление синяков на теле 1-2 и более раз в месяц",
                    point:1,
                    selected:false
                },
                {
                    id:56,
                    answer:"Носовое кровотечения 1-2 и более раз в месяц",
                    point:1,
                    selected:false
                },
                {
                    id:57,
                    answer:"Кровоточивость десен при чистке зубов",
                    point:1,
                    selected:false
                },
                {
                    id:58,
                    answer:"Заболевания свертывающейся системы крови в семье",
                    point:1,
                    selected:false
                },
                {
                    id:59,
                    answer:"Ничего из вышеперечисленного",
                    point:0,
                    selected:false
                }      
            ]
        }
    ]
    const [AMK, setAMK] = useState(false)
    const [Counter,setCounter] = useState(1)
    const [Body, setBody] = useState({})
    const handleClick = async (props, amk) => {

        if (amk){setAMK(amk)}
        setBody(Object.assign(props, Body))
        if (!AMK & Counter === 3){setCounter(5)} else setCounter(Counter + 1);
    }



    const amk = false;
    return (
        <div className="test-main_container">
            {Counter != 5 ? (<h1>Этап тестирования: {Counter}/{AMK === true ? "4" : "3"}</h1>):(<h1>Результаты тестирования</h1>)}
            {Counter === 1 ? (<SetProfile func={handleClick}/>) : ("")}
            {Counter === 2 ? (<Test func={handleClick} data={data.slice(0,4)} count={1}/>) : ("")}
            {Counter === 3 ? (<Test func={handleClick} data={data.slice(0,-3)} count={5}/>) : ("")}
            {Counter === 4 ? (<Test func={handleClick} data={data} count={12}/>) : ("")}
            {Counter === 5 ? (<Result body={Body} amk={AMK} />) : ("")}
        </div>
    )

}
export default TestComponent;