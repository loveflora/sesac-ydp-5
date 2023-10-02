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

// ------------------- GET -------------------
// ------------- 2) async, await -------------
// -------------------------------------------

// 퀴즈 2. axios 요청 처리를 async/await로 변경 !
async function axiosGet() {
  console.log("axiosGet 함수 호출 !");

  const form = document.forms["register"];
  const data = {
    name: form.name.value,
    gender: form.gender.value,
  };

  console.log("axiosGet 함수 호출 !");

  try {
    // try : 성공할 때 !

    // 폼 유효성 검사
    // name input에 입력된 값이 없다면, '이름을 입력해주세요!'
    // gender radio btn을 선택하지 않았다면, '성별을 선택해주세요!'
    // 둘 다 입력이 잘 되었다면, axios로 back에 요청 날리기

    if (!form.name.checkValidity()) {
      resultBox.textContent = "이름을 입력해주세요!";
    } else if (!form.name.gender[0]) {
      resultBox.textContent = "성별을 선택해주세요!";
    } else {
      // !!! async랑 await 위치를 몰랐다....
      // axios가 끝나야 데이터가 담기게끔 !
      const response = await axios({
        method: "get",
        url: `/axios/?name=${form.name.value}&gender=${form.gender.value}`,
      }); // response : 서버의 응답결과

      console.log(response);
      console.log(response.data);

      const { name, gender } = response.data;
      resultBox.textContent = `GET /ajax 요청 완료 ! ${name}님은 ${gender}이시죠?`;
    }
  } catch (err) {
    // catch : 에러 발생 시 !
    console.log("Error!", err);
    resultBox.textContent = "알 수 없는 에러 발생 ! 다시 시도해주세요.";
  }
}

console.log(form.name.checkValidity());
// 같은 name으로 묶인 radio btn은 하나만 선택되더라도 True를 반환
console.log(form.gender[0].checkValidity());
console.log(form.gender[1].checkValidity());

////////////////////////////////////////////////////
////////////////////////////////////////////////////

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

// ------------------- POST -------------------
// ------- 2) async, await : try, catch -------
// --------------------------------------------

// axios 요청 처리를 async/await로 변경 !
async function axiosPost() {
  console.log("axiosPost 함수 호출 !");
  const form = document.forms["register"];
  const data = {
    name: form.name.value,
    gender: form.gender.value,
  };

  try {
    const response = await axios({
      method: "POST",
      url: "/axios",
      data: data,
    });

    console.log(response);

    const { name, gender, msg } = response.data;

    resultBox.textContent = `POST /ajax 요청 완료 ! ${name}님은 ${gender}이시죠? 메세지 : ${msg}`;
  } catch {
    (err) => console.log("Error!", err);

    resultBox.textContent = "알 수 없는 에러 발생 ! 다시 시도해주세요.";
  }
}
