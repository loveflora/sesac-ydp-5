//=== 공통되는 타입 ===
// 여러 파일에서 공통적으로 사용하는 타입을 관리
// 컴포넌트가 아님

export interface ToDoItem {
  id: number;
  text: string;
  completed: boolean;
}
