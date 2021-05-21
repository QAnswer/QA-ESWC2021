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
                const { siteConfig, language = '' } = this.props;
                const { baseUrl, docsUrl } = siteConfig;
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
                        <Button href="https://qanswer-frontend.univ-st-etienne.fr/qa/full?query=who%20are%20the%20organizers%20of%20%20eswc%202021%3F&tags=%5B%5D&lang=en&kb=wikidata&user=open">Try It Out</Button>
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
                                    'The aim of this tutorial is to address this issue. We will show how recently developed technologies, like **<a href="https://www.qanswer.eu/">QAnswer</a>** and the **<a href="https://github.com/WDAqua/Qanary">Qanary</a>** framework, allow constructing, customizing, evaluating, and optimizing QA systems on RDF datasets using a lightweight approach.',
                                image: `${baseUrl}img/where.png`,
                                imageAlign: 'right',
                                title: 'Description',
                            },
                        ]}
                    </Block>
                    <Block align="left">
                        {[
                            {
                                title: 'First draft of a schedule 2021',
                                content: ''
                                + '<p><strong>10:00h:</strong> Starting</p>\n'

                                + '<ul>\n'
                                + '    <li><strong>10 min:</strong> Introduction and people gathering</li>\n'
                                + '    <li><strong>25 min:</strong> Keynote and introduction into the field of Question Answering (general principles and variations)</li>\n'
                                + '    <li><strong>25 min:</strong> Understanding the tasks of QA over KGs</li>\n'
                                + '</ul>\n'
                                
                                + '<p><strong>11:00-11:15h:</strong> Coffee break</p>\n'
                                
                                + '<ul>\n'
                                + '    <li><strong>60 min:</strong> Build a Question Answering system using QAnswer and the Qanary framework (overview by using an example)</li>\n'
                                + '</ul>\n'
                                
                                + '<p><strong>12:15-13:15h:</strong> Lunch break</p>\n'
                                
                                + '<ul>\n'
                                + '    <li><strong>30 min:</strong> QAnswer: How it works?</li>\n'
                                + '    <li><strong>60 min:</strong> Hands-on session: Create your own Digital Twin using QAnswer-based query engine!</li>\n'
                                + '</ul>\n'
                                
                                + '<p><strong>14:45-15:00h:</strong> Coffee break</p>\n'
                                
                                + '<ul>\n'
                                + '    <li><strong>30 min:</strong> Qanary: How it works?</li>\n'
                                + '    <li><strong>60 min:</strong> Hands-on session: Establish, extend, measure, and improve a Question Answering system using the Qanary framework!</li>\n'
                                + '</ul>\n'
                                
                                + '<p><strong>16:30-16:45h:</strong> Coffee break</p>\n'
                                
                                + '<ul>\n'
                                + '    <li><strong>15 min:</strong> Presentation of final results (i.e., examples of the QA systems that we created in our tutorial)</li>\n'
                                + '    <li><strong>15 min:</strong> Outlook on research questions in the field of Question Answering</li>\n'
                                + '    <li><strong>15 min:</strong> Closing, followed by open space discussion</li>\n'
                                + '</ul>\n'
                                
                                + '<p><strong>17:30h / Open End</strong></p>\n',
                                //image: `${baseUrl}img/docusaurus.svg`,
                                imageAlign: 'right',
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
                                content: '<a href="http://www.andreasboth.de/en">Andreas Both</a> is a professor in Computer Science at the <a href="https://www.hs-anhalt.de/en/start-page.html">Anhalt University of Applied Science</a> (Germany) and the Head of Research at <a href="http://www.datev.com">DATEV</a> a large business software company located in Germany. At Web-driven companies he has worked for many years in leading research and development positions on different aspects of modern Web technologies. In particular, data-driven processes, data integration, information retrieval applications, and web engineering topics are his fields of research. He commits himself to advance in using the World Wide Web as a knowledge base and developing the next generation of Web applications to open the capabilities of the Web for both industry and users. He is one of the main contributors to the <a href="https://github.com/WDAqua/Qanary">Qanary framework</a> and the <a href="https://github.com/WDAqua/Qanary-question-answering-components">Qanary component ecosystem</a>.'
                            },
                            {
                                image: `${baseUrl}img/Pierre_Maret.jpg`,
                                imageAlign: 'top',
                                title: 'Pierre Maret',
                                content: '<a href="https://perso.univ-st-etienne.fr/mapi9921/">Pierre Maret</a> is a professor in Computer Science at the <a href="https://www.univ-st-etienne.fr/en/index.html">University of Lyon-Saint Etienne (France)</a>, Laboratory Hubert Curien, where he is lead- ing the team Knowledge Representation and Reasoning. His background is on Knowledge Management, Data Modeling and Artificial Intelligence. He has been leading the French side of the WDAqua ITN (a Marie Skłodowska-Curie Innovative Training Network). He is also involved into scientific collaborations with industrial partners.'
                            },
                            {
                                image: `${baseUrl}img/Aleksandr_Perevalov.jpg`,
                                imageAlign: 'top',
                                title: 'Aleksandr Perevalov',
                                content: '<a href="https://www.hs-anhalt.de/en/university/service/directory-of-people/aleksandr-perevalov.html">Aleksandr Perevalov</a> is a Ph.D. student in Computer Science at the <a href="https://www.hs-anhalt.de/en/start-page.html">Anhalt University of Applied Science</a> (Germany). His research activities are dedicated to Question Answering and Data Science.'
                            },
                            {
                                image: `${baseUrl}img/pixabay-person-1824144_640.png`,
                                imageAlign: 'top',
                                title: 'Paul Heinze',
                                content: 'Paul Heinze is a Computer Science student at the <a href="https://www.hs-anhalt.de/en/start-page.html">Anhalt University of Applied Science</a> (Germany). He is a <a href="https://github.com/p-Heinze">regular contributor</a> to the Qanary framework and the Qanary component ecosystem.'
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