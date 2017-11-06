import React, { Component } from 'react';

class MagicBtn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className='MagicBtn is-pink'>
                <svg>
                    <defs>
                        <linearGradient id="border-purple" x1="0" y1="0" x2="0" y2="1" spreadMethod="pad">
                            <stop offset="0%" stopColor="#fce9ff"></stop>
                            <stop offset="100%" stopColor="#7d629f"></stop>
                        </linearGradient>

                        <linearGradient id="light" x1="0.000" y1="0.000" x2="0.968" y2="1.030" spreadMethod="pad">
                            <stop offset="90%" stopColor="#fbeef5" stopOpacity="0"></stop>
                            <stop offset="100%" stopColor="#fbeef5" stopOpacity="1"></stop>
                        </linearGradient>

                        <filter id="glow-purple" x="-40%" y="-40%" width="180%" height="180%">
                            <feColorMatrix type="matrix" values="0.91 0 0 0   0
                                       0 0.44 0 0   0
                                       0 0 1 0   0
                                       0 0 0 1 0"></feColorMatrix>
                            <feGaussianBlur stdDeviation="3" result="coloredBlur"></feGaussianBlur>
                            <feMerge>
                                <feMergeNode in="coloredBlur"></feMergeNode>
                                <feMergeNode in="coloredBlur"></feMergeNode>
                                <feMergeNode in="SourceGraphic"></feMergeNode>
                            </feMerge>
                        </filter>
                    </defs>

                    <g filter="url(#glow-purple)">
                        <rect className="border" width="100%" height="100%" rx="10" ry="10" fill="transparent" stroke="url(#border-purple)" strokeWidth="1"></rect>
                        <rect className="light" width="100%" height="100%" rx="10" ry="10" fill="transparent" stroke="url(#light)" strokeWidth="2" opacity="0.6"></rect>
                    </g>
                </svg>

                {this.props.text}
            </button>
        );
    }
}

export default MagicBtn;
