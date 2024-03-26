'use client';
import { useEffect, useState } from "react";

export default function Page() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('../src/lib/annuaire.json')
        .then(response => response.json())
        .then(data => {
            setData(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }, []);

    const filterData = (buttonType : string) => {
        let filteredData;
        if (buttonType==="Commerce") {
            filteredData = data.filter((item) => item.type === "Commerce");
        } else if (buttonType==="Artisan") {
            filteredData = data.filter((item) => item.type === "Artisan");
        } else if (buttonType==="Service") {
            filteredData = data.filter((item) => item.type === "Service");
        }
        console.log(filteredData);
    }
    function success(pos: { coords: any; }) {
        var crd = pos.coords; console.log("Your current position is:");
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
    }
    function errors(err: { code: number; message: string; }) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    function zipCode() {
        var code = prompt("Veuillez entrer votre code postal");
        console.log(code);
    }
    useEffect(() => { 
        console.log(navigator); 
    }, []);
    useEffect(() => { 
        if (navigator.geolocation) { 
            navigator.permissions .query({ name: "geolocation" }) 
            .then(function (result) { console.log(result); 
            }); 
        } else { 
            console.log("Geolocation is not supported by this browser."); 
        } 
    }, []);

    useEffect(() => {
        var options = { 
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
         }; 
            if (navigator.geolocation) { 
                navigator.permissions .query({ name: "geolocation" })
                .then(function (result) { 
                    console.log(result);
                    if (result.state === "granted") 
                    {
                        navigator.geolocation.getCurrentPosition(success, errors, options)
                    }
                    else if (result.state === "prompt") 
                    { 
                        navigator.geolocation.getCurrentPosition(success, errors, options)
                    } else if (result.state === "denied") 
                    { 
                        zipCode();
                    } 
                });
            } else 
                {
                console.log("Geolocation is not supported by this browser."); 
                }
        }, []);
    return (
        <>
            <div className="flex flex-col text-center mt-[13vh] justify-center ">
                <h1 className="text-4xl font-bold">Annuaire des Commerces, Artisans et Services de la Double</h1>
                <p className=" text-xl font-semibold mt-4">Afin d&apos;améliorer cette recherche, merci d&apos;accepter la géolocalisation</p>
                <h2 className="text-4xl font-bold mt-6">Vous recherchez : </h2>
                <div className="flex flex-row w-1/2 space-around mx-auto mt-4">
                    <button 
                        className=" text-xl mx-auto btn btn-primary  w-40 mt-2 px-4"
                        onClick={() => filterData("Commerce")}
                        >
                            Commerce?
                    </button>
                    <button 
                        className=" text-xl mx-auto btn btn-primary  w-40 mt-2 px-4"
                        onClick={() => filterData("Artisan")}
                        >
                            Artisan?
                    </button>
                    <button 
                        className=" text-xl mx-auto btn btn-primary  w-40 mt-2 px-4"
                        onClick={() => filterData("Service")}
                        >
                            Service?
                    </button>
                </div>
            </div>
            <div className="grid">
                <div className="flex flex-row w-1/2 space-around mx-auto mt-4">
                    {data.map((item) => (
                        <div className="flex flex-col w-1/3" key={item.id}>
                            <h3>{item.name}</h3>
                            <p>{item.type}</p>
                            <p>{item.address}</p>
                            <p>{item.zip}</p>
                            <p>{item.city}</p>
                            <p>{item.phone}</p>
                            <p>{item.mail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}



