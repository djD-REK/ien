import React from "react"
import _ from "lodash"

import { htmlToReact } from "../utils"

export default class SignupForm extends React.Component {
  render() {
    let background_style = _.get(this.props, "section.background_style")
    background_style =
      background_style === undefined ? "" : background_style + " "
    return (
      <section
        id={_.get(this.props, "section.section_id")}
        className={"wrapper " + background_style + " special subscribe"}
      >
        <header className="major">
          <h2>
            {htmlToReact(
              _.get(this.props, "section.title").replace(/\n/g, "<br />")
            )}
          </h2>
        </header>
        <div
          class="ml-form-embed"
          data-account="1885136:q8z1d2h6w8"
          data-form="1799288:p1m7k5"
        ></div>
      </section>
    )
  }
}
