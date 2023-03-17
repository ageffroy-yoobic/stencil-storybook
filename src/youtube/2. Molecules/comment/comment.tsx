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
        <img-ytb url={this.commentInfos.avatar}></img-ytb>
        <div class={'written-details'}>
          <div class={'author-details'}>
            <txt-ytb type={'title'} style={{ fontSize: '14px' }}>
              {this.commentInfos.author}
            </txt-ytb>
            <txt-ytb type={'normal'} style={{ fontSize: '12px', paddingBottom: '1px' }}>
              {this.commentInfos.posted} ago
            </txt-ytb>
          </div>
          <txt-ytb type={'title'}>{this.commentInfos.content}</txt-ytb>
          <div class={'reactions'}>
            <button-ytb shape="round" color="transparent" size="medium" style={{ paddingRight: '14px' }}>
              <ytb-icon type={'bi bi-hand-thumbs-down'} ></ytb-icon>
            </button-ytb>
            <span color='#fffff'>{this.commentInfos.like}</span>
            <button-ytb shape="round" color="transparent" size="medium">
              <ytb-icon type={'bi bi-hand-thumbs-up'}></ytb-icon>
            </button-ytb>
            <button-ytb shape="round" color="transparent" size="medium">
              <ytb-icon type={'bi bi-heart'}></ytb-icon>
            </button-ytb>
            <button-ytb type={'r16'} shape="rectangle" color="transparent" size="medium" style={{padding: '2px' }}>
              <txt-ytb type={'title'}>Reply</txt-ytb>
            </button-ytb>
          </div>
        </div>
      </div>
    );
  }
}
