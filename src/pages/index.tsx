import * as React from "react";
import { graphql } from "gatsby";
import { format } from "date-fns";
import "./index.scss";

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        tagline: string;
      };
    };
  };
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`;

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    const { name, tagline } = this.props.data.site.siteMetadata;
    const now = format(new Date(), "ddd MMM DD HH:mm:ss");
    return (
      <div className="App">
        <div
          style={{
            height: "90%",
            width: "90%",
            padding: "1em",
            boxShadow: "rgba(0, 0, 0, 0.2) -14px 14px 2px 2px",
            color: "#63de00",
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            fontFamily: `"Helvetica Neue",Helvetica,Arial,sans-serif`,
            lineHeight: "1.5em"
          }}
        >
          <p>Last Login: {now} on ttys006</p>
          <p>Shubham-Macbook-Pro:flight dom&#36;</p>
        </div>
      </div>
    );
  }
}
