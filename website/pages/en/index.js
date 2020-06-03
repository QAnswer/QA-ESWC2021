/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
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

        // const Logo = props => (
        //   <div className="projectLogo">
        //     <img src={props.img_src} alt="Project Logo" />
        //   </div>
        // );

        const ProjectTitle = () => (
            <h2 className="projectTitle">
                {siteConfig.title}
                <small>{siteConfig.tagline}</small>
            </h2>
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
                {/*<Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />*/}
                <div className="inner">
                    <ProjectTitle siteConfig={siteConfig} />
                    <PromoSection>
                        <Button href="https://qanswer-frontend.univ-st-etienne.fr/qa/full?query=In%20which%20country%20is%20ESWC%202020%3F&tags=%5B%5D&lang=en&kb=wikidata%2Copenstreetmap&user=open%2Copen">Try It Out</Button>
                        {/*<Button href={docUrl('doc0.html')}>Get started</Button>*/}
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
                    align={props.align}
                    contents={props.children}
                    layout={props.layout}
                />
            </Container>
        );

        const FeatureCallout = () => (
            <div
                className="productShowcaseSection paddingBottom"
                style={{textAlign: 'center'}}>
                <h2>Feature Callout</h2>
                <MarkdownBlock>These are features of this project</MarkdownBlock>
            </div>
        );

        const TryOut = () => (
            <Block id="try">
                {[
                    {
                        content:
                            'To make your landing page more attractive, use illustrations! Check out ' +
                            '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
                            'The illustrations you see on this page are from unDraw.',
                        image: `${baseUrl}img/undraw_code_review.svg`,
                        imageAlign: 'left',
                        title: 'Wonderful SVG Illustrations',
                    },
                ]}
            </Block>
        );

        const LearnHow = () => (
            <Block background="light">
                {[
                    {
                        content:
                            'a',
                        image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
                        imageAlign: 'right',
                        title: 'Description',
                    },
                ]}
            </Block>
        );

        const Features = () => (
            <Block layout="fourColumn">
                {[
                    {
                        image: `${baseUrl}img/undraw_react.svg`,
                        imageAlign: 'top',
                        title: 'Learn how QA systems work!',
                    },
                    {
                        image: `${baseUrl}img/undraw_react.svg`,
                        imageAlign: 'top',
                        title: 'Learn how QA systems work!',
                    },
                    {
                        image: `${baseUrl}img/undraw_operating_system.svg`,
                        imageAlign: 'top',
                        title: 'Construct QA systems',
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
                        <img src={user.image} alt={user.caption} title={user.caption} />
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
                <HomeSplash siteConfig={siteConfig} language={language} />
                <div className="mainContainer">
                    <Block background="light">
                        {[
                            {
                                content:
                                    '**Knowledge Graphs** are designed to be easily consumed by machines, but they are not easily accessible by end-users. **Question Answering (QA)** over Knowledge Graphs (KGs) is seen as a technology able to bridge the gap between end-users and Knowledge Graphs. In the last years a lot of research was carried out to solve the problem of QA over KGs, but constructing a QA system over a new KG for non-expert users is still not easy.\n' +
                                    '\n' +
                                    'The aim of this tutorial is to address this issue. We will show how recently developed technologies, like **QAnswer** and **Qanary**, allow constructing, customizing, evaluating, and optimizing QA systems on RDF datasets using a lightweight approach.',
                                image: `${baseUrl}img/where.png`,
                                imageAlign: 'right',
                                title: 'Description',
                            },
                        ]}
                    </Block>
                    <Block align="left">
                        {[
                            {
                                content:

                                    ' **10:00 Starting**\n' +
                                    '\n' +
                                    ' ---**10 min -** Introduction and people gathering\n' +
                                    '\n' +
                                    ' ---**25 min -** <a href="/QA-ESWC2020/presentation0.pdf">Keynote and introduction into the field of Question Answering (general principles and variations)</a>\n' +
                                    '\n' +
                                    ' ---**25 min -** <a href="/QA-ESWC2020/presentation1.pdf">Understanding the tasks of QA over KGs</a> \n' +
                                    '\n' +
                                    '**11:00-11:30 Coffee break**\n' +
                                    '\n' +
                                    ' ---**60 min -** <a href="/QA-ESWC2020/docs/quick1.1">Hands-on session I:</a> We are using QAnswer to create your own **Digital Twin**!\n' +
                                    '\n' +
                                    ' **13:00-14:00 Lunch break** \n' +
                                    '\n' +
                                    ' ---**30 min -** <a href="/QA-ESWC2020/presentation2.pdf">QAnswer: how it works?</a>\n' +
                                    '\n' +
                                    ' ---**15 min -** <a href="/QA-ESWC2020/presentation3.pdf">Talk: Construct a Question Answering system on the Covid-19 dataset.</a> \n' +
                                    '\n' +
                                    ' ---**15 min -** Examples: other QA systems. \n' +
                                    '\n' +
                                    '**15:00-15:30 Coffee break**\n' +
                                    '\n' +
                                    ' ---**15 min -** Gathering and discussion of the participants to defined particular goals for developing an individual Question Answering system\n' +
                                    '\n' +
                                    ' ---**60 min -** <a href="/QA-ESWC2020/docs/doc1.1">Hands-on session II:</a> Construct a Question Answering System either on your dataset or on a dataset provided.\n' +
                                    '\n' +
                                    ' ---**15 min -** Presentation of final results (i.e., the created Question Answering systems)\n' +
                                    '\n' +
                                    ' **17:00 End**\n',
                                //image: `${baseUrl}img/docusaurus.svg`,
                                imageAlign: 'right',
                                title: 'Schedule for June 3rd 2020',
                            },
                        ]}
                    </Block>
                    <Block layout="threeColumn" background="light" align='center'>
                        {[
                            {
                                image: `${baseUrl}img/Dennis_Diefenbach-4.jpg`,
                                imageAlign: 'top',
                                title: 'Dennis Diefenbach',
                                content: 'Dennis Diefenbach is a Ph.D. in the area of QA over Knowledge Graphs. Dennis Diefenbach published over 20 publications in this area in renown Conferences and Journals like the International Semantic Web Conference and the Semantic Web Journal. He is the main contributor of [QAnswer](http://qanswer.eu), an AI driven platform to query Knowledge Graphs in natural language. An online service querying large amounts of open data can be found under [http://qanswer.eu/qa](http://qanswer.eu/qa). '
                            },
                            {
                                image: `${baseUrl}img/Andreas_Both.jpg`,
                                imageAlign: 'top',
                                title: 'Andreas Both',
                                content: 'Andreas Both is a professor in Computer Scientist at the Anhalt Univer- sity of Applied Science (Germany) and the Head of Research at DATEV a large business software company located in Germany. At Web-driven com- panies he has worked for many years in leading research and development positions on different aspects of modern Web technologies. In particular, data-driven processes, data integration, information retrieval applications, and web engineering topics are his fields of research. He commits himself to advance in using the World Wide Web as a knowledge base and devel- oping the next generation of Web applications to open the capabilities of the WWW for both industry and users.'
                            },
                            {
                                image: `${baseUrl}img/Pierre_Maret.jpg`,
                                imageAlign: 'top',
                                title: 'Pierre Maret',
                                content: 'Pierre Maret is a professor in Computer Science at the University of Lyon-Saint Etienne (France), Laboratory Hubert Curien, where he is lead- ing the team Knowledge Representation and Reasoning. His background is on Knowledge Management, Data Modeling and Artificial Intelligence. He has been leading the French side of the ITN Marie-Slokowska Curie WDAqua. He is also involved into scientific collaborations with industrial partners.'
                            },
                        ]}
                    </Block>
                    {/*<Features />*/}
                    {/*<Features />*/}
                    {/*<FeatureCallout />*/}
                    {/*<TryOut />*/}
                    {/*<Showcase />*/}
                </div>
            </div>
        );
    }
}

module.exports = Index;
