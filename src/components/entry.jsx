export default function Entry(props) {
  return (
    <>
    <article className="article-container">
      <div className="image-container">
        <img 
          className="image"
          src={props.img.src}
          alt={props.img.alt}
        />
      </div>
      <div className="info-container"> 
        <p><a href={props.googleMapsLink}>{props.country}</a></p>
        <h1 className="title">{props.title}</h1>
        <p className="dates">{props.dates}</p>
        <p className="entry-text">{props.text}</p>
      </div>
    </article>
    </>
  )
}