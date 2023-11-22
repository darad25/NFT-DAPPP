import { Outlet, Link } from 'react-router-dom';

import myGif from '../../assets/icons8-bell.gif';
import btc from '../../images/btc.png';
import eth from '../../images/ethmaiN.png';
import ltc from '../../images/ltc.png';
import  Monthlybargraph from '../monthlybargraph/monthlybargraph.component';

import {NavLinks, Linecontainer, Percent, Belowmenuitemtextcontainer, Earningscontainer, Lowerothersidebarback, Lamountcontainer, Lquantitycontainer, Ethamountcontainer, Ethquantitycontainer, Ltcamountcontainer, Ltcquantitycontainer, Btcamountcontainer, Btcquantitycontainer, Transactioncontainer, View, Ltccontainer, Othersidebarback,ImageContainer, Othersidebarmenuitemiconcontainer, Othersidebarmenuitemtextcontainer, Othersidebarcontainer, Othersidebarlogocontainer } from "./othersidebar.styles";
import { Fragment } from 'react';

const Othersidebar = () => { 
    return ( 
      <Othersidebarcontainer> 
       <Othersidebarlogocontainer to='/'>
       <ImageContainer>  
       <img src={myGif}/>
       </ImageContainer>
       </Othersidebarlogocontainer>
       <Othersidebarback>
       <Transactioncontainer>
         Transactions
        </Transactioncontainer>
        <Othersidebarmenuitemtextcontainer>
          <View> 
         View all 
         </View>
       </Othersidebarmenuitemtextcontainer>   

       <Othersidebarmenuitemiconcontainer>
        <img src={btc} alt="my-gif" />
       </Othersidebarmenuitemiconcontainer>
       <Btcquantitycontainer>
        0.25 BTC
       </Btcquantitycontainer> 
       <Btcamountcontainer>
        $21,340.00
       </Btcamountcontainer> 
        <Othersidebarmenuitemtextcontainer> 
        - $60
       </Othersidebarmenuitemtextcontainer>   

       <Ltccontainer> 
       <img src={ltc} alt="my-gif" />
       </Ltccontainer>
       <Ltcquantitycontainer>
        1.03 LTC
       </Ltcquantitycontainer> 
       <Ltcamountcontainer>
        $7,366.87
       </Ltcamountcontainer> 
        <Othersidebarmenuitemtextcontainer>
        - $453
       </Othersidebarmenuitemtextcontainer>   

       <Othersidebarmenuitemiconcontainer>
       <img src={eth} alt="my-gif" />
        </Othersidebarmenuitemiconcontainer>
        <Ethquantitycontainer>
        2.11 ETH
       </Ethquantitycontainer> 
       <Ethamountcontainer>
        $21,340.00
       </Ethamountcontainer> 
        <Othersidebarmenuitemtextcontainer>
        - $1,190
       </Othersidebarmenuitemtextcontainer>  

       <Ltccontainer>
       <img src={ltc} alt="my-gif" />
        </Ltccontainer>
        <Lquantitycontainer>
        1.03 LTC
       </Lquantitycontainer> 
       <Lamountcontainer>
        $7,366.88
       </Lamountcontainer> 
        <Othersidebarmenuitemtextcontainer>
        - $453
       </Othersidebarmenuitemtextcontainer>  
       </Othersidebarback>
       <Lowerothersidebarback>
       <Linecontainer>
          <i className='bx bx-line-chart'></i> 
        </Linecontainer>
       <Earningscontainer>
         Earnings
        </Earningscontainer>
        <Belowmenuitemtextcontainer> 
          <Percent> 
         +23.4%
         </Percent>
       </Belowmenuitemtextcontainer> 
       <Monthlybargraph/>
       </Lowerothersidebarback>
    </Othersidebarcontainer>
    

    )
}; 

export default Othersidebar;