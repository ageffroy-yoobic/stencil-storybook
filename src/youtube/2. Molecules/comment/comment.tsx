import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'com-container',
  styleUrl: 'comment.scss',
  shadow: true
})
export class CommentYTB {
  @Prop() commentInfos = {
    avatar:
      'https://i.ytimg.com/vi/HGl75kurxok/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFTyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhmIGYoZjAP&rs=AOn4CLADTwOQRan2heX1fz9sfS6vjph2Dg',
    author: 'Author',
    content:
      'Rewatched the movie for the first time in 15 years. Thankful to even be alive still to view it. Audrey and Tierson’s score are a bit too much magic for the film to fully utilize, but that’s okay. A bit boring, still one of my favorites, but the music can never be praised enough.',
    like: '2',
    posted: '1 mois'
  };
  render() {
    return (
      <div class={'com-container'}>
        <img-ytb src={this.commentInfos.avatar}></img-ytb>
        <div class={'written-details'}>
          <div class={'author-details'}>
            <txt-ytb bold={'bold'} color="white" style={{ fontSize: '14px' }}>
              {this.commentInfos.author}
            </txt-ytb>
            <txt-ytb bold={'normal'} color="white" style={{ fontSize: '12px', paddingBottom: '1px' }}>
              {this.commentInfos.posted} ago
            </txt-ytb>
          </div>
          <txt-ytb bold={'normal'} color="white" style={{ fontSize: '13px', paddingBottom: '1px' }}>
            {this.commentInfos.content}
          </txt-ytb>
          <div class={'reactions'}>
            <button-ytb shape="round" color="transparent" size="medium" style={{ paddingRight: '2px' }}>
              <ytb-icon type={'bi bi-hand-thumbs-down'}></ytb-icon>
            </button-ytb>
            <txt-ytb bold={'bold'} color="white">{this.commentInfos.like}</txt-ytb>
            <button-ytb shape="round" color="transparent" size="medium">
              <ytb-icon type={'bi bi-hand-thumbs-up'}></ytb-icon>
            </button-ytb>
            <button-ytb shape="round" color="transparent" size="medium">
              <ytb-icon type={'bi bi-heart'}></ytb-icon>
            </button-ytb>
            <button-ytb type={'r16'} shape="rectangle" color="transparent" size="medium" style={{ padding: '2px' }}>
              <txt-ytb bold={'bold'} color="white">Reply</txt-ytb>
            </button-ytb>
          </div>
        </div>
      </div>
    );
  }
}
