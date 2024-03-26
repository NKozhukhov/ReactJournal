import "./logo.scss";

const Logo = ({ src, alt }) => {
  return (
    <div className="logo">
      <img src={src} alt={alt} className="logo__img"></img>
    </div>
  );
};

export default Logo;
