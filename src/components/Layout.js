import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {safePrefix} from '../utils';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        const site_title = _.get(this.props, 'pageContext.site.siteMetadata.title')
        const page_markdown_title = _.get(this.props, 'pageContext.frontmatter.title')
        let page_title = "Hi"
        if(page_markdown_title === "Home") {
            page_title =  site_title + ' - ' + _.get(this.props, 'pageContext.frontmatter.header_subtitle')
        }
        else {
            page_title = page_markdown_title && page_markdown_title + ' - ' + site_title
        }        
        return (
            <React.Fragment>
                <Helmet>
                    <title>{page_title}</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initialScale=1, userScalable=no" />
                    <link rel="stylesheet" href={safePrefix('assets/css/main.css')} />
                    <link rel="stylesheet" href={safePrefix('assets/css/markdown-images.css')} />
                    <noscript>{`<link rel="stylesheet" href=${safePrefix('assets/css/noscript.css')} />`}</noscript>
                </Helmet>
                    {(_.get(this.props, 'pageContext.frontmatter.template') === 'home') && 
                        <Header {...this.props} />
                    }
                    {this.props.children}
                    <Footer {...this.props} />
            </React.Fragment>
        );
    }
}
