import "./App.css";
import Profile from "./components/Profile";


function App() {
  return(
    <>
    <Profile img="https://cdn.pixabay.com/photo/2015/03/03/18/58/woman-657753_640.jpg" 
    name="김일동" 
    title="프론트엔드 개발자"/>
    <Profile img="https://cdn.pixabay.com/photo/2015/01/12/10/45/man-597178_1280.jpg" 
    name="김이동" 
    title="백엔드 개발자"
    isNew={true}
    />
    <Profile img="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_1280.jpg" 
    name="김삼동" 
    title="풀스택 개발자"/>
    
    </>
  )
}

export default App;
