
import '../Component/nav.css'


function Heading() {
  return (
    <div>
      <div id="navbar">
        <ul id='naa'>
          
           <div className='nav'>
           <button  id='a'> <a href='home'>Home</a> </button>
            <button id='b' > <a href='userCreate'> Create</a></button>
            <button id='c'><a href='userData'>Data</a></button>
            <button id='d'>Disabled</button>
           </div>
          
        </ul>
      </div>
    </div>
  );
}

export default Heading;
