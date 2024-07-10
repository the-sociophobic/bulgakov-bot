import React from 'react'

// import ResizeObserver from 'resize-observer-polyfill'


export type ImgProps = {
  src?: string
  className?: string
  alt?: string
  percentage?: string
  noCrop?: boolean
  urlParams?: string
  onClick?: () => void
}

export type ImgState = {
  portrait: boolean | undefined,
  containerRatio: number,
}


class Img extends React.Component<ImgProps, ImgState> {
  state = {
    portrait: undefined,
    containerRatio: 0,
  }

  imgRef: any = React.createRef()
  containerRef: any = React.createRef()
  resizeObs: any

  // componentDidMount = () =>
  //   this.resizeObs = new ResizeObserver(this.setOrientation.bind(this))
  //     .observe(this.containerRef.current)

  setOrientation = () =>
    this.setState({
      portrait: this.containerRef?.current?.offsetWidth / this.containerRef?.current?.offsetHeight >
        this.imgRef?.current?.width / this.imgRef?.current?.height
    })

  render = () =>
    <div
      ref={this.containerRef}
      className={`
        Img
        ${this.props.className}
        ${typeof this.state.portrait === "undefined" && "Img--hidden"}
      `}
      style={this.props.percentage ? { width: this.props.percentage } : {}}
      onClick={this.props.onClick}
    >
      <img
        ref={this.imgRef}
        alt={this.props.alt || ''}
        src={`${this.props.src || ''}${this.props.urlParams || ''}`}
        className={`
          Img__img
        `}
        // Img__img--${!this.props.noCrop && (this.state.portrait ? "portrait" : "landscape")}
        onLoad={this.setOrientation}
      />
    </div>
}


export default Img