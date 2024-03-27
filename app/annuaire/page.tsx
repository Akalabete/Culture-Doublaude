'use client';
import { useEffect, useState } from "react";
import {ReferencedCard} from "../components/Referenced";
import annuaire from '../../src/lib/annuaire.json';
export default function Page() {
    const [data, setData] = useState<object>({});
    const [selectedType, setSelectedType] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [result, setResult] = useState<ServiceCard[]>([]);
    
    useEffect(() => {
        setData(annuaire)
    }, []);
    
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
    
    const handleTypeClick = (type : any) => {
        setSelectedCategory(null);
        setSelectedType(type);
    }
    
    const handleCategoryClick = (category: any) => {
        
        setSelectedCategory(category);
        
    };
    useEffect(() => {
        if (selectedType && selectedCategory && data[selectedType][selectedCategory]) {
            setResult(data[selectedType][selectedCategory]);
        }
    }, [selectedType, selectedCategory, data]);
    return (
        <div className="mt-[12vh]">
            {!data ? 
            (
                <div>Chargement...</div>
            ) :
            (
            <>
                <div className="w-1/4 flex mx-auto">
                    {Object.keys(data).map((type) => (
                        <button className="btn btn-primary mx-4 rounded" key={type} onClick={() => handleTypeClick(type)}>
                            {type}
                    </button>
                    ))}
                </div>
                <div className="flex w-3/5 mx-auto mt-3">
                    {selectedType && (
                        <div className="flex flex-wrap">
                            {Object.keys(data[selectedType]).map((category) => (
                                <button className="btn btn-secondary mx-4 mt-2 rounded" key={category} onClick={() => handleCategoryClick(category)}>
                                    {category}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                <div>
                {selectedType && selectedCategory && result && (
                    <div className="flex flex-wrap">
                        {result.map((item: ServiceCard, index: number) => (
                            <ReferencedCard key={index} item={item} />
                        ))}
                    </div>
                )} 
                </div>   
            </>
            )}
        </div>
    )
}



/*
<div className="results">
                {selectedType && selectedCategory && (
                    <div className="flex flex-wrap">
                        {Object.keys(data[selectedType][selectedCategory]).map((item: string, index: number) => (
                            <div className="card h-32 border-blue-500" key={index}>
                                <h2> {item.name}</h2>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            */