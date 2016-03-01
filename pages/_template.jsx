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
                    <span><Link to="/playground/" className={path.indexOf('/playground')==0?"active":null}>Try it out</Link></span>
                    <span><Link to="/docs/quickstart/" className={path.indexOf('/docs')==0?"active":null}>Docs</Link></span>
                    <span><Link to="/community/">Community</Link></span>
                    <a href="https://github.com/graphql-python/graphene/">Github</a>
                </Menu>
                <header className="header">
                    <div className="header-wrapper">
                        <Link className="header-logo" to="/">
                            <Icon src={logo} />
                            mobileleap
                        </Link>
                        <nav className="header-nav">
                        </nav>
                    </div>
                    {isIndex?
                    <div className="header-extended">
                        <h1>
                            GraphQL in Python<br />
                            made <strong>simple</strong>
                        </h1>
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