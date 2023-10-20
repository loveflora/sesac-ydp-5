import React from 'react';

//-- (1) interface
interface StudentInfo {
  name: string;
  grade: number;
  part?: string; // 있어도 되고, 없어도 되는 props
  handleClick: (name: string, grade: number, part?: string) => void;
}

//-- (2) type도 가능하긴 함
// type StudentInfo = {
//   name: string;
//   grade: number;
// };

//////////////////////////////////////

//-- (1) FC 미사용
// export default function Student({ name, grade }: StudentInfo) {
//   return <div>Students</div>;
// }

//-- (2) FC : Functional Component
// 함수형 컴포넌트, 제네릭
// React.FC를 사용할 때는 Generic을 이용해서 props 타입을 표현
// const Student: React.FC<StudentInfo> = ({ name, grade }) => {
//   return (
//     <div>
//       <li>이름 : {name}</li>
//       <li>학년 : {grade}</li>
//     </div>
//   );
// };
// export default Student;

const Student = ({ name, grade, part, handleClick }: StudentInfo) => {
  return (
    <div onClick={() => handleClick(name, grade, part)}>
      <li>이름 : {name}</li>
      <li>학년 : {grade}</li>
      <li>전공 : {part || '자유전공'}</li>
    </div>
  );
};

export default Student;
