import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'img-ytb',
  styleUrl: 'img.scss',
  shadow: true
})
export class ImageYTB {
  @Prop() src =
    'https://i.ytimg.com/vi/HGl75kurxok/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFTyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhmIGYoZjAP&rs=AOn4CLADTwOQRan2heX1fz9sfS6vjph2Dg';
  @Prop({ reflect: true }) role: string;

  render() {
    return <img src={this.src} alt="img" />;
  }
}
