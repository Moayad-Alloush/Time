import React, { useState } from 'react';
import store from '../../redux/store';
import '../../App.css';
import { useDispatch } from 'react-redux';
import { actionResetCart } from '../../redux/actions/actionsChangeCart';

export const CheckoutPage = (props) => {

  const [show, setShow] = useState(false);
  const [showtanks, setShowthanks] = useState(false);

  const [enable, setEnable] = useState(true);
  const dispatch = useDispatch();

  const onClickPay = () => {
    console.log('pay')
    setShow(true);
  }  


  const onClickConfirm = () => {
    console.log('confirm');
    const last = showtanks;
    setShow(false);
    dispatch(actionResetCart());
    setShowthanks(!showtanks);
    setTimeout(()=> {console.log('start timeer');setShowthanks(last);}, 3 * 1000);
  };

  const onChangeInput = (text) => {

    if (!text) {
      console.log({ text });
      setEnable(true);
    } else {
      setEnable(false);
    }
  }

  const showedHtml = (show)
    ? <div>
        <p>Please enter your credit card number </p>
      <input placeholder='Your credit card number' onChange={(event) => { console.log(event.target.value); onChangeInput(event?.target?.value) }}></input>
        <button onClick={onClickConfirm}  disabled={enable}>confirm</button>
      </div >
    : null;
  const thanks = (showtanks)
    ? <div >
        <p className='thank'>Thank you For Your Visit </p>
      
        {/* <button onClick={onClickConfirm}  disabled={enable}>confirm</button> */}
      </div >
    : null;
  return (
    <div className='h-100' style={{minHeight: "75vh"}}>      
      <p>Total: SYP { store.getState().cart.total }</p>
      <button onClick={onClickPay}>Pay</button>
      {showedHtml}
      {thanks}
    </div>
  );
}