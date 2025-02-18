import React, { useState } from 'react'

const ImageApp = () => {

    let apikey = "M0UPSaZyFeXXJROpzVaKEY1ybL2nurBRSTOMSVmERFw"
    const [Search, setSearch] = useState()
    const [data, setData] = useState([])

    const handleSearch = (event) => {
        setSearch(event.target.value)
        console.log(Search)
    }
    const getData = () => {
        mainFun(Search)
    }
    const mainFun = async (searchVal) => {
        const get = await fetch(`https:/api.unsplash.com/search/photos?page=1&query=${searchVal}&client_id=${apikey}`)
        // console.log(get)
        const jsonData = await get.json()
        console.log(jsonData.results)
        setData(jsonData.results)
        console.log(data)
        // console.log(jsonData.results)

        // console.log(arr)
    }
    // console.log(arr)

    return (
        <>
            <div className="container">
                <div class="area" >
                    <ul class="circles">
                        <div className="heading">
                            <h1>Your Image Searcher</h1>
                        </div>
                        <div className="searchbar">
                            <input type="search" placeholder='Search images' onChange={handleSearch} />
                            <button onClick={getData}>Search</button>
                        </div>
                        <div className="images">
                            {
                                data.map((curval, i) => {
                                    console.log(curval.urls.full)
                                    return (
                                        <img src={curval.urls.full} alt='error' />
                                    )
                                })
                            }
                        </div>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default ImageApp