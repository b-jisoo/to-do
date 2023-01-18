import Seo from "@/components/Common/Seo";
import Header from "@/components/Layout/header";
import TodoLayout from "@/components/ToDo/ToDoLayout";

export default function HomePage() {
  return (
    <div id="wrap">
      <Seo />
      {/* 헤더 부분 */}
      <Header />
      {/* To-do 부분 */}
      <TodoLayout />
      {/* 푸터 부분 */}
      <footer></footer>
    </div>
  );
}
