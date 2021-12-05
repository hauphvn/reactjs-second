import './App.css';
import {useState} from "react";

const carts = [100, 200, 300]

function App() {
    // const [counter, setCounter] = useState(() => {
    //     return carts.reduce((total, item) => total + item, 0)
    // })
    // const [info, setInfo] = useState({
    //     name: 'hauphvn',
    //     age: 12,
    //     address: 'Vung tau'
    // })
    const handleCounter = () => {
        // setInfo({
        //     ...info,
        //     bio:'Coding'
        // })

        // Using callback
        // setInfo((prevInfo) => ({
        //    ...prevInfo,
        //         bio:'Coding'
        // }))
    }

    const gifts = [
        'Coffee',
        'Milk tea',
        'Topping'
    ]
    const cities = [
        {
            id: 1,
            name: 'HCM'
        },
        {
            id: 2,
            name: 'HN'
        },
        {
            id: 3,
            name: 'DN'
        }
    ]
    const courses = [
        {
            id: 1,
            name: 'Javascript'
        },
        {
            id: 2,
            name: 'Dart'
        },
        {
            id: 3,
            name: 'PHP'
        }
    ]
    // const [giftState, setGiftState] = useState('No gift')
    // const handleTakeGift = () => {
    //     const index = Math.floor(Math.random() * gifts.length)
    //     setGiftState(gifts[index])
    // }
    const [choseCity, setChoseCity] = useState(cities[0])
    const [choseCourses, setChoseCourse] = useState([])
    const handleChoseCourse = (event) => {
        setChoseCourse(prev => {
            const index = prev.findIndex(item => item === +event.target.value);
            if (index > -1) {
                return choseCourses.filter(item => item !== +event.target.value)
            } else {
                return [...prev, +event.target.value]
            }
        })
        // const index = choseCourses.findIndex(item => item.id === event.target.value.id);
        // if(index > -1) {
        //     choseCourses.splice(index, 1)
        // }else{
        //     setChoseCourse(choseCourses.push(event.target.value))
        // }
        //
        //
    }
    const getListTodo = () => {
        return JSON.parse(localStorage.getItem('listTodo'))
    }
    const [todoList, setTodoList] = useState(() => getListTodo() ?? [])
    const [job, setJob] = useState('')
    const handleTodo = () => {
        if (job !== '') {
            setTodoList(prev => {
                const newList = [...prev, job]
                localStorage.setItem('listTodo', JSON.stringify(newList))
                return newList
            })
            setJob('')
        }
    }
    return (
        <div className="App" style={{backgroundColor: '#ccc'}}>
            {/*<h1>{JSON.stringify(info)}</h1>*/}
            {/*<button onClick={handleCounter}>Increase</button>*/}
            {/*<h1>{giftState}</h1>*/}
            {/*<button onClick={handleTakeGift}>Nhan thuong</button>*/}
            {cities.map(city => (
                <div key={city.id}>
                    <input
                        onChange={() => setChoseCity(city)}
                        checked={choseCity.id === city.id}
                        id={'city' + city.id}
                        type="radio"/>
                    <label htmlFor={'city' + city.id}>{city.name}</label>
                </div>
            ))}
            <hr/>
            {courses.map(item => (
                <div key={item.id}>
                    <input
                        value={item.id}
                        onChange={handleChoseCourse}
                        id={'course' + item.id}
                        type="checkbox"/>
                    <label htmlFor={'course' + item.id}> {item.name}</label>
                </div>
            ))}
            <div>
                <button>Submit</button>
                <h1>Your submit</h1>
                <p>Cities: {choseCity.name}</p>
                <p>Course: {choseCourses}</p>
            </div>
            <hr/>
            <div>
                <h1>To do app</h1>
                <div>
                    <input
                        onChange={e => setJob(e.target.value)}
                        value={job}
                        type="text"/>
                    <button onClick={handleTodo}>Add</button>
                </div>
                <div>
                    <ul>
                        {todoList.map((todo, index) => (
                            <li key={index}>{todo}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
