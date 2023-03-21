import { h } from '@stencil/core';

export default {
  title: 'Atoms/Button',
  component: 'button-ytb',
  parameters: {
    viewmode: 'story'
  }
};

export const Button = () => (
  <div style={{ padding: '20px', width: '100%', height: '100%', display: 'flex', flexDirection: 'row' }}>
    <button-ytb> default</button-ytb>
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignContent: 'space-between' }}>
      <button-ytb shape="round" color="black" size="small">
        <p>abc</p>
      </button-ytb>
      <button-ytb shape="round" color="black" size="medium">
        <span>a</span>
      </button-ytb>
      <button-ytb shape="round" color="black" size="medium-plus">
        <span>a</span>
      </button-ytb>
      <button-ytb shape="round" color="black" size="big">
        <span>a</span>
      </button-ytb>
      <button-ytb shape="round" color="transparent" size="big">
        <span>a</span>
      </button-ytb>

      <button-ytb shape="round" color="black" size="big">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mic-fill" viewBox="0 0 16 16">
          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
        </svg>
      </button-ytb>
    </div>
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <button-ytb type={'r8'} shape="rectangle" color="grey" size="small">
        Secondary radius 8
      </button-ytb>
      <button-ytb type={'r8'} shape="rectangle" color="grey" size="medium">
        Secondary radius 8
      </button-ytb>
      <button-ytb type={'r8'} shape="rectangle" color="grey" size="medium-plus">
        Secondary radius 8
      </button-ytb>
      <button-ytb type={'r8'} shape="rectangle" color="grey" size="big">
        Secondary radius 8
      </button-ytb>
      <button-ytb type={'r8'} shape="rectangle" color="white" size="big">
        Primary radius 8
      </button-ytb>
    </div>
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <button-ytb type={'r16'} shape="rectangle" color="grey" size="small">
        Secondary radius 16
      </button-ytb>
      <button-ytb type={'r16'} shape="rectangle" color="grey" size="medium">
        Secondary radius 16
      </button-ytb>
      <button-ytb type={'r16'} shape="rectangle" color="grey" size="medium-plus">
        Secondary radius 16
      </button-ytb>
      <button-ytb type={'r16'} shape="rectangle" color="grey" size="big">
        Secondary radius 16
      </button-ytb>
      <button-ytb type={'r16'} shape="rectangle" color="white" size="big">
        Primary radius 16
      </button-ytb>
      <button-ytb type={'r16'} shape="rectangle" size="medium-plus" color="black">
        <ytb-icon type={'bi bi-reply'}></ytb-icon>
        <span>Share</span>
      </button-ytb>
    </div>
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <button-ytb type={'right-r16-solid-border'} shape="rectangle" color="grey" size="big">
        r16-right-solid-border
      </button-ytb>
      <button-ytb type={'left-r16-right-border'} shape="rectangle" color="grey" size="medium-plus">
        left-r16-right-border
      </button-ytb>
      <button-ytb type={'right-r16-left-border'} shape="rectangle" color="grey" size="medium-plus">
        right-r16-left-border
      </button-ytb>
    </div>
  </div>
);
