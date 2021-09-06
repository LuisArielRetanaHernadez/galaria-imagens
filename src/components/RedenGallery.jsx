// elementos de estilos css
import '../styles/RedenGallery.css'

import BD from '../BD/imagesGallery.json'
import ImgGallery from './ImgGallery';

const RedenGallery = () =>{

    const imgs = BD.imganesGallery.map((img,index) => <ImgGallery key={index} img={img.img} title={img.title} author={img.author}></ImgGallery>)
    
    return (
        <section className="container-redenGallery">
            {imgs}
        </section>
    )
}
export default RedenGallery