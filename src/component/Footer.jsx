import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";
import { FooterContainer } from "../Styles";

// export default class Footer extends Component {
//   render() {
//     return (
//       <FooterContainer>
//         Contact us: 01769827776...<p>&copy;Copyright 2022</p>
//         {/* <button style={styleFooter}>Submit</button> */}
//       </FooterContainer>
//     );
//   }
// }

const Footer = ({ platform, ...props }) => {
  //sadece platform gelir gerisi props ta kalır
  // const { platform, phone, beverage } = props;
  return (
    <FooterContainer>
      <h5>İletişim numaramız 0120021021</h5>
      <h5>Sosyal Medya Hesapları</h5>
      <p>{platform} </p>
      {/* <p>{phone} </p>  yazmaz*/}
    </FooterContainer>
  );
};

export default Footer;
