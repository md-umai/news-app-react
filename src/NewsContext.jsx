import { useState } from "react";
import { createContext, useContext } from "react";
import api from './axios.js';



const NewsContext = createContext();  //First Step Create Context



const ContextProvider = ({ children }) => {

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);


    const fetchNews = async (url='search?q=general') => {
        setLoading(true);
        try {
            // console.log(import.meta.env.VITE_API_KEY)
            const respo = await api.get(`${url}&apikey=${import.meta.env.VITE_API_KEY}&lang=en`);
            setLoading(false);
            return respo.data;
        } 
        catch (error) {
            console.log(error);
            setLoading(false);
            // setNews([]); // ✅ prevents crash
        }
    }

    const valuee = {
        news,
        setNews,
        fetchNews,
        loading
    }

    return (
        <NewsContext.Provider value={valuee}>
            {children}
        </NewsContext.Provider>
    )
}



// Second Step Use context 👇🏾

const UseMyContext = () => {
    return useContext(NewsContext);
}

export { UseMyContext, ContextProvider }

//Third Step export provider in Main.jsx and wrap 
// <contextProvider>
//    <App.jsx>
// <contextProvider>
