import React from "react"
import _ from "lodash"

import { htmlToReact, markdownify, safePrefix } from "../utils"

export default class Bodytext extends React.Component {
  render() {
    return (
      <section
        id={_.get(this.props, "section.section_id")}
        className={
          "wrapper " +
          _.get(this.props, "section.background_style") +
          " special"
        }
      >
        <header className="major">
          <h2>
            {htmlToReact(
              _.get(this.props, "section.title").replace(/\n/g, "<br />")
            )}
          </h2>
          {markdownify(_.get(this.props, "section.subtitle"))}
        </header>
        {_.get(this.props, "section.paragraphs") &&
          _.map(
            _.get(this.props, "section.paragraphs"),
            (paragraph, paragraph_idx) => (
              <section key={paragraph_idx} className="spotlight">
                {_.get(paragraph, "image") && (
                  <div className="image">
                    <img src={safePrefix(_.get(paragraph, "image"))} alt="" />
                  </div>
                )}
                <div className="content">
                  <h3>{_.get(paragraph, "title")}</h3>
                  {markdownify(_.get(paragraph, "text"))}
                </div>
              </section>
            )
          )}
      </section>
    )
  }
}
