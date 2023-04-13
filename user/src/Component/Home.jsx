import '../Component/home.css'
import Bajrang from "../Component/img/bajrang.jpg"


function Home() {
  return (
    <div>
      
      <div id='detail'>
        <h1 id='h'>Hii My Name Is Rahul chaudhary</h1>
        <p> I am Drabhnaga in Bihar , currently i do backend develover in functionUp</p>
      </div>

     <hr></hr>

     <div id='i'>
        <img id='imgg' src={Bajrang}></img>
     </div>



    </div>
  );
}

export default Home;