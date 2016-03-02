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
                <header className="header">
                    <div className="header-wrapper">
                        <Link className="header-logo" to="/">
                            mobileleap labs<br />
                        </Link>
                        <nav className="header-nav">
                        </nav>
                    </div>
                    {isIndex?
                    <div className="header-extended">
                        <h1>
                             <strong>We Create Innovative </strong>
                            <strong>Mobile Solutions</strong>
                        </h1>
                        <a className="get-started" href="mailto:contact@mobileleaplabs.com">Contact Us</a>
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

