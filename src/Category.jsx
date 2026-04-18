import React from 'react'
import Wrapper from './Wrapper'
import { UseMyContext } from './NewsContext';

const Category = () => {

    const {setNews, fetchNews} = UseMyContext();

    const cata = ['business','entertainment','general','health','science','sports','technology'];

    const handleClick = async (e) => {
        const cat = e.target.value;
        const data = await fetchNews(`search?q=${cat}`)
        console.log(data);
        setNews(data.articles);
    }

  return (
    <div className='w-full overflow-x-auto  z-[-20]'>
    <div className=' flex flex-nowrap sm:flex-wrap lg:flex-wrap 
                  justify-start sm:justify-center 
                  gap-2 sm:gap-3 lg:gap-4 
                  px-3 py-2 whitespace-nowrap'>
        <Wrapper>
            {
                cata.map((categorys) =>{
                    return(
                        <button key={categorys} onClick={handleClick} value={categorys}   className="btn btn-primary justify-center m-2 sm:m-3 lg:m-4 flex-shrink-0">{categorys}</button>
                       
                    )
                })
            }
            
        </Wrapper>
    </div>
    </div>
  )
}

export default Category
