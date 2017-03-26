import React, { Component } from 'react';
import { Button, Col } from 'react-bootstrap';

class ButtonComponent extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.colorToBsStyle = this.colorToBsStyle.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.color);
  }

  colorToBsStyle() {
    switch (this.props.color) {
      case 'red':
        return 'dander';
      case 'blue':
        return 'primary';
      case 'green':
        return 'success';
      case 'yellow':
        return 'warning';
      default:
        return 'default';
    }
  }

  render() {
    const props = this.props;
    return (
      <section>
        <Col xs={6}>
          <Button
            bsStyle={this.colorToBsStyle()} bsSize="large" key={props.key}
            onClick={this.handleClick}
          />
        </Col>
      </section>
    );
  }
}

// ButtonComponent.propTypes = {
//   onClick: React.PropTypes.func.isRequired,
//   color: React.PropTypes.number.isRequired,
// };

export default ButtonComponent;
