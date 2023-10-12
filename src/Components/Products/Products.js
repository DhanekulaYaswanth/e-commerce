import React,{useEffect, useState} from "react";
import './Products.css'


function Products(props){
    const {products,theme,cart,setcart} = props;

    const [active,setactive] = useState(1);
    const [temporary,setTemporary] = useState([]);

    useEffect(() => {
        // Shuffle the data when the component is mounted
        const shuffledData = [...products].sort(() => Math.random() - 0.5);
        setTemporary(shuffledData);
      }, []);


    useEffect(()=>{
        var result = [];
        if(active===1){
            result = products;
        }
        else if(active===2){
            const filteredProducts = products.filter(product => product.Tag === 'men');
            result = filteredProducts;
        }else if(active===3){
            const filteredProducts = products.filter(product => product.Tag === 'women');
            result = filteredProducts;
        }else if(active===4){
            const filteredProducts = products.filter(product => product.Tag === 'kids');
            result = filteredProducts;
        }else if(active===5){
            const filteredProducts = products.filter(product => product.Tag === 'mobile');
            result = filteredProducts;
        }else if(active===6){
            const filteredProducts = products.filter(product => product.Tag === 'tv');
            result = filteredProducts;
        }else if(active===7){
            const filteredProducts = products.filter(product => product.Tag === 'home');
            result = filteredProducts;
        }else if(active===8){
            const filteredProducts = products.filter(product => product.Tag === 'electronic');
            result = filteredProducts;
        }else if(active===9){
            const filteredProducts = products.filter(product => product.Tag === 'computer');
            result = filteredProducts;
        }else if(active===10){
            const filteredProducts = products.filter(product => product.Tag === 'laptop');
            result = filteredProducts;
        }
        setTemporary(result);
    },[active])


    const handlecart = (e) => {
        // Check if the item already exists in the cart
        const existingItem = cart.find(item => item.id === e.id);
    
        if (existingItem) {
            // If item exists, update its count
            const updatedCart = cart.map(item => 
                item.id === e.id ? { ...item, count: item.count + 1 } : item
            );
            setcart(updatedCart);
        } else {
            // If item doesn't exist, add it to the cart
            const updatedCart = [...cart, { ...e, count: 1 }];
            setcart(updatedCart);
        }
    }

    
    
    



    return(
        <div className="productContainer">
            <div className={theme?"filterbtns darkbuttons ":"filterbtns"}>
                <button onClick={()=>{setactive(1)}}>All</button>
                <button onClick={()=>{setactive(2)}}>Men's wear</button>
                <button onClick={()=>{setactive(3)}}>Women's wear</button>
                <button onClick={()=>{setactive(4)}}>child's wear</button>
                <button onClick={()=>{setactive(5)}}>Smartphones</button>
                <button onClick={()=>{setactive(6)}}>Tv's</button>
                <button onClick={()=>{setactive(7)}}>Home Accessories</button>
                <button onClick={()=>{setactive(8)}}>Electronic Components</button>
                <button onClick={()=>{setactive(9)}}>Computer Accessories</button>
                <button onClick={()=>{setactive(10)}}>Laptops</button>
            </div>
            <div className="productdiv">
                {
                    temporary.length!==0?
                        temporary.map((items)=>(
                            <div className={theme?"productinfo darkproductinfo":"productinfo"} key={items.id}>
                                <img src={items.Name} alt="sorry we are unable to load picture!"/>
                                <h1>{String(items.Title).slice(0,20)+'...'}</h1>
                                <p>{String(items.Description).slice(0,80)+'...'}</p>
                                <label className="price">{'$ '+items.Price}</label>
                                <div className={theme?"productbtns darkbuttons":"productbtns"}>
                                    <button>Buy Now</button>
                                    <button onClick={()=>{handlecart(items)}}>Add to Cart</button>
                                </div>
                            </div>
                        ))
                    :
                    <label className="noitems">No items to Found</label>
                }
            </div>
        </div>
    )
}

export default Products;