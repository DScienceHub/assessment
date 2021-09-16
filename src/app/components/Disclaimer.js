import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import disclaimer from '../../assets/docs/disclaimer.md';

function Disclaimer(props) {
  const { ...forwardProps } = props;
  const [disclaimerText, setDisclaimerText] = useState();

  useEffect(() => {
    fetch(disclaimer)
      .then((result) => result.text())
      .then((result) => setDisclaimerText(result));
  }, []);

  return (
    <React.Fragment>
      <Container disableGutters {...forwardProps}>
        <ReactMarkdown>{disclaimerText}</ReactMarkdown>
      </Container>
    </React.Fragment>
  );
}

export default Disclaimer;
