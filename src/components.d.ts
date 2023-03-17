/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { TColor, TShape, TSize } from "./youtube/1. Atoms/button/button";
export { TColor, TShape, TSize } from "./youtube/1. Atoms/button/button";
export namespace Components {
    interface BtnGeneral {
        "color": string;
        "label": string;
    }
    interface ButtonYtb {
        "color": TColor;
        "shape": TShape;
        "size": TSize;
        "type": string;
    }
    interface ComContainer {
        "commentInfos": { avatar: string; author: string; content: string; like: string; posted: string; };
    }
    interface ComplimentPerso {
        "adjective": string;
        "name": string;
    }
    interface ImgAnnotated {
        "time": string;
        "url": string;
    }
    interface ImgYtb {
        "role": string;
        "url": string;
    }
    interface ListCol {
    }
    interface LogoYtb {
    }
    interface MyRating {
        "color": string;
        "maxValue": number;
        "value": number;
    }
    interface NavYtb {
    }
    interface PlayerPage {
        "Comments": { avatar: string; author: string; content: string; like: string; dislike: string; posted: string; }[];
        "VideoList": { url: string; title: string; author: string; views: string; posted: string; tags: string[]; duration: string; }[];
        "videoAuthor": { name: string; subscribers: string; avatar: string; };
        "videoPlayed": { title: string; url: string; like: string; };
    }
    interface RightSide {
        "videoInfos": { url: string; title: string; author: string; views: string; posted: string; tags: string[]; duration: string; }[];
    }
    interface SliderChips {
        "tags": string[];
    }
    interface TxtYtb {
        "type": string;
    }
    interface VideoCard {
        "videoInfos": { url: string; title: string; author: string; views: string; posted: string; tags: string[]; duration: string; };
    }
    interface VideoPlayer {
        "Comments": { avatar: string; author: string; content: string; like: string; dislike: string; posted: string; }[];
        "videoAuthor": { name: string; subscribers: string; avatar: string; };
        "videoPlayed": { title: string; url: string; like: string; };
    }
    interface YtbIcon {
        "color": string;
        "type": string;
    }
    interface YtbInput {
        "placeholder": string;
        "type": string;
    }
    interface YtbSearchBar {
    }
}
export interface SliderChipsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLSliderChipsElement;
}
declare global {
    interface HTMLBtnGeneralElement extends Components.BtnGeneral, HTMLStencilElement {
    }
    var HTMLBtnGeneralElement: {
        prototype: HTMLBtnGeneralElement;
        new (): HTMLBtnGeneralElement;
    };
    interface HTMLButtonYtbElement extends Components.ButtonYtb, HTMLStencilElement {
    }
    var HTMLButtonYtbElement: {
        prototype: HTMLButtonYtbElement;
        new (): HTMLButtonYtbElement;
    };
    interface HTMLComContainerElement extends Components.ComContainer, HTMLStencilElement {
    }
    var HTMLComContainerElement: {
        prototype: HTMLComContainerElement;
        new (): HTMLComContainerElement;
    };
    interface HTMLComplimentPersoElement extends Components.ComplimentPerso, HTMLStencilElement {
    }
    var HTMLComplimentPersoElement: {
        prototype: HTMLComplimentPersoElement;
        new (): HTMLComplimentPersoElement;
    };
    interface HTMLImgAnnotatedElement extends Components.ImgAnnotated, HTMLStencilElement {
    }
    var HTMLImgAnnotatedElement: {
        prototype: HTMLImgAnnotatedElement;
        new (): HTMLImgAnnotatedElement;
    };
    interface HTMLImgYtbElement extends Components.ImgYtb, HTMLStencilElement {
    }
    var HTMLImgYtbElement: {
        prototype: HTMLImgYtbElement;
        new (): HTMLImgYtbElement;
    };
    interface HTMLListColElement extends Components.ListCol, HTMLStencilElement {
    }
    var HTMLListColElement: {
        prototype: HTMLListColElement;
        new (): HTMLListColElement;
    };
    interface HTMLLogoYtbElement extends Components.LogoYtb, HTMLStencilElement {
    }
    var HTMLLogoYtbElement: {
        prototype: HTMLLogoYtbElement;
        new (): HTMLLogoYtbElement;
    };
    interface HTMLMyRatingElement extends Components.MyRating, HTMLStencilElement {
    }
    var HTMLMyRatingElement: {
        prototype: HTMLMyRatingElement;
        new (): HTMLMyRatingElement;
    };
    interface HTMLNavYtbElement extends Components.NavYtb, HTMLStencilElement {
    }
    var HTMLNavYtbElement: {
        prototype: HTMLNavYtbElement;
        new (): HTMLNavYtbElement;
    };
    interface HTMLPlayerPageElement extends Components.PlayerPage, HTMLStencilElement {
    }
    var HTMLPlayerPageElement: {
        prototype: HTMLPlayerPageElement;
        new (): HTMLPlayerPageElement;
    };
    interface HTMLRightSideElement extends Components.RightSide, HTMLStencilElement {
    }
    var HTMLRightSideElement: {
        prototype: HTMLRightSideElement;
        new (): HTMLRightSideElement;
    };
    interface HTMLSliderChipsElement extends Components.SliderChips, HTMLStencilElement {
    }
    var HTMLSliderChipsElement: {
        prototype: HTMLSliderChipsElement;
        new (): HTMLSliderChipsElement;
    };
    interface HTMLTxtYtbElement extends Components.TxtYtb, HTMLStencilElement {
    }
    var HTMLTxtYtbElement: {
        prototype: HTMLTxtYtbElement;
        new (): HTMLTxtYtbElement;
    };
    interface HTMLVideoCardElement extends Components.VideoCard, HTMLStencilElement {
    }
    var HTMLVideoCardElement: {
        prototype: HTMLVideoCardElement;
        new (): HTMLVideoCardElement;
    };
    interface HTMLVideoPlayerElement extends Components.VideoPlayer, HTMLStencilElement {
    }
    var HTMLVideoPlayerElement: {
        prototype: HTMLVideoPlayerElement;
        new (): HTMLVideoPlayerElement;
    };
    interface HTMLYtbIconElement extends Components.YtbIcon, HTMLStencilElement {
    }
    var HTMLYtbIconElement: {
        prototype: HTMLYtbIconElement;
        new (): HTMLYtbIconElement;
    };
    interface HTMLYtbInputElement extends Components.YtbInput, HTMLStencilElement {
    }
    var HTMLYtbInputElement: {
        prototype: HTMLYtbInputElement;
        new (): HTMLYtbInputElement;
    };
    interface HTMLYtbSearchBarElement extends Components.YtbSearchBar, HTMLStencilElement {
    }
    var HTMLYtbSearchBarElement: {
        prototype: HTMLYtbSearchBarElement;
        new (): HTMLYtbSearchBarElement;
    };
    interface HTMLElementTagNameMap {
        "btn-general": HTMLBtnGeneralElement;
        "button-ytb": HTMLButtonYtbElement;
        "com-container": HTMLComContainerElement;
        "compliment-perso": HTMLComplimentPersoElement;
        "img-annotated": HTMLImgAnnotatedElement;
        "img-ytb": HTMLImgYtbElement;
        "list-col": HTMLListColElement;
        "logo-ytb": HTMLLogoYtbElement;
        "my-rating": HTMLMyRatingElement;
        "nav-ytb": HTMLNavYtbElement;
        "player-page": HTMLPlayerPageElement;
        "right-side": HTMLRightSideElement;
        "slider-chips": HTMLSliderChipsElement;
        "txt-ytb": HTMLTxtYtbElement;
        "video-card": HTMLVideoCardElement;
        "video-player": HTMLVideoPlayerElement;
        "ytb-icon": HTMLYtbIconElement;
        "ytb-input": HTMLYtbInputElement;
        "ytb-search-bar": HTMLYtbSearchBarElement;
    }
}
declare namespace LocalJSX {
    interface BtnGeneral {
        "color"?: string;
        "label"?: string;
    }
    interface ButtonYtb {
        "color"?: TColor;
        "shape"?: TShape;
        "size"?: TSize;
        "type"?: string;
    }
    interface ComContainer {
        "commentInfos"?: { avatar: string; author: string; content: string; like: string; posted: string; };
    }
    interface ComplimentPerso {
        "adjective"?: string;
        "name"?: string;
    }
    interface ImgAnnotated {
        "time"?: string;
        "url"?: string;
    }
    interface ImgYtb {
        "role"?: string;
        "url"?: string;
    }
    interface ListCol {
    }
    interface LogoYtb {
    }
    interface MyRating {
        "color"?: string;
        "maxValue"?: number;
        "value"?: number;
    }
    interface NavYtb {
    }
    interface PlayerPage {
        "Comments"?: { avatar: string; author: string; content: string; like: string; dislike: string; posted: string; }[];
        "VideoList"?: { url: string; title: string; author: string; views: string; posted: string; tags: string[]; duration: string; }[];
        "videoAuthor"?: { name: string; subscribers: string; avatar: string; };
        "videoPlayed"?: { title: string; url: string; like: string; };
    }
    interface RightSide {
        "videoInfos"?: { url: string; title: string; author: string; views: string; posted: string; tags: string[]; duration: string; }[];
    }
    interface SliderChips {
        "onSelected"?: (event: SliderChipsCustomEvent<string>) => void;
        "tags"?: string[];
    }
    interface TxtYtb {
        "type"?: string;
    }
    interface VideoCard {
        "videoInfos"?: { url: string; title: string; author: string; views: string; posted: string; tags: string[]; duration: string; };
    }
    interface VideoPlayer {
        "Comments"?: { avatar: string; author: string; content: string; like: string; dislike: string; posted: string; }[];
        "videoAuthor"?: { name: string; subscribers: string; avatar: string; };
        "videoPlayed"?: { title: string; url: string; like: string; };
    }
    interface YtbIcon {
        "color"?: string;
        "type"?: string;
    }
    interface YtbInput {
        "placeholder"?: string;
        "type"?: string;
    }
    interface YtbSearchBar {
    }
    interface IntrinsicElements {
        "btn-general": BtnGeneral;
        "button-ytb": ButtonYtb;
        "com-container": ComContainer;
        "compliment-perso": ComplimentPerso;
        "img-annotated": ImgAnnotated;
        "img-ytb": ImgYtb;
        "list-col": ListCol;
        "logo-ytb": LogoYtb;
        "my-rating": MyRating;
        "nav-ytb": NavYtb;
        "player-page": PlayerPage;
        "right-side": RightSide;
        "slider-chips": SliderChips;
        "txt-ytb": TxtYtb;
        "video-card": VideoCard;
        "video-player": VideoPlayer;
        "ytb-icon": YtbIcon;
        "ytb-input": YtbInput;
        "ytb-search-bar": YtbSearchBar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "btn-general": LocalJSX.BtnGeneral & JSXBase.HTMLAttributes<HTMLBtnGeneralElement>;
            "button-ytb": LocalJSX.ButtonYtb & JSXBase.HTMLAttributes<HTMLButtonYtbElement>;
            "com-container": LocalJSX.ComContainer & JSXBase.HTMLAttributes<HTMLComContainerElement>;
            "compliment-perso": LocalJSX.ComplimentPerso & JSXBase.HTMLAttributes<HTMLComplimentPersoElement>;
            "img-annotated": LocalJSX.ImgAnnotated & JSXBase.HTMLAttributes<HTMLImgAnnotatedElement>;
            "img-ytb": LocalJSX.ImgYtb & JSXBase.HTMLAttributes<HTMLImgYtbElement>;
            "list-col": LocalJSX.ListCol & JSXBase.HTMLAttributes<HTMLListColElement>;
            "logo-ytb": LocalJSX.LogoYtb & JSXBase.HTMLAttributes<HTMLLogoYtbElement>;
            "my-rating": LocalJSX.MyRating & JSXBase.HTMLAttributes<HTMLMyRatingElement>;
            "nav-ytb": LocalJSX.NavYtb & JSXBase.HTMLAttributes<HTMLNavYtbElement>;
            "player-page": LocalJSX.PlayerPage & JSXBase.HTMLAttributes<HTMLPlayerPageElement>;
            "right-side": LocalJSX.RightSide & JSXBase.HTMLAttributes<HTMLRightSideElement>;
            "slider-chips": LocalJSX.SliderChips & JSXBase.HTMLAttributes<HTMLSliderChipsElement>;
            "txt-ytb": LocalJSX.TxtYtb & JSXBase.HTMLAttributes<HTMLTxtYtbElement>;
            "video-card": LocalJSX.VideoCard & JSXBase.HTMLAttributes<HTMLVideoCardElement>;
            "video-player": LocalJSX.VideoPlayer & JSXBase.HTMLAttributes<HTMLVideoPlayerElement>;
            "ytb-icon": LocalJSX.YtbIcon & JSXBase.HTMLAttributes<HTMLYtbIconElement>;
            "ytb-input": LocalJSX.YtbInput & JSXBase.HTMLAttributes<HTMLYtbInputElement>;
            "ytb-search-bar": LocalJSX.YtbSearchBar & JSXBase.HTMLAttributes<HTMLYtbSearchBarElement>;
        }
    }
}
