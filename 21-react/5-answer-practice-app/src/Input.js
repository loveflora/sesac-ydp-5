function Input(props) {
  const setData = props.setData;
  const handleInput = (e) => {
    const content = e.target.value; // input에 입력한 값

    setData((data) => {
      console.log(data); // prevState : 직전이 찍힘

      return { ...data, content };
    });
  };

  return (
    <>
      내용 :{' '}
      <input
        type="text"
        onChange={handleInput}
        placeholder="내용을 입력하세요."
      />
    </>
  );
}

export default Input;
