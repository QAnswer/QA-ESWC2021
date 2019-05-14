const React = require("react");
const Redirect = require("../../core/Redirect.js");

const siteConfig = require(process.cwd() + "/siteConfig.js");

class Docs extends React.Component {
    render() {
        return (
            <Redirect
                redirect={"https://qanswer-frontend.univ-st-etienne.fr"}
                config={siteConfig}
            />
        );
    }
}

module.exports = Docs;
