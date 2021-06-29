
import { Carousel1 } from ".."
import HomeCard from "../HomeCard"

function Home (){
    return (
 <div>
    <Carousel1></Carousel1>

    <div className="container text-center mt-5">
    <h5 className="headline d-inline-block mb-5">DISCOVER</h5>

    <div className="row icon-boxes">

    <HomeCard src="1821.jpg" aithusa="Αίθουσα Σταύρος Νιάρχος" titlos="Τα μαγικά μαξιλάρια" sunthetis="Γιώργος Δούσης / Ευγένιος Τριβιζάς" />
    <HomeCard src="ριγο.jpg" aithusa="Όπερα / Ωδείο Ηρώδου Αττικού" titlos="Ριγολέττος" sunthetis="Τζουζέππε Βέρντι" />
    <HomeCard src="lines.jpg" aithusa="Εναλλακτική Σκηνή" titlos="Set in Time in Space" sunthetis="Γιώργος Πούλιος" />
    <HomeCard src="bobolo.jpg" aithusa="Εναλλακτική Σκηνή" titlos="Μπιμπιλολό" sunthetis="Μαρκ Μοννέ / Αρνό Φαμπρ" />

     </div>
    </div>
</div> 
    )
}


export default Home