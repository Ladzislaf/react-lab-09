import {useEffect, useState} from 'react'
import '../../Styles/SortTable.css'
import RowList from './RowList'

import appleImageSrc from '../../Images/apple.jpg'
import orangeImageSrc from '../../Images/orange.jpg'
import bananaImageSrc from '../../Images/banana.jpg'
import pineappleImageSrc from '../../Images/pineapple.jpg'
import cucumberImageSrc from '../../Images/cucumber.jpg'
import tomatoImageSrc from '../../Images/tomato.jpg'
import carrotImageSrc from '../../Images/carrot.jpg'

const SortTable = ({setProductsList}) => {
    const [rows, setRows] = useState([
        {
            id: 1,
            name: "apple",
            price: 4.30,
            count: 2,
            image: appleImageSrc,
            description: 'Apples are a popular fruit, containing antioxidants, vitamins, dietary fiber, and a range of other nutrients.',
            new: true,
            discount: 5
        },
        {
            id: 2,
            name: "orange",
            price: 6.80,
            count: 25,
            image: orangeImageSrc,
            description: 'Oranges are truly an outstanding fruit. They are very healthy, cheap, and tasty, making them the ideal snack.',
            new: true,
            discount: 10
        },
        {
            id: 3,
            name: "banana",
            price: 8,
            count: 30,
            image: bananaImageSrc,
            description: 'Bananas are among the most important food crops on the planet.',
            new: false,
            discount: 0
        },
        {
            id: 4,
            name: "pineapple",
            price: 12,
            count: 7,
            image: pineappleImageSrc,
            description: 'The pineapple is a tropical plant with an edible fruit. The pineapple is indigenous to South America, where it has been cultivated for many centuries.',
            new: false,
            discount: 7
        },
        {
            id: 5,
            name: "cucumber",
            price: 3.50,
            count: 1,
            image: cucumberImageSrc,
            description: 'Cucumber is a widely-cultivated creeping vine plant in the Cucurbitaceae family that bears usually cylindrical fruits, which are used as vegetables.',
            new: false,
            discount: 5
        },
        {
            id: 6,
            name: "tomato",
            price: 4.20,
            count: 0,
            image: tomatoImageSrc,
            description: 'The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as the tomato plant.',
            new: false,
            discount: 0
        },
        {
            id: 7,
            name: "carrot",
            price: 3,
            count: 45,
            image: carrotImageSrc,
            description: 'The carrot is a root vegetable often claimed to be the perfect health food. It is crunchy, tasty, and highly nutritious.',
            new: false,
            discount: 50
        },
    ]);
    // asc - по возрастанию, desc - по убыванию
    const [sort, setSort] = useState('asc')

    // передача элементов вверх - родительскому компоненту
    useEffect(() => {
        setProductsList(rows)
    }, [rows])

    const byField = (field, type) => { // сортировка массива объектов
        switch (type) {
            case 'asc': return (a, b) => a[field] > b[field] ? 1 : -1;
            case 'desc': return (a, b) => a[field] < b[field] ? 1 : -1;
            default:
        }
    }

    const sortTable = (e) => {
        let copy = Object.assign([], rows);
        let val = e.target.value
        let field

        switch (val) {
            case 'Row': field = 'id'; break
            case 'Name': field = 'name'; break
            case 'Price': field = 'price'; break
            case 'Count': field = 'count'; break
            case 'Discount': field = 'discount'; break
			default:
        }

        copy.sort(byField(field, sort))

        if(sort === 'asc') setSort('desc')
        else setSort('asc')

        setRows(copy)
    }

    return (
        <table className="productsTable">
            <caption>Products</caption>
            <thead>
                <tr>
                    <th><input type="button" value={'Row'} onClick={sortTable}/></th>
                    <th><input type="button" value={'Name'} onClick={sortTable}/></th>
                    <th><input type="button" value={'Price'} onClick={sortTable}/></th>
                    <th><input type="button" value={'Count'} onClick={sortTable}/></th>
                    <th><input type="button" value={'Image'} onClick={sortTable} disabled/></th>
                    <th><input type="button" value={'Description'} onClick={sortTable} disabled/></th>
                    <th><input type="button" value={'New'} onClick={sortTable} disabled/></th>
                    <th><input type="button" value={'Discount'} onClick={sortTable}/></th>
                </tr>
            </thead>
            <RowList rows={rows}/>
        </table>
    )
}

export default SortTable
