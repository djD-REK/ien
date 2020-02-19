import React from 'react';
import _ from 'lodash';

import {htmlToReact, markdownify, Link, safePrefix} from '../utils';

export default class Cta extends React.Component {
    render() {
        let background_style = _.get(this.props, 'section.background_style')
        background_style = background_style === undefined ? "" : background_style + ' '
        const image_URL = _.get(this.props, 'section.image')
        return (
            <section id={_.get(this.props, 'section.section_id')} className={'wrapper ' + background_style + 'special'}>
                <header className="major">
                    <div className={image_URL && "grid_wrapper"}>
                        {image_URL && 
                            <div className="grid_image">
                                <div className={"image"}>
                                    <img src={image_URL}/>
                                </div>
                            </div>
                        }
                        <h2 className={image_URL && "grid_heading"}>{htmlToReact(_.get(this.props, 'section.title').replace(/\n/g, '<br />'))}</h2>
                        <div className={image_URL && "grid_text"}>{markdownify(_.get(this.props, 'section.subtitle'))}</div>
                    </div>
                </header>
                {_.get(this.props, 'section.actions') && 
                    <ul className="actions special">
                        {_.map(_.get(this.props, 'section.actions'), (action, action_idx) => (
                            <li key={action_idx}><Link to={(_.get(action, 'url').startsWith('#') ? _.get(action, 'url') : safePrefix(_.get(action, 'url')))} className={'button' + (_.get(action, 'is_primary') ? ' primary' : '') + (_.get(action, 'icon') ? ' icon ' + _.get(action, 'icon') : '') + (_.get(action, 'is_scrolly') ? ' scrolly' : '')}>{_.get(action, 'label')}</Link></li>
                        ))}
                    </ul>
                }
            </section>
        );
    }
}
