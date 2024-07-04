import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const product = {
    airpods: "AirPods are wireless Bluetooth earbuds designed by Apple. In addition to playing audio, the AirPods contain a microphone that filters out background noise as well as built-in accelerometers and optical sensors capable of detecting taps and pinches and placement within the ear, which enables automatic pausing of audio when they are taken out of the ear.",
    bluetooth: "Available in all sizes, including replaceable battery and rechargeable models, as well as wall-powered units, the Bluetooth speaker receives digital audio streams from the host device, which are typically compressed. It then decompresses, decodes and amplifies the audio through the built-in speakers.",
    charger: "A charger is a device that you use to infuse energy into another object, typically a battery in devices like smartphones, laptops, tablets, and other electronic gadgets. It converts mains power into a suitable voltage and current to charge the battery."
}

export function Top(){
    return(
        <>
        <h1>Top Most Products Of our Company</h1>
        <label>Sort By:</label>&nbsp;
        <select>
            <option>Name</option>
            <option>Price</option>
            <option>rating</option>
            <option>discount</option>
        </select><br></br><br></br>

        <Popup trigger=
                {<img src="https://mrglobal.ch/cdn/shop/products/BTMSTWSINEAR1-01-MAIN-HR.jpg?v=1680703963" style={{width:"200px", height: "200px", marginRight: "300px"}}></img>}
                position="right center"><div>
                    <h4 style={{fontFamily:"cursive"}}>Airpods</h4>
                    <p>{product.airpods}</p>
                    </div></Popup>
                    <Popup trigger=
                {<img src="https://m.media-amazon.com/images/I/81cQGuio4ZL._AC_UF1000,1000_QL80_.jpg" style={{width:"300px", height: "200px", marginRight: "170px", marginTop:"30px"}}></img>}
                position="right center"><div>
                    <h4 style={{fontFamily:"cursive"}}>Bluetooth Speaker</h4>
                    <p>{product.bluetooth}</p>
                    </div></Popup>
                    <Popup trigger=
                {<img src="https://m.media-amazon.com/images/I/61EbsHc9LML._AC_UF1000,1000_QL80_.jpg" style={{width:"200px", height: "200px", marginRight: "650px", marginTop:"70px"}}></img>}
                position="right center"><div>
                    <h4 style={{fontFamily:"cursive"}}>Charger</h4>
                    <p>{product.charger}</p>
                    </div></Popup>
        
        </>
    );
}
