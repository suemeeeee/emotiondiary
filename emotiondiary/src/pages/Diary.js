import { useParams } from "react-router-dom";
//use~는 react Hooks에서 많이 씀!
//useParams는 사용자가 만든 "커스텀 훅스"
const Diary = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Diary</h1>
      <p>이곳은 다이어리 입니다.</p>
    </div>
  );
};

export default Diary;
