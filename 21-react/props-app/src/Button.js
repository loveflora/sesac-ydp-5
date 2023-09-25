const Button = (props) => {
  const { link, children } = props;

  return (
    <a href={link}>
      {/* <button>{props.children}</button> */}
      <button>{children}</button>
    </a>
  );
};

export default Button;
