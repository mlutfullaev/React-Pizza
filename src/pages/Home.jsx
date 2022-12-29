import { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Sceleton from '../components/PizzaBlockSceleton';
import Sort from '../components/Sort';

function Home({toggler}) {
    const [isLoading, setIslodaing] = useState(true)
    const [data, setData] = useState([])
    const [sort, SetSort] = useState()

    const get = (sort, filter) => {
      fetch(`https://63aa7b0e7d7edb3ae6290870.mockapi.io/products${sort ? '' : ''}`)
      .then((res) => {
        return res.json()
      })
      .then(json => {
        setData(json)
        setIslodaing(false)
      })
    }

    useEffect(() => 
    {
      
    }, [])

    return (
        <div className="container">
            <div className="content__top">
                <Categories toggler={toggler} />
                <Sort toggler={toggler} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                isLoading 
                ? [...new Array(8)].map((e, i) => <Sceleton key={i} />) 
                : data.map((obj, i) => <PizzaBlock {...obj} key={i} toggler={toggler} />)}
            </div>
        </div>
    )
}

export default Home;