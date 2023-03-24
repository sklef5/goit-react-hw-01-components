import PropTypes from 'prop-types';
import {TransTable, TransHeader,TransRow, TransRowHead, TransHeadColomn, TransBody, TransColomn } from './TransactionHistory.styled'

export const TransactionHistory = ({transactions}) =>{
    return (
        <TransTable>
            <TransHeader>
                <TransRowHead>
                    <TransHeadColomn>Type</TransHeadColomn>
                    <TransHeadColomn>Amount</TransHeadColomn>
                    <TransHeadColomn>Currency</TransHeadColomn>
                </TransRowHead>
            </TransHeader>
            <TransBody>
                {transactions.map(item=>(
                    <TransRow key= {item.id}>
                        <TransColomn>{item.type}</TransColomn>
                        <TransColomn>{item.amount}</TransColomn>
                        <TransColomn>{item.currency}</TransColomn>
                    </TransRow>
                ))}
            </TransBody>
        </TransTable>
    )
}



TransactionHistory.propTypes = {
    TransHeadColomn: PropTypes.string,
    TransColomn: PropTypes.string,
  };