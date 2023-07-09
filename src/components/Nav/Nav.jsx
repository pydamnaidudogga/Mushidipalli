import './Nav.css';
import {HiMenu} from 'react-icons/hi' ;
import {GrClose} from 'react-icons/gr';
function Nav() {

  function openMenu (){
    const menuButton = document.getElementById('menu-logo');
    menuButton.style.display='none';
    const options = document.getElementById('options-menu');
    options.style.display = 'flex';

    

  }

  function closeMenu (){
    const menuButton = document.getElementById('menu-logo');
    menuButton.style.display='inline-block';
    const options = document.getElementById('options-menu');
    options.style.display = 'none';


  }




    return (
      <div className="Nav">
        
        <header className="Nav-header">
            <div id='villageName' >
                <span> <a href='/' >MUSHIDIPALLI</a></span>
            </div>
            <div id='menu-logo' onClick={()=>openMenu()} >
                <HiMenu />

            </div>
          <div id='options-menu'>
            <span className='menu-close-logo' onClick={()=>closeMenu()} >
                <GrClose/>
            </span>
            <span>
                <a href='/' >Home</a>
            </span>
            <span>
                 <a href='sf' >About</a>             
            </span>
            <span>
                 <a href='#Places' >Places</a>
            </span>
            <span>
                 <a href='sf' >SignIn</a>
            </span>
            <span>
                 <a href='sf' >SingUp</a>
            </span>
            
            

          
          </div>      
        </header>
      </div>
    );
  }
  
  export default Nav;