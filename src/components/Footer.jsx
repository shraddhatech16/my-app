
// import React from 'react';
// import {
//   MDBFooter
//   // MDBContainer,
//   // MDBCol,
//   // MDBRow,
//   // MDBBtn
// } from 'mdb-react-ui-kit v4.1.0';

// export default function Footer() {
//   return (
//       <MDBFooter className='text-center text-white fixed-bottom' style={{ backgroundColor: '#212529' }}>
  
//         <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//           © 2022 Copyright : <a className='text-white' href='https://github.com/shraddhatech16'>Shraddha Alawane
//           </a>
//         </div>
//       </MDBFooter>
//     );
// }

// // export default function Footer() {
// //     return (
// //         <MDBFooter className='text-center text-white fixed-bottom' style={{ backgroundColor: '#212529' }}>
// //           <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/shraddha-alawane-780334212' role='button'>
// //             <span className='fa fa-linkedin' />
// //           </MDBBtn>
// //           <MDBBtn outline color="light" floating className='m-1' href='https://github.com/shraddhatech16' role='button'>
// //             <span className='fa fa-github' />
// //           </MDBBtn>
// //           <div className='text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
// //             © 2022 Copyright shraddha alawane : <a className='text-white' href='https://github.com/shraddhatech16'>Shraddha Alawane
// //             </a>
// //           </div>
// //         </MDBFooter>
// //       );
// // }


import React from "react";
import { MDBFooter } from 'mdb-react-ui-kit';
  
export default function App() {
  
    return (
        <div id="footer">
            {/* <h2>GeeksforGeeks</h2> */}
            {/* <h4>ReactJS MDBootstrap Footer Component</h4> */}
  
            <MDBFooter color="primary" bgColor='light' text-align="center"
                className='text-center text-lg-left'>
                <a class="LinkedIn" href ="https://www.linkedin.com/in/shraddha-alawane-780334212/">LinkedIn</a>
                © 2022 Shraddha Alawane 
                </MDBFooter>
        </div>
    );
}