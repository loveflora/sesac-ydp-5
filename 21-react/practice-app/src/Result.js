function Result({ msg, img, bgColor, color }) {
  return (
    <div style={{ display: 'block' }}>
      <img src={`${img}.png`} width={100} height={100} />

      <div
        style={{
          padding: '10px',
          marginTop: '10px',
          backgroundColor: `${bgColor}`,
          color: `${color}`,
        }}
      >
        결과 : {msg}
      </div>
    </div>
  );
}

export default Result;
