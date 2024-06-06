import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../Redux/appSlice';
import { SEARCH_API, YOU_TUBE_SEARCH } from '../Utils/constant';
import { cacheResults } from '../Redux/searchSlice';

export const Head = () => {

    const [searchQuery, setSearchQuery] = useState("")
    const [suggestion, setSuggestion] = useState([])
    const [showSuggestion, setShowSuggestion] = useState(false)
    const dispatch = useDispatch();

    const searchCache=useSelector((store)=>store.search)
    
    function toggleMenuHandler() {
        dispatch(toggleMenu())
    }

console.log(searchCache[searchQuery],12)
    async function callSearchApi() {
         const data = await fetch(SEARCH_API + searchQuery)
        const json = await data.json()
        setSuggestion(json);
      
        dispatch(cacheResults({
            [searchQuery]:json[1]
        }))
    }
    
    useEffect(() => {

        const timer = setTimeout(() => {
            if(searchCache && searchCache[searchQuery]){
                // setSuggestion(searchCache[searchQuery])  
                setSuggestion([searchCache[searchQuery]]) 
            }else{
                callSearchApi()
            }        
        }, 200)

        return () => {
            clearTimeout(timer)
        }
    }, [searchQuery])
  
function setValues(el){
    
    // setSearchQuery(el)
    // setSuggestion([])
}
// console.log('searchQuery...', searchQuery)
    return (
        // <div className="grid grid-flow-col p-5 m-2 shadow-lg">
        //     <div className="flex col-span-1">

        //         <img onClick={() => toggleMenuHandler()} className="h-8  m-2 cursor-pointer" alt="Menu" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGwj53EJZMkd967AifielB8bo54z05cT1UKmmHsLXSu9KRGglGyk4FJYB2og&s" />
        //         <a href="/">
        //             <img className="h-10  " alt="YouTube LOGO" src="https://w7.pngwing.com/pngs/24/227/png-transparent-youtube-logo-youtube-text-trademark-logo.png" />
        //         </a>
        //     </div>

        //     <div className='col-span-10 text-center px-10'>
        //         <div>
        //             <input value={searchQuery}
        //                 onFocus={() => setShowSuggestion(true)}
        //                 onBlur={() => setShowSuggestion(false)}
        //                 onChange={(e) => setSearchQuery(e.target.value)}
        //                 className="w-1/2 p-2 border border-gray-400 rounded-l-full"
        //                 type="text" />
        //             <button className="p-2 border border-gray-400 rounded-r-full"> Search</button>
        //         </div>
        //         {showSuggestion ? <div className='fixed  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white py-2  w-[37rem] shadow-lg rounded-lg border border-gray-100'>
        //             <ul>
        //                 {showSuggestion && suggestion && suggestion.map((el) => (
        //                     <li className='py-2 px-3 shadow-sm hover:bg-gray-100'>{el?.show?.name}</li>
        //                 ))}

        //             </ul>
        //         </div> : null}

        //     </div>
        //     <div className='col-span-1'>
        //         <img className="h-8" alt="User Icon" src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" />
        //     </div>
        // </div>
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
            <div className="flex col-span-1">
                <img
                    onClick={() => toggleMenuHandler()}
                    className="h-8 m-2 cursor-pointer"
                    alt="Menu"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGwj53EJZMkd967AifielB8bo54z05cT1UKmmHsLXSu9KRGglGyk4FJYB2og&s"
                />
                <a href="/">
                    <img
                        className="h-10"
                        alt="YouTube LOGO"
                        src="https://w7.pngwing.com/pngs/24/227/png-transparent-youtube-logo-youtube-text-trademark-logo.png"
                    />
                </a>
            </div>

            <div className='col-span-10 text-center px-10 relative'>
                <div>
                    <input
                        value={searchQuery}
                        onFocus={() => setShowSuggestion(true)}
                        onBlur={() => setShowSuggestion(false)}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-1/2 p-2 border border-gray-400 rounded-l-full"
                        type="text"
                    />
                    <button className="p-2 border border-gray-400 rounded-r-full">Search</button>
                </div>
                {showSuggestion && (
                    <div className='absolute left-1/2 transform -translate-x-1/2 bg-white py-2 w-[37rem] shadow-lg rounded-lg border border-gray-100'>
                        <ul>
                            {suggestion && suggestion?.map((el, index) => (
                                <li key={index} onClick ={()=>setValues(el?.show?.name)}className='py-2 px-3 shadow-sm hover:bg-gray-100'>{el?.show?.name}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div className='col-span-1'>
                <img className="h-8" alt="User Icon" src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" />
            </div>
        </div>
    )
}
