import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (
        <GeneralBanknote color={props.money.banknotes === 'Dollars' ? 'aquamarine' : 'chartreuse'}>
            <Name>{props.money.banknotes} </Name>
            <Nominal>{props.money.value} </Nominal>
        </GeneralBanknote>
    );
};

const GeneralBanknote = styled.div`
  background-color: ${props => {
    if (props.color === 'aquamarine') {
      return 'red'
    } else {
      return 'blue'
    }
  }
  };
  width: 400px;
  height: 200px;
  margin: 10px;
`

// const BlueBanknots = styled.div`
//   background-color: chartreuse;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `

const Name = styled.div`
  display: flex;
  justify-content: center;
  font-size: 40px;
`

const Nominal = styled.div`
  display: flex;
  justify-content: center;
  font-size: 100px;
  margin-top: 20px;
`

// +__________________________________________________________

// import React from 'react';
// import {MoneyType} from "./App";
// import styled from "styled-components";
//
// type CurrentBankomatPropsType = {
//     money: MoneyType
// }
// export const CurrentBankomat = (props: CurrentBankomatPropsType) => {
//
//     return (
//
//         props.money.banknotes === 'Dollars'
//             ? <GreenBanknots>
//                 <Name>{props.money.banknotes} </Name>
//                 <Nominal>{props.money.value} </Nominal>
//
//             </GreenBanknots>
//
//             : <BlueBanknots>
//                 <Name>{props.money.banknotes} </Name>
//                 <Nominal>{props.money.value} </Nominal>
//             </BlueBanknots>
//
//         // <div>
//         //     {props.money.banknotes}
//         // </div>
//
//
//     );
// };
//
// const GreenBanknots = styled.div`
//   background-color: aquamarine;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `
//
// const BlueBanknots = styled.div`
//   background-color: chartreuse;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `
//
// const Name = styled.div`
//   display: flex;
//   justify-content: center;
//   font-size: 40px;
// `
//
// const Nominal = styled.div`
//   display: flex;
//   justify-content: center;
//   font-size: 100px;
//   margin-top: 20px;
// `

