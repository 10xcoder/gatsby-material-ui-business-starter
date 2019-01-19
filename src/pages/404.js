import React from "react";
import Page from "../components/Page";

class NotFoundPage extends React.Component {
  render() {
    return (
      <Page title="Not Found">
        <p>Hey! You just hit a page that doesn't exist...</p>
      </Page>
    );
  }
}

export default NotFoundPage;
