import './Place.css';
function Places() {

    let templs = [
        {
           image:'https://m.media-amazon.com/images/I/61w3N+3KKUL.jpg',
           cardTitle:'Card Title',
           description:'This is a description of the card.',


        },
        {
            image:'https://m.media-amazon.com/images/I/61w3N+3KKUL.jpg',
            cardTitle:'Card Title',
            description:'This is a description of the card.',


         },
         {
            image:'https://m.media-amazon.com/images/I/61w3N+3KKUL.jpg',
            cardTitle:'Card Title',
            description:'This is a description of the card.',


         },
         {
            image:'https://m.media-amazon.com/images/I/61w3N+3KKUL.jpg',
            cardTitle:'Card Title',
            description:'This is a description of the card.',


         }
    ]


    return (
      <div id="Places">
        <h3>Places</h3>
        <div className='places-container' >
            {
                templs.map((data,index)=>(

                    <span className="cards" key={index} >
                        <img src={data.image} alt="cardphoto" className="card-image"/>
                        <div className="card-content">
                            <h3 className="card-title">{data.cardTitle}</h3>
                            <p className="card-description">{data.description}</p>
                            <a href="dg" className="card-button">Read More</a>
                        </div>
                    </span>
                ))
            }




        </div>


      </div>
    );
  }

  export default Places;