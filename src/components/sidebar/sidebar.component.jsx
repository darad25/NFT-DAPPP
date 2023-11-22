import { Outlet, Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import monkey from '../../assets/monkey.jpg';
import monkey1 from '../../assets/monkey1.jpg';
import monkey2 from '../../assets/monkey2.jpg';
import whitearrowu from '../../assets/whitearrowu.jpg';

import {Sidehover,Circlecontainer, Arrowcontainer, Viewplans, Upgradecontainer, Bluebox, Sidebarmenuitemcontainer, Accountcontainer, Greyline2, Greyline, ImageContainer1, ImageContainer2, ImageContainer3, Sidebarmenuitemiconcontainer, Sidebarmenuitemtextcontainer, Sidebarcontainer, Sidebarlogocontainer } from "./sidebar.styles";
import { Fragment } from 'react';

const Sidebar = () => {
    return ( 
      <Sidebarcontainer> 
       <Sidebarlogocontainer to='/'>
          MINTAC.
       </Sidebarlogocontainer>
       
       <ul> 
       <Sidebarmenuitemiconcontainer>
         <i className='bx bx-home'></i> 
         Dashboard
       </Sidebarmenuitemiconcontainer>  

       <Sidebarmenuitemiconcontainer>
         <i> <Icon icon="octicon:inbox-24" /> </i> 
         Inbox 
        {/* <ImageContainer2>  
         <img src={monkey1} />
        </ImageContainer2>
        <ImageContainer1>  
         <img src={monkey} />
        </ImageContainer1>
        <ImageContainer3>  
         <img src={monkey2} />
        </ImageContainer3> */}
       </Sidebarmenuitemiconcontainer>   
  
       <Sidebarmenuitemiconcontainer>
         <i className='bx bx-search'></i> 
         Analytics
       </Sidebarmenuitemiconcontainer>  
       </ul> 
       
       <Greyline/>

       <Accountcontainer to='/'>
          ACCOUNT
       </Accountcontainer>

       <ul> 
       <Sidebarmenuitemcontainer>
         <i className='bx bx-wallet'></i> 
        Wallet
       </Sidebarmenuitemcontainer>  

       <Sidebarmenuitemcontainer>
         <i className='bx bx-folder'></i> 
         My Collections
       </Sidebarmenuitemcontainer>   
  
       <Sidebarmenuitemcontainer>
         <i className='bx bx-history'></i> 
         History
       </Sidebarmenuitemcontainer> 

        <Sidebarmenuitemcontainer>
         <i className='bx bx-cog'></i> 
         Settings
       </Sidebarmenuitemcontainer>  
       </ul> 
       <Bluebox>
       <Circlecontainer>  
       <i className='bx bxl-unity'></i>
       </Circlecontainer>
        <Upgradecontainer>
        Upgrade to PRO
        </Upgradecontainer>
        
        <Viewplans>
        View all plans
        </Viewplans> 
        <Arrowcontainer>  
        <FontAwesomeIcon icon={faLongArrowRight}/>
        </Arrowcontainer>
       </Bluebox> 

    </Sidebarcontainer>

    )
}; 

export default Sidebar;

{/* <Sidebarcontainer> 
       <Sidebarlogocontainer to='/'>
          MINTAC.
       </Sidebarlogocontainer>
       
       <Sidebarmenuitemiconcontainer>
         <i className='bx bx-home'></i> 
        </Sidebarmenuitemiconcontainer>
        <Sidebarmenuitemtextcontainer>
         Dashboard
       </Sidebarmenuitemtextcontainer>  

       <Sidebarmenuitemiconcontainer>
         <i className='bx bx-wallet'></i> 
        </Sidebarmenuitemiconcontainer>
        <Sidebarmenuitemtextcontainer>
         Wallet
       </Sidebarmenuitemtextcontainer>   

       
       <Sidebarmenuitemiconcontainer>
         <i className='bx bx-search'></i> 
        </Sidebarmenuitemiconcontainer>
        <Sidebarmenuitemtextcontainer>
         Analytics
       </Sidebarmenuitemtextcontainer>   

    </Sidebarcontainer> */}

// const Sidebar = () => {
//     return <Sidebarcontainer> 
//        <Sidebarlogocontainer>
//            Animate.
//        </Sidebarlogocontainer>
//        <Sidebarmenucontainer>
//            <Sidebarmenuindcontainer></Sidebarmenuindcontainer>
//            {
//                 sidebarNavItems.map((item, index) => (
//                    <div to={item.to} key={index}>
//                       <Sidebarmenuitemcontainer>
//                         <Sidebarmenuitemiconcontainer>
//                             {item.icon}
//                         </Sidebarmenuitemiconcontainer>
//                         <Sidebarmenuitemtextcontainer>
//                             {item.display}
//                         </Sidebarmenuitemtextcontainer>
//                       </Sidebarmenuitemcontainer>
//                    </div> 
//                 ))  
//            } 
//        </Sidebarmenucontainer>
//     </Sidebarcontainer>
// };


// const sidebarNavItems =  [
//     {
//         display: 'Dashboard',
//         icon: <i className='bx bx-home'></i>,
//         // to: '/',
//         // section: ''
//     },
//     {
//         display: 'Analytics',
//         icon: <i className='bx bx-star'></i>,
//         // to: '/started',
//         // section: 'started'
//     },
//     {
//         display: 'Wallet',
//         icon: <i className='bx bx-time'></i>,
//         // to: '/calender',
//         // section: 'calender'
//     },
//     {
//         display: 'My Collections',
//         icon: <i className='bx bx-user'></i>,
//         // to: '/user',
//         // section: 'user'
//     },
//     {
//         display: 'Marketplace',
//         icon: <i className='bx bx-cheese'></i>,
//         // to: '/order',
//         // section: 'order'
//     }
// ] 