import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemlist";
import { Button, Card } from "flowbite-react";
import { clearCard, clearCart, removeItem } from "../../Utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store)=> store.cart.items);
    const dispatch = useDispatch();

    const handleClear = () =>{
        dispatch(clearCart())
    };

    return (
        <div className=" text-center p-4">
            <Card className="w-6/12 m-auto">
                <div className="flex justify-between">
                    <h1 className="font-bold text-2xl">Cart</h1>
                    <Button className="font-bold" onClick={()=> {
                        handleClear()
                    }}>Clear Cart</Button>
                </div>
                <div className="">
                    {cartItems.length == 0 && (<h1>Cart is empty. Please Add Items to cart!!</h1>)}
                    <ItemList items={cartItems} />
                </div>
            </Card>
        </div>
    )
}

export default Cart;