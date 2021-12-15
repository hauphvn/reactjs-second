import {memo, useMemo, useRef, useState} from 'react'

const UseMemo = ({onChangeCount}) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])
    const nameRef = useRef()
    console.log('render memo')
    {/*const products = [*/
    }
    //     {
    //         id: 1,
    //         name: 'cafe viet',
    //         price: 10
    //     },
    //     {
    //         id: 2,
    //         name: 'cafe y',
    //         price: 15
    //     }
    // ]
    const onHandleAddProduct = () => {
        setProducts([...products, {
            name: name,
            price: price
        }])
        setName('')
        setPrice('')
        nameRef.current.focus()
    }
   const total =  useMemo(() => {
       return (products.reduce((total, product) => {
            console.log('total')
            return total +  parseInt(product.price)
        },0))
    },[products])
    return (
        <div style={{paddingBottom: '10px'}}>
            <h1>Learning memo & useCallback</h1>
            {/*<p>Value from parent: {count}</p>*/}
            <button onClick={onChangeCount}>Click to change count from child</button>
            <br/>
            Name:
            <input
                ref={nameRef}
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"/><br/>
            Price:
            <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                type="number"/><br/>
            <button onClick={onHandleAddProduct}>Add</button>
            <p>Sum: {total}</p>
            <hr/>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name} - {product.price}</li>
                ))}
            </ul>
        </div>
    )
 }
 export default memo(UseMemo)
