import VillageMap from '../MyVillageMap/VillageMap';
import Place from '../Places/Place';
import './Home.css'
function Home() {
    return (
      <div className="Home">
        
        <header className="Home-header">
          <div className='ImageDivContainer' >
          <h3 style={{color:'gray'}} >Welcome To</h3>  
          {/* <img src='https://english-blog.s3.amazonaws.com/uploads/2020/06/Pledging-To-Protect-Nature-On-World-Environment-Day.jpg' > */}
          <div  className='villageNameImage'> <span className='text'>MUSHIDIPALLI</span>   </div>
          {/* <img src={grass} className='grassImage' />   */}
          


          {/* </img> */}
          <div className='discription-div'>
            <p style={{color:'#707070'}} >
              The main occupation of the villagers is farming. Whenever I come to my village, I feel immense pleasure because of its peaceful and serene environment. I get to enjoy some fresh and organic vegetables and fruits here. The people in my village are very helpful and they live in harmony with no grudges.
            </p>
            <div className='readMore' >
              <a href='ff'>Read More...</a>
            </div>
            
          </div>
          </div>
          <div>
            <VillageMap/>

          </div>
          
          <Place/>
         
        </header>
      </div>
    );
  }
  
  export default Home;