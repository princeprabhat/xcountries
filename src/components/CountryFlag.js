import axios from "axios";
import React, { useEffect, useState } from 'react'
import SearchBar from "./SearchBar";


const CountryFlag = () => {
    const [data, setData] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        const getApiData = async () => {
            try {
                // const flagData = await axios.get("https://xcountries-backend.azurewebsites.net/all")
                const flagData = await axios.get("https://countries-search-data-prod-812920491762.asia-south1.run.app/countries")
                setData(flagData.data);
                setSearchResult(flagData.data);

            }
            catch (e) {
                console.error("Error fetching data: ", e);
            }

        }
        getApiData();

    }, [])
    useEffect(() => {
        // searchValue are the letters we are searching for inside the data array. Once all the values has been filtered out, we can set the value of searchResult and render it.
        function handleDataChange() {
            const filteredData = data.filter(el => el?.common.toLowerCase().includes(searchValue.toLowerCase()));
            setSearchResult(filteredData);
        }

        let timer = setTimeout(handleDataChange, 500);

        return () => clearTimeout(timer);

    }, [searchValue, data])


    return (
        <>
            <div className="search-bar-container">
                <SearchBar searchValue={searchValue} handleTextChange={setSearchValue} />
            </div>
            <div className="flag-container">

                {searchResult && searchResult.map((e, idx) => {
                    return <div className="countryCard" key={`${e.common}${idx}`}>

                        <img
                            src={e.png}
                            alt={e.common}
                            height={"100px"}
                            width={"150px"}

                        />
                        <h4>{e.common}</h4>

                    </div>
                })}
            </div>
        </>
    )
}

export default CountryFlag