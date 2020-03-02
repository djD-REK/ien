import React from "react"
import _ from "lodash"

import { htmlToReact, markdownify, safePrefix } from "../utils"

export default class Bodytext extends React.Component {
  render() {
    let background_style = _.get(this.props, 'section.background_style')
    background_style = background_style === undefined ? "" : background_style + ' '
    return (
      <section
        id={_.get(this.props, "section.section_id")}
        className={
          "wrapper " +
          background_style +
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
        <ul className="icons major">
          {_.map(_.get(this.props, "section.icons"), (item, item_idx) => (
            <li key={item_idx}>
              <span className={"icon " + _.get(item, "icon")}>
                <span className="label">&nbsp;{_.get(item, "title")}</span>
              </span>
            </li>
          ))}
        </ul>
        <header className="major">
        {_.get(this.props, "section.paragraphs") &&
          _.map(
            _.get(this.props, "section.paragraphs"),
            (paragraph, paragraph_idx) => (
                <div className={_.get(paragraph, "image") && "grid_wrapper"}>
                {_.get(paragraph, "image") && (
                  <div className="grid_image">
                    <div className="image">
                      <img src={safePrefix(_.get(paragraph, "image"))} alt="" />
                    </div>
                  </div>              
                )}
                  <h3 className={_.get(paragraph, "image") && "grid_heading"}>{_.get(paragraph, "title")}</h3>
                  <div className={_.get(paragraph, "image") && "grid_text"}>{markdownify(_.get(paragraph, "text"))}</div>
                </div>
            )
          )}
        </header>
      </section>
    )
  }
}
