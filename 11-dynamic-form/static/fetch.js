// ============================================
// =================== Fetch ==================
// ============================================

// fetch(url, options)

// ------------------- GET -------------------

function fetchGet() {
  console.log("fetchGet 함수 호출 !");

  const form = document.forms["register"];
  // fetch('/fetch'); // fetch는 default로 get 방식으로 작동 (options 생략 가능)
  fetch(`/fetch?name=${form.name.value}&gender=${form.gender.value}`)
    .then((res) => {
      console.log(res);
      return res.json();
      // JSON 형태로 응답 데이터를 전달 받음.
      // 응답(response) 객체는 json() 메서드를 제공
      // 응답(response) 객체로부터 JSON 포맷의 응답 전문을 자바스크립트 객체(js obj)로 반환
    })
    .then(function (data) {
      // data 변수 => 직전 then 메서드의 return 값 : response.json()
      console.log(data);

      const { name, gender } = data;
      resultBox.textContent = `GET /fetch 요청 완료 ! ${name}님은 ${gender}이시죠?`;
    });
}

// ------------------- POST -------------------

function fetchPost() {
  console.log("fetchPost 함수 호출 !");

  const form = document.forms["register"];
  const data = {
    name: form.name.value,
    gender: form.gender.value,
  }; // 서버에 넘겨줄 데이터

  // fetch를 이용해, post 요청 날릴 때는 option 객체가 반드시 필요 !
  // 1) method 옵션 post 지정
  // 2) headers 키 JSON 포맷 사용 선언
  // 3) body 키 서버로 보낼 데이터
  fetch("/fetch", {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    // 'data: data' 라고 안함 !
    // data: js obj
    // JSON.stringify(data) : js obj --> json

    // *** 직렬화 : 네트워크에서 통신하기 쉬운 형식으로 변환 ***
    // JSON.stringify() : JSON으로 변경
  })
    .then(
      // fetch 도 Promise 객체를 반환해서 '.then' 사용 가능함
      (res) => {
        console.log(res);
        return res.json();
      },
    )
    .then((res) => {
      console.log(data);
      resultBox.textContent = `GET /fetch 요청 완료 ! ${data.name}님은 ${data.gender}이시죠?`;
    });
}
