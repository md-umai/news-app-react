import React from 'react'
import Wrapper from './Wrapper'
import { useEffect } from 'react'
import Loader from './Loader.jsx'
import { UseMyContext } from './NewsContext.jsx'
const News = () => {

    // const [news, setNews] = useState([]);
    const {news, setNews, fetchNews, loading} = UseMyContext();
    // console.log(news)

    // const fetchNews = async () => {
    //     // console.log(import.meta.env.VITE_API_KEY)
    //     const respo = await api.get(`/everything?q=tesla&from=2026-03-12&sortBy=publishedAt&apiKey=${import.meta.env.VITE_API_KEY}`);
    //     console.log(respo)
    //  }

    useEffect(()=>{
        (async ()=>{
            const data = await fetchNews()
            setNews(data.articles);
            
        })()
       
    },[])

    if(loading) return <Loader/>

    return (
        <>
            <Wrapper>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
                    {news.map((newsDetail)=>{
                        return <Card details={newsDetail}/>
                    })}
                    {/* <Card/>
                    <Card/>
                    <Card/>
                    <Card/>

                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/> */}
                </div>
                
            </Wrapper>
        
        </>
    )
}
const Card = ({ details }) => {
  return (
    <div className="card bg-base-100 shadow-md rounded-xl overflow-hidden 
                    w-full sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">

      <figure className="w-full">
        <img
          className="w-full h-40 sm:h-48 md:h-52 lg:h-56 object-cover"
          src={details?.urlToImage}
          alt="news"
        />
      </figure>

      <div className="card-body p-4 sm:p-5 md:p-6">
        <h2 className="card-title text-base sm:text-lg md:text-xl line-clamp-2">
          {details?.title}
        </h2>

        <p className="text-sm sm:text-base text-gray-600 line-clamp-3">
          {details?.description}
        </p>

        <div className="card-actions justify-end mt-2">
          <button
            onClick={() => window.open(details?.url)}
            className="btn btn-outline btn-sm sm:btn-md"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};
export default News