
const Carousel = () => {
    return ( 
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="img/slide1.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="img/slide2.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="img/slide3.jpg" className="d-block w-100 tree" alt="..."/>
                    </div>
                </div>
                <div className="contenido-hero-home">
                    <h3 className="up white">Servicio profesional<br/> Seguimiento ONLINE </h3>
                    <h3 className="down white"><span className="highlighted white">"</span><span className="highlighted" color="#87c0c0">PSY-Line</span><span className="comilla white">"</span></h3>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
     );
}
 
export default Carousel;