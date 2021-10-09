import Card from './card.blogs'

export default function BlogHome() {
  return (
    <>
    <div className="container text-center">
      <div className="d-flex justify-content-center align-content-center my-1">
        <div
          style={{
            background: '#a7b0a6',
            width: '300px',
            height: '1em',
            position: 'absolute',
            transform: 'translate(0, 20px)'
          }}
          className="px-5"
        ></div>

        <div
          style={{
            background: 'var(--pink)',
            zIndex: '10',
            height: '1.7rem',
            width: '290px'
          }}
          className="px-5"
        >
          <h2 className="text-center">MY BLOG</h2>
        </div>
      </div>
    </div>

    <div
      className="parallax-3 parallax-height d-flex justify-content-center m-5 p-2"
      id="blog"
    >
      <div className="my-5 p-2">
        <div className="d-flex justify-content-center align-items-center">
            <Card title="MOMO MY BEST FRIEND" link="/blogs/diff/1-momo" body="This is my late Bunny. click to read the full story." imgSrc="/assets/home/momo_frame.png" />
 
        </div>
      </div>
    </div>
    </>

  )
}
