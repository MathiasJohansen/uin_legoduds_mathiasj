export default function ShoppingButton(){
    const handleShopping = () =>{
        console.log("Du har shoppet!")
    }

    return <button className="shopping-btn" onclick={handleShopping}>Legg i handlekurv</button>
}