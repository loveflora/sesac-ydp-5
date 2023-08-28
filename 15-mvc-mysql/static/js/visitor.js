// === front JS ===

// tbody 요소, button-group 요소를 선택
const tbody = document.querySelector('tbody'); // $('tbody')
const buttonGroup = document.querySelector('#button-group');

// 폼의 [등록] 버튼 클릭 시, 테이블에 방문 데이터 추가
// => 버튼 클릭 시, axios로 POST /visitor 요청 날려서 db에 데이터 insert하기
function createVisitor() {
  const form = document.forms['visitor-form'];
  //% form's' 붙이기 !

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

    //] create
    //; 방금 추가한 방명록 정보 보이기
    // newVisitor 변수에 tr 요소 생성하고, tbody의 맨마지막 요소 추가
    const newVisitor = `
    <tr id="tr_${id}">
          <td>${id}</td>
          <td>${name}</td>
          <td>${comment}</td>
          <td>
            <button type="button">수정</button>
          </td>
          <td>
            <button type="button">삭제</button>
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
    tbody.insertAdjacentElement('beforeend', newVisitor);
  });
}
