// === front JS ===

// tbody 요소, button-group 요소를 선택
const tbody = document.querySelector('tbody'); // $('tbody')
const buttonGroup = document.querySelector('#button-group');

const form = document.forms['visitor-form'];
//% form's' 붙이기 !

// 폼의 [등록] 버튼 클릭 시, 테이블에 방문 데이터 추가
// => 버튼 클릭 시, axios로 POST /visitor 요청 날려서 db에 데이터 insert하기
function createVisitor() {
  // const form = document.forms['visitor-form'];

  axios({
    method: 'POST',
    url: '/visitor',
    data: {
      name: form.name.value,
      comment: form.comment.value,
    },
  }).then((res) => {
    // res : id, name, comment
    console.log('post /visitor 요청에 대한 응답', res.data);

    const { id, name, comment } = res.data;

    //] create
    //; 방금 추가한 방명록 정보 보이기
    // newVisitor 변수에 tr 요소 생성하고, tbody의 맨마지막 요소 추가
    const newVisitor = `
    <tr id="tr_${id}">
          <td>${id}</td>
          <td>${name}</td>
          <td>${comment}</td>
          <td>
            <button type="button" onclick="editVisitor(${id})">수정</button>
          </td>
          <td>
            <button type="button" onclick="deleteVisitor(this, ${id})">삭제</button>
          </td>
        </tr>
    `;

    //_ jQuery
    // $('tbody').append(newVisitor);

    //_ js
    // (X) innerHTML : 맨 마지막에 추가되는게 아니라, 덮어 씌우게 됨

    // (O) insertAdjacentElement(position, element)
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
    // beforeend : table 태그 닫기 직전
    tbody.insertAdjacentHTML('beforeend', newVisitor);
    //# string `` 형식은 insertAdjacentElement가 아닌, insertAdjacentHTML 형식이어야 함.
    // 'beforebegin': targetElement 외부 앞 (트리 요소의 부모가 있는 경우에만 작동)
    // 'afterbegin': targetElement 내부의 첫번째 자식 앞
    // 'beforeend': targetElement 외부의 마지막 자식 뒤
    // 'afterend': targetElement 외부 뒤 (트리 요소의 부모가 있는 경우에만 작동)

    form.name.value = '';
    form.comment.value = '';
  });
}

function deleteVisitor(obj, id) {
  console.log(obj, id);

  // confirm 창에서 [취소] 누르면, 아무 일도 일어나지 않음.
  if (!confirm('삭제하시겠습니까 ?')) {
    //. !false => true
    return;
  }

  // confirm 창에서 [확인] 누르면, visitor 데이터 삭제
  // => axios로 DELETE /visitor 요청 날려서 db 데이터 delete 하기
  axios({
    method: 'delete',
    url: '/visitor',
    data: {
      id: id,
    },
  }).then((res) => {
    console.log('delete /visitor 요청에 대한 응답', res.data);

    alert('삭제 성공 !');
    // btn << td << tr
    obj.parentElement.parentElement.remove(obj.parentElement);
  });
}

//] 테이블에 [ 수정 ] 버튼
function editVisitor(id) {
  console.log(id, ' 번 방명록 수정 !');

  //; TODO
  //-- 1) id 가지로 방명록 하나 조회 (Read one) ---> input에 각각 value로 저장
  axios({
    //: param
    //_ GET /visitor/:id
    method: 'get',
    url: `/visitor/${id}`,

    //: 쿼리스트링
    //_ GET /visitor?id=1
    // method: 'get',
    // url: '/visitor',
    // params: {        // => param's' 붙이기 !
    //   id: id,
    // },

    //\ url: `/visitor?id=${id}`,
  }).then((res) => {
    console.log(res.data);
    //) input에 각각 value로 저장
    const { name, comment } = res.data;
    // const form = document.forms['visitor-form'];

    form.name.value = name;
    form.comment.value = comment;
  });

  //-- 2) [변경], [취소] 버튼 보이기
  const btns = `
  <button type="button" onclick="editDo(${id})">변경</button>
  <button type="button" onclick="editCancel()">취소</button>
  `;

  buttonGroup.innerHTML = btns;
}

//] [ 변경 ] 버튼 클릭 시 --> 실제 수정 요청
function editDo(id) {
  // const form = document.forms['visitor-form'];

  axios({
    method: 'patch',
    url: '/visitor',
    data: {
      id,
      name: form.name.value,
      comment: form.comment.value,
    },
  }).then((res) => {
    console.log(res.data);

    const { isUpdated } = res.data;

    if (isUpdated) {
      alert('수정 완료 !');
    }

    const tr = document.querySelector(`#tr_${id}`).children;
    tr[1].textContent = form.name.value;
    tr[2].textContent = form.comment.value;

    // 수정 작업 이루어지고 나서
    // 1) 초기화
    // 2) [ 등록 ] 버튼 보이기
    editCancel();
  });
}

//] [ 취소 ] 버튼 누르면
//-- 1) input 초기화
//-- 2) buttonGroup 요소 안에 다시 [ 등록 ] 버튼 보이기
function editCancel() {
  //-- 1) input 초기화
  form.name.value = '';
  form.comment.value = '';

  //-- 2) buttonGroup 요소 안에 다시 [ 등록 ] 버튼 보이기
  buttonGroup.innerHTML = `
  <button type="button" onclick="createVisitor()">등록</button>
  `;
}
