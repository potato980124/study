import './App.css';
import { useState } from 'react'; 
function App() {
  let [mode,setMode] = useState("wellcome");
  let content = null;
  console.log(setMode);
  const topics = [
    {id:1,title:'html',content:"html is ..."},
    {id:2,title:'css',content:"css is ..."},
    {id:3,title:'js',content:"js is ..."},
  ]
  if(mode === "wellcome"){
    content = <Article title ="welcome" body = "hello,web"></Article> 
  }else if(mode ==="READ"){
    content = <Article title ="read" body = "hello read"></Article> 
  }
  return (
    <div>
      <Header title ="리액트 헤더" onChangeMode={()=>{setMode('wellcome')}} ></Header> 
      <Nav topics={topics} onChangeMode={(id)=>{setMode('READ')}}></Nav>
      <Article title="본문"></Article> 
      {content}
    </div>
  );
}

function Header(props){
  return <header>
        <h1><a href="/" onClick={(event)=>{ 
          event.preventDefault();
          props.onChangeMode();
        }}>{props.title}</a></h1>
      </header>
}
function Nav(props){
  console.log(props);
  const lis = []
  for(let i = 0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href='/' id={t.id} onClick={(e)=>{e.preventDefault(); props.onChangeMode(e.target.id)}}>{t.title}</a></li>)
  }
  return <nav>
    <ol>
      {lis} 
    </ol>
  </nav>
}
function Article(props){
  return <article>
       {props.title}
       <p>{props.body}</p>
    </article>
}



export default App;
