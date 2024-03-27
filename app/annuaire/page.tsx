'use client';
import { useEffect, useState } from "react";
import annuaire from '../../src/lib/annuaire.json';
export default function Page() {
    const [data, setData] = useState<object>({});
    const [selectedType, setSelectedType] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
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
    if(!data) {
        return <div>Chargement...</div>
    }
    const handleTypeClick = (type : any) => {
        setSelectedType(type);
    }
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };
    return (
        <div className="mt-[12vh]">
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
            <div className="results">

                {selectedType && selectedCategory && (
                    <div className="flex flex-wrap">
                        {Object.keys(data[selectedType][selectedCategory]).map((item) => (
                            <div className="card" key={item}>
                                <h1> {data.selectedType.selectedCategory.name}</h1>
                            </div>
                    </div>
                   ))}
                  )
                }
            </div>
                
        </div>      
    )
}



