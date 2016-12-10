require('./Loading.css');

var classNames = require('classnames');
var Glyphicon = require('react-bootstrap/lib/Glyphicon');
var React = require('react');

export default class Loading extends React.PureComponent {

  componentDidMount() {
    console.log('componentDidMount.props: ' + JSON.stringify(this.props));
    if (this.props && this.props.delay) {
      this.timeout = setTimeout(this.handleDisplay, this.props.delay)
    }
  };

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
  };

  handleDisplay() {
    this.timeout = null;
    this.setState({delaying: false})
  };

  render() {
    console.log('props: ' + JSON.stringify(this.props));
    var {delay, inline, text} = this.props;
    var {delaying} = this.state;
    var className = classNames('Loading', {
      'Loading--delaying': delaying,
      'Loading--displaying': delay && !delaying,
      'Loading--inline': inline
    });
    return (
      <div className={className}>
        <Glyphicon glyph="refresh"/>
        {text && <div className="Loading__text">{text}&hellip;</div>}
      </div>
    );
  }
}

Loading.propTypes = {
  delay: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.number
  ]),
  inline: React.PropTypes.bool,
  text: React.PropTypes.string
};

Loading.defaultProps = {
  delay: 500,
  inline: false
};

Loading.initialState = {
  delaying: !!(this.props && this.props.delay)
};
