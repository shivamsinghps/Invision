import React,{ Component } from 'react'
import Header from '../../components/UI/Header/Header'
import Footer from '../../components/UI/Footer/Footer'
import Content from '../../components/UI/Content/Content'
import classes from './Blog.module.css'

class Blog extends Component {
state={
  windowheight:null,
  top:null,
  back:null,
  footheight:null,
  contentheight:null,
  scrollY:null,
  heightDocument:null,
  loaded:false
}

componentDidMount(){

  this.setState({scrollY:window.scrollY})
  const windowScrollTop =  window.innerHeight
  this.setState({windowheight:windowScrollTop})
  window.addEventListener('scroll', this.handleScroll);

}

onSizefooter = size => {
  this.setState({footheight:size.height})
  
  if(this.state.windowheight && this.state.footheight && this.state.contentheight) {
  const docheight = this.state.windowheight + this.state.footheight + this.state.contentheight - 70
  this.setState({heightDocument:docheight})
}
}

onSizeContent = size => {
    this.setState({contentheight:size.height})
}

handleScroll =()=>{
let scroll = window.scrollY
this.setState({top:scroll})
if(this.state.heightDocument)
{
  let back = 50 - (scroll * 100 / this.state.heightDocument)
  this.setState({back:back})
}
this.setState({scrollY:scroll})
}


  render(){

    let top = this.state.top?'-'+this.state.top+'px':null

    return(
      <div style={{overflow: 'hidden',height:this.state.heightDocument?this.state.heightDocument + 'px':null}}>
        <div className={classes.Layout} style={{height:this.state.heightDocument?this.state.heightDocument + 'px':null,top:top}}>
          <div className={classes.Parallax} style={{marginTop:this.state.windowheight?this.state.windowheight+'px':null}}>
                 <Header  height={this.state.windowheight} back={this.state.back}/>
                 <Content onSize={this.onSizeContent}/>
                 <Footer onSize={this.onSizefooter} scrolly={this.state.scrollY} footer={this.state.footheight}/>
        </div>
      </div>
    </div>
    )
  }
}

export default Blog
