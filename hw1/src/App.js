import { useEffect, useState } from "react";
import "../src/css/App.css";
import { stacks_array } from "./components/Sample";

function App() {
  const [inputValue, setInputValue] = useState("");

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const [imgUrl, setImgUrl] = useState([]);

  const onClick = () => {
    var url = "";
    stacks_array.map((e) => {
      if (e.name == inputValue) {
        url = e;
      }
    });
    url === ""
      ? alert("그런 스택은 없어요~")
      : setImgUrl((imgurl) => [...imgurl, url]);
  };

  const onRemove = (e) => {
    setImgUrl(imgUrl.filter((urls) => urls.name !== e.name));
  };

  return (
    <div>
      <div>과제1 : Event-Handling과 map함수 사용 + useState맛보기</div>
      <div>등록가능한 스택 이름(대문자까지 일치해야 함)</div>
      <div>
        <ul>
          {stacks_array.map((e) => (
            <li>{e.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <input onChange={onChange} />
        <button onClick={onClick}>추가</button>
      </div>
      <div>
        {imgUrl.map((e, index) => (
          <img src={e.img} key={index} onDoubleClick={() => onRemove(e)} />
        ))}
      </div>
    </div>
  );
}

export default App;
