import './Place.css';
function Places() {

    let templs = [
        {
           image:'https://m.media-amazon.com/images/I/61w3N+3KKUL.jpg',
           cardTitle:'Temples',
           description:'This is a description of the card.',
           link:'/temples'


        },
        {
            image:'https://w0.peakpx.com/wallpaper/827/359/HD-wallpaper-water-water-logo-plus-themes.jpg',
            cardTitle:'Ponds',
            description:'This is a description of the card.',
            link:'/temples'


         },
         {
            image:'https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg?w=2000',
            cardTitle:'Schools',
            description:'This is a description of the card.',
            link:'/temples'


         },
         {
            image:'https://www.logopeople.in/wp-content/uploads/2013/01/government-of-india.jpg',
            cardTitle:'Govt.Offices',
            description:'This is a description of the card.',
            link:'/temples'


         }
    ]


    return (
      <div id="Places">
        <h2 >Places</h2>
        <div className='places-container' >
            {
                templs.map((data,index)=>(

                    <span className="cards" key={index} >
                        <img src={data.image} alt="cardphoto" className="card-image"/>
                        <div className="card-content">
                            <h3 className="card-title">{data.cardTitle}</h3>
                            <p className="card-description">{data.description}</p>
                            <a href={data.link} className="card-button">Click me</a>
                        </div>
                    </span>
                ))
            }




        </div>


      </div>
    );
  }

  export default Places;