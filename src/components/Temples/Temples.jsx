import './Temples.css';



function Temples() {

    const TemplesList = [
        {
            templeTitle:'Paradhesmma Thalli',
            templeImage:'https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/139617674_103273015089035_5479595256881993235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ajtHmNznJUUAX_RXONO&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBr_c7omLblo7x4l1RAGw0osb07tcDc_2dvZWOl-WLzcA&oe=64D231DC',
            templeDescription:'Paradesamma Thalli is believed to be the goddess of fertility, protector of women, and a bringer of good fortune. Devotees seek her blessings for various reasons, including the fulfillment of desires, protection from evil, and the well-being of their families. She is especially revered by women seeking fertility and the birth of healthy children.',
            
        },
        {
            templeTitle:'Paradhesmma Thalli',
            templeImage:'https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/139617674_103273015089035_5479595256881993235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ajtHmNznJUUAX_RXONO&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBr_c7omLblo7x4l1RAGw0osb07tcDc_2dvZWOl-WLzcA&oe=64D231DC',
            templeDescription:'Paradesamma Thalli is believed to be the goddess of fertility, protector of women, and a bringer of good fortune. Devotees seek her blessings for various reasons, including the fulfillment of desires, protection from evil, and the well-being of their families. She is especially revered by women seeking fertility and the birth of healthy children.',
            
        },
        {
            templeTitle:'Paradhesmma Thalli',
            templeImage:'https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/139617674_103273015089035_5479595256881993235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ajtHmNznJUUAX_RXONO&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBr_c7omLblo7x4l1RAGw0osb07tcDc_2dvZWOl-WLzcA&oe=64D231DC',
            templeDescription:'Paradesamma Thalli is believed to be the goddess of fertility, protector of women, and a bringer of good fortune. Devotees seek her blessings for various reasons, including the fulfillment of desires, protection from evil, and the well-being of their families. She is especially revered by women seeking fertility and the birth of healthy children.',
            
        },
        {
            templeTitle:'Paradhesmma Thalli',
            templeImage:'https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/139617674_103273015089035_5479595256881993235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ajtHmNznJUUAX_RXONO&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBr_c7omLblo7x4l1RAGw0osb07tcDc_2dvZWOl-WLzcA&oe=64D231DC',
            templeDescription:'Paradesamma Thalli is believed to be the goddess of fertility, protector of women, and a bringer of good fortune. Devotees seek her blessings for various reasons, including the fulfillment of desires, protection from evil, and the well-being of their families. She is especially revered by women seeking fertility and the birth of healthy children.',
            
        },
        {
            templeTitle:'Paradhesmma Thalli',
            templeImage:'',
            templeDescription:'Some description',
            
        }

    ] 


    return (
      <div id="Temples">

        {
            TemplesList.map((temple,index)=>(
            <div key={index} className='temple-out-container' >
                <div  className="temple-container" >
                <img className="temple-image" src={temple.templeImage}  alt='temple_image'  />
                <div className="temple-description" >
                    <h2>{temple.templeTitle}</h2>
                    <p>{temple.templeDescription}</p> 
                    <button>see more</button>  
                </div>
                </div>
            </div>


            ))
        }

       
        
        
      </div>
    );
  }
  
  export default Temples;