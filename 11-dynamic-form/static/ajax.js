// ============================================
// =================== AJAX ===================
// ============================================
const resultBox = document.querySelector("div.result");

// ------------------- GET -------------------

function ajaxGet() {
  console.log("ajaxGet 함수 호출 !");

  // form 선택
  const form = document.forms["register"];
  console.log(form);

  // form 객체 요소 확인
  console.dir(form);
  // 0 : input#name
  // 1 : input#male
  // 2 : input#female
  // 3 : button
  // 4 : button
  console.dir(form.name);
  console.dir(form.name.value); // 이름 input에 입력한 값
  console.dir(form.gender);
  console.dir(form.gender.value); // 성별 radio input을 선택한 값

  // 요청에 실어서 보낼 데이터 변수
  const data = {
    name: form.name.value,
    gender: form.gender.value,
  };

  // Ajax로 서버에 Get 요청 보내기
  $.ajax({
    type: "GET", // 요청의 종류 (=form의 method 속성)
    url: "/ajax", // 요청의 경로 (=form의 action 속성)
    data: data, // 요청에 실어보낼 데이터 (=서버가 받게 될 데이터)

    // '/ajax' 경로로 data 내용 담아서 'GET' 요청 보냄
    // 응답 받아옴 (req.query)
    // 요청이 성공적으로 수행되었을 때 실행할 함수
    success: function (data) {
      // 'data' : BE에서 req.query 받아옴
      // res.send(req.query); ---> 브라우저 바깥에서 찍힘 (같은 req.query라도 찍히는 위치가 다름)
      // 그 위에 코드 'data: data'와 다름
      console.log(data);
      // 브라우저 콘솔에서 찍힘
      resultBox.textContent = `GET /ajax 요청 완료 ! ${data.name}님은 ${data.gender}이시죠?`;
    },
  });
}

// ------------------- POST -------------------

function ajaxPost() {
  console.log("ajaxPost 함수 호출 !");

  const form = document.forms["register"];
  // form's' : 's' 붙이는거 잊지 말기 !
  const data = {
    name: form.name.value,
    gender: form.gender.value,
  }; // 서버로 보낼 데이터를 만듦

  $.ajax({
    type: "POST",
    url: "/ajax",
    data: data,
    success: function (data) {
      console.log(data);
      resultBox.textContent = `POST /ajax 요청 완료 ! ${data.name}님은 ${data.gender}이시죠?`;
    },
  });
}
