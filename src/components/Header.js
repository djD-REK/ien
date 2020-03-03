import React from "react"
import _ from "lodash"

import { Link, safePrefix, markdownify, classNames } from "../utils"

export default class Header extends React.Component {
  render() {
    // const site_title = _.get(this.props, 'pageContext.site.siteMetadata.title')
    const page_markdown_title = _.get(
      this.props,
      "pageContext.frontmatter.title"
    )
    let heading_title = "Hi"
    if (page_markdown_title === "Home") {
      heading_title = ""
    } else {
      heading_title = page_markdown_title && page_markdown_title + " "
    }
    return (
      <header id="header">
        <div className="content" key="Header div content">
          <h1 key={"h1 " + heading_title + " Iranian Economic News"}>
            <Link
              key={"Link " + heading_title + " Iranian Economic News"}
              to={
                _.get(
                  this.props,
                  "pageContext.frontmatter.header_title_url"
                ).startsWith("#")
                  ? _.get(
                      this.props,
                      "pageContext.frontmatter.header_title_url"
                    )
                  : safePrefix(
                      _.get(
                        this.props,
                        "pageContext.frontmatter.header_title_url"
                      )
                    )
              }
            >
              {heading_title}
              {heading_title ? <br /> : ""}
              <span className="iran_green" key="Iranian iran_green">
                Iranian&nbsp;
              </span>
              <span className="iran_white" key="Economic iran_white">
                Economic
              </span>
              <span className="iran_red" key="News iran_red">
                &nbsp;News
              </span>
            </Link>
          </h1>
          {markdownify(
            _.get(this.props, "pageContext.frontmatter.header_subtitle")
          )}
          {_.get(this.props, "pageContext.frontmatter.header_actions") && (
            <ul className="actions" key="ul actions header">
              {_.map(
                _.get(this.props, "pageContext.frontmatter.header_actions"),
                (action, action_idx) => (
                  <li key={"Header li " + _.get(action, "label")}>
                    <Link
                      key={"Header Link " + _.get(action, "label")}
                      to={
                        _.get(action, "url").startsWith("#")
                          ? _.get(action, "url")
                          : safePrefix(_.get(action, "url"))
                      }
                      className={
                        "button" +
                        (_.get(action, "is_primary") ? " primary" : "") +
                        (_.get(action, "icon")
                          ? " icon " + _.get(action, "icon")
                          : "") +
                        (_.get(action, "is_scrolly") ? " scrolly" : "") +
                        (_.get(action, "color")
                          ? " " + _.get(action, "color")
                          : "")
                      }
                    >
                      {_.get(action, "label")}
                    </Link>
                  </li>
                )
              )}
            </ul>
          )}
        </div>
        {_.get(this.props, "pageContext.frontmatter.header_image") && (
          <div
            key={safePrefix(
              _.get(this.props, "pageContext.frontmatter.header_image.path")
            )}
            className={classNames("image", {
              phone: _.get(
                this.props,
                "pageContext.frontmatter.header_image.phone_border"
              )
            })}
          >
            <div className="inner">
              <img
                src={safePrefix(
                  _.get(this.props, "pageContext.frontmatter.header_image.path")
                )}
                alt=""
              />
            </div>
          </div>
        )}
      </header>
    )
  }
}
