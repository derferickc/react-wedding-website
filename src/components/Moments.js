import React, { Component } from "react";
import Rsvphere from "./Rsvphere";
import ImageComponent from "./Image";

class Moments extends Component {
  constructor(props) {
    super(props)

    this.state = {
      column1: [
        {
          image: 'https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/21032532_10155093260452779_7294141121175859267_n.jpg?_nc_cat=103&_nc_oc=AQkbKGDi8IhChYQ3jEW7r_r2E5MDNCzx_i26R8Dn-CyWx0XDesJb_bYUudyBS4VuPco&_nc_ht=scontent.fsjc1-3.fna&oh=987be54aad37e322273f9cff3b791a99&oe=5E4D3253',
          alt: 'engagement1'
        },
        {
          image: 'https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/20953949_10155093260627779_6355623319546207783_n.jpg?_nc_cat=107&_nc_oc=AQkC6Rm0f2xcwNSjHFp3enJ_t75YjG_QCaayHrQ8qjEL58ezb-iUabDdU9BubbZ8JJg&_nc_ht=scontent.fsjc1-3.fna&oh=b57bc153424f7b90388ce9d8ac12699c&oe=5E575A14',
          alt: 'engagement2'
        },
        {
          image: 'https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/21105664_10155093260082779_8965900549903872158_n.jpg?_nc_cat=101&_nc_oc=AQko2wsrRgrbPOUvjBXMyvkmgQRpR9RAX9LW89-oQw6qXKRz94AvVG3m0_o3qXBy0bc&_nc_ht=scontent.fsjc1-3.fna&oh=a7d88cff1927530d92510e89a783930f&oe=5E646B7A',
          alt: 'engagement3'
        },
        {
          image: 'https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/21077708_10155093260342779_6704303614189768289_n.jpg?_nc_cat=100&_nc_oc=AQk5uB_BDtv39S7wQSpGfJzcrua1oZrdxX-h2GUXhXcBXAxIllgtCJmbqBp2w_XRALk&_nc_ht=scontent.fsjc1-3.fna&oh=bd8e5edebd1db60f6af999144bf6775b&oe=5E22CDBE',
          alt: 'engagement4'
        },
        {
          image: 'https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/21032714_10155094569762779_5493683327934701278_n.jpg?_nc_cat=108&_nc_oc=AQmYatURGw2z47jDve9-OGCjLtnx7j3920CxxZqQvHfy2_bQvXpKaCVAbDisdEKwWrU&_nc_ht=scontent.fsjc1-3.fna&oh=a780e44bf19e911459a439f9150a57f8&oe=5E18C160',
          alt: 'engagement5'
        },
        {
          image: 'https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/20994066_10155093260237779_4821614075519853441_n.jpg?_nc_cat=110&_nc_oc=AQmvjplk5JFiLBG2mIJ2WoqNaB0wk5N80hSBwI7zCy9CVYOa21BsM9mrhT5rnYuoUk0&_nc_ht=scontent.fsjc1-3.fna&oh=94b47b0efcf4023ec06cc90ec5a94f64&oe=5E5F99A6',
          alt: 'engagement6'
        },
      ],
      column2: [
        {
          image: 'https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/20953949_10155093260627779_6355623319546207783_n.jpg?_nc_cat=107&_nc_oc=AQkC6Rm0f2xcwNSjHFp3enJ_t75YjG_QCaayHrQ8qjEL58ezb-iUabDdU9BubbZ8JJg&_nc_ht=scontent.fsjc1-3.fna&oh=b57bc153424f7b90388ce9d8ac12699c&oe=5E575A14',
          alt: 'engagement7'
        },
        {
          image: 'https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/21105664_10155093260082779_8965900549903872158_n.jpg?_nc_cat=101&_nc_oc=AQko2wsrRgrbPOUvjBXMyvkmgQRpR9RAX9LW89-oQw6qXKRz94AvVG3m0_o3qXBy0bc&_nc_ht=scontent.fsjc1-3.fna&oh=a7d88cff1927530d92510e89a783930f&oe=5E646B7A',
          alt: 'engagement8'
        },
        {
          image: 'https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/21077708_10155093260342779_6704303614189768289_n.jpg?_nc_cat=100&_nc_oc=AQk5uB_BDtv39S7wQSpGfJzcrua1oZrdxX-h2GUXhXcBXAxIllgtCJmbqBp2w_XRALk&_nc_ht=scontent.fsjc1-3.fna&oh=bd8e5edebd1db60f6af999144bf6775b&oe=5E22CDBE',
          alt: 'engagement9'
        },
        {
          image: 'https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/21032714_10155094569762779_5493683327934701278_n.jpg?_nc_cat=108&_nc_oc=AQmYatURGw2z47jDve9-OGCjLtnx7j3920CxxZqQvHfy2_bQvXpKaCVAbDisdEKwWrU&_nc_ht=scontent.fsjc1-3.fna&oh=a780e44bf19e911459a439f9150a57f8&oe=5E18C160',
          alt: 'engagement10'
        },
        {
          image: 'https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/20994066_10155093260237779_4821614075519853441_n.jpg?_nc_cat=110&_nc_oc=AQmvjplk5JFiLBG2mIJ2WoqNaB0wk5N80hSBwI7zCy9CVYOa21BsM9mrhT5rnYuoUk0&_nc_ht=scontent.fsjc1-3.fna&oh=94b47b0efcf4023ec06cc90ec5a94f64&oe=5E5F99A6',
          alt: 'engagement11'
        },
        {
          image: 'https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/21032532_10155093260452779_7294141121175859267_n.jpg?_nc_cat=103&_nc_oc=AQkbKGDi8IhChYQ3jEW7r_r2E5MDNCzx_i26R8Dn-CyWx0XDesJb_bYUudyBS4VuPco&_nc_ht=scontent.fsjc1-3.fna&oh=987be54aad37e322273f9cff3b791a99&oe=5E4D3253',
          alt: 'engagement12'
        }
      ],
      column3: [
        {
          image: 'https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/21105664_10155093260082779_8965900549903872158_n.jpg?_nc_cat=101&_nc_oc=AQko2wsrRgrbPOUvjBXMyvkmgQRpR9RAX9LW89-oQw6qXKRz94AvVG3m0_o3qXBy0bc&_nc_ht=scontent.fsjc1-3.fna&oh=a7d88cff1927530d92510e89a783930f&oe=5E646B7A',
          alt: 'engagement13'
        },
        {
          image: 'https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/21077708_10155093260342779_6704303614189768289_n.jpg?_nc_cat=100&_nc_oc=AQk5uB_BDtv39S7wQSpGfJzcrua1oZrdxX-h2GUXhXcBXAxIllgtCJmbqBp2w_XRALk&_nc_ht=scontent.fsjc1-3.fna&oh=bd8e5edebd1db60f6af999144bf6775b&oe=5E22CDBE',
          alt: 'engagement14'
        },
        {
          image: 'https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/21032714_10155094569762779_5493683327934701278_n.jpg?_nc_cat=108&_nc_oc=AQmYatURGw2z47jDve9-OGCjLtnx7j3920CxxZqQvHfy2_bQvXpKaCVAbDisdEKwWrU&_nc_ht=scontent.fsjc1-3.fna&oh=a780e44bf19e911459a439f9150a57f8&oe=5E18C160',
          alt: 'engagement15'
        },
        {
          image: 'https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/20994066_10155093260237779_4821614075519853441_n.jpg?_nc_cat=110&_nc_oc=AQmvjplk5JFiLBG2mIJ2WoqNaB0wk5N80hSBwI7zCy9CVYOa21BsM9mrhT5rnYuoUk0&_nc_ht=scontent.fsjc1-3.fna&oh=94b47b0efcf4023ec06cc90ec5a94f64&oe=5E5F99A6',
          alt: 'engagement16'
        },
        {
          image: 'https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/21032532_10155093260452779_7294141121175859267_n.jpg?_nc_cat=103&_nc_oc=AQkbKGDi8IhChYQ3jEW7r_r2E5MDNCzx_i26R8Dn-CyWx0XDesJb_bYUudyBS4VuPco&_nc_ht=scontent.fsjc1-3.fna&oh=987be54aad37e322273f9cff3b791a99&oe=5E4D3253',
          alt: 'engagement17'
        }, {
          image: 'https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/20953949_10155093260627779_6355623319546207783_n.jpg?_nc_cat=107&_nc_oc=AQkC6Rm0f2xcwNSjHFp3enJ_t75YjG_QCaayHrQ8qjEL58ezb-iUabDdU9BubbZ8JJg&_nc_ht=scontent.fsjc1-3.fna&oh=b57bc153424f7b90388ce9d8ac12699c&oe=5E575A14',
          alt: 'engagement18'
        }
      ],
      column4: [
        {
          image: 'https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/21077708_10155093260342779_6704303614189768289_n.jpg?_nc_cat=100&_nc_oc=AQk5uB_BDtv39S7wQSpGfJzcrua1oZrdxX-h2GUXhXcBXAxIllgtCJmbqBp2w_XRALk&_nc_ht=scontent.fsjc1-3.fna&oh=bd8e5edebd1db60f6af999144bf6775b&oe=5E22CDBE',
          alt: 'engagement19'
        },
        {
          image: 'https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/21032714_10155094569762779_5493683327934701278_n.jpg?_nc_cat=108&_nc_oc=AQmYatURGw2z47jDve9-OGCjLtnx7j3920CxxZqQvHfy2_bQvXpKaCVAbDisdEKwWrU&_nc_ht=scontent.fsjc1-3.fna&oh=a780e44bf19e911459a439f9150a57f8&oe=5E18C160',
          alt: 'engagement20'
        },
        {
          image: 'https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/20994066_10155093260237779_4821614075519853441_n.jpg?_nc_cat=110&_nc_oc=AQmvjplk5JFiLBG2mIJ2WoqNaB0wk5N80hSBwI7zCy9CVYOa21BsM9mrhT5rnYuoUk0&_nc_ht=scontent.fsjc1-3.fna&oh=94b47b0efcf4023ec06cc90ec5a94f64&oe=5E5F99A6',
          alt: 'engagement21'
        },
        {
          image: 'https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/21032532_10155093260452779_7294141121175859267_n.jpg?_nc_cat=103&_nc_oc=AQkbKGDi8IhChYQ3jEW7r_r2E5MDNCzx_i26R8Dn-CyWx0XDesJb_bYUudyBS4VuPco&_nc_ht=scontent.fsjc1-3.fna&oh=987be54aad37e322273f9cff3b791a99&oe=5E4D3253',
          alt: 'engagement22'
        }, {
          image: 'https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/20953949_10155093260627779_6355623319546207783_n.jpg?_nc_cat=107&_nc_oc=AQkC6Rm0f2xcwNSjHFp3enJ_t75YjG_QCaayHrQ8qjEL58ezb-iUabDdU9BubbZ8JJg&_nc_ht=scontent.fsjc1-3.fna&oh=b57bc153424f7b90388ce9d8ac12699c&oe=5E575A14',
          alt: 'engagement23'
        }, {
          image: 'https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/21105664_10155093260082779_8965900549903872158_n.jpg?_nc_cat=101&_nc_oc=AQko2wsrRgrbPOUvjBXMyvkmgQRpR9RAX9LW89-oQw6qXKRz94AvVG3m0_o3qXBy0bc&_nc_ht=scontent.fsjc1-3.fna&oh=a7d88cff1927530d92510e89a783930f&oe=5E646B7A',
          alt: 'engagement24'
        },
      ]
    }
  }
  render() {
    return (
      <div className="partial text-center">
        <div className="row">
          <div className="grid">
            <div className="column">
              { this.state.column1.map((tile) => (
                <ImageComponent tile={tile} />
              ))}
            </div>
            <div className="column">
              { this.state.column2.map((tile) => (
                <ImageComponent tile={tile} />
              ))}
            </div>
            <div className="column">
              { this.state.column3.map((tile) => (
                <ImageComponent tile={tile} />
              ))}
            </div>
            <div className="column">
              { this.state.column4.map((tile) => (
                <ImageComponent tile={tile} />
              ))}
            </div>
          </div>

          <Rsvphere />
        </div>
      </div>
    );
  }
}
 
export default Moments;