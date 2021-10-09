import Image from 'next/image'

export default function Card(props) {
  return (
    <div className="card m-2" style={{ width: "250px" }}>
      <Image
        className="card-img-top"
        src={props.imgSrc}
        alt={props.title}
        width="250px"
        height="200px"
        quality="100"
      />
      <div className="card-body">
        <h5 className="card-title">
          <a href={props.link}>{props.title}</a>
        </h5>
        <p className="card-text">
          {props.body}
        </p>
      </div>
    </div>
  );
}
