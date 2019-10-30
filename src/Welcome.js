import React, { Component } from "react";
import Count from "./Count";
import Rsvphere from "./Rsvphere";

class Welcome extends Component {

  render() {
    return (
      <div className="partial text-center">
        <div className="row">
          <div className="headerImage col-10 offset-1 col-sm-8 offset-sm-2">
             <img src="https://lh3.googleusercontent.com/--PD2VCmrDquvJq8wHGCkuRF3OBBMMxGF_mJTuGUz_lE0rjXjO-rqPt2NFdlMCRMExCpLbBxX2UgGDSSZdWdXLAZPT83KBs3A4Cv0lxgyiqKHksk3Gnp9biC7UK-N4XH27FLVix5Z6lQbRxWST6FXua29Cq9TjCt6ULERTO3dL2RdoV8xzWlD32OZv8Prx4-oVPQnPjkqnaOiTFanar6YCVhQUcNQPovfCtknwR5bc9wpkuEtdunmzxednXzEX8SYn2lgt2H0_TqBWSX3Xcv8YYlXVx4yDVbEVh35y7X7iD_rDAXiDUov56OBoBXxhABu8XROXm4HcPcXuYUj0lFnbHuNWl1q4dip34LkilzY9vjvbyHLU2DdFwopHCEI4bSfc5Fx9w3iCv1FStyCxGq1iYy9K-bZ83OBXC5jgYqtmtk-73yko0d-F7Mgmryl7p89uGCUJRwthpJsFY8L5tBklLGXN5AoPqveWkz4zC4YvYSDRYy3hnUDxoFptsKSChV5DoypRtRCGzvpz1wgHu8KwbX-B0Bn4S5Di1iJjl2SnGtmAngNE_QVlcqFkD9qTwIzOHZwIqOyx31l8VknnxA4BfCCzjY1S6_Wow0Y-1ghrXwpyj7iBS2qYqeS4wpEBkA7wFlPTr1tr6YstT5WNvcx4u-pGjAhgNQqr3_pscR1NlmSvc9H_2AfsaZ=w898-h896-no" alt="welcome hero" />
          </div>
         
          <div className="intro col-10 offset-1">
            We joyfully invite you to our wedding celebration!
          </div>

          <div className="vector col-12 text-center">
            <img src="https://lh3.googleusercontent.com/_8jQlDYfHmbBsSQR_9cIKXyHAcN76ux7shuW83cLPLlVanpNVmhxh9NZpuRj2pjZIbRL2_QIU6s6Y6ucYUpQDLLtzMDrESgdjyFPDGWUlCBA_SN47dDgmIEKV14jtQgZ0hjGjV1QiOm5rlVVyA_2gryyfDJp3wYYXom0i2SgAU-nmY9DDvyN7z40g6ZKSgH70LrrupJqefB9GaNe8TM7Ofb6wkeFTTBpUF2P4BidOw1cBul4psWqaopJH6FdokSmHegzA3BFtSQ2u3Aw-wcUI4txJDGo5ZpOe-Jx32NLQhu6mKHKeHJ3V4PbWsN888xRHr_wk71a7kyVsgFsO_ub5GCDp0UrCbuRKY7Ap6WsAKgUhn9lCzk1EbwltucHq-MDH1lIOJdqA-207YOq18ICZbolCIXi1H7hXNABYWaUIYH2WKV23NhSpkUze-PxrCXRYjhE8LNCmTb487ythtiX2UUKi-Irgkv7CCkqPyF0Wi7is6-2uiu8mlPTaSIXiGCxGoQrbUCou9SxKee366XWQUleTX4JOK_YJK0q296iKJsGQOFLYJZ5SNPnBtAkcW4On_i_3W8cOndC-5COt4tw9MB_b4ULoLMHSaVNQ8_wXdYYFsMtGpHgL5QD4FXNcJ16xr9rF_yeYf5-d--745R8Q55X6H7x2rzIpAtsRsnNFBemliQbLKoscS7w=w849-h896-no" alt="ladybug vector"/>
          </div>

          <div className="details col-10 offset-1">
            <div className="venue">
              Court in the Square
            </div>
            <Count />
          </div>

          <Rsvphere />
        </div>
      </div>
    );
  }
}
 
export default Welcome;

