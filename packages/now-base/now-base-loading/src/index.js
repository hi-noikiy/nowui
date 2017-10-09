import '../assets/index.scss' 
import React, { Component } from 'react'

export default  class Loading extends Component {
    render () {
        return (
            <div className="now-loading">
                <div className="centerbox">
                    <svg
                         x="0px"
                         y="0px"
                         viewBox="0 0 100 100"
                         enable-background="new 0 0 100 100">
                        <path
                                className="path-common path-bg"
                                d="M74.3,26.2
                                    c-0.3-0.3-0.7-0.4-1.3-0.4H59.7c-0.6,0-0.9,0.1-1.3,0.4c-0.3,0.3-0.4,0.7-0.4,1.3v6.4c0,0.5,0,1.2,0,1.5c0,0.3-0.1,0.5-0.3,0.6
                                    c-0.2,0.1-0.4,0.1-0.7,0c-0.3-0.1-0.8-0.5-1.3-0.7c0,0-13.3-7.7-14.3-8.3c-1.3-0.8-2.5-1.2-4.2-1.2h-9.8c-0.6,0-0.9,0.1-1.3,0.4
                                    c-0.3,0.3-0.4,0.7-0.4,1.3v45.7c0,0.6,0.1,0.9,0.4,1.3c0.3,0.3,0.7,0.4,1.3,0.4h13.3c0.6,0,0.9-0.1,1.3-0.4
                                    c0.3-0.3,0.4-0.7,0.4-1.3v-6.4c0-0.5,0-1.2,0-1.5c0-0.3,0.1-0.5,0.3-0.6c0.2-0.1,0.4-0.1,0.7,0c0.3,0.1,0.8,0.5,1.3,0.7
                                    c0,0,13.3,7.7,14.3,8.3c1.3,0.8,2.5,1.2,4.2,1.2H73c0.6,0,0.9-0.1,1.3-0.4c0.3-0.3,0.4-0.7,0.4-1.3V27.5
                                    C74.7,26.9,74.6,26.5,74.3,26.2z M60.5,50.2c-0.2,0.2-0.8,0.5-1.3,0.8l-14.5,8.4c-0.4,0.3-1,0.6-1.3,0.7c-0.3,0.1-0.5,0.1-0.7,0
                                    c-0.2-0.1-0.3-0.3-0.3-0.6c0-0.3,0-1,0-1.5V41.2c0-0.5,0-1.2,0-1.5c0-0.3,0.1-0.5,0.3-0.6c0.2-0.1,0.4-0.1,0.7,0
                                    c0.3,0.1,0.8,0.5,1.3,0.7l14.5,8.4c0.4,0.3,1,0.6,1.3,0.8c0.3,0.2,0.4,0.4,0.4,0.6C60.8,49.8,60.7,50,60.5,50.2z"/>

                        <path
                                className="path-common outer-path"
                                d="M74.3,26.2
                                    c-0.3-0.3-0.7-0.4-1.3-0.4H59.7c-0.6,0-0.9,0.1-1.3,0.4c-0.3,0.3-0.4,0.7-0.4,1.3v6.4c0,0.5,0,1.2,0,1.5c0,0.3-0.1,0.5-0.3,0.6
                                    c-0.2,0.1-0.4,0.1-0.7,0c-0.3-0.1-0.8-0.5-1.3-0.7c0,0-13.3-7.7-14.3-8.3c-1.3-0.8-2.5-1.2-4.2-1.2h-9.8c-0.6,0-0.9,0.1-1.3,0.4
                                    c-0.3,0.3-0.4,0.7-0.4,1.3v45.7c0,0.6,0.1,0.9,0.4,1.3c0.3,0.3,0.7,0.4,1.3,0.4h13.3c0.6,0,0.9-0.1,1.3-0.4
                                    c0.3-0.3,0.4-0.7,0.4-1.3v-6.4c0-0.5,0-1.2,0-1.5c0-0.3,0.1-0.5,0.3-0.6c0.2-0.1,0.4-0.1,0.7,0c0.3,0.1,0.8,0.5,1.3,0.7
                                    c0,0,13.3,7.7,14.3,8.3c1.3,0.8,2.5,1.2,4.2,1.2H73c0.6,0,0.9-0.1,1.3-0.4c0.3-0.3,0.4-0.7,0.4-1.3V27.5
                                    C74.7,26.9,74.6,26.5,74.3,26.2z"/>

                        <path
                                className="path-common inner-path"
                                d="M60.5,50.2
                                    c-0.2,0.2-0.8,0.5-1.3,0.8l-14.5,8.4c-0.4,0.3-1,0.6-1.3,0.7c-0.3,0.1-0.5,0.1-0.7,0c-0.2-0.1-0.3-0.3-0.3-0.6c0-0.3,0-1,0-1.5
                                    V41.2c0-0.5,0-1.2,0-1.5c0-0.3,0.1-0.5,0.3-0.6c0.2-0.1,0.4-0.1,0.7,0c0.3,0.1,0.8,0.5,1.3,0.7l14.5,8.4c0.4,0.3,1,0.6,1.3,0.8
                                    c0.3,0.2,0.4,0.4,0.4,0.6C60.8,49.8,60.7,50,60.5,50.2z"/>
                    </svg>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
