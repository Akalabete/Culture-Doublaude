interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    url: string;
    quantity: number;
}

interface ServiceCard {
    type: string // "Service" , "Commerce", "Artisan", "Association"
    cat: string // "Alimentation", "Santé", "Beauté", "Services", "Loisirs", "Habitat", "Mobilité", "Sport", "Restauration", "Autres"
    name: string; // 
    adress: string; //
    zipcode: number; // 
    city: string; //
    description: string; // activité
    phone: number; //
    email: string; // 
    url: string; // site web ? possible null
    photo: string[]; // tableau d'url de photos
    lat: number; // geoloc lat
    long: number; // geoloc long
    openingDaysHours: { // object "LUN": "8h-12h 14h-17h", "MAR": "8h-12h 14h-17h", "MER": "8h-12h 14h-17h", "JEU": "8h-12h 14h-17h", "VEN": "8h-12h 14h-17h", "SAM": "Fermé", "DIM": "Fermé"
        LUN: string;
        MAR: string;
        MER: string;
        JEU: string;
        VEN: string;
        SAM: string;
        DIM: string;
    }
}
