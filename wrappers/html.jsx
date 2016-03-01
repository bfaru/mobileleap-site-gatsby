import React from 'react';
import DocumentTitle from 'react-document-title';

class HTML extends React.Component {
    render() {
        var page = this.props.route.page.data;
        return (
            <div>
            <div dangerouslySetInnerHTML={{__html: page}}/>
</div>
);
}
}

module.exports = HTML;