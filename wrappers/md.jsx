//import React from 'react'
//
//module.exports = React.createClass({
//  propTypes () {
//    return {
//      router: React.PropTypes.object,
//    }
//  },
//  render () {
//    const post = this.props.route.page.data;
//    return (
//      <div>
//        <h1>{post.title}</h1>
//        <div dangerouslySetInnerHTML={{ __html: post.body }}/>
//      </div>
//    )
//  },
//})
import React from 'react';
import DocumentTitle from 'react-document-title';
import { link } from 'gatsby-helpers';

var DOCS_BASEURL = "https://github.com/graphql-python/graphene/edit/master/docs/pages/";

class Markdown extends React.Component {
  render() {
    var post = this.props.route.page.data;
    var pagePath = this.props.route.page.requirePath;
    var documentUrl = `${DOCS_BASEURL}${pagePath}`;
    var showTitle = post.title && !this.props.docs;
    return (
        <DocumentTitle title="Mobile Development - MobileLeap Labs"><div>
{showTitle?<div className="page-title">
    <h1>{post.title}</h1>
</div>:null}
<div className="markdown">
    <div className={!this.props.docs?"wrapper":null} dangerouslySetInnerHTML={{__html: post.body}}/>
</div>
</div>
</DocumentTitle>
);
}
}

module.exports = Markdown;