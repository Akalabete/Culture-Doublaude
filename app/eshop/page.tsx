import Product from '../components/Product'
import { BuyButton} from './buyButton'


const products: Product[] = [
    {
        id: "1",
        name: "item 1",
        price: 10,
        description: "item 1 desc",
        image: "https://via.placeholder.com/150",
        url: "https://google.com",
        quantity: 0
    },
    {
        id: "2",
        name: "item 2",
        price: 20,
        description: "item 2 desc",
        image: "https://via.placeholder.com/150",
        url: "https://google.com",
        quantity: 0
    },
    {
        id: "3",
        name: "item 3",
        price: 10,
        description: "item 3 desc",
        image: "https://via.placeholder.com/150",
        url: "https://google.com",
        quantity: 0
    }
]
export default function Page() {
    return (

        <main>
            <div className="flex mt-[20vh] justify-center h-screen">
                <div className="mx-auto">
                    <h2>abo récurent</h2>
                    <BuyButton />
                </div>
                <div className="flex flex-col gap-8">
                    <h2>Produits</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {products.map((product) => (
                            <Product key={product.id} product={product} />
                            
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
  }

  //<div key={product.id} className="border p-4">
  //<h3>{product.name}</h3>
  ///<p>{product.description}</p>
  //<img src={product.image} alt={product.name} />
  //<p>{product.price} €</p>
  //<button className="bg-blue-500 text-white p-2 rounded" onClick={() => console.log('add to cart')}>Ajouter au panier</button>
//</div>