/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
        docUrl(doc, language) {
                const baseUrl = this.props.config.baseUrl;
                const docsUrl = this.props.config.docsUrl;
                const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
        const langPart = `${language ? `${language}/` : ''}`;
        return `${baseUrl}${docsPart}${langPart}${doc}`;
    }

    pageUrl(doc, language) {
        const baseUrl = this.props.config.baseUrl;
        return baseUrl + (language ? `${language}/` : '') + doc;
    }

    render() {
        return (
            <footer className="nav-footer" id="footer">
                <section className="sitemap">
                    <a href={this.props.config.baseUrl} className="nav-home">
                        {this.props.config.footerIcon && (
                            <img
                                src={this.props.config.baseUrl + this.props.config.footerIcon}
                                alt={this.props.config.title}
                                width="66"
                                height="58"
                            />
                        )}
                    </a>
                    <div>
                        <h5>Docs</h5>
                        <span style={{color: '#FFF'}}>coming soon</span>
                    </div>
                    <div>
                        <h5>Community</h5>
                        <a
                            href="https://twitter.com/"
                            target="_blank"
                            rel="noreferrer noopener">
                            Twitter
                        </a>
                    </div>
                    <div>
                        <h5>More</h5>
                        <div>
                            <a href="http://qanswer.eu">QAnswer</a>
                            <a href="http://github.com/QAnswer">QAnswer @ GitHub</a>
                            <a className="github-button" href="http://github.com/QAnswer" data-icon="octicon-star" data-count-href="/facebook/docusaurus/stargazers" data-show-count="true" data-count-aria-label="# stargazers on GitHub" aria-label="Star this project on GitHub">Star</a>
                            {this.props.config.twitterUsername && (
                            <div className="social">
                                <a
                                    href={`https://twitter.com/${this.props.config.twitterUsername}`}
                                    className="twitter-follow-button">
                                    Follow @{this.props.config.twitterUsername}
                                </a>
                            </div>
                            )}
                        </div>
                        <div>
                            <a href="https://github.com/WDAqua/Qanary">Qanary @ GitHub</a>
                            <a className="github-button" href="https://github.com/WDAqua/Qanary" data-icon="octicon-star" data-count-href="/facebook/docusaurus/stargazers" data-show-count="true" data-count-aria-label="# stargazers on GitHub" aria-label="Star this project on GitHub">Star</a>
                            <a href="https://github.com/WDAqua/Qanary-question-answering-components">Qanary Components @ GitHub</a>
                            <a className="github-button" href="https://github.com/WDAqua/Qanary-question-answering-components" data-icon="octicon-star" data-count-href="/facebook/docusaurus/stargazers" data-show-count="true" data-count-aria-label="# stargazers on GitHub" aria-label="Star this project on GitHub">Star</a>
                        </div>
                    </div>
                </section>
                <section className="copyright">{this.props.config.copyright}</section>
            </footer>
        );
    }
}

module.exports = Footer;