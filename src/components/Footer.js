import React from "react"
import _ from "lodash"

import { Link, htmlToReact } from "../utils"

export default class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <div class="wrapper samples">
          <h3 class="icon fa-download">
            &nbsp;Download free samples of Iranian Economic News&nbsp;
            <span class="icon fa-download" style={{ color: "inherit" }}></span>
          </h3>
          <ul className="actions special">
            <li key="IEN sample 1">
              <a
                class="button icon fa-file-pdf-o"
                href="/images/IEN%20January%202020.pdf"
                title="Economists Make Policy Recommendations in Open Letter to President"
              >
                Sample 1
              </a>
            </li>
            <li key="IEN sample 2">
              <a
                class="button icon fa-file-pdf-o"
                href="/images/IEN%20May%202020.pdf"
                title="Corona is the Latest Battleground Between Rouhani and the IRGC"
              >
                Sample 2
              </a>
            </li>
          </ul>
        </div>
        {_.get(this.props, "pageContext.site.data.footer.social_icons") && (
          <ul className="icons">
            {_.map(
              _.get(this.props, "pageContext.site.data.footer.social_icons"),
              (item, item_idx) => (
                <li key={"Footer icon li " + _.get(item, "title")}>
                  <h4>
                    <Link
                      to={_.get(item, "url")}
                      className={"icon " + _.get(item, "icon")}
                      key={"Footer icon Link " + _.get(item, "title")}
                    >
                      <span
                        className="label"
                        key={"Footer span label " + _.get(item, "title")}
                      >
                        &nbsp;{_.get(item, "title")}&nbsp;
                      </span>
                      <span
                        className={"icon " + _.get(item, "icon")}
                        key={"Footer span icon " + _.get(item, "title")}
                        style={{ color: "inherit" }}
                      ></span>
                    </Link>
                  </h4>
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
          <img src="/images/IEN-logo.png" alt="Iranian Economic News logo" />
        </div>
        <p>
          ©&nbsp;{new Date().getFullYear()}&nbsp;
          <a href="/">
            {_.get(this.props, "pageContext.site.siteMetadata.title")}
          </a>
        </p>
      </footer>
    )
  }
}
