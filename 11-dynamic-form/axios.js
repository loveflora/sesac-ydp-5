// ============================================
// =================== Axios ==================
// ============================================

// ------------------- GET -------------------
// ------ 1) then, catch : 프로미스 체이닝 -------
// -------------------------------------------

function axiosGet() {
  console.log("axiosGet 함수 호출 !");

  const form = document.forms["register"];
  const data = {
    name: form.name.value,
    gender: form.gender.value,
  };

  // axios는 promise 기반
  // axios 요청의 결과는 Promise 객체
  // --> then, catch 메서드로 체이닝 가능 !
  // --> async, await 도 사용할 수 있음 !
  axios({
    // 1. params 키 사용
    method: "GET", // form 요청 방식 (=form method 속성)
    url: "/axios", // form 요청 경로 (=form action 속성)
    params: data, // 서버로 보낼 데이터 (query string)
    // 1) Ajax와 다른 점 1. params

    // 2. query string을 직접 정의해서 요청 보낼 수도 있음
    method: "get",
    url: `/axios/?name=${form.name.value}&gender=${form.gender.value}`,
  })
    .then(function (response) {
      console.log(response); // 서버의 응답 결과
      console.log(response.data); // 서버의 응답 데이터를 확인
      // 'response.data' 가 'req.query'임
      // 2) Ajax와 다른 점 2. response.data

      // 퀴즈 1. 객체 구조 분해
      const { name, gender } = response.data;

      resultBox.textContent = `GET /ajax 요청 완료 ! ${name}님은 ${gender}이시죠?`;
    })
    // url: '/axioss'로 수정 시 에러 발생
    .catch(function (error) {
      console.log("Error!", error);
    });
}

// ------------------- POST -------------------
// ------- 1) then, catch : 프로미스 체이닝 -------
// --------------------------------------------

function axiosPost() {
  console.log("axiosPost 함수 호출 !");

  const form = document.forms["register"];
  const data = {
    name: form.name.value,
    gender: form.gender.value,
  };

  axios({
    method: "GET", // form 요청 방식 (=form method 속성)
    url: "/axios", // form 요청 경로 (=form action 속성)
    params: data,
  })
    .then((res) => {
      console.log(res);
      resultBox.textContent = `GET /ajax 요청 완료 ! ${data.name}님은 ${data.gender}이시죠?`;
    })
    .catch((err) => console.log("Error!", err));
}
