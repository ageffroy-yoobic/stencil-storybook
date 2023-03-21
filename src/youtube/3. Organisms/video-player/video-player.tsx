import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'video-player',
  styleUrl: 'video-player.scss',
  shadow: true
})
export class PlayerVideoYTB {
  @Prop() videoPlayed = {
    title: 'Piano Ghibli Collection 1',
    url: 'https://i.ytimg.com/vi/HGl75kurxok/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFTyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhmIGYoZjAP&rs=AOn4CLADTwOQRan2heX1fz9sfS6vjph2Dg',
    like: '121K'
  };
  @Prop() videoAuthor = {
    name: 'Vangakuz ヴァンガクズ',
    subscribers: '17.1K',
    avatar: 'https://yt3.ggpht.com/T_iyoxzgRUQM1JB4_9KsfthcgDAEuGN9FxE3HO8_yJ-ixu3ZENIEDlje_xaYIm3i9soTwrVr=s48-c-k-c0x00ffffff-no-nd-rj'
  };
  @Prop() Comments = [
    {
      avatar:
        'https://i.ytimg.com/vi/HGl75kurxok/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFTyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhmIGYoZjAP&rs=AOn4CLADTwOQRan2heX1fz9sfS6vjph2Dg',
      author: 'Author',
      content:
        'Rewatched the movie for the first time in 15 years. Thankful to even be alive still to view it. Audrey and Tierson’s score are a bit too much magic for the film to fully utilize, but that’s okay. A bit boring, still one of my favorites, but the music can never be praised enough.',
      like: '2',
      dislike: '',
      posted: '1 mois'
    },
    {
      avatar:
        'https://i.ytimg.com/vi/HGl75kurxok/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFTyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhmIGYoZjAP&rs=AOn4CLADTwOQRan2heX1fz9sfS6vjph2Dg',
      author: 'Author',
      content:
        'Rewatched the movie for the first time in 15 years. Thankful to even be alive still to view it. Audrey and Tierson’s score are a bit too much magic for the film to fully utilize, but that’s okay. A bit boring, still one of my favorites, but the music can never be praised enough.',
      like: '2',
      dislike: '',
      posted: '1 mois'
    }
  ];
  renderReactions() {
    return (
      <div class={'video-reaction'}>
        <div class={'likes-button'}>
          <button-ytb type={'left-r16-right-border'} shape="rectangle" size="medium-plus" color="grey">
            <ytb-icon type={'bi bi-hand-thumbs-up'}></ytb-icon>
            {this.videoPlayed.like}
          </button-ytb>
          <button-ytb type={'right-r16-left-border'} shape="rectangle" size="medium-plus" color="grey">
            <ytb-icon type={'bi bi-hand-thumbs-down'}></ytb-icon>
          </button-ytb>
        </div>
        <button-ytb type={'r16'} shape="rectangle" size="medium-plus" color="black">
          <ytb-icon type={'bi bi-reply'}></ytb-icon>Share
        </button-ytb>
        <button-ytb type={'r16'} shape="rectangle" size="medium-plus" color="black">
          <ytb-icon type={'bi bi-download'}></ytb-icon>Download
        </button-ytb>
        <button-ytb type={'r16'} shape="rectangle" size="medium-plus" color="black">
          <ytb-icon type={'bi bi-piggy-bank'}></ytb-icon>Thanks
        </button-ytb>
        <button-ytb type={'r16 secondary'} shape="rectangle" size="medium-plus" color="black">
          <ytb-icon type={'bi bi-scissors'}></ytb-icon>Clip
        </button-ytb>
        <button-ytb type={'r16'} shape="rectangle" size="medium-plus" color="black">
          <ytb-icon type={'bi bi-three-dots'}></ytb-icon>
        </button-ytb>
      </div>
    );
  }
  renderDescription() {
    return (
      <div class={'description'}>
        <button-ytb type={'r8'} shape="rectangle" size="big" color="grey" style={{ padding: '0 5px', height: 'max-content', width: '100%' }}>
          <div class={'more'}>
            <div>1,2 M de vues il y a 8 ans</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
              <p>Trilha do Filme Amélie Poulain</p>
              <p>Plus</p>
            </div>
          </div>
        </button-ytb>
      </div>
    );
  }

  renderComments() {
    return (
      <div class={'comments-container'}>
        <div class={'com-number-container'}>
          <div class={'com-number'}>
            {this.Comments.length}{' '}
            <txt-ytb bold={'normal'} color="white">
              Comments
            </txt-ytb>
          </div>
          <div class={'filter-com'}>
            <ytb-icon type={'bi bi-filter-left'}></ytb-icon>
            <txt-ytb bold={'normal'} color="white">
              Sort by
            </txt-ytb>
          </div>
        </div>
        <div class={'add-com'}>
          <img-ytb src={'https://yt3.ggpht.com/ytc/AL5GRJW963eXLYQQTSDq7yvw_5OmeVvZbO1lP8RlMKNFYxkcK6dRtfbpiewhNoeRF2bB=s88-c-k-c0x00ffffff-no-rj-mo'}></img-ytb>
          <ytb-input style={{ width: '100%' }} type={'comment'} placeholder={'Add a comment...'}></ytb-input>
        </div>
        <list-col class={'comments-map'}>
          {this.Comments.map((comment) => (
            <com-container commentInfos={comment}></com-container>
          ))}
        </list-col>
      </div>
    );
  }

  render() {
    return (
      <div class={'body'}>
        <div class="video-player">
          <img-ytb src={this.videoPlayed.url}></img-ytb>
          <div class="middle">
            <ytb-icon type={'bi bi-youtube'}></ytb-icon>
          </div>
        </div>
        <div class={'video-info'} style={{ marginTop: '12px' }}>
          <txt-ytb bold={'bold'} color="white" style={{ fontSize: '20px' }}>
            {this.videoPlayed.title}
          </txt-ytb>
          <div class={'details'}>
            <div class={'author-container'}>
              <img-ytb src={this.videoAuthor.avatar}></img-ytb>
              <div class={'author-info'}>
                <txt-ytb bold={'bold'} color="white">
                  {this.videoAuthor.name}
                </txt-ytb>
                <txt-ytb bold={'normal'} color="grey">
                  {this.videoAuthor.subscribers}
                </txt-ytb>
              </div>
              <button-ytb type={'r16'} shape="rectangle" size="medium-plus" color="white" style={{ margin: '0 10px' }}>
                Subscribe
              </button-ytb>
            </div>
            {this.renderReactions()}
          </div>
          {this.renderDescription()}
        </div>
        {this.renderComments()}
      </div>
    );
  }
}
