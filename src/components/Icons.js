import React from "react"
import _ from "lodash"

import { htmlToReact } from "../utils"

export default class Icons extends React.Component {
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
        <ul className="icons major">
          {_.map(_.get(this.props, "section.icons"), (item, item_idx) => (
            <li key={item_idx}>
              <span className={"icon " + _.get(item, "icon")}>
                <span className="label">{_.get(item, "title")}</span>
              </span>
            </li>
          ))}
        </ul>
        <header className="major">
          <h2>
            {htmlToReact(
              _.get(this.props, "section.title").replace(/\n/g, "<br />")
            )}
          </h2>
        </header>

        <form
          style={{
            margin: "auto"
          }}
          action={"https://tinyletter.com/IranianEconomicNews"}
          method={"post"}
          target={"popupwindow"}
          onsubmit={
            "window.open('https://tinyletter.com/IranianEconomicNews', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
          }
        >
          <label for="tlemail">Enter your email address</label>

          <input
            type="text"
            style={{
              width: "30%",
              minWidth: "300px",
              margin: "auto"
            }}
            name="email"
            id="tlemail"
          />
          <input type="hidden" value="1" name="embed" />
          <br />
          <input type="submit" value="Subscribe" />
          <br />
          <a
            href="https://tinyletter.com"
            target="_blank"
            style={{ fontStyle: "italic", fontSize: ".8em" }}
          >
            powered by TinyLetter
          </a>
        </form>
      </section>
    )
  }
}
