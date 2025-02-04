import axios from "axios";
import React, { useEffect, useState } from 'react'


const CountryFlag = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getApiData = async () => {
            try {
                const flagData = await axios.get("https://xcountries-backend.azurewebsites.net/all")
                console.log(flagData.data)
                setData(flagData.data);

            }
            catch (e) {
                console.error("Error fetching data: ", e);
            }

        }
        getApiData();

    }, [])



    return (
        <div className="flag-container">
            {data && data.map((e, idx) => {
                return <div className="flag-box" key={`${e.abbr}${idx}`}>

                    <img
                        src={e.flag}
                        alt={e.name}
                        height={"100px"}
                        width={"100px"}

                    />
                    <h4>{e.name}</h4>

                </div>
            })}
        </div>
    )
}

export default CountryFlag