import React, { Component } from 'react'
import Coverflow  from 'react-coverflow'
import { StyleRoot } from 'radium';
import pf1 from '../images/pf_1.jpg'
import pf2 from '../images/pf_2.jpg'
import pf3 from '../images/pf_3.jpg'
import pf4 from '../images/pf_4.jpg'
import pf5 from '../images/pf_5.jpg'
import pf6 from '../images/pf_6.jpg'
import pf7 from '../images/pf_7.jpg'

export class Portfolio extends Component {
  render() {
    return (
      <div>
        <section class="hero is-vintage-portfolio is-fullheight is-fullheight-with-navbar" id="Portfolio">
            <div class="hero-body">
                <div class="container">
                    <StyleRoot>
                        <Coverflow
                            width={960}
                            height={480}
                            displayQuantityOfSide={2}
                            navigation={false}
                            enableHeading={false}
                            media={{
                                '@media (max-width: 900px)': {
                                  width: '300px',
                                  height: '300px'
                                },
                                '@media (min-width: 900px)': {
                                  width: '960px',
                                  height: '600px'
                                }
                            }}
                        >
                            <img src={pf1} />
                            <img src={pf2} />
                            <img src={pf3} />
                            <img src={pf4} />
                            <img src={pf5} />
                            <img src={pf6} />
                            <img src={pf7} />
                        </Coverflow>
                    </StyleRoot>
                    
                </div>
            </div>
        </section>
      </div>
    )
  }
}

export default Portfolio
