const Card = ({ url, title, desc, weight, type }) => {
  return (
    <figure class="snip1527 hover">
      <div class="image">
        <img src={url} alt="pr-sample24" />
      </div>
      <figcaption>
        <div class="date">
          <span class="day">{weight}</span>
          <span class="month">KG</span>
        </div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </figcaption>
      {/* <a href="#">A</a> */}
    </figure>
  );
};

export default Card;
