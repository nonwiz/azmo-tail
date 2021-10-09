import Image from 'next/image'

export default function SliderCollection({sliders, props}) {

  return (
    <>
    <div className="position-relative">
      <div className={`parallax-1 my-5 ${props.bg}` }>
        <div
          id="carouselExampleCaptions"
          className="carousel .carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            {sliders.map((ignore, index) => (
             <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={`${index}`}
              className="active"
              aria-current="true"
              aria-label="Transparent"
              key={`${index}`}
            ></button>
            
            ))}
          </div>
          <div className="carousel-inner">
            {sliders.map(slide => (
              <div className={`carousel-item ${slide.active}`} key={slide.image}>
                <img className={`img-fluid ${slide.float}`} src={slide.image} alt={slide.alt}/>
                <div className="carousel-caption d-md-block text-dark position-absolute top-50 start-50 translate-middle">
                    <div className="d-flex justify-content-center align-items-center" style={{height: '100%'}}>
                        <div>
                          <h5 className={`azla-name ${props.title} `}> {slide.title} </h5>
                          <hr />
                          <p className="carousel-text">
                            {slide.content} 
                          </p>
                        </div>
                    </div>
                </div>
              </div>
            )) }
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>


    </>
  )
}
