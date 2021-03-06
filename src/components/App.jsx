import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import marked from 'marked';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
    this.translate = this.translate.bind(this);
    this.createMarkup = this.createMarkup.bind(this);
  }

  translate(evt) {
    this.setState({
      input: evt.target.value,
    });
  }

  createMarkup(input) {
    return { __html: marked(input) };
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={6}>
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Textarea</ControlLabel>
                <FormControl
                  componentClass="textarea"
                  placeholder="type your markdown here"
                  onKeyUp={this.translate}
                />
              </FormGroup>
            </Col>
            <Col xs={6}>
              <div dangerouslySetInnerHTML={this.createMarkup(this.state.input)} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
