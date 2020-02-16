import React from "react"
import _ from "lodash"

import { Link, htmlToReact, safePrefix } from "../utils"

export default class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        {_.get(this.props, "pageContext.site.data.footer.social_icons") && (
          <ul className="icons">
            {_.map(
              _.get(this.props, "pageContext.site.data.footer.social_icons"),
              (item, item_idx) => (
                <li key={item_idx}>
                  <Link
                    to={_.get(item, "url")}
                    className={"icon " + _.get(item, "icon")}
                  >
                    <span className="label">{_.get(item, "title")}</span>
                  </Link>
                </li>
              )
            )}
          </ul>
        )}
        {_.get(this.props, "pageContext.site.data.footer.copyright") && (
          <p className="copyright">
            ©&nbsp;{new Date().getFullYear()}&nbsp;
            {_.get(this.props, "pageContext.site.siteMetadata.title")}
            {htmlToReact(
              _.get(this.props, "pageContext.site.data.footer.copyright")
            )}
            &nbsp;
            {_.map(
              _.get(this.props, "pageContext.site.data.footer.links"),
              (link, link_idx) => (
                <React.Fragment key={link_idx}>
                  <Link
                    key={link_idx}
                    to={_.get(link, "url")}
                    {...(_.get(link, "new_window")
                      ? { target: "_blank", rel: "noopener" }
                      : null)}
                  >
                    {_.get(link, "text")}
                  </Link>
                  .&nbsp;
                </React.Fragment>
              )
            )}
          </p>
        )}
        <div className="image logo">
          <img
            src="/images/abbreviated-logo-iran-map-extra-wide.png"
            alt="Iranian Economic News logo"
          />
        </div>
      </footer>
    )
  }
}
