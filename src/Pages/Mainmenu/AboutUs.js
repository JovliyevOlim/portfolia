import Shadow from "../../image/mask.jpg";

function AboutUs({video,active}){

    return(
        <div className={`text ${active}`}>
            <video src={video} autoPlay muted  loop >
            </video>
            <img className={`mask`} src={Shadow} alt="####"/>
            <h2 >About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores atque dolorum enim ipsa maxime mollitia nostrum! Aliquid amet aspernatur assumenda cum cumque earum enim esse est et eveniet ex excepturi fuga fugiat labore, la
                borum nostrum officia quisquam reiciendis repellat repudiandae, sapiente tempore, veniam voluptatum!</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad adipisci asperiores aut beatae cupiditate enim eos esse expedita id illum ipsa ipsum iste, iure nemo nesciunt nisi nostrum nulla officia quas quos repudiandae sunt, tempore. A autem doloribus eos eum eveniet explicabo iste iure libero, magni, minus modi nemo numquam perferendis placeat porro quos ratione rerum sed unde voluptatibus! At beatae, deleniti doloribus illo illum mollitia neque nulla porro reiciendis voluptatum? Alias atque quasi quidem? Ipsa, modi, odio! Asperiores, beatae distinctio doloribus eos fugiat hic ipsa libero maxime minima nesciunt non nulla placeat praesentium quo repellendus velit veniam voluptates.

            </p>

        </div>
    )
}
export default AboutUs