import React from "react"
import { Helmet } from "react-helmet"
import _ from "lodash"

import { safePrefix } from "../utils"
import Header from "./Header"
import Footer from "./Footer"

export default class Body extends React.Component {
  render() {
    const site_title = _.get(this.props, "pageContext.site.siteMetadata.title")
    const page_markdown_title = _.get(
      this.props,
      "pageContext.frontmatter.title"
    )
    let page_title = "Hi"
    if (page_markdown_title === "Home") {
      page_title =
        site_title +
        " - " +
        _.get(this.props, "pageContext.frontmatter.header_subtitle")
    } else {
      page_title = page_markdown_title && page_markdown_title + " " + site_title
    }
    return (
      <React.Fragment>
        <Helmet>
          <title>{page_title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initialScale=1, userScalable=no"
          />
          <link rel="stylesheet" href={safePrefix("assets/css/main.css")} />
          <link
            rel="stylesheet"
            href={safePrefix("assets/css/markdown-images.css")}
          />
          <noscript>{`<link rel="stylesheet" href=${safePrefix(
            "assets/css/noscript.css"
          )} />`}</noscript>
          <script>
            {`(function (m, a, i, l, e, r) {
            m['MailerLiteObject'] = e; function f() {
                var c = { a: arguments, q: [] }; var r = this.push(c); return "number" != typeof r ? r : f.bind(c.q);
            }
                f.q = f.q || []; m[e] = m[e] || f.bind(f.q); m[e].q = m[e].q || f.q; r = a.createElement(i);
                var _ = a.getElementsByTagName(i)[0]; r.async = 1; r.src = l + '?v' + (~~(new Date().getTime() / 1000000));
                _.parentNode.insertBefore(r, _);
            })(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');

            var ml_account = ml('accounts', '1885136', 'q8z1d2h6w8', 'load');`}
          </script>
        </Helmet>
        {_.get(this.props, "pageContext.frontmatter.template") === "home" && (
          <Header {...this.props} />
        )}
        {this.props.children}
        <Footer {...this.props} />
      </React.Fragment>
    )
  }
}
