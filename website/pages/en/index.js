/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock;
/* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
    render() {
        const {siteConfig, language = ''} = this.props;
        const {baseUrl, docsUrl} = siteConfig;
        const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
        const langPart = `${language ? `${language}/` : ''}`;
        const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

        const SplashContainer = props => (
            <div className="homeContainer">
                <div className="homeSplashFade">
                    <div className="wrapper homeWrapper">{props.children}</div>
                </div>
            </div>
        );

        const Logo = props => (
            <div className="projectLogo">
                <img src={props.img_src} alt="Project Logo"/>
            </div>
        );

        const ProjectTitle = () => (
            <div>
            <h2 className="projectTitle">
                {siteConfig.title}
                {/*<small>{siteConfig.tagline}</small>*/}
            </h2>
            <div className="projectTitle">{siteConfig.tagline}</div>
            </div>

        );

        const PromoSection = props => (
            <div className="section promoSection">
                <div className="promoRow">
                    <div className="pluginRowBlock">{props.children}</div>
                </div>
            </div>
        );

        const Button = props => (
            <div className="pluginWrapper buttonWrapper">
                <a className="button" href={props.href} target={props.target}>
                    {props.children}
                </a>
            </div>
        );

        return (
            <SplashContainer>
                <div className="inner">
                    <ProjectTitle siteConfig={siteConfig}/>
                    <PromoSection>
                        <Button href="#try">Try It Out</Button>
                        <Button href={docUrl('doc0.html')}>Get started</Button>
                    </PromoSection>
                </div>
            </SplashContainer>
        );
    }
}

class Index extends React.Component {
    render() {
        const {config: siteConfig, language = ''} = this.props;
        const {baseUrl} = siteConfig;

        const Block = props => (
            <Container
                padding={['bottom', 'top']}
                id={props.id}
                background={props.background}>
                <GridBlock
                    align={props.align==null? "left" : props.align}
                    contents={props.children}
                    layout={props.layout}
                />
            </Container>
        );



        const TryOut = () => (
            <Container
                padding={['bottom', 'top']}
                id={"try"}
                background="dark">
                <GridBlock
                    align="center"
                    contents={
                        [
                                {
                                    content: 'You can try out our online demonstrator. It queries large amounts of open data. <a href="http://qanswer-frontend.univ-st-etienne.fr/">Link!</a>',
                                    title: 'Try it Out!',
                                }
                        ]
                    }
                />
                <div align="center">
                <a href="http://qanswer-frontend.univ-st-etienne.fr/"><img width="65%" src={`${baseUrl}img/front.png`}></img></a>
                </div>
            </Container>
        );

        const Description = () => (
            <Block background="light" align="left">
                {[
                    {
                        content:
                            'Welcome! We are an enterprise specialized in Question Answering solutions. A Question Answering (QA) system is a software that finds, for a question posed in natural language, directly an answer.\n' +
                            '\n' +
                            'User\'s expect nowadays direct answers. If it is time consuming for your users or employees to find the right information in your data stacks then you will automatically loose money. We help you avoiding this!\n' +
                            '\n' +
                            'We are specialized on Question Answering over structured data, i.e. RDF data, relational databases or structured data in xml, json, csv. You need expertise in this field? \n ' +
                            '\n' +
                            'Don\'t hesitate to contact us at  <a href="mailto:info@qanswer.eu">info@qanswer.eu</a>',
                        //image: `${baseUrl}img/docusaurus.svg`,
                        imageAlign: 'right',
                        title: 'About',
                    },
                ]}
            </Block>
        );

        const FeatureCallout = () => (
            <Block id="features" background="light" align="center">
                {[
                    {
                        content: 'Here are some distinctive features.',
                        title: 'Our Technology is unique!',
                    },
                ]}
            </Block>
        );

        const Features = () => (
            <Block layout="fourColumn" background="light" align="center">
                {[
                    {
                        content: 'We support mutliple languages. Currently: English, German, French, Italian, Spanish, Portugues and Chinese! You need an additional one? That\'s not a problem, we will integrate it for you.',
                        //image: `${baseUrl}img/docusaurus.svg`,
                        imageAlign: 'top',
                        title: 'Multilingual',
                    },
                    {
                        content: 'Your users can aks as they want, using keywords, natural language questions and even malformed questions.',
                        //image: `${baseUrl}img/docusaurus.svg`,
                        imageAlign: 'top',
                        title: 'Robust',
                    },
                    {
                        content: 'You have a big dataset? You want real-time responses? No problem, our solution can manage that!',
                        //image: `${baseUrl}img/docusaurus.svg`,
                        imageAlign: 'top',
                        title: 'Real-time',
                    },
                    {
                        content: 'Making question answering over a new dataset can be difficult. Some approaches need a lot of training data, other are not designed to be portable at all. Our innovative approach is designed so that a new dataset can be easily used as a base for a new Question Answering system.',
                        //image: `${baseUrl}img/docusaurus.svg`,
                        imageAlign: 'top',
                        title: 'Portable',
                    },
                ]}
            </Block>
        );

        const LearnHow = () => (
            <Block align="center">
                {[
                    {
                        content: 'Contact us at <a href="mailto:info@qanswer.eu">info@qanswer.eu</a>',
                        //image: `${baseUrl}img/docusaurus.svg`,
                        //imageAlign: 'right',
                        title: 'Interested?',
                    },
                ]}
            </Block>
        );

        const Showcase = () => {
            if ((siteConfig.users || []).length === 0) {
                return null;
            }

            const showcase = siteConfig.users
                .filter(user => user.pinned)
                .map(user => (
                    <a href={user.infoLink} key={user.infoLink}>
                        <img src={user.image} alt={user.caption} title={user.caption}/>
                    </a>
                ));

            const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

            return (
                <div className="productShowcaseSection paddingBottom">
                    <h2>Who is Using This?</h2>
                    <p>This project is used by all these people</p>
                    <div className="logos">{showcase}</div>
                    <div className="more-users">
                        <a className="button" href={pageUrl('users.html')}>
                            More {siteConfig.title} Users
                        </a>
                    </div>
                </div>
            );
        };

        return (
            <div>
                <HomeSplash siteConfig={siteConfig} language={language}/>
                <div className="mainContainer">
                    <TryOut/>
                    <FeatureCallout/>
                    <Features/>
                    <Description/>
                    <LearnHow/>
                    {/*<Showcase/>*/}
                </div>
            </div>
        );
    }
}

module.exports = Index;
