/**
 * Created by bryangarces on 2/28/16.
 */
import React from 'react';

import { Container } from 'react-responsive-grid'
import { rhythm } from 'utils/typography'

import { RouteHandler, Link, State } from 'react-router';
import Icon from 'assets/icon'
import {stack as Menu} from 'react-burger-menu';

import Header from './_header.jsx'
import logo from '!raw!assets/logo.svg'
import styles from '../css/main.styl'

class Template extends React.Component {
    render() {
        var path = '/';
        var isIndex = path == '/';
        return (
            <div>
                <Menu width={200} right>
                    <a href="mailto:bryances@me.com">Contact</a>
                </Menu>
                <header className="header">
                    <div className="header-wrapper">
                        <Link className="header-logo" to="/">
                            mobileleap
                        </Link>
                        <nav className="header-nav">
                            <a href="mailto:bryances@me.com">Contact</a>
                        </nav>
                    </div>
                    {isIndex?
                    <div className="header-extended">
                        <h1>
                             <strong>We Build Successful and Innovative</strong> <br />
                            <strong>Mobile Solutions</strong>
                        </h1>
                        <a className="get-started" href="mailto:bryances@me.com">Contact Us</a>
                    <Header />
                    </div>:null}
                </header>
                <Container
                    style={{
                        maxWidth: 960,
                        padding: `${rhythm(1)} ${rhythm(1/2)}`,
                        paddingTop: 0,
                    }}
                    >
                    {this.props.children}
                </Container>
            </div>
        );
    }
}

module.exports = Template;

//import React from 'react'
//import { Container } from 'react-responsive-grid'
//
//import { rhythm } from 'utils/typography'
//
//
//import { RouteHandler, Link, State } from 'react-router';
//import Icon from 'assets/icon'
//import {stack as Menu} from 'react-burger-menu';
//
//import Header from './_header'
//import logo from '!raw!assets/logo.svg'
//import styles from '../css/main.styl'
//
//module.exports = React.createClass({
//    propTypes () {
//    return {
//        children: React.PropTypes.any,
//    }
//},
//render () {
//    var path = '/';
//    var isIndex = path == '/';
//    return (
////        <div>
////        <Container
////    style={{
////        maxWidth: 960,
////            padding: `${rhythm(1)} ${rhythm(1/2)}`,
////        paddingTop: 0,
////    }}
////>
////{this.props.children}
////</Container>
////</div>
//
//<div>
//        <Menu width={200} right>
//    </Menu>
//    <header className="header">
//    <div className="header-wrapper">
//    <Link className="header-logo" to="/">
//    <Icon src={logo} />
//    mobileleap
//    </Link>
//    <nav className="header-nav">
//    </nav>
//    </div>
//    {isIndex?
//    <div className="header-extended">
//    <h1>
//    GraphQL in Python<br />
//    made <strong>simple</strong>
//    </h1>
//<Header />
//</div>:null}
//</header>
//<Container
//style={{
//    maxWidth: 960,
//        padding: `${rhythm(1)} ${rhythm(1/2)}`,
//    paddingTop: 0,
//}}
//>
//{this.props.children}
//</Container>
//</div>
//)
//},
//})