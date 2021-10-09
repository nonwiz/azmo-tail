import Card from './card.blogs'

export default function VlogHome() {
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
          <h2 className="text-center">MY VLOG</h2>
        </div>
      </div>
    </div>

    <div
      className="parallax-3 parallax-height d-flex justify-content-center m-5 p-2"
      id="blog"
    >
      <div className="my-5 p-2">
        <div className="d-flex justify-content-center align-items-center">

          <Card title="VLOG: DORM ROOM TOUR" link="https://www.youtube.com/watch?v=dKwn0XIFyow" body="Curious how to make your dorm room to look aesthetic? Check mine!" imgSrc="/assets/home/vlog_room.png" />

        </div>
      </div>
    </div>
    </>

  )
}
