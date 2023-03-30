import { Link } from 'react-router-dom';

import {NavLinks, Sidebarmenucontainer, Sidebarmenuindcontainer, Sidebarmenuitemcontainer, Sidebarmenuitemiconcontainer, Sidebarmenuitemtextcontainer, Sidebarcontainer, Sidebarlogocontainer } from "./sidebar.styles";

const Sidebar = () => {
    return <Sidebarcontainer> 
       <Sidebarlogocontainer>
           ANIMATE.
       </Sidebarlogocontainer>
       <Sidebarmenucontainer>
       <Sidebarmenuindcontainer></Sidebarmenuindcontainer>
       <Sidebarmenuitemcontainer>
       <Sidebarmenuitemiconcontainer>
         <i className='bx bx-home'></i> 
        </Sidebarmenuitemiconcontainer>
        <Sidebarmenuitemtextcontainer>
         Dashboard
       </Sidebarmenuitemtextcontainer>   
       </Sidebarmenuitemcontainer>  

       <Sidebarmenuitemcontainer>
       <Sidebarmenuitemiconcontainer>
         <i className='bx bx-wallet'></i> 
        </Sidebarmenuitemiconcontainer>
        <Sidebarmenuitemtextcontainer>
         Wallet
       </Sidebarmenuitemtextcontainer>   
       </Sidebarmenuitemcontainer>      

       
       <Sidebarmenuitemcontainer>
       <Sidebarmenuitemiconcontainer>
         <i className='bx bx-search'></i> 
        </Sidebarmenuitemiconcontainer>
        <Sidebarmenuitemtextcontainer>
         Analytics
       </Sidebarmenuitemtextcontainer>   
       </Sidebarmenuitemcontainer>  

       </Sidebarmenucontainer>
    </Sidebarcontainer>
}; 

export default Sidebar;



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