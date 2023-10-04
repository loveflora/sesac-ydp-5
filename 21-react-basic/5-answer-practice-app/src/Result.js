function Result(props) {
  console.log(props);
  const { fruit, background, color, content } = props.data;

  return (
    <div style={{ display: 'block' }}>
      <img src={`${fruit}.png`} width={100} height={100} />
      {/* 이미지는 public 안에 경로를 자동으로 찾아감 */}

      <div
        style={{
          padding: '10px',
          marginTop: '10px',
          backgroundColor: background,
          color: color,
        }}
      >
        결과 : {content}
      </div>
    </div>
  );
}

export default Result;
