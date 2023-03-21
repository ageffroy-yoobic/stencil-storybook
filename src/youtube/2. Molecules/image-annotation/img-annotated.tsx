import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'img-annotated',
  styleUrl: 'img-annotated.scss',
  shadow: true
})
export class SearchBarYTB {
  @Prop() url =
    'https://i.ytimg.com/vi/HGl75kurxok/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFTyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhmIGYoZjAP&rs=AOn4CLADTwOQRan2heX1fz9sfS6vjph2Dg';
  @Prop() time = '38:13';

  render() {
    return (
      <div>
        <p>{this.time}</p>
        <ytb-icon class={'icons-overlay'} type={'bi bi-clock'} style={{ top: '0', right: '0' }}></ytb-icon>
        <ytb-icon class={'icons-overlay'} type={'bi bi-music-note-list'} style={{ top: '25px', right: '0' }}></ytb-icon>
        <img-ytb src={this.url} role={'ytb-thumbnail'}></img-ytb>
      </div>
    );
  }
}
