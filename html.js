import React from 'react'
import DocumentTitle from 'react-document-title'

import { link } from 'gatsby-helpers'
import { TypographyStyle } from 'utils/typography'


module.exports = React.createClass({
  propTypes () {
    return {
      title: React.PropTypes.string,
    }
  },
  render () {
    let title = DocumentTitle.rewind()
    if (this.props.title) {
      title = this.props.title
    }

    let cssLink
    if (process.env.NODE_ENV === 'production') {
      cssLink = <link rel="stylesheet" href={link('/styles.css')} />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0 maximum-scale=1.0"
          />
          <title>{title}</title>
          <link rel="shortcut icon" href={this.props.favicon}/>
          <TypographyStyle/>
          {cssLink}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={link('/bundle.js')}/>
        </body>
      </html>
    )
  },
})

//import React from 'react';
//import DocumentTitle from 'react-document-title';
//
//export default class Html extends React.Component {
//  render() {
//    var title = this.props.title || DocumentTitle.rewind();
//    return (
//        <html lang={this.props.lang}>
//<head>
//<meta charSet="utf-8"/>
//      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
//      <meta name='viewport' content='width=device-width, initial-scale=1.0 maximum-scale=1.0'/>
//      <title>{title}</title>
//      <link rel="shortcut icon" href="/favicon.png"/>
//      <link href='https://fonts.googleapis.com/css?family=Raleway:400,600,200,100' rel='stylesheet' type='text/css' />
//      <link href='/app.css' rel='stylesheet' type='text/css' />
//      </head>
//      <body>
//      <div id="react-mount" dangerouslySetInnerHTML={{__html: this.props.body}} />
//<script src="/bundle.js"/>
//{this.props.config.ga?<script dangerouslySetInnerHTML={{__html: `
//  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
//        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
//      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
//  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
//  ga('create', '${this.props.config.ga}', 'auto');
//  ga('send', 'pageview');
//            `}}
///>:null}
//</body>
//</html>
//);
//}
//}
