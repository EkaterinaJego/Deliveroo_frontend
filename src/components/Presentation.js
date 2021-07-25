import "./presentation.css";

const Presentation = ({ name, description, image }) => {
  return (
    <div className="presentation">
      <div className="firstcolumn">
        <h1>{name}</h1>
        <div className="description">
          <span>{description}</span>
        </div>
      </div>
      <div className="secondcolumn">
        <img className="secondcolumn img" src={image} alt="presentationimage" />
      </div>
    </div>
  );
};

export default Presentation;
