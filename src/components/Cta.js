import React from 'react';
import _ from 'lodash';

import {htmlToReact, markdownify, Link, safePrefix} from '../utils';

export default class Cta extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className={'wrapper ' + _.get(this.props, 'section.background_style') + ' special'}>
                <header className="major" style={{display: "flex"}}>
                    {_.get(this.props, 'section.image') && 
                        <div style={{flex: "40%", marginRight: "1em"}}>
                            <div className={"image"}>
                                <img src={_.get(this.props, 'section.image')}/>
                            </div>
                        </div>
                    }
                    <div style={{flex: "60%"}}>
                        <h2>{htmlToReact(_.get(this.props, 'section.title').replace(/\n/g, '<br />'))}</h2>
                        {markdownify(_.get(this.props, 'section.subtitle'))}
                    </div>
                </header>
                <br style={{clear: "both", height: "0", margin: "0", lineHeight: "0", fontSize: "1px"}}/>
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
