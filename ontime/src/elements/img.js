import React, {Component} from 'react'

class Img extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bool: false,
    }
  }

  render() {
    return (
      <div style={{width:"fit-content"}} onMouseEnter={() => this.setState({ bool: true })} onMouseLeave={() => this.setState({ bool: false })}>
        {
          this.state.bool ? (
            <img className={this.props.class_name} src={this.props.hoverImgSrc}/>
          ) : (
            <img className={this.props.class_name} src={this.props.imgSrc}/>
          )
        }
      </div>
    )
  }
}
export default Img;