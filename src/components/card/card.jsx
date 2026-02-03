const Card = ({
  srcImg,
  altImg,
  title,
  description,
  descriptionSecond,
  btnText,
  onAction = () => {},
}) => {
  return (
    <div className="card">
      <img src={srcImg} alt={altImg} />
      <h3>{title}</h3>
      <p>{description}</p>
      {descriptionSecond && <p>{descriptionSecond}</p>}

      <button onClick={() => onAction(title)}>{btnText}</button>
    </div>
  );
};

export default Card;
