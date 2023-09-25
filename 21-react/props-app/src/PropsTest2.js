export default function PropsTest2(props) {
  const { title, author, price, type } = props;
  return (
    <div className="wrapper">
      <div className="header">이번주 베스트셀러</div>
      <img
        src="https://image.yes24.com/goods/93513663/XL"
        style={{ width: '100px' }}
        alt="책"
      />
      <div className="title">{title}</div>
      <div className="description">
        <div>저자: {author}</div>
        <div>판매가: {price}</div>
        <div>구분: {type}</div>
      </div>
    </div>
  );
}
