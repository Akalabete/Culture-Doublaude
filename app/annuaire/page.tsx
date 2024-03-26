'use client';
import { useEffect } from "react";

export default function Page() {
    var options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0, };
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
    useEffect(() => { console.log(navigator); }, []);
    useEffect(() => { if (navigator.geolocation) { navigator.permissions .query({ name: "geolocation" }) .then(function (result) { console.log(result); }); } else { console.log("Geolocation is not supported by this browser."); } }, []);
    useEffect(() => { 
                if (navigator.geolocation) { navigator.permissions .query({ name: "geolocation" })
                .then(function (result) { console.log(result);
                if (result.state === "granted") {
                    navigator.geolocation.getCurrentPosition(success, errors, options)
                }else if (result.state === "prompt") 
                { 
                    navigator.geolocation.getCurrentPosition(success, errors, options)
                } else if (result.state === "denied") 
                { zipCode();
                } 
            });
        } else 
        { console.log("Geolocation is not supported by this browser."); }
    }, []);
    return (
        <div>
            <h1>Annuaire des Commerces, Artisans et Services de la Double</h1>
            <p>Afin d&apos;améliorer cette recherche, merci d&apos;accepter la géolocalisation en appuyant sur le bouton ci-dessous</p>
            <button className="btn btn-primary mt-2 py-4 px-4"></button>
            <p>Sinon, merci de renseigner votre code postal</p>
        </div>
    )
}



