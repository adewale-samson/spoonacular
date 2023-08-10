import {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const useFetch = (url) => {
    const navigate = useNavigate()
    const [recipe, setRecipe] = useState([]);
    const [click, setClick] = useState(null);
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(url);
                console.log(response)
                const data = response.data.results
                setRecipe(data);
            } catch (err) {
                console.log(err)
            }
        }
        getData()
    }, [url]); 

    const handleClick = (info)  => {
        if(info.title){
          setClick(info)
          navigate('/recipe', {state: {click: info}})
        }
        };
    const backHandler = () => {
        navigate(-1)
    }

    return { recipe, click, handleClick, backHandler }
    
  
}

export default useFetch