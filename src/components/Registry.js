import React, { Component } from "react";
import Rsvphere from "./Rsvphere";
 
class Registry extends Component {
  constructor(props) {
    super(props)

    this.state = {
      registries: [
        {
          name: "amazon",
          url: "https://www.amazon.com",
          image: "https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/r-amazon.png?alt=media&token=88f4c0e2-25a3-4413-84b6-6c5a68a6e157",
          alt: "amazon vector"
        },
        {
          name: "cratebarrel",
          url: "https://www.crateandbarrel.com",
          image: "https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/r-crate%26barrel.png?alt=media&token=1457a6d6-d561-4ef6-b22f-d484cfb833f3",
          alt: "createbarrel vector"
        },
        // {
        //   name: "honefund",
        //   url: "https://www.honeyfund.com",
        //   image: "https://lh3.googleusercontent.com/ZhZ4Yz4GcJoBxLTusmvR8v36aGyQ6s8BZEuzObrcpLIXd0xIgdfK8vWW63-325j3_oB2T2R0Q6THbiZQKhFtkdZJz2zOjnBkUjt90hTAnV3fajjH_igG-J6DH-MMzO2vppi-LejbcezI-VYLcy3KV4K_D7Ab9fLwd8ka4obQz320Jl0U07ayAzHZdBVDr20f96aFu0VDvqq7eXgwEVhZ2yOw9wExOmR1Banp_jDd21KT4-TOwtQdNZtzx6Z2iYukR6G5nDpvoot8cSHl-Wri8KH5mvaSz-UuHaHpQ4dWL5KeNzo_fFkybNrY4EmuNiEEvU8jIJx3CVAgai2J5gr_UZnH22dgtHWCsac2E42iuPjgeLuPlON2iylz5Iy8cao-b-l9aHzJ42RkJxG3KmHckYt1K6-trn330AqRXrA5d8T0Gqp4_z_MarwELf4haoK5g6ORRNE3R10jt9SjNtVgNiHiXFDoIWDa_ow90PkaivDafkBwEn077n5OZpU4MlDY_DnM2Z4pMg8qFWOtUUEs0hCh7Atv4WQDmpSHmrgbJYhsr3Itw-fjL2_puhQTQih7m9OvBBBUYz4dHIjkabnL5fHkNgZ8eNcJcG4rNOgiIiaBTmnADfJBcGTvhiDfX2wdfioTqOIDIUO8aSdh3IfvXmVtRmixvUVLxHiZvGtQU0Q1Jc4a4u79wLor=w200-h67-no",
        //   alt: "honeyfund vector"
        // }
      ]
    }
  }

  render() {
    return (
      <div className="partial text-center">
        <div className="row">
          <div className="headerImage col-10 offset-1 col-sm-8 offset-sm-2">
             <img src="https://lh3.googleusercontent.com/--PD2VCmrDquvJq8wHGCkuRF3OBBMMxGF_mJTuGUz_lE0rjXjO-rqPt2NFdlMCRMExCpLbBxX2UgGDSSZdWdXLAZPT83KBs3A4Cv0lxgyiqKHksk3Gnp9biC7UK-N4XH27FLVix5Z6lQbRxWST6FXua29Cq9TjCt6ULERTO3dL2RdoV8xzWlD32OZv8Prx4-oVPQnPjkqnaOiTFanar6YCVhQUcNQPovfCtknwR5bc9wpkuEtdunmzxednXzEX8SYn2lgt2H0_TqBWSX3Xcv8YYlXVx4yDVbEVh35y7X7iD_rDAXiDUov56OBoBXxhABu8XROXm4HcPcXuYUj0lFnbHuNWl1q4dip34LkilzY9vjvbyHLU2DdFwopHCEI4bSfc5Fx9w3iCv1FStyCxGq1iYy9K-bZ83OBXC5jgYqtmtk-73yko0d-F7Mgmryl7p89uGCUJRwthpJsFY8L5tBklLGXN5AoPqveWkz4zC4YvYSDRYy3hnUDxoFptsKSChV5DoypRtRCGzvpz1wgHu8KwbX-B0Bn4S5Di1iJjl2SnGtmAngNE_QVlcqFkD9qTwIzOHZwIqOyx31l8VknnxA4BfCCzjY1S6_Wow0Y-1ghrXwpyj7iBS2qYqeS4wpEBkA7wFlPTr1tr6YstT5WNvcx4u-pGjAhgNQqr3_pscR1NlmSvc9H_2AfsaZ=w898-h896-no" alt="registry hero" />
          </div>
          
          <div className="vector col-12 text-center">
            <img src="https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/ladybug-vector.png?alt=media&token=7a0ac9f4-a675-4eab-a12e-2bb16e946596" alt="ladybug vector"/>
          </div>

          <div className="details col-10 offset-1 col-sm-8 offset-sm-2">
            <div className="copy">
              Your presence, not presents is all that we require as we celebrate our marriage, but if you would like to gift us something to start our married life together, we've set up a registry below:
            </div>
            
            <div className="registry">
              {this.state.registries.map((registry) => (
                <div className="icon col-sm-6" key={registry.name}>
                  <a href="{registry.url}">
                    <img className={registry.name} src={registry.image} alt={registry.alt} />
                  </a>
                </div>
              ))}
            </div>

          </div>

          <Rsvphere />
        </div>
      </div>
    );
  }
}
 
export default Registry;