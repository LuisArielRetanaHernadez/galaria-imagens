import '../styles/ImgGallery.css'

const ImgGallery = ({img, title, author}) =>{

    return (
        <div className="container-img">
            <img src={img} alt={title}></img>
            <div className="info-img">
                <div className="title-img"><p>{title}</p></div>
                <div className="author-img"><p>{author}</p></div>
            </div>
        </div>
    )
}
export default ImgGallery