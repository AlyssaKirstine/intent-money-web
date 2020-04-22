import React from 'react';

import './Launch.css';
import { css } from '@emotion/core';

import logo from '../assets/logo.svg';
import intentText from '../assets/intent.svg';
import moneyText from '../assets/money.svg';

const Launch = () => {
    return (
        <div className="app-logo">
            <div>
                <img src={logo} css={css`padding-bottom: 48px;`} alt="Intent Money logo" />
                <br />
                <img src={intentText} css={css`padding-bottom: 16px;`} alt="Intent Money logo" />
                <br />
                <img src={moneyText} alt="Intent Money logo" />
            </div>
        </div>
    )
}

export default Launch;