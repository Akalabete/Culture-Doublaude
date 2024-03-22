
import { CartProvider } from "../components/CartContext";
export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    
    return (
        <CartProvider>
            <div>{children}</div>
        </CartProvider>
    )
}