import './Lists.css';
import { useMatch } from 'react-router-dom';


function Temples() {

    const matchTemples = useMatch('/temples');
    const matchPonds = useMatch('/ponds');
    const matchSchools = useMatch('/schools');
    const matchGovt = useMatch('/govtOffices');
    
    




    let displayData=[];

    const TemplesList = [
        {
            title:'Paradhesmma Thalli',
            image:'https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/139617674_103273015089035_5479595256881993235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ajtHmNznJUUAX_RXONO&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBr_c7omLblo7x4l1RAGw0osb07tcDc_2dvZWOl-WLzcA&oe=64D231DC',
            description:'Paradesamma Thalli is believed to be the goddess of fertility, protector of women, and a bringer of good fortune.',
            
        },
        {
            title:'Paradhesmma Thalli',
            image:'https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/139617674_103273015089035_5479595256881993235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ajtHmNznJUUAX_RXONO&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBr_c7omLblo7x4l1RAGw0osb07tcDc_2dvZWOl-WLzcA&oe=64D231DC',
            description:'Paradesamma Thalli is believed to be the goddess of fertility, protector of women, and a bringer of good fortune. Devotees seek her blessings for various reasons, including the fulfillment of desires, protection from evil, and the well-being of their families. She is especially revered by women seeking fertility and the birth of healthy children.',
            
        },
        {
            title:'Paradhesmma Thalli',
            image:'https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/139617674_103273015089035_5479595256881993235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ajtHmNznJUUAX_RXONO&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBr_c7omLblo7x4l1RAGw0osb07tcDc_2dvZWOl-WLzcA&oe=64D231DC',
            description:'Paradesamma Thalli is believed to be the goddess of fertility, protector of women, and a bringer of good fortune. Devotees seek her blessings for various reasons, including the fulfillment of desires, protection from evil, and the well-being of their families. She is especially revered by women seeking fertility and the birth of healthy children.',
            
        },
        {
            title:'Paradhesmma Thalli',
            image:'https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/139617674_103273015089035_5479595256881993235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ajtHmNznJUUAX_RXONO&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBr_c7omLblo7x4l1RAGw0osb07tcDc_2dvZWOl-WLzcA&oe=64D231DC',
            description:'Paradesamma Thalli is believed to be the goddess of fertility, protector of women, and a bringer of good fortune. Devotees seek her blessings for various reasons, including the fulfillment of desires, protection from evil, and the well-being of their families. She is especially revered by women seeking fertility and the birth of healthy children.',
            
        },
        {
            title:'Paradhesmma Thalli',
            image:'',
            description:'Some description',
            
        }

    ] 
    const SchoolsList = [
        {
            title:'Z.P.H School',
            image:'https://lh3.googleusercontent.com/pw/AIL4fc_jJvtiJyL3zpV04xiCw0OgbKNA_O1aKOoo6tjdTnklCuRzkUCp4esX0dLBnBsJ6stkHGrsqO43SCP3LNWG2_RIdtCNlJOBz1SwBLD6Lw4tZWttVTlhakXPg0k8Z0e4LZ4u5XTX-pQr9J8Aom0_SgsYmC8z0-w989kZc7eHTEzqMEaGhJYYumMdXxKHkuoWp4sfkBGg6y_uW6irUl0y25R6cxDDi2ePn8w-suErvyfYCHgBUSoz-qh06IqZsIjCn9cjxDI1kQqC_l4HIaOJcDxWTcYk9kmQSv2V6wfLRE6U-VKmCnmcZ6QWGnCPjyDwufLJHMsWJW9AVc7-7Snckq8emNGY2DuzKKdJGfgzGhoUTKDuDU-NBP8a1zh6PlOrebBszUk711TL1KiELp93rj2tXo4b8_FRPkKFTOw6-c0PxVivTQo9yb-WaPd-V_jhSLWpWBNVw9926gED2jaMzOn6jwEqGSlKjoa_10P9qbpNAcWe1Eerp6bAseP3E1VhjdfdHWdEGvXNhTXk_fPblAfRFTBuk1kFMVSz2Ac81w5DalRVgd-h0aMGiaGtVfpHriKFjNWMv-R7xRflpsoOss6lH6qOp-74wIAuMC1OYqgzryNCiMA7Tl3wEaENFWDlnUT6kSrcr5Xlzz0cBg390GgImygWOQrvke-d-DBIqstBrY65vXmtx4rs1y2t9FpbKThOL8G50uPvJoPWmfZr_VD2n_RDSrgUmP7x6zScLvU1UAE1Vi5CSqr5ABtFLEY8C1JlAjkecyGVt83DF0s78CMPKw2sDRRsa6VNbvCEmJK7ptpjHNxm_NiU_82Qk8MB3Ur8As1cqNIRLykyP0cmvhw6c664cFOzgGAwNwFJw-rdHFB7lYilJroOyrCvq9cUTnIT9Elyv9Cy9mm7QjFSapppyCS-7qFfHv_QW57wqdy6eiB0wff66cSbrw09Wge6zCZwZE6P4EgDQHf_m0bdW7Td-pyWsw=w1712-h1284-s-no?authuser=0',
            description:'Paradesamma Thalli is believed to be the goddess of fertility, protector of women, and a bringer of good fortune. Devotees seek her blessings for various reasons, including the fulfillment of desires, protection from evil, and the well-being of their families. She is especially revered by women seeking fertility and the birth of healthy children.',
            
        }

    ] 
    const PondsList = [
        {
            title:'Pedda Cheruvu',
            image:'https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/139617674_103273015089035_5479595256881993235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ajtHmNznJUUAX_RXONO&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBr_c7omLblo7x4l1RAGw0osb07tcDc_2dvZWOl-WLzcA&oe=64D231DC',
            description:'Paradesamma Thalli is believed to be the goddess of fertility, protector of women, and a bringer of good fortune. Devotees seek her blessings for various reasons, including the fulfillment of desires, protection from evil, and the well-being of their families. She is especially revered by women seeking fertility and the birth of healthy children.',
            
        },
        {
            title:'yenkayyacheruvu',
            image:'https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/139617674_103273015089035_5479595256881993235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ajtHmNznJUUAX_RXONO&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBr_c7omLblo7x4l1RAGw0osb07tcDc_2dvZWOl-WLzcA&oe=64D231DC',
            description:'Paradesamma Thalli is believed to be the goddess of fertility, protector of women, and a bringer of good fortune. Devotees seek her blessings for various reasons, including the fulfillment of desires, protection from evil, and the well-being of their families. She is especially revered by women seeking fertility and the birth of healthy children.',
            
        },
        {
            title:'mathala cheruvu',
            image:'https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/139617674_103273015089035_5479595256881993235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ajtHmNznJUUAX_RXONO&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBr_c7omLblo7x4l1RAGw0osb07tcDc_2dvZWOl-WLzcA&oe=64D231DC',
            description:'Paradesamma Thalli is believed to be the goddess of fertility, protector of women, and a bringer of good fortune. Devotees seek her blessings for various reasons, including the fulfillment of desires, protection from evil, and the well-being of their families. She is especially revered by women seeking fertility and the birth of healthy children.',
            
        },
        {
            title:'sannasi cheruvu',
            image:'https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/139617674_103273015089035_5479595256881993235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ajtHmNznJUUAX_RXONO&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBr_c7omLblo7x4l1RAGw0osb07tcDc_2dvZWOl-WLzcA&oe=64D231DC',
            description:'Paradesamma Thalli is believed to be the goddess of fertility, protector of women, and a bringer of good fortune. Devotees seek her blessings for various reasons, including the fulfillment of desires, protection from evil, and the well-being of their families. She is especially revered by women seeking fertility and the birth of healthy children.',
            
        },
        {
            title:'konam',
            image:'',
            description:'Some description',
            
        }

    ] 
    const GvotList = [
        {
            title:'Sachiwalayam',
            image:'https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/139617674_103273015089035_5479595256881993235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ajtHmNznJUUAX_RXONO&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBr_c7omLblo7x4l1RAGw0osb07tcDc_2dvZWOl-WLzcA&oe=64D231DC',
            description:'Paradesamma Thalli is believed to be the goddess of fertility, protector of women, and a bringer of good fortune. Devotees seek her blessings for various reasons, including the fulfillment of desires, protection from evil, and the well-being of their families. She is especially revered by women seeking fertility and the birth of healthy children.',
            
        },
        {
            title:'Village Clinick',
            image:'https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/139617674_103273015089035_5479595256881993235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ajtHmNznJUUAX_RXONO&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBr_c7omLblo7x4l1RAGw0osb07tcDc_2dvZWOl-WLzcA&oe=64D231DC',
            description:'Paradesamma Thalli is believed to be the goddess of fertility, protector of women, and a bringer of good fortune. Devotees seek her blessings for various reasons, including the fulfillment of desires, protection from evil, and the well-being of their families. She is especially revered by women seeking fertility and the birth of healthy children.',
            
        },
        {
            title:'Raithu Bharosakendram',
            image:'https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/139617674_103273015089035_5479595256881993235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ajtHmNznJUUAX_RXONO&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBr_c7omLblo7x4l1RAGw0osb07tcDc_2dvZWOl-WLzcA&oe=64D231DC',
            description:'Paradesamma Thalli is believed to be the goddess of fertility, protector of women, and a bringer of good fortune. Devotees seek her blessings for various reasons, including the fulfillment of desires, protection from evil, and the well-being of their families. She is especially revered by women seeking fertility and the birth of healthy children.',
            
        },
        {
            title:'Ration Shop',
            image:'https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/139617674_103273015089035_5479595256881993235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ajtHmNznJUUAX_RXONO&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBr_c7omLblo7x4l1RAGw0osb07tcDc_2dvZWOl-WLzcA&oe=64D231DC',
            description:'Paradesamma Thalli is believed to be the goddess of fertility, protector of women, and a bringer of good fortune. Devotees seek her blessings for various reasons, including the fulfillment of desires, protection from evil, and the well-being of their families. She is especially revered by women seeking fertility and the birth of healthy children.',
            
        }

    ] 

    
    if(matchTemples){
        displayData = TemplesList;

    }
    if(matchPonds){
        displayData = PondsList;

    }
    if(matchSchools){
        displayData = SchoolsList
    }
    if(matchGovt){
        displayData = GvotList
    }
    



    return (
      <div id="Lists">

        {
            displayData.map((data,index)=>(
            <div key={index} className='data-out-container' >
                <div  className="data-container" >
                <img className="data-image" src={data.image}  alt='data_image'  />
                <div className="data-description" >
                    <h2>{data.title}</h2>
                    <p>{data.description}</p> 
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