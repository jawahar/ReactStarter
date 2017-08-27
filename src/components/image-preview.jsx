var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      hovering: false
    };
  },
  render: function() {
    return <div className='image-preview'
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}>
      {this.props.animated && this.state.hovering ? this.playVideo() : this.image()}
      {this.props.animated && !this.state.hovering ? this.showIcon() : null}
      {this.props.animated ? this.showViews() : null}
    </div>
  },
  image: function() {
    var link = "http://i.imgur.com/" + this.props.id + "h.jpg";
    return <img src={link} />
  },
  showIcon: function() {
    return <span className="glyphicon glyphicon-play"></span>
  },
  showViews: function() {
    return <div className="inset">
      Views: {this.props.views}
      <br/>
      Upvotes: {this.props.ups}
    </div>
  },
  handleMouseEnter: function(image) {
    this.setState({
      hovering: true
    });
  },
  handleMouseLeave: function(image) {
    this.setState({
      hovering: false
    });
  },
  playVideo: function() {
    // <video> tag is native to HTML5
    return <div>
      <video preload='auto' autoPlay='autoplay' loop='loop' webkit-playsinline>
        <source src={this.props.mp4} type='video/mp4'></source>
      </video>
    </div>
  }
})
