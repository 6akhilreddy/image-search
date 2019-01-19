import React, { Component } from 'react'
import Gallery from 'react-photo-gallery';

export class ImageResults extends Component {
    
    getRandom=(min, max)=> {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;  
      }

  render() {
      const {images}=this.props
      const PHOTO_SET=[]
      images.map(img=>{
        PHOTO_SET.push({
            src:img.largeImageURL,
            height:this.getRandom(1,2),
            width:this.getRandom(1,3)
        })
        return PHOTO_SET
      })
    return (
      <div>
        <Gallery photos={PHOTO_SET} />
      </div>
    )
  }
}


export default ImageResults
