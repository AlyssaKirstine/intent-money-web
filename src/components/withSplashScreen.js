import React, {Component, useContext} from 'react';
import './splash-screen.css';

import { css } from '@emotion/core';

import logo from '../assets/logo.svg';
import intentText from '../assets/intent.svg';
import moneyText from '../assets/money.svg';

function LoadingMessage() {
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
  );
}

function withSplashScreen(WrappedComponent) {
    
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    async componentDidMount() {
        setInterval(() => { this.setState({loading: false}); }, 3000);
        // TODO: only progress if user is logged in and their data has loaded
    //   try {
    //     await auth.blah;
    //     setTimeout(() => {
    //       this.setState({
    //         loading: false,
    //       });
    //     }, 1500)
    //   } catch (err) {
    //     console.log(err);
    //     this.setState({
    //       loading: false,
    //     });
    //   }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return LoadingMessage();

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withSplashScreen;