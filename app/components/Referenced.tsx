interface ReferencedCardProps {
    item: ServiceCard;
}

export const ReferencedCard: React.FC<ReferencedCardProps> = ({item}) => {
    return (
        <div className="card border-blue-500">
            <h2> {item.name}</h2>
            <h3> {item.adress}</h3>
            <h3> {item.zipcode}</h3>
            <h3> {item.city}</h3>
            <p> {item.description}</p>
            <p> {item.phone}</p>
            <p> {item.email}</p>
            <p> {item.url}</p>
            <img src={item.photo[0]} alt={item.name} />
            <p>Horraires d&apos;ouverture:</p>
            <p> Lundi: {item.openingDaysHours.LUN}</p>
            <p> Mardi: {item.openingDaysHours.MAR}</p>
            <p> Mercredi: {item.openingDaysHours.MER}</p>
            <p> Jeudi: {item.openingDaysHours.JEU}</p>
            <p> Vendredi: {item.openingDaysHours.VEN}</p>
            <p> Samedi: {item.openingDaysHours.SAM}</p>
            <p> Dimanche: {item.openingDaysHours.DIM}</p>

        </div>
    )
}