import { Component, h } from '@stencil/core';

@Component({
  tag: 'ytb-search-bar',
  styleUrl: 'search-bar.scss',
  shadow: true
})
export class SearchBarYTB {
  render() {
    return (
      <div>
        <ytb-input type={'search'} placeholder={'Search'}></ytb-input>
        <button-ytb type={'right-r16-solid-border'} shape="rectangle" color="grey" size="big">
          <ytb-icon type={'bi bi-search'} color={'white'} style={{fontSize:'40'}}></ytb-icon>
        </button-ytb>
      </div>
    );
  }
}
