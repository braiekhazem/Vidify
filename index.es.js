(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('#vf-control-button-play-button-container{display:flex;align-items:center;justify-content:center;width:15px;height:15px;cursor:pointer}.vf-control-button-play-button{display:inline-block;position:absolute;width:15px;height:15px;background:var(--vf-color-white);transition:clip-path .3s ease}.vf-control-button-play-button-before{clip-path:polygon(0 0,50% 25%,50% 75%,0% 100%)}.vf-control-button-play-button-after{clip-path:polygon(50% 25%,100% 50%,100% 50%,50% 75%)}.vf-control-button-pause .vf-control-button-play-button-before{clip-path:polygon(0 0,30% 0,30% 100%,0% 100%)}.vf-control-button-pause .vf-control-button-play-button-after{clip-path:polygon(70% 0,100% 0,100% 100%,70% 100%)}:root{--width-slide-duration: 10%}.vf-progress-bar{position:absolute;left:0;top:0;width:100%;background-color:var(--vf-progress-bar-bg);height:4px;border-radius:2px;-webkit-border-radius:2px;-moz-border-radius:2px;-ms-border-radius:2px;-o-border-radius:2px;transition:all .2s;-webkit-transition:all .2s;-moz-transition:all .2s;-ms-transition:all .2s;-o-transition:all .2s;cursor:pointer}.vf-progress-bar:hover{height:7px;top:-1px;border-radius:10px;-webkit-border-radius:10px;-moz-border-radius:10px;-ms-border-radius:10px;-o-border-radius:10px}.vf-progress-bar:hover .vf-progress-bar-play-progress:before{opacity:1}.vf-progress-bar-overlay{position:absolute;top:-10px;left:0;width:100%;height:15px}.vf-progress-bar-load-progress,.vf-progress-bar-play-progress{position:absolute;left:0;bottom:0;height:100%;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}.vf-progress-bar-play-progress{z-index:34;background-color:var(--vf-color-primary);width:20%}.vf-progress-bar-play-progress:before{content:"";position:absolute;width:13px;height:13px;background-color:var(--vf-color-primary);opacity:0;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;right:0;top:0;transform:translate(50%,-21%);-webkit-transform:translate(50%,-21%);-moz-transform:translate(50%,-21%);-ms-transform:translate(50%,-21%);-o-transform:translate(50%,-21%);transition:all .2;-webkit-transition:all .2;-moz-transition:all .2;-ms-transition:all .2;-o-transition:all .2}.vf-progress-bar-hovered-duration{position:absolute;top:-30px;transform:translate(-50%);background:var(--vf-color-white);font-size:13px;font-weight:600;z-index:250;padding:2px 4px;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);color:var(--vf-color-primary)}.vf-progress-bar-hovered-bar{position:absolute;top:0;height:100%;opacity:1;background-color:#ffffff80;transition:opacity .25s cubic-bezier(0,0,.2,1);-webkit-transition:opacity .25s cubic-bezier(0,0,.2,1);-moz-transition:opacity .25s cubic-bezier(0,0,.2,1);-ms-transition:opacity .25s cubic-bezier(0,0,.2,1);-o-transition:opacity .25s cubic-bezier(0,0,.2,1)}.vf-progress-bar .vf-progress-bar-load-progress{z-index:33;background-color:var(--vf-progress-bar-load-bg);width:30%}.drag-cr{height:15px;width:15px;border-radius:50%;background-color:var(--vf-color-primary);position:absolute;bottom:33%;left:var(--vf-color-primary, 0%);transform:translate(-50%,15%);z-index:1;opacity:1;transition:opacity .2s ease 0s,box-shadow .3s ease 0s}.drag-cr:before{content:" ";display:inline-block;background-color:var(--vf-color-primary);height:24px;width:24px;border-radius:50%;opacity:0;transition:opacity .2s ease 0s;filter:opacity(.5);transform:translate(-18%,-18%)}.vf-video-wrapper{position:relative;background-color:var(--vf-color-black);overflow:hidden;margin:0;padding:0;box-sizing:border-box;height:fit-content;display:flex;align-items:center;justify-content:center;transition:all .2s;-webkit-transition:all .2s;-moz-transition:all .2s;-ms-transition:all .2s;-o-transition:all .2s}.vf-video-wrapper-gradient-bottom{height:98px;width:100%;position:absolute;bottom:0;opacity:1!important;transition:all .3s ease;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom}.vf-video-wrapper-gradient-top{top:0;transform:rotate(180deg);-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg)}.vf-video-wrapper-gradient-bottom-hidden{opacity:0!important}.vf-video-wrapper:not(.vf-video-hidden):hover{transition-delay:10s}.vf-video-wrapper:not(.vf-video-hidden):hover .vf-control-bar{transform:none;-webkit-transform:none;-moz-transform:none;-ms-transform:none;-o-transform:none}.vf-video-wrapper:not(.vf-video-hidden):hover .vf-video-annotation{opacity:1}.vf-video-wrapper:not(.vf-video-hidden):hover .vf-video-wrapper-gradient-bottom{opacity:1!important}.vf-video-block{width:100%}.vf-video-rounded{border-radius:var(--vf-border-radius);-webkit-border-radius:var(--vf-border-radius);-moz-border-radius:var(--vf-border-radius);-ms-border-radius:var(--vf-border-radius);-o-border-radius:var(--vf-border-radius)}.vf-video-loading-icon{animation:icon-spin 2s infinite linear;-webkit-animation:icon-spin 2s infinite linear}.vf-video-hidden{cursor:none}.vf-video-hidden .vf-control-bar{transform:translateY(100%)!important;-webkit-transform:translateY(100%)!important;-moz-transform:translateY(100%)!important;-ms-transform:translateY(100%)!important;-o-transform:translateY(100%)!important}.vf-video-hidden .vf-video-wrapper-gradient-bottom,.vf-video-hidden .vf-video-annotation{opacity:0!important}@keyframes icon-spin{0%{transform:translate(-50%,-50%) rotate(0);-webkit-transform:translate(-50%,-50%) rotate(0deg);-moz-transform:translate(-50%,-50%) rotate(0deg);-ms-transform:translate(-50%,-50%) rotate(0deg);-o-transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(359deg);-webkit-transform:translate(-50%,-50%) rotate(359deg);-moz-transform:translate(-50%,-50%) rotate(359deg);-ms-transform:translate(-50%,-50%) rotate(359deg);-o-transform:translate(-50%,-50%) rotate(359deg)}}.vf-center{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%)}.vf-play-button{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);color:#cacaca;background-color:#00000080;width:60px;height:60px;display:flex;align-items:center;justify-content:center;border-radius:50%;display:none;animation:.5s linear 0s 1 normal forwards running play-animation;-webkit-animation:.5s linear 0s 1 normal forwards running play-animation;transition:transform .2s ease 0s,background-color .2s ease 0s;-webkit-transition:transform .2s ease 0s,background-color .2s ease 0s;-moz-transition:transform .2s ease 0s,background-color .2s ease 0s;-ms-transition:transform .2s ease 0s,background-color .2s ease 0s;-o-transition:transform .2s ease 0s,background-color .2s ease 0s}@media screen and (max-width: 500px){.vf-play-button{width:50px;height:50px}.vf-play-button svg{width:30px;height:30px}}@media screen and (max-width: 400px){.vf-play-button{max-width:40px;max-height:40px}.vf-play-button svg{width:25px;height:25px}}#vf-play-button-initial{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);width:80px;height:80px;color:#cacaca;background-color:var(--vf-color-primary);display:flex;align-items:center;justify-content:center;border-radius:50%;cursor:pointer;animation:none;-webkit-animation:none;border:2px solid rgba(255,255,255,.2)}#vf-play-button-initial:hover{transform:translate(-50%,-50%) scale(1.2);-webkit-transform:translate(-50%,-50%) scale(1.2);-moz-transform:translate(-50%,-50%) scale(1.2);-ms-transform:translate(-50%,-50%) scale(1.2);-o-transform:translate(-50%,-50%) scale(1.2)}@media screen and (max-width: 500px){#vf-play-button-initial{width:60px;height:60px}#vf-play-button-initial svg{width:30px;height:30px}}@media screen and (max-width: 400px){#vf-play-button-initial{max-width:50px;max-height:50px}#vf-play-button-initial svg{width:25px;height:25px}}@keyframes play-animation{0%{opacity:1}to{opacity:0;transform:translate(-50%,-50%) scale(1.5);-webkit-transform:translate(-50%,-50%) scale(1.5);-moz-transform:translate(-50%,-50%) scale(1.5);-ms-transform:translate(-50%,-50%) scale(1.5);-o-transform:translate(-50%,-50%) scale(1.5)}}.vf-arrow-navigation-button-disabled{cursor:not-allowed;pointer-events:none}.vf-arrow-navigation-button-disabled svg path{fill:#bababad6}.vf-speed-button{position:relative;overflow:visible}.vf-speed-button-speed-list{position:absolute;top:0;left:0;display:flex;flex-direction:column;align-items:center;z-index:200;background-color:red;color:#fff;transform:translate(-50%,calc(-100% - 40px));-webkit-transform:translate(-50%,calc(-100% - 40px));-moz-transform:translate(-50%,calc(-100% - 40px));-ms-transform:translate(-50%,calc(-100% - 40px));-o-transform:translate(-50%,calc(-100% - 40px))}:root{--vf-font-familly: "Raleway", sans-serif;--vf-prefix-class: "vf";--vf-color-white: #fff;--vf-color-black: #000;--vf-color-primary: #5f55ee;--vf-color-primary-50: #fcf9ff;--vf-color-primary-100: #f5eefa;--vf-color-primary-200: #e0ccef;--vf-color-primary-300: #c198e0;--vf-color-primary-400: #ad76d5;--vf-color-primary-500: #9854cb;--vf-color-primary-600: #7a43a2;--vf-color-primary-700: #5b327a;--vf-color-primary-800: #3d2251;--vf-color-primary-900: #301942;--vf-color-primary-950: #1e1129;--vf-color-secondary: #fdb022;--vf-color-secondary-50: #fffcf5;--vf-color-secondary-100: #fffaeb;--vf-color-secondary-200: #fef0c7;--vf-color-secondary-300: #fedf89;--vf-color-secondary-400: #fec84b;--vf-color-secondary-500: #fdb022;--vf-color-secondary-600: #f79009;--vf-color-secondary-700: #dc6803;--vf-color-secondary-800: #b54708;--vf-color-secondary-900: #92330a;--vf-color-secondary-950: #6c2304;--vf-color-red: #ff4141;--vf-color-red-50: #fff4f4;--vf-color-red-100: #ffe8e8;--vf-color-red-200: #ffd4d4;--vf-color-red-300: #ffb4b4;--vf-color-red-400: #ff8383;--vf-color-red-500: #ff4141;--vf-color-red-600: #ff1616;--vf-color-red-700: #d80000;--vf-color-red-800: #b50000;--vf-color-red-900: #7e040e;--vf-color-red-950: #64020a;--vf-color-gray: #9d9d9d;--vf-color-gray-50: #ffffff;--vf-color-gray-100: #f0f0f0;--vf-color-gray-200: #dadada;--vf-color-gray-300: #cecece;--vf-color-gray-400: #b6b6b6;--vf-color-gray-500: #9d9d9d;--vf-color-gray-600: #6a6a6a;--vf-color-gray-700: #545454;--vf-color-gray-800: #373737;--vf-color-gray-900: #1c1c1c;--vf-color-gray-950: #000000;--vf-color-green: #29b58b;--vf-color-green-50: #f1fffb;--vf-color-green-100: #e2fff6;--vf-color-green-200: #ccfff0;--vf-color-green-300: #a3edd7;--vf-color-green-400: #52c8a4;--vf-color-green-500: #29b58b;--vf-color-green-600: #00a372;--vf-color-green-700: #00825b;--vf-color-green-800: #006346;--vf-color-green-900: #00412e;--vf-color-green-950: #002117;--vf-color-orange: #29b58b;--vf-color-orange-50: #fffdf6;--vf-color-orange-100: #fffaea;--vf-color-orange-200: #fff5d4;--vf-color-orange-300: #ffecaa;--vf-color-orange-400: #ffe27f;--vf-color-orange-500: #ffcf2b;--vf-color-orange-600: #e6ba27;--vf-color-orange-700: #bf9b20;--vf-color-orange-800: #806716;--vf-color-orange-900: #4d3f0d;--vf-color-orange-950: #342a08;--vf-color-orange-1000: #fa8900;--vf-color-ashgrey: #b3afa1;--vf-color-ashgrey-50: #fdfdfc;--vf-color-ashgrey-100: #fbfbf9;--vf-color-ashgrey-200: #f7f6f2;--vf-color-ashgrey-300: #f0efea;--vf-color-ashgrey-400: #dddad0;--vf-color-ashgrey-500: #b3afa1;--vf-color-ashgrey-600: #858071;--vf-color-ashgrey-700: #5e5267;--vf-color-ashgrey-800: #676252;--vf-color-ashgrey-900: #39321d;--vf-color-ashgrey-950: #282210;--vf-color-snow: #b3afa1;--vf-color-snow-50: #fdfcfd;--vf-color-snow-100: #faf9fb;--vf-color-snow-200: #f5f2f7;--vf-color-snow-300: #edeaf0;--vf-color-snow-400: #d7d0dd;--vf-color-snow-500: #aba1b3;--vf-color-snow-600: #7c7185;--vf-color-snow-700: #5e5267;--vf-color-snow-800: #463454;--vf-color-snow-900: #2d1d39;--vf-color-snow-950: #1e1028;--vf-color-gray-0: #fff;--vf-color-yellow-50: #ffb300;--vf-color-cyan-50: #00bcd4;--vf-color-blue-50: #2196f3;--vf-color-violet-50: #673ab7;--vf-color-info: #1677ff;--vf-color-success: #52c41a;--vf-color-warning: #faad14;--vf-color-error: #ff4d4f;--vf-control-bar-height: 48px;--vf-border-radius: 12px;--vf-progress-bar-bg: #fff3;--vf-progress-bar-load-bg: #fff6;--vf-progress-bar-play-bg: var(--vf-color-primary);--vf-sound-icon-size: 18px;--vf-sound-icon-color: #fff}.vf-video{max-width:100%;max-height:100%;min-height:100%;object-fit:contain;overflow:clip;overflow-clip-margin:clip}.vf-video-wrapper-fullscreen{border-radius:0;-webkit-border-radius:0;-moz-border-radius:0;-ms-border-radius:0;-o-border-radius:0}.vf-video-wrapper-fullscreen video{height:100%;width:100%}.vf-video-annotation{position:absolute;pointer-events:none;right:20px;top:20px;max-width:50px;max-height:50px;background:none}.vf-video-annotation *{max-width:100%;max-height:100%}@media screen and (max-width: 500px){.vf-video-annotation{max-width:40px;max-height:40px}}@media screen and (max-width: 400px){.vf-video-annotation{max-width:30px;max-height:30px}}.vf-video-error{background:var(--vf-color-white);color:var(--vf-color-red);position:absolute;left:20px;top:20px;padding:10px;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px}.vf-control-bar{position:absolute;z-index:100;height:var(--vf-control-bar-height);width:calc(100% - 24px);bottom:0;left:12px;color:var(--vf-color-white);padding-top:3px;opacity:1;display:flex;align-items:center;transition:all .2s;-webkit-transition:all .2s;-moz-transition:all .2s;-ms-transition:all .2s;-o-transition:all .2s}.vf-control-bar-left,.vf-control-bar-right{display:flex;align-items:center;white-space:nowrap;overflow:hidden}.vf-control-bar-left{flex:1}.vf-control-bar-volume-area{display:flex;align-items:center;column-gap:13px;padding-right:10px}.vf-control-bar-volume-area .vf-slider{width:80px;transition:all .2s;-webkit-transition:all .2s;-moz-transition:all .2s;-ms-transition:all .2s;-o-transition:all .2s}.vf-control-bar-volume-area .vf-slider .rc-slider-handle{border-color:var(--vf-color-primary)!important}.vf-control-bar-volume-area .vf-slider .rc-slider-handle:focus-visible{box-shadow:0 0 0 3px var(--vf-color-primary)!important}.vf-control-bar-volume-area .vf-slider .rc-slider-handle.rc-slider-handle-dragging{box-shadow:0 0 0 5px var(--vf-color-primary)!important;border-color:var(--vf-color-primary)}.vf-control-bar-volume-area .vf-slider .rc-slider-track{background-color:var(--vf-color-primary)}@media screen and (max-width: 500px){.vf-control-bar-volume-area{column-gap:4px}.vf-control-bar-volume-area .rc-slider{width:50px}}@media screen and (max-width: 350px){.vf-control-bar-volume-area .rc-slider{display:none}}.vf-control-bar-hidden{transform:translateY(100%);-webkit-transform:translateY(100%);-moz-transform:translateY(100%);-ms-transform:translateY(100%);-o-transform:translateY(100%)}.vf-control-bar-button{cursor:pointer;width:fit-content;padding:0 10px;height:30px;opacity:.9;display:inline-block;-webkit-transition:opacity .1s cubic-bezier(.4,0,1,1);transition:opacity .1s cubic-bezier(.4,0,1,1);overflow:hidden;display:flex;align-items:center;justify-content:center;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px;transition:all .4s;-webkit-transition:all .4s;-moz-transition:all .4s;-ms-transition:all .4s;-o-transition:all .4s}.vf-control-bar-button>*{line-height:0}.vf-control-bar-button:hover{background-color:var(--vf-color-primary)}@media only screen and (max-width: 630px){.vf-control-bar-button{padding:0 6px;height:25px}.vf-control-bar-button svg{width:20px;height:20px}.vf-control-bar-button .vf-duration{font-size:13px}.vf-control-bar-button .vf-arrow-navigation-button svg{width:14px;height:14px}.vf-control-bar-button .vf-control-button,.vf-control-bar-button .vf-control-button span{width:13px;height:13px}}@media screen and (max-width: 500px){.vf-control-bar-button{padding:0 5px;height:24px}.vf-control-bar-button svg{width:18px;height:18px}.vf-control-bar-button .vf-duration{font-size:12px}.vf-control-bar-button .vf-arrow-navigation-button svg{width:13px;height:13px}.vf-control-bar-button .vf-control-button,.vf-control-bar-button .vf-control-button span{width:12px;height:12px}}@media screen and (max-width: 400px){.vf-control-bar-button .vf-duration{display:none}}@media screen and (max-width: 350px){.vf-control-bar-button svg{width:18px;height:18px}.vf-control-bar-button .vf-duration,.vf-control-bar-button .vf-seconds-forward-button{display:none}}.vf-control-bar-button-tooltip{background-color:#0e0e0ee7!important;padding:0 8px!important;min-height:23px!important;width:fit-content!important;display:flex;align-items:center;justify-content:center;font-size:12px!important;text-transform:capitalize;font-weight:400!important;letter-spacing:.5px;border-radius:7px!important;-webkit-border-radius:5px!important;-moz-border-radius:7px!important;-ms-border-radius:7px!important;-o-border-radius:7px!important}.vf-control-bar-video-preview{display:flex;flex-direction:column;padding-bottom:10px}.vf-control-bar-video-preview>div:first-child{display:flex;align-items:center;justify-content:flex-end;padding:2px 0;height:25px}.vf-duration{font-size:15px;white-space:nowrap;color:var(--vf-color-white)}.rc-slider{position:relative;width:100%;height:14px;padding:5px 0;border-radius:6px;touch-action:none;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.rc-slider *{box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.rc-slider-rail{position:absolute;width:100%;height:4px;background-color:#e9e9e9;border-radius:6px}.rc-slider-track,.rc-slider-tracks{position:absolute;height:4px;background-color:#abe2fb;border-radius:6px}.rc-slider-track-draggable{z-index:1;box-sizing:content-box;background-clip:content-box;border-top:5px solid rgba(0,0,0,0);border-bottom:5px solid rgba(0,0,0,0);transform:translateY(-5px)}.rc-slider-handle{position:absolute;z-index:1;width:14px;height:14px;margin-top:-5px;background-color:#fff;border:solid 2px #96dbfa;border-radius:50%;cursor:pointer;cursor:-webkit-grab;cursor:grab;opacity:.8;touch-action:pan-x}.rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging{border-color:#57c5f7;box-shadow:0 0 0 5px #96dbfa}.rc-slider-handle:focus{outline:none;box-shadow:none}.rc-slider-handle:focus-visible{border-color:#2db7f5;box-shadow:0 0 0 3px #96dbfa}.rc-slider-handle-click-focused:focus{border-color:#96dbfa;box-shadow:unset}.rc-slider-handle:hover{border-color:#57c5f7}.rc-slider-handle:active{border-color:#57c5f7;box-shadow:0 0 5px #57c5f7;cursor:-webkit-grabbing;cursor:grabbing}.rc-slider-mark{position:absolute;top:18px;left:0;width:100%;font-size:12px}.rc-slider-mark-text{position:absolute;display:inline-block;color:#999;text-align:center;vertical-align:middle;cursor:pointer}.rc-slider-mark-text-active{color:#666}.rc-slider-step{position:absolute;width:100%;height:4px;background:transparent}.rc-slider-dot{position:absolute;bottom:-2px;width:8px;height:8px;vertical-align:middle;background-color:#fff;border:2px solid #e9e9e9;border-radius:50%;cursor:pointer}.rc-slider-dot-active{border-color:#96dbfa}.rc-slider-dot-reverse{margin-right:-4px}.rc-slider-disabled{background-color:#e9e9e9}.rc-slider-disabled .rc-slider-track{background-color:#ccc}.rc-slider-disabled .rc-slider-handle,.rc-slider-disabled .rc-slider-dot{background-color:#fff;border-color:#ccc;box-shadow:none;cursor:not-allowed}.rc-slider-disabled .rc-slider-mark-text,.rc-slider-disabled .rc-slider-dot{cursor:not-allowed!important}.rc-slider-vertical{width:14px;height:100%;padding:0 5px}.rc-slider-vertical .rc-slider-rail{width:4px;height:100%}.rc-slider-vertical .rc-slider-track{bottom:0;left:5px;width:4px}.rc-slider-vertical .rc-slider-track-draggable{border-top:0;border-bottom:0;border-right:5px solid rgba(0,0,0,0);border-left:5px solid rgba(0,0,0,0);transform:translate(-5px)}.rc-slider-vertical .rc-slider-handle{position:absolute;z-index:1;margin-top:0;margin-left:-5px;touch-action:pan-y}.rc-slider-vertical .rc-slider-mark{top:0;left:18px;height:100%}.rc-slider-vertical .rc-slider-step{width:4px;height:100%}.rc-slider-vertical .rc-slider-dot{margin-left:-2px}.rc-slider-tooltip-zoom-down-enter,.rc-slider-tooltip-zoom-down-appear,.rc-slider-tooltip-zoom-down-leave{display:block!important;animation-duration:.3s;animation-fill-mode:both;animation-play-state:paused}.rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,.rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active{animation-name:rcSliderTooltipZoomDownIn;animation-play-state:running}.rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active{animation-name:rcSliderTooltipZoomDownOut;animation-play-state:running}.rc-slider-tooltip-zoom-down-enter,.rc-slider-tooltip-zoom-down-appear{transform:scale(0);animation-timing-function:cubic-bezier(.23,1,.32,1)}.rc-slider-tooltip-zoom-down-leave{animation-timing-function:cubic-bezier(.755,.05,.855,.06)}@keyframes rcSliderTooltipZoomDownIn{0%{transform:scale(0);transform-origin:50% 100%;opacity:0}to{transform:scale(1);transform-origin:50% 100%}}@keyframes rcSliderTooltipZoomDownOut{0%{transform:scale(1);transform-origin:50% 100%}to{transform:scale(0);transform-origin:50% 100%;opacity:0}}.rc-slider-tooltip{position:absolute;top:-9999px;left:-9999px;visibility:visible;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.rc-slider-tooltip *{box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.rc-slider-tooltip-hidden{display:none}.rc-slider-tooltip-placement-top{padding:4px 0 8px}.rc-slider-tooltip-inner{min-width:24px;height:24px;padding:6px 2px;color:#fff;font-size:12px;line-height:1;text-align:center;text-decoration:none;background-color:#6c6c6c;border-radius:6px;box-shadow:0 0 4px #d9d9d9}.rc-slider-tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow{bottom:4px;left:50%;margin-left:-4px;border-width:4px 4px 0;border-top-color:#6c6c6c}:root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:.9;--rt-transition-show-delay:.15s;--rt-transition-closing-delay:.15s}.core-styles-module_tooltip__3vRRp{left:0;opacity:0;pointer-events:none;position:absolute;top:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{background:inherit;position:absolute}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay) ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay) ease-in}.styles-module_tooltip__mnnfp{border-radius:3px;font-size:90%;padding:8px 16px;width:max-content}.styles-module_arrow__K0L3T{height:8px;width:8px}[class*=react-tooltip__place-top]>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*=react-tooltip__place-right]>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*=react-tooltip__place-bottom]>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*=react-tooltip__place-left]>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}')),document.head.appendChild(o)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import * as b from "react";
import Ze, { useState as ue, useEffect as ee, useRef as Le, createContext as mn, useContext as hn, useCallback as pn, useImperativeHandle as gn, useLayoutEffect as yn, forwardRef as wn } from "react";
function bn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Jt = { exports: {} }, Lt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr;
function En() {
  if (mr)
    return Lt;
  mr = 1;
  var e = Ze, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, c, u) {
    var d, f = {}, w = null, y = null;
    u !== void 0 && (w = "" + u), c.key !== void 0 && (w = "" + c.key), c.ref !== void 0 && (y = c.ref);
    for (d in c)
      r.call(c, d) && !l.hasOwnProperty(d) && (f[d] = c[d]);
    if (s && s.defaultProps)
      for (d in c = s.defaultProps, c)
        f[d] === void 0 && (f[d] = c[d]);
    return { $$typeof: t, type: s, key: w, ref: y, props: f, _owner: o.current };
  }
  return Lt.Fragment = n, Lt.jsx = a, Lt.jsxs = a, Lt;
}
var It = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hr;
function xn() {
  return hr || (hr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ze, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), m = Symbol.iterator, h = "@@iterator";
    function E(i) {
      if (i === null || typeof i != "object")
        return null;
      var g = m && i[m] || i[h];
      return typeof g == "function" ? g : null;
    }
    var v = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(i) {
      {
        for (var g = arguments.length, S = new Array(g > 1 ? g - 1 : 0), R = 1; R < g; R++)
          S[R - 1] = arguments[R];
        x("error", i, S);
      }
    }
    function x(i, g, S) {
      {
        var R = v.ReactDebugCurrentFrame, k = R.getStackAddendum();
        k !== "" && (g += "%s", S = S.concat([k]));
        var _ = S.map(function(L) {
          return String(L);
        });
        _.unshift("Warning: " + g), Function.prototype.apply.call(console[i], console, _);
      }
    }
    var T = !1, A = !1, te = !1, H = !1, re = !1, Y;
    Y = Symbol.for("react.module.reference");
    function Q(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === r || i === l || re || i === o || i === u || i === d || H || i === y || T || A || te || typeof i == "object" && i !== null && (i.$$typeof === w || i.$$typeof === f || i.$$typeof === a || i.$$typeof === s || i.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === Y || i.getModuleId !== void 0));
    }
    function J(i, g, S) {
      var R = i.displayName;
      if (R)
        return R;
      var k = g.displayName || g.name || "";
      return k !== "" ? S + "(" + k + ")" : S;
    }
    function K(i) {
      return i.displayName || "Context";
    }
    function oe(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case l:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case s:
            var g = i;
            return K(g) + ".Consumer";
          case a:
            var S = i;
            return K(S._context) + ".Provider";
          case c:
            return J(i, i.render, "ForwardRef");
          case f:
            var R = i.displayName || null;
            return R !== null ? R : oe(i.type) || "Memo";
          case w: {
            var k = i, _ = k._payload, L = k._init;
            try {
              return oe(L(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var U = Object.assign, ne = 0, G, $, B, W, X, Re, je;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function ze() {
      {
        if (ne === 0) {
          G = console.log, $ = console.info, B = console.warn, W = console.error, X = console.group, Re = console.groupCollapsed, je = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: be,
            writable: !0
          };
          Object.defineProperties(console, {
            info: i,
            log: i,
            warn: i,
            error: i,
            group: i,
            groupCollapsed: i,
            groupEnd: i
          });
        }
        ne++;
      }
    }
    function De() {
      {
        if (ne--, ne === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: U({}, i, {
              value: G
            }),
            info: U({}, i, {
              value: $
            }),
            warn: U({}, i, {
              value: B
            }),
            error: U({}, i, {
              value: W
            }),
            group: U({}, i, {
              value: X
            }),
            groupCollapsed: U({}, i, {
              value: Re
            }),
            groupEnd: U({}, i, {
              value: je
            })
          });
        }
        ne < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = v.ReactCurrentDispatcher, se;
    function ge(i, g, S) {
      {
        if (se === void 0)
          try {
            throw Error();
          } catch (k) {
            var R = k.stack.trim().match(/\n( *(at )?)/);
            se = R && R[1] || "";
          }
        return `
` + se + i;
      }
    }
    var N = !1, ce;
    {
      var He = typeof WeakMap == "function" ? WeakMap : Map;
      ce = new He();
    }
    function Te(i, g) {
      if (!i || N)
        return "";
      {
        var S = ce.get(i);
        if (S !== void 0)
          return S;
      }
      var R;
      N = !0;
      var k = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = z.current, z.current = null, ze();
      try {
        if (g) {
          var L = function() {
            throw Error();
          };
          if (Object.defineProperty(L.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(L, []);
            } catch (We) {
              R = We;
            }
            Reflect.construct(i, [], L);
          } else {
            try {
              L.call();
            } catch (We) {
              R = We;
            }
            i.call(L.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (We) {
            R = We;
          }
          i();
        }
      } catch (We) {
        if (We && R && typeof We.stack == "string") {
          for (var M = We.stack.split(`
`), D = R.stack.split(`
`), Z = M.length - 1, ie = D.length - 1; Z >= 1 && ie >= 0 && M[Z] !== D[ie]; )
            ie--;
          for (; Z >= 1 && ie >= 0; Z--, ie--)
            if (M[Z] !== D[ie]) {
              if (Z !== 1 || ie !== 1)
                do
                  if (Z--, ie--, ie < 0 || M[Z] !== D[ie]) {
                    var de = `
` + M[Z].replace(" at new ", " at ");
                    return i.displayName && de.includes("<anonymous>") && (de = de.replace("<anonymous>", i.displayName)), typeof i == "function" && ce.set(i, de), de;
                  }
                while (Z >= 1 && ie >= 0);
              break;
            }
        }
      } finally {
        N = !1, z.current = _, De(), Error.prepareStackTrace = k;
      }
      var ut = i ? i.displayName || i.name : "", pt = ut ? ge(ut) : "";
      return typeof i == "function" && ce.set(i, pt), pt;
    }
    function Ke(i, g, S) {
      return Te(i, !1);
    }
    function ye(i) {
      var g = i.prototype;
      return !!(g && g.isReactComponent);
    }
    function Fe(i, g, S) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return Te(i, ye(i));
      if (typeof i == "string")
        return ge(i);
      switch (i) {
        case u:
          return ge("Suspense");
        case d:
          return ge("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case c:
            return Ke(i.render);
          case f:
            return Fe(i.type, g, S);
          case w: {
            var R = i, k = R._payload, _ = R._init;
            try {
              return Fe(_(k), g, S);
            } catch {
            }
          }
        }
      return "";
    }
    var Ce = Object.prototype.hasOwnProperty, he = {}, le = v.ReactDebugCurrentFrame;
    function $e(i) {
      if (i) {
        var g = i._owner, S = Fe(i.type, i._source, g ? g.type : null);
        le.setExtraStackFrame(S);
      } else
        le.setExtraStackFrame(null);
    }
    function Ee(i, g, S, R, k) {
      {
        var _ = Function.call.bind(Ce);
        for (var L in i)
          if (_(i, L)) {
            var M = void 0;
            try {
              if (typeof i[L] != "function") {
                var D = Error((R || "React class") + ": " + S + " type `" + L + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[L] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw D.name = "Invariant Violation", D;
              }
              M = i[L](g, L, R, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Z) {
              M = Z;
            }
            M && !(M instanceof Error) && ($e(k), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", R || "React class", S, L, typeof M), $e(null)), M instanceof Error && !(M.message in he) && (he[M.message] = !0, $e(k), p("Failed %s type: %s", S, M.message), $e(null));
          }
      }
    }
    var ve = Array.isArray;
    function Pe(i) {
      return ve(i);
    }
    function Je(i) {
      {
        var g = typeof Symbol == "function" && Symbol.toStringTag, S = g && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return S;
      }
    }
    function I(i) {
      try {
        return fe(i), !1;
      } catch {
        return !0;
      }
    }
    function fe(i) {
      return "" + i;
    }
    function ke(i) {
      if (I(i))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(i)), fe(i);
    }
    var we = v.ReactCurrentOwner, ct = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, dt, nt, Ae;
    Ae = {};
    function Ve(i) {
      if (Ce.call(i, "ref")) {
        var g = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function ae(i) {
      if (Ce.call(i, "key")) {
        var g = Object.getOwnPropertyDescriptor(i, "key").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function ot(i, g) {
      if (typeof i.ref == "string" && we.current && g && we.current.stateNode !== g) {
        var S = oe(we.current.type);
        Ae[S] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', oe(we.current.type), i.ref), Ae[S] = !0);
      }
    }
    function Ye(i, g) {
      {
        var S = function() {
          dt || (dt = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        S.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: S,
          configurable: !0
        });
      }
    }
    function lt(i, g) {
      {
        var S = function() {
          nt || (nt = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        S.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: S,
          configurable: !0
        });
      }
    }
    var vt = function(i, g, S, R, k, _, L) {
      var M = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: i,
        key: g,
        ref: S,
        props: L,
        // Record the component responsible for creating this element.
        _owner: _
      };
      return M._store = {}, Object.defineProperty(M._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(M, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.defineProperty(M, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.freeze && (Object.freeze(M.props), Object.freeze(M)), M;
    };
    function mt(i, g, S, R, k) {
      {
        var _, L = {}, M = null, D = null;
        S !== void 0 && (ke(S), M = "" + S), ae(g) && (ke(g.key), M = "" + g.key), Ve(g) && (D = g.ref, ot(g, k));
        for (_ in g)
          Ce.call(g, _) && !ct.hasOwnProperty(_) && (L[_] = g[_]);
        if (i && i.defaultProps) {
          var Z = i.defaultProps;
          for (_ in Z)
            L[_] === void 0 && (L[_] = Z[_]);
        }
        if (M || D) {
          var ie = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          M && Ye(L, ie), D && lt(L, ie);
        }
        return vt(i, M, D, k, R, we.current, L);
      }
    }
    var Ue = v.ReactCurrentOwner, at = v.ReactDebugCurrentFrame;
    function Ge(i) {
      if (i) {
        var g = i._owner, S = Fe(i.type, i._source, g ? g.type : null);
        at.setExtraStackFrame(S);
      } else
        at.setExtraStackFrame(null);
    }
    var it;
    it = !1;
    function me(i) {
      return typeof i == "object" && i !== null && i.$$typeof === t;
    }
    function Ne() {
      {
        if (Ue.current) {
          var i = oe(Ue.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function j(i) {
      {
        if (i !== void 0) {
          var g = i.fileName.replace(/^.*[\\\/]/, ""), S = i.lineNumber;
          return `

Check your code at ` + g + ":" + S + ".";
        }
        return "";
      }
    }
    var q = {};
    function Me(i) {
      {
        var g = Ne();
        if (!g) {
          var S = typeof i == "string" ? i : i.displayName || i.name;
          S && (g = `

Check the top-level render call using <` + S + ">.");
        }
        return g;
      }
    }
    function Xe(i, g) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var S = Me(g);
        if (q[S])
          return;
        q[S] = !0;
        var R = "";
        i && i._owner && i._owner !== Ue.current && (R = " It was passed a child from " + oe(i._owner.type) + "."), Ge(i), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', S, R), Ge(null);
      }
    }
    function C(i, g) {
      {
        if (typeof i != "object")
          return;
        if (Pe(i))
          for (var S = 0; S < i.length; S++) {
            var R = i[S];
            me(R) && Xe(R, g);
          }
        else if (me(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var k = E(i);
          if (typeof k == "function" && k !== i.entries)
            for (var _ = k.call(i), L; !(L = _.next()).done; )
              me(L.value) && Xe(L.value, g);
        }
      }
    }
    function F(i) {
      {
        var g = i.type;
        if (g == null || typeof g == "string")
          return;
        var S;
        if (typeof g == "function")
          S = g.propTypes;
        else if (typeof g == "object" && (g.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        g.$$typeof === f))
          S = g.propTypes;
        else
          return;
        if (S) {
          var R = oe(g);
          Ee(S, i.props, "prop", R, i);
        } else if (g.PropTypes !== void 0 && !it) {
          it = !0;
          var k = oe(g);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", k || "Unknown");
        }
        typeof g.getDefaultProps == "function" && !g.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function V(i) {
      {
        for (var g = Object.keys(i.props), S = 0; S < g.length; S++) {
          var R = g[S];
          if (R !== "children" && R !== "key") {
            Ge(i), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", R), Ge(null);
            break;
          }
        }
        i.ref !== null && (Ge(i), p("Invalid attribute `ref` supplied to `React.Fragment`."), Ge(null));
      }
    }
    function pe(i, g, S, R, k, _) {
      {
        var L = Q(i);
        if (!L) {
          var M = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (M += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var D = j(k);
          D ? M += D : M += Ne();
          var Z;
          i === null ? Z = "null" : Pe(i) ? Z = "array" : i !== void 0 && i.$$typeof === t ? (Z = "<" + (oe(i.type) || "Unknown") + " />", M = " Did you accidentally export a JSX literal instead of a component?") : Z = typeof i, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Z, M);
        }
        var ie = mt(i, g, S, k, _);
        if (ie == null)
          return ie;
        if (L) {
          var de = g.children;
          if (de !== void 0)
            if (R)
              if (Pe(de)) {
                for (var ut = 0; ut < de.length; ut++)
                  C(de[ut], i);
                Object.freeze && Object.freeze(de);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              C(de, i);
        }
        return i === r ? V(ie) : F(ie), ie;
      }
    }
    function Se(i, g, S) {
      return pe(i, g, S, !0);
    }
    function Oe(i, g, S) {
      return pe(i, g, S, !1);
    }
    var qe = Oe, _e = Se;
    It.Fragment = r, It.jsx = qe, It.jsxs = _e;
  }()), It;
}
process.env.NODE_ENV === "production" ? Jt.exports = En() : Jt.exports = xn();
var P = Jt.exports;
const pr = (e) => !e || typeof e == "function" ? e : (t) => {
  e.current = t;
};
function gr(e, t) {
  const n = pr(e), r = pr(t);
  return (o) => {
    typeof n == "function" && n(o), typeof r == "function" && r(o);
  };
}
const rt = (e) => `vf-${e}`;
var Wr = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var l = "", a = 0; a < arguments.length; a++) {
        var s = arguments[a];
        s && (l = o(l, r(s)));
      }
      return l;
    }
    function r(l) {
      if (typeof l == "string" || typeof l == "number")
        return l;
      if (typeof l != "object")
        return "";
      if (Array.isArray(l))
        return n.apply(null, l);
      if (l.toString !== Object.prototype.toString && !l.toString.toString().includes("[native code]"))
        return l.toString();
      var a = "";
      for (var s in l)
        t.call(l, s) && l[s] && (a = o(a, s));
      return a;
    }
    function o(l, a) {
      return a ? l ? l + " " + a : l + a : l;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(Wr);
var Sn = Wr.exports;
const xe = /* @__PURE__ */ bn(Sn), Ie = (e, t) => (t == null ? void 0 : t.split(" ")).map((r) => `${e}-${r}`).join(" "), Cn = Ze.forwardRef(
  (e, t) => {
    const {
      onClick: n,
      onChange: r,
      onPause: o,
      onPlay: l,
      play: a = !1,
      className: s
    } = e, [c, u] = ue(a), d = rt("control-button"), f = xe(d, s, {
      [`${d}-pause`]: c
    }), w = (y) => {
      y.stopPropagation(), u(!c), !c ? l && l() : o && o(), r && r(!c), n && n(y, !c);
    };
    return ee(() => {
      u(a);
    }, [a]), /* @__PURE__ */ P.jsxs(
      "span",
      {
        id: Ie(d, "play-button-container"),
        className: f,
        ref: t,
        onClick: w,
        children: [
          /* @__PURE__ */ P.jsx(
            "span",
            {
              className: Ie(
                d,
                "play-button play-button-before"
              )
            }
          ),
          /* @__PURE__ */ P.jsx(
            "span",
            {
              className: Ie(
                d,
                "play-button play-button-after"
              )
            }
          )
        ]
      }
    );
  }
), _n = (e) => /* @__PURE__ */ b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 192, height: 192, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ b.createElement("g", { fill: "none" }, /* @__PURE__ */ b.createElement("path", { d: "M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" }), /* @__PURE__ */ b.createElement("path", { fill: "currentColor", d: "M13.26 3.3a1.1 1.1 0 0 1 1.734.78l.006.114v15.612a1.1 1.1 0 0 1-1.643.957l-.096-.062L6.68 16H4a2 2 0 0 1-1.995-1.85L2 14v-4a2 2 0 0 1 1.85-1.995L4 8h2.68zm6.407 3.483A6.985 6.985 0 0 1 22 12a6.985 6.985 0 0 1-2.333 5.217a1 1 0 1 1-1.334-1.49A4.985 4.985 0 0 0 20 12c0-1.48-.642-2.81-1.667-3.727a1 1 0 1 1 1.334-1.49m-2 2.236A3.992 3.992 0 0 1 19 11.999a3.991 3.991 0 0 1-1.333 2.982a1 1 0 0 1-1.422-1.4l.088-.09c.41-.368.667-.899.667-1.491a1.99 1.99 0 0 0-.548-1.376l-.119-.115a1 1 0 1 1 1.334-1.49" }))), Rn = (e) => /* @__PURE__ */ b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 192, height: 192, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ b.createElement("g", { fill: "none" }, /* @__PURE__ */ b.createElement("path", { d: "M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" }), /* @__PURE__ */ b.createElement("path", { fill: "currentColor", d: "M13.26 3.3a1.1 1.1 0 0 1 1.734.78l.006.114v15.612a1.1 1.1 0 0 1-1.643.957l-.096-.062L6.68 16H4a2 2 0 0 1-1.995-1.85L2 14v-4a2 2 0 0 1 1.85-1.994L4 8h2.68zm4.326 5.872L19 10.586l1.414-1.414a1 1 0 1 1 1.414 1.414L20.414 12l1.414 1.414a1 1 0 0 1-1.414 1.415L19 13.414l-1.414 1.415a1 1 0 0 1-1.414-1.415L17.586 12l-1.414-1.414a1 1 0 1 1 1.414-1.414" }))), Pn = Ze.forwardRef(
  (e, t) => {
    const {
      onClick: n,
      onMute: r,
      onVolume: o,
      volume: l = 100,
      mute: a = !1,
      className: s
    } = e, [c, u] = ue(a), d = rt("volume-button"), f = xe(d, s, {
      [`${d}-mute`]: c
    }), w = (m) => {
      m.stopPropagation(), u(!c), n && n(m, l), c ? o && o() : r && r();
    };
    ee(() => {
      u(a);
    }, [a]);
    const y = c ? Rn : _n;
    return /* @__PURE__ */ P.jsx("div", { className: f, ref: t, onClick: w, children: /* @__PURE__ */ P.jsx(y, { width: Qe, height: Qe }) });
  }
);
function bt(e) {
  "@babel/helpers - typeof";
  return bt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bt(e);
}
function kn(e, t) {
  if (bt(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (bt(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function On(e) {
  var t = kn(e, "string");
  return bt(t) == "symbol" ? t : String(t);
}
function ft(e, t, n) {
  return t = On(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function yr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Be(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yr(Object(n), !0).forEach(function(r) {
      ft(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function er(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Tn(e) {
  if (Array.isArray(e))
    return er(e);
}
function An(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Br(e, t) {
  if (e) {
    if (typeof e == "string")
      return er(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return er(e, t);
  }
}
function Nn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wt(e) {
  return Tn(e) || An(e) || Br(e) || Nn();
}
function Mn(e) {
  if (Array.isArray(e))
    return e;
}
function Ln(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, l, a, s = [], c = !0, u = !1;
    try {
      if (l = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n)
          return;
        c = !1;
      } else
        for (; !(c = (r = l.call(n)).done) && (s.push(r.value), s.length !== t); c = !0)
          ;
    } catch (d) {
      u = !0, o = d;
    } finally {
      try {
        if (!c && n.return != null && (a = n.return(), Object(a) !== a))
          return;
      } finally {
        if (u)
          throw o;
      }
    }
    return s;
  }
}
function In() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function et(e, t) {
  return Mn(e) || Ln(e, t) || Br(e, t) || In();
}
function wr(e) {
  var t = b.useRef();
  t.current = e;
  var n = b.useCallback(function() {
    for (var r, o = arguments.length, l = new Array(o), a = 0; a < o; a++)
      l[a] = arguments[a];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(l));
  }, []);
  return n;
}
function jn() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var br = process.env.NODE_ENV !== "test" && jn() ? b.useLayoutEffect : b.useEffect, Dn = function(t, n) {
  var r = b.useRef(!0);
  br(function() {
    return t(r.current);
  }, n), br(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, Er = function(t, n) {
  Dn(function(r) {
    if (!r)
      return t();
  }, n);
};
function xr(e) {
  var t = b.useRef(!1), n = b.useState(e), r = et(n, 2), o = r[0], l = r[1];
  b.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function a(s, c) {
    c && t.current || l(s);
  }
  return [o, a];
}
function qt(e) {
  return e !== void 0;
}
function Fn(e, t) {
  var n = t || {}, r = n.defaultValue, o = n.value, l = n.onChange, a = n.postState, s = xr(function() {
    return qt(o) ? o : qt(r) ? typeof r == "function" ? r() : r : typeof e == "function" ? e() : e;
  }), c = et(s, 2), u = c[0], d = c[1], f = o !== void 0 ? o : u, w = a ? a(f) : f, y = wr(l), m = xr([f]), h = et(m, 2), E = h[0], v = h[1];
  Er(function() {
    var x = E[0];
    u !== x && y(u, x);
  }, [E]), Er(function() {
    qt(o) || d(o);
  }, [o]);
  var p = wr(function(x, T) {
    d(x, T), v([f], T);
  });
  return [w, p];
}
var tr = {}, ar = [], $n = function(t) {
  ar.push(t);
};
function Hn(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = ar.reduce(function(r, o) {
      return o(r ?? "", "warning");
    }, t);
    n && console.error("Warning: ".concat(n));
  }
}
function Vn(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = ar.reduce(function(r, o) {
      return o(r ?? "", "note");
    }, t);
    n && console.warn("Note: ".concat(n));
  }
}
function Un() {
  tr = {};
}
function zr(e, t, n) {
  !t && !tr[n] && (e(!1, n), tr[n] = !0);
}
function At(e, t) {
  zr(Hn, e, t);
}
function Wn(e, t) {
  zr(Vn, e, t);
}
At.preMessage = $n;
At.resetWarned = Un;
At.noteOnce = Wn;
function Bn(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function o(l, a) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = r.has(l);
    if (At(!c, "Warning: There may be circular references"), c)
      return !1;
    if (l === a)
      return !0;
    if (n && s > 1)
      return !1;
    r.add(l);
    var u = s + 1;
    if (Array.isArray(l)) {
      if (!Array.isArray(a) || l.length !== a.length)
        return !1;
      for (var d = 0; d < l.length; d++)
        if (!o(l[d], a[d], u))
          return !1;
      return !0;
    }
    if (l && a && bt(l) === "object" && bt(a) === "object") {
      var f = Object.keys(l);
      return f.length !== Object.keys(a).length ? !1 : f.every(function(w) {
        return o(l[w], a[w], u);
      });
    }
    return !1;
  }
  return o(e, t);
}
var Pt = /* @__PURE__ */ b.createContext({
  min: 0,
  max: 0,
  direction: "ltr",
  step: 1,
  includedStart: 0,
  includedEnd: 0,
  tabIndex: 0,
  keyboard: !0,
  styles: {},
  classNames: {}
});
function Wt() {
  return Wt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Wt.apply(this, arguments);
}
function zn(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, l;
  for (l = 0; l < r.length; l++)
    o = r[l], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Kr(e, t) {
  if (e == null)
    return {};
  var n = zn(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (o = 0; o < l.length; o++)
      r = l[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
var O = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function(t) {
    var n = t.keyCode;
    if (t.altKey && !t.ctrlKey || t.metaKey || // Function keys don't generate text
    n >= O.F1 && n <= O.F12)
      return !1;
    switch (n) {
      case O.ALT:
      case O.CAPS_LOCK:
      case O.CONTEXT_MENU:
      case O.CTRL:
      case O.DOWN:
      case O.END:
      case O.ESC:
      case O.HOME:
      case O.INSERT:
      case O.LEFT:
      case O.MAC_FF_META:
      case O.META:
      case O.NUMLOCK:
      case O.NUM_CENTER:
      case O.PAGE_DOWN:
      case O.PAGE_UP:
      case O.PAUSE:
      case O.PRINT_SCREEN:
      case O.RIGHT:
      case O.SHIFT:
      case O.UP:
      case O.WIN_KEY:
      case O.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= O.ZERO && t <= O.NINE || t >= O.NUM_ZERO && t <= O.NUM_MULTIPLY || t >= O.A && t <= O.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case O.SPACE:
      case O.QUESTION_MARK:
      case O.NUM_PLUS:
      case O.NUM_MINUS:
      case O.NUM_PERIOD:
      case O.NUM_DIVISION:
      case O.SEMICOLON:
      case O.DASH:
      case O.EQUALS:
      case O.COMMA:
      case O.PERIOD:
      case O.SLASH:
      case O.APOSTROPHE:
      case O.SINGLE_QUOTE:
      case O.OPEN_SQUARE_BRACKET:
      case O.BACKSLASH:
      case O.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
};
function rr(e, t, n) {
  return (e - t) / (n - t);
}
function ir(e, t, n, r) {
  var o = rr(t, n, r), l = {};
  switch (e) {
    case "rtl":
      l.right = "".concat(o * 100, "%"), l.transform = "translateX(50%)";
      break;
    case "btt":
      l.bottom = "".concat(o * 100, "%"), l.transform = "translateY(50%)";
      break;
    case "ttb":
      l.top = "".concat(o * 100, "%"), l.transform = "translateY(-50%)";
      break;
    default:
      l.left = "".concat(o * 100, "%"), l.transform = "translateX(-50%)";
      break;
  }
  return l;
}
function Ot(e, t) {
  return Array.isArray(e) ? e[t] : e;
}
var Kn = ["prefixCls", "value", "valueIndex", "onStartMove", "style", "render", "dragging", "onOffsetChange", "onChangeComplete"], Yr = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var n, r, o = e.prefixCls, l = e.value, a = e.valueIndex, s = e.onStartMove, c = e.style, u = e.render, d = e.dragging, f = e.onOffsetChange, w = e.onChangeComplete, y = Kr(e, Kn), m = b.useContext(Pt), h = m.min, E = m.max, v = m.direction, p = m.disabled, x = m.keyboard, T = m.range, A = m.tabIndex, te = m.ariaLabelForHandle, H = m.ariaLabelledByForHandle, re = m.ariaValueTextFormatterForHandle, Y = m.styles, Q = m.classNames, J = "".concat(o, "-handle"), K = function(B) {
    p || s(B, a);
  }, oe = function(B) {
    if (!p && x) {
      var W = null;
      switch (B.which || B.keyCode) {
        case O.LEFT:
          W = v === "ltr" || v === "btt" ? -1 : 1;
          break;
        case O.RIGHT:
          W = v === "ltr" || v === "btt" ? 1 : -1;
          break;
        case O.UP:
          W = v !== "ttb" ? 1 : -1;
          break;
        case O.DOWN:
          W = v !== "ttb" ? -1 : 1;
          break;
        case O.HOME:
          W = "min";
          break;
        case O.END:
          W = "max";
          break;
        case O.PAGE_UP:
          W = 2;
          break;
        case O.PAGE_DOWN:
          W = -2;
          break;
      }
      W !== null && (B.preventDefault(), f(W, a));
    }
  }, U = function(B) {
    switch (B.which || B.keyCode) {
      case O.LEFT:
      case O.RIGHT:
      case O.UP:
      case O.DOWN:
      case O.HOME:
      case O.END:
      case O.PAGE_UP:
      case O.PAGE_DOWN:
        w == null || w();
        break;
    }
  }, ne = ir(v, l, h, E), G = /* @__PURE__ */ b.createElement("div", Wt({
    ref: t,
    className: xe(J, (n = {}, ft(n, "".concat(J, "-").concat(a + 1), T), ft(n, "".concat(J, "-dragging"), d), n), Q.handle),
    style: Be(Be(Be({}, ne), c), Y.handle),
    onMouseDown: K,
    onTouchStart: K,
    onKeyDown: oe,
    onKeyUp: U,
    tabIndex: p ? null : Ot(A, a),
    role: "slider",
    "aria-valuemin": h,
    "aria-valuemax": E,
    "aria-valuenow": l,
    "aria-disabled": p,
    "aria-label": Ot(te, a),
    "aria-labelledby": Ot(H, a),
    "aria-valuetext": (r = Ot(re, a)) === null || r === void 0 ? void 0 : r(l),
    "aria-orientation": v === "ltr" || v === "rtl" ? "horizontal" : "vertical"
  }, y));
  return u && (G = u(G, {
    index: a,
    prefixCls: o,
    value: l,
    dragging: d
  })), G;
});
process.env.NODE_ENV !== "production" && (Yr.displayName = "Handle");
var Yn = ["prefixCls", "style", "onStartMove", "onOffsetChange", "values", "handleRender", "draggingIndex"], Gr = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.style, o = e.onStartMove, l = e.onOffsetChange, a = e.values, s = e.handleRender, c = e.draggingIndex, u = Kr(e, Yn), d = b.useRef({});
  return b.useImperativeHandle(t, function() {
    return {
      focus: function(w) {
        var y;
        (y = d.current[w]) === null || y === void 0 || y.focus();
      }
    };
  }), /* @__PURE__ */ b.createElement(b.Fragment, null, a.map(function(f, w) {
    return /* @__PURE__ */ b.createElement(Yr, Wt({
      ref: function(m) {
        m ? d.current[w] = m : delete d.current[w];
      },
      dragging: c === w,
      prefixCls: n,
      style: Ot(r, w),
      key: w,
      value: f,
      valueIndex: w,
      onStartMove: o,
      onOffsetChange: l,
      render: s
    }, u));
  }));
});
process.env.NODE_ENV !== "production" && (Gr.displayName = "Handles");
function Sr(e) {
  var t = "touches" in e ? e.touches[0] : e;
  return {
    pageX: t.pageX,
    pageY: t.pageY
  };
}
function Gn(e, t, n, r, o, l, a, s, c) {
  var u = b.useState(null), d = et(u, 2), f = d[0], w = d[1], y = b.useState(-1), m = et(y, 2), h = m[0], E = m[1], v = b.useState(n), p = et(v, 2), x = p[0], T = p[1], A = b.useState(n), te = et(A, 2), H = te[0], re = te[1], Y = b.useRef(null), Q = b.useRef(null);
  b.useEffect(function() {
    h === -1 && T(n);
  }, [n, h]), b.useEffect(function() {
    return function() {
      document.removeEventListener("mousemove", Y.current), document.removeEventListener("mouseup", Q.current), document.removeEventListener("touchmove", Y.current), document.removeEventListener("touchend", Q.current);
    };
  }, []);
  var J = function($, B) {
    x.some(function(W, X) {
      return W !== $[X];
    }) && (B !== void 0 && w(B), T($), a($));
  }, K = function($, B) {
    if ($ === -1) {
      var W = H[0], X = H[H.length - 1], Re = r - W, je = o - X, be = B * (o - r);
      be = Math.max(be, Re), be = Math.min(be, je);
      var ze = l(W + be);
      be = ze - W;
      var De = H.map(function(N) {
        return N + be;
      });
      J(De);
    } else {
      var z = (o - r) * B, se = wt(x);
      se[$] = H[$];
      var ge = c(se, z, $, "dist");
      J(ge.values, ge.value);
    }
  }, oe = b.useRef(K);
  oe.current = K;
  var U = function($, B, W) {
    $.stopPropagation();
    var X = W || n, Re = X[B];
    E(B), w(Re), re(X);
    var je = Sr($), be = je.pageX, ze = je.pageY, De = function(ge) {
      ge.preventDefault();
      var N = Sr(ge), ce = N.pageX, He = N.pageY, Te = ce - be, Ke = He - ze, ye = e.current.getBoundingClientRect(), Fe = ye.width, Ce = ye.height, he;
      switch (t) {
        case "btt":
          he = -Ke / Ce;
          break;
        case "ttb":
          he = Ke / Ce;
          break;
        case "rtl":
          he = -Te / Fe;
          break;
        default:
          he = Te / Fe;
      }
      oe.current(B, he);
    }, z = function se(ge) {
      ge.preventDefault(), document.removeEventListener("mouseup", se), document.removeEventListener("mousemove", De), document.removeEventListener("touchend", se), document.removeEventListener("touchmove", De), Y.current = null, Q.current = null, E(-1), s();
    };
    document.addEventListener("mouseup", z), document.addEventListener("mousemove", De), document.addEventListener("touchend", z), document.addEventListener("touchmove", De), Y.current = De, Q.current = z;
  }, ne = b.useMemo(function() {
    var G = wt(n).sort(function(B, W) {
      return B - W;
    }), $ = wt(x).sort(function(B, W) {
      return B - W;
    });
    return G.every(function(B, W) {
      return B === $[W];
    }) ? x : n;
  }, [n, x]);
  return [h, f, ne, U];
}
function Xn(e, t, n, r, o, l) {
  var a = b.useCallback(function(y) {
    var m = isFinite(y) ? y : e;
    return m = Math.min(t, y), m = Math.max(e, m), m;
  }, [e, t]), s = b.useCallback(function(y) {
    if (n !== null) {
      var m = e + Math.round((a(y) - e) / n) * n, h = function(x) {
        return (String(x).split(".")[1] || "").length;
      }, E = Math.max(h(n), h(t), h(e)), v = Number(m.toFixed(E));
      return e <= v && v <= t ? v : null;
    }
    return null;
  }, [n, e, t, a]), c = b.useCallback(function(y) {
    var m = a(y), h = r.map(function(p) {
      return p.value;
    });
    n !== null && h.push(s(y)), h.push(e, t);
    var E = h[0], v = t - e;
    return h.forEach(function(p) {
      var x = Math.abs(m - p);
      x <= v && (E = p, v = x);
    }), E;
  }, [e, t, r, n, a, s]), u = function y(m, h, E) {
    var v = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit";
    if (typeof h == "number") {
      var p, x = m[E], T = x + h, A = [];
      r.forEach(function(Q) {
        A.push(Q.value);
      }), A.push(e, t), A.push(s(x));
      var te = h > 0 ? 1 : -1;
      v === "unit" ? A.push(s(x + te * n)) : A.push(s(T)), A = A.filter(function(Q) {
        return Q !== null;
      }).filter(function(Q) {
        return h < 0 ? Q <= x : Q >= x;
      }), v === "unit" && (A = A.filter(function(Q) {
        return Q !== x;
      }));
      var H = v === "unit" ? x : T;
      p = A[0];
      var re = Math.abs(p - H);
      if (A.forEach(function(Q) {
        var J = Math.abs(Q - H);
        J < re && (p = Q, re = J);
      }), p === void 0)
        return h < 0 ? e : t;
      if (v === "dist")
        return p;
      if (Math.abs(h) > 1) {
        var Y = wt(m);
        return Y[E] = p, y(Y, h - te, E, v);
      }
      return p;
    } else {
      if (h === "min")
        return e;
      if (h === "max")
        return t;
    }
  }, d = function(m, h, E) {
    var v = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit", p = m[E], x = u(m, h, E, v);
    return {
      value: x,
      changed: x !== p
    };
  }, f = function(m) {
    return l === null && m === 0 || typeof l == "number" && m < l;
  }, w = function(m, h, E) {
    var v = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit", p = m.map(c), x = p[E], T = u(p, h, E, v);
    if (p[E] = T, o === !1) {
      var A = l || 0;
      E > 0 && p[E - 1] !== x && (p[E] = Math.max(p[E], p[E - 1] + A)), E < p.length - 1 && p[E + 1] !== x && (p[E] = Math.min(p[E], p[E + 1] - A));
    } else if (typeof l == "number" || l === null) {
      for (var te = E + 1; te < p.length; te += 1)
        for (var H = !0; f(p[te] - p[te - 1]) && H; ) {
          var re = d(p, 1, te);
          p[te] = re.value, H = re.changed;
        }
      for (var Y = E; Y > 0; Y -= 1)
        for (var Q = !0; f(p[Y] - p[Y - 1]) && Q; ) {
          var J = d(p, -1, Y - 1);
          p[Y - 1] = J.value, Q = J.changed;
        }
      for (var K = p.length - 1; K > 0; K -= 1)
        for (var oe = !0; f(p[K] - p[K - 1]) && oe; ) {
          var U = d(p, -1, K - 1);
          p[K - 1] = U.value, oe = U.changed;
        }
      for (var ne = 0; ne < p.length - 1; ne += 1)
        for (var G = !0; f(p[ne + 1] - p[ne]) && G; ) {
          var $ = d(p, 1, ne + 1);
          p[ne + 1] = $.value, G = $.changed;
        }
    }
    return {
      value: p[E],
      values: p
    };
  };
  return [c, w];
}
function qn(e) {
  var t = e.prefixCls, n = e.style, r = e.children, o = e.value, l = e.onClick, a = b.useContext(Pt), s = a.min, c = a.max, u = a.direction, d = a.includedStart, f = a.includedEnd, w = a.included, y = "".concat(t, "-text"), m = ir(u, o, s, c);
  return /* @__PURE__ */ b.createElement("span", {
    className: xe(y, ft({}, "".concat(y, "-active"), w && d <= o && o <= f)),
    style: Be(Be({}, m), n),
    onMouseDown: function(E) {
      E.stopPropagation();
    },
    onClick: function() {
      l(o);
    }
  }, r);
}
function Zn(e) {
  var t = e.prefixCls, n = e.marks, r = e.onClick, o = "".concat(t, "-mark");
  return n.length ? /* @__PURE__ */ b.createElement("div", {
    className: o
  }, n.map(function(l) {
    var a = l.value, s = l.style, c = l.label;
    return /* @__PURE__ */ b.createElement(qn, {
      key: a,
      prefixCls: o,
      style: s,
      value: a,
      onClick: r
    }, c);
  })) : null;
}
function Qn(e) {
  var t = e.prefixCls, n = e.value, r = e.style, o = e.activeStyle, l = b.useContext(Pt), a = l.min, s = l.max, c = l.direction, u = l.included, d = l.includedStart, f = l.includedEnd, w = "".concat(t, "-dot"), y = u && d <= n && n <= f, m = Be(Be({}, ir(c, n, a, s)), typeof r == "function" ? r(n) : r);
  return y && (m = Be(Be({}, m), typeof o == "function" ? o(n) : o)), /* @__PURE__ */ b.createElement("span", {
    className: xe(w, ft({}, "".concat(w, "-active"), y)),
    style: m
  });
}
function Jn(e) {
  var t = e.prefixCls, n = e.marks, r = e.dots, o = e.style, l = e.activeStyle, a = b.useContext(Pt), s = a.min, c = a.max, u = a.step, d = b.useMemo(function() {
    var f = /* @__PURE__ */ new Set();
    if (n.forEach(function(y) {
      f.add(y.value);
    }), r && u !== null)
      for (var w = s; w <= c; )
        f.add(w), w += u;
    return Array.from(f);
  }, [s, c, u, r, n]);
  return /* @__PURE__ */ b.createElement("div", {
    className: "".concat(t, "-step")
  }, d.map(function(f) {
    return /* @__PURE__ */ b.createElement(Qn, {
      prefixCls: t,
      key: f,
      value: f,
      style: o,
      activeStyle: l
    });
  }));
}
function Cr(e) {
  var t, n = e.prefixCls, r = e.style, o = e.start, l = e.end, a = e.index, s = e.onStartMove, c = e.replaceCls, u = b.useContext(Pt), d = u.direction, f = u.min, w = u.max, y = u.disabled, m = u.range, h = u.classNames, E = "".concat(n, "-track"), v = rr(o, f, w), p = rr(l, f, w), x = function(H) {
    !y && s && s(H, -1);
  }, T = {};
  switch (d) {
    case "rtl":
      T.right = "".concat(v * 100, "%"), T.width = "".concat(p * 100 - v * 100, "%");
      break;
    case "btt":
      T.bottom = "".concat(v * 100, "%"), T.height = "".concat(p * 100 - v * 100, "%");
      break;
    case "ttb":
      T.top = "".concat(v * 100, "%"), T.height = "".concat(p * 100 - v * 100, "%");
      break;
    default:
      T.left = "".concat(v * 100, "%"), T.width = "".concat(p * 100 - v * 100, "%");
  }
  var A = c || xe(E, (t = {}, ft(t, "".concat(E, "-").concat(a + 1), a !== null && m), ft(t, "".concat(n, "-track-draggable"), s), t), h.track);
  return /* @__PURE__ */ b.createElement("div", {
    className: A,
    style: Be(Be({}, T), r),
    onMouseDown: x,
    onTouchStart: x
  });
}
function eo(e) {
  var t = e.prefixCls, n = e.style, r = e.values, o = e.startPoint, l = e.onStartMove, a = b.useContext(Pt), s = a.included, c = a.range, u = a.min, d = a.styles, f = a.classNames, w = b.useMemo(function() {
    if (!c) {
      if (r.length === 0)
        return [];
      var m = o ?? u, h = r[0];
      return [{
        start: Math.min(m, h),
        end: Math.max(m, h)
      }];
    }
    for (var E = [], v = 0; v < r.length - 1; v += 1)
      E.push({
        start: r[v],
        end: r[v + 1]
      });
    return E;
  }, [r, c, o, u]), y = null;
  return (f.tracks || d.tracks) && (y = /* @__PURE__ */ b.createElement(Cr, {
    index: null,
    prefixCls: t,
    start: w[0].start,
    end: w[w.length - 1].end,
    replaceCls: xe(f.tracks, "".concat(t, "-tracks")),
    style: d.tracks
  })), s ? /* @__PURE__ */ b.createElement(b.Fragment, null, y, w.map(function(m, h) {
    var E = m.start, v = m.end;
    return /* @__PURE__ */ b.createElement(Cr, {
      index: h,
      prefixCls: t,
      style: Be(Be({}, Ot(n, h)), d.track),
      start: E,
      end: v,
      key: h,
      onStartMove: l
    });
  })) : null;
}
var Xr = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var n, r = e.prefixCls, o = r === void 0 ? "rc-slider" : r, l = e.className, a = e.style, s = e.classNames, c = e.styles, u = e.disabled, d = u === void 0 ? !1 : u, f = e.keyboard, w = f === void 0 ? !0 : f, y = e.autoFocus, m = e.onFocus, h = e.onBlur, E = e.min, v = E === void 0 ? 0 : E, p = e.max, x = p === void 0 ? 100 : p, T = e.step, A = T === void 0 ? 1 : T, te = e.value, H = e.defaultValue, re = e.range, Y = e.count, Q = e.onChange, J = e.onBeforeChange, K = e.onAfterChange, oe = e.onChangeComplete, U = e.allowCross, ne = U === void 0 ? !0 : U, G = e.pushable, $ = G === void 0 ? !1 : G, B = e.draggableTrack, W = e.reverse, X = e.vertical, Re = e.included, je = Re === void 0 ? !0 : Re, be = e.startPoint, ze = e.trackStyle, De = e.handleStyle, z = e.railStyle, se = e.dotStyle, ge = e.activeDotStyle, N = e.marks, ce = e.dots, He = e.handleRender, Te = e.tabIndex, Ke = Te === void 0 ? 0 : Te, ye = e.ariaLabelForHandle, Fe = e.ariaLabelledByForHandle, Ce = e.ariaValueTextFormatterForHandle, he = b.useRef(), le = b.useRef(), $e = b.useMemo(function() {
    return X ? W ? "ttb" : "btt" : W ? "rtl" : "ltr";
  }, [W, X]), Ee = b.useMemo(function() {
    return isFinite(v) ? v : 0;
  }, [v]), ve = b.useMemo(function() {
    return isFinite(x) ? x : 100;
  }, [x]), Pe = b.useMemo(function() {
    return A !== null && A <= 0 ? 1 : A;
  }, [A]), Je = b.useMemo(function() {
    return typeof $ == "boolean" ? $ ? Pe : !1 : $ >= 0 ? $ : !1;
  }, [$, Pe]), I = b.useMemo(function() {
    var R = Object.keys(N || {});
    return R.map(function(k) {
      var _ = N[k], L = {
        value: Number(k)
      };
      return _ && bt(_) === "object" && !/* @__PURE__ */ b.isValidElement(_) && ("label" in _ || "style" in _) ? (L.style = _.style, L.label = _.label) : L.label = _, L;
    }).filter(function(k) {
      var _ = k.label;
      return _ || typeof _ == "number";
    }).sort(function(k, _) {
      return k.value - _.value;
    });
  }, [N]), fe = Xn(Ee, ve, Pe, I, ne, Je), ke = et(fe, 2), we = ke[0], ct = ke[1], dt = Fn(H, {
    value: te
  }), nt = et(dt, 2), Ae = nt[0], Ve = nt[1], ae = b.useMemo(function() {
    var R = Ae == null ? [] : Array.isArray(Ae) ? Ae : [Ae], k = et(R, 1), _ = k[0], L = _ === void 0 ? Ee : _, M = Ae === null ? [] : [L];
    if (re) {
      if (M = wt(R), Y || Ae === void 0) {
        var D = Y >= 0 ? Y + 1 : 2;
        for (M = M.slice(0, D); M.length < D; ) {
          var Z;
          M.push((Z = M[M.length - 1]) !== null && Z !== void 0 ? Z : Ee);
        }
      }
      M.sort(function(ie, de) {
        return ie - de;
      });
    }
    return M.forEach(function(ie, de) {
      M[de] = we(ie);
    }), M;
  }, [Ae, re, Ee, Y, we]), ot = b.useRef(ae);
  ot.current = ae;
  var Ye = function(k) {
    return re ? k : k[0];
  }, lt = function(k) {
    var _ = wt(k).sort(function(L, M) {
      return L - M;
    });
    Q && !Bn(_, ot.current, !0) && Q(Ye(_)), Ve(_);
  }, vt = function() {
    K == null || K(Ye(ot.current)), At(!K, "[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."), oe == null || oe(Ye(ot.current));
  }, mt = Gn(le, $e, ae, Ee, ve, we, lt, vt, ct), Ue = et(mt, 4), at = Ue[0], Ge = Ue[1], it = Ue[2], me = Ue[3], Ne = function(k, _) {
    if (!d) {
      var L = 0, M = ve - Ee;
      ae.forEach(function(Z, ie) {
        var de = Math.abs(k - Z);
        de <= M && (M = de, L = ie);
      });
      var D = wt(ae);
      D[L] = k, re && !ae.length && Y === void 0 && D.push(k), J == null || J(Ye(D)), lt(D), _ && me(_, L, D);
    }
  }, j = function(k) {
    k.preventDefault();
    var _ = le.current.getBoundingClientRect(), L = _.width, M = _.height, D = _.left, Z = _.top, ie = _.bottom, de = _.right, ut = k.clientX, pt = k.clientY, We;
    switch ($e) {
      case "btt":
        We = (ie - pt) / M;
        break;
      case "ttb":
        We = (pt - Z) / M;
        break;
      case "rtl":
        We = (de - ut) / L;
        break;
      default:
        We = (ut - D) / L;
    }
    var vn = Ee + We * (ve - Ee);
    Ne(we(vn), k);
  }, q = b.useState(null), Me = et(q, 2), Xe = Me[0], C = Me[1], F = function(k, _) {
    if (!d) {
      var L = ct(ae, k, _);
      J == null || J(Ye(ae)), lt(L.values), C(L.value);
    }
  };
  b.useEffect(function() {
    if (Xe !== null) {
      var R = ae.indexOf(Xe);
      R >= 0 && he.current.focus(R);
    }
    C(null);
  }, [Xe]);
  var V = b.useMemo(function() {
    return B && Pe === null ? (process.env.NODE_ENV !== "production" && At(!1, "`draggableTrack` is not supported when `step` is `null`."), !1) : B;
  }, [B, Pe]), pe = function(k, _) {
    me(k, _), J == null || J(Ye(ot.current));
  }, Se = at !== -1;
  b.useEffect(function() {
    if (!Se) {
      var R = ae.lastIndexOf(Ge);
      he.current.focus(R);
    }
  }, [Se]);
  var Oe = b.useMemo(function() {
    return wt(it).sort(function(R, k) {
      return R - k;
    });
  }, [it]), qe = b.useMemo(function() {
    return re ? [Oe[0], Oe[Oe.length - 1]] : [Ee, Oe[0]];
  }, [Oe, re, Ee]), _e = et(qe, 2), i = _e[0], g = _e[1];
  b.useImperativeHandle(t, function() {
    return {
      focus: function() {
        he.current.focus(0);
      },
      blur: function() {
        var k = document, _ = k.activeElement;
        le.current.contains(_) && (_ == null || _.blur());
      }
    };
  }), b.useEffect(function() {
    y && he.current.focus(0);
  }, []);
  var S = b.useMemo(function() {
    return {
      min: Ee,
      max: ve,
      direction: $e,
      disabled: d,
      keyboard: w,
      step: Pe,
      included: je,
      includedStart: i,
      includedEnd: g,
      range: re,
      tabIndex: Ke,
      ariaLabelForHandle: ye,
      ariaLabelledByForHandle: Fe,
      ariaValueTextFormatterForHandle: Ce,
      styles: c || {},
      classNames: s || {}
    };
  }, [Ee, ve, $e, d, w, Pe, je, i, g, re, Ke, ye, Fe, Ce, c, s]);
  return /* @__PURE__ */ b.createElement(Pt.Provider, {
    value: S
  }, /* @__PURE__ */ b.createElement("div", {
    ref: le,
    className: xe(o, l, (n = {}, ft(n, "".concat(o, "-disabled"), d), ft(n, "".concat(o, "-vertical"), X), ft(n, "".concat(o, "-horizontal"), !X), ft(n, "".concat(o, "-with-marks"), I.length), n)),
    style: a,
    onMouseDown: j
  }, /* @__PURE__ */ b.createElement("div", {
    className: xe("".concat(o, "-rail"), s == null ? void 0 : s.rail),
    style: Be(Be({}, z), c == null ? void 0 : c.rail)
  }), /* @__PURE__ */ b.createElement(eo, {
    prefixCls: o,
    style: ze,
    values: Oe,
    startPoint: be,
    onStartMove: V ? pe : null
  }), /* @__PURE__ */ b.createElement(Jn, {
    prefixCls: o,
    marks: I,
    dots: ce,
    style: se,
    activeStyle: ge
  }), /* @__PURE__ */ b.createElement(Gr, {
    ref: he,
    prefixCls: o,
    style: De,
    values: it,
    draggingIndex: at,
    onStartMove: pe,
    onOffsetChange: F,
    onFocus: m,
    onBlur: h,
    handleRender: He,
    onChangeComplete: vt
  }), /* @__PURE__ */ b.createElement(Zn, {
    prefixCls: o,
    marks: I,
    onClick: Ne
  })));
});
process.env.NODE_ENV !== "production" && (Xr.displayName = "Slider");
const jt = (e, t) => {
  const n = Math.floor(e / 3600), r = Math.floor(e % 3600 / 60), o = Math.floor(e % 60);
  let l = "", a = (t == null ? void 0 : t.split(":")) || ["00", "00", "00"];
  a.length <= 1 ? a = ["00", "00", ...a] : a.length <= 2 && a.unshift("00");
  const s = (a == null ? void 0 : a.length) > 2 ? a[0] : null, c = (a == null ? void 0 : a.length) > 1 ? a[1] : null;
  return (n > 0 || s !== "00") && (l += `${String(n).padStart(2, "0")}:`), (r > 0 || n > 0 || c !== "00") && (l += `${String(r).padStart(2, "0")}:`), l += `${String(o).padStart(2, "0")}`, l.length === 2 && (l = "00:" + l), l;
}, to = (e) => /* @__PURE__ */ b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 192, height: 192, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ b.createElement("path", { fill: "currentColor", d: "M4 4h6v2H7.414l3 3L9 10.414l-3-3V10H4zm10 0h6v6h-2V7.414l-3 3L13.586 9l3-3H14zm-3.586 11l-3 3H10v2H4v-6h2v2.586l3-3zM15 13.586l3 3V14h2v6h-6v-2h2.586l-3-3z" })), ro = (e) => /* @__PURE__ */ b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 192, height: 192, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ b.createElement("path", { fill: "currentColor", d: "M14 10V4h2v2.59l3.29-3.29l1.41 1.41L17.41 8H20v2zM4 10V8h2.59l-3.3-3.29l1.42-1.42L8 6.59V4h2v6zm16 4v2h-2.59l3.29 3.29l-1.41 1.41L16 17.41V20h-2v-6zm-10 0v6H8v-2.59l-3.29 3.3l-1.42-1.42L6.59 16H4v-2z" })), sr = () => {
  const e = document.querySelector(".vf-video-wrapper");
  document.fullscreenElement ? document.exitFullscreen && document.exitFullscreen().catch((t) => {
    console.error(
      `Error attempting to enable full-screen mode: ${t.message} (${t.name})`
    );
  }) : e.requestFullscreen && e.requestFullscreen();
}, no = (e) => {
  const { onCancelFullScreen: t, onFullScreen: n, className: r } = e, [o, l] = ue(!1), a = () => {
    l(!!document.fullscreenElement), document.fullscreenElement ? n && n() : t && t();
  };
  ee(() => (document.addEventListener("fullscreenchange", a), () => {
    document.removeEventListener("fullscreenchange", a);
  }), []);
  const s = rt("fullscreen-button"), c = xe(s, r), u = o ? ro : to;
  return /* @__PURE__ */ P.jsx("div", { className: c, onClick: sr, children: /* @__PURE__ */ P.jsx(u, { width: Qe, height: Qe }) });
}, oo = (e) => /* @__PURE__ */ b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 192, height: 192, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ b.createElement("g", { fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ b.createElement("path", { d: "M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" }), /* @__PURE__ */ b.createElement("path", { fill: "currentColor", d: "M20 12a2 2 0 0 1 1.995 1.85L22 14v4a2 2 0 0 1-1.85 1.995L20 20h-5a2 2 0 0 1-1.995-1.85L13 18v-4a2 2 0 0 1 1.85-1.995L15 12zm-1-8a2 2 0 0 1 2 2v4h-7a3 3 0 0 0-3 3v6H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm1 10h-5v4h5zM4.173 6.173a1 1 0 0 0 0 1.414l1.915 1.915h-.586a1 1 0 0 0 0 2h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-2 0v.586L5.587 6.173a1 1 0 0 0-1.414 0" })));
typeof Symbol < "u" && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")));
typeof Symbol < "u" && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
function _r(e, t) {
  try {
    var n = e();
  } catch (r) {
    return t(r);
  }
  return n && n.then ? n.then(void 0, t) : n;
}
function qr(e) {
  return e.disablePictureInPicture;
}
function Dt(e) {
  return e.webkitSupportsPresentationMode && typeof e.webkitSetPresentationMode == "function";
}
function Zr() {
  return document.pictureInPictureEnabled;
}
var lo = function(t, n, r, o) {
  try {
    var l = function() {
      return function() {
        if (!n && document.pictureInPictureElement)
          return _r(function() {
            var c = function() {
              if (Dt(t.current))
                t.current.webkitSetPresentationMode("inline");
              else
                return Promise.resolve(document.exitPictureInPicture()).then(function() {
                });
            }();
            if (c && c.then)
              return c.then(function() {
              });
          }, function(c) {
            o && typeof o == "function" && o(c), console.error("Video failed to leave Picture-in-Picture mode.");
          });
      }();
    };
    if (t.current === null)
      return Promise.resolve();
    var a = function() {
      if (n)
        return _r(function() {
          var s = function() {
            if (Dt(t.current))
              t.current.webkitSetPresentationMode("picture-in-picture");
            else
              return Promise.resolve(t.current.requestPictureInPicture()).then(function() {
              });
          }();
          if (s && s.then)
            return s.then(function() {
            });
        }, function(s) {
          r && typeof r == "function" && r(s), console.error("Video failed to enter Picture-in-Picture mode.");
        });
    }();
    return Promise.resolve(a && a.then ? a.then(l) : l(a));
  } catch (s) {
    return Promise.reject(s);
  }
};
function ao(e, t) {
  var n = t || {}, r = n.onEnterPictureInPicture, o = n.onLeavePictureInPicture, l = n.onRequestPictureInPictureError, a = n.onExitPictureInPictureError, s = ue(!1), c = s[0], u = s[1], d = ue(!1), f = d[0], w = d[1];
  return ee(function() {
    lo(e, c, l, a);
  }, [e, c, l, a]), ee(function() {
    if (io(e.current), e.current !== null)
      return w((Dt(e.current) || Zr()) && !qr(e.current)), r && typeof r == "function" && e.current.addEventListener("enterpictureinpicture", r), o && typeof o == "function" && e.current.addEventListener("leavepictureinpicture", o), function() {
        e.current !== null && (r && typeof r == "function" && e.current.removeEventListener("enterpictureinpicture", r), o && typeof o == "function" && e.current.removeEventListener("leavepictureinpicture", o));
      };
  }, []), {
    isPictureInPictureActive: c,
    isPictureInPictureAvailable: f,
    togglePictureInPicture: u
  };
}
function io(e) {
  e === null && console.warn("vieoRef is not referencing to an element. Please pass the videoRef as ref in a video element."), e && e.nodeName.toLocaleLowerCase() !== "video" && console.warn("videoRef is currently referencing to a " + e.nodeName + " element. Plese pass it as ref in a video element."), e && !Zr() && !Dt(e) && console.warn("Picture in picture is not supported in your browser."), e && qr(e) && console.warn("Picture in picture is disabled in your browser. If you want to activate the feature, please enable it in the browser settings."), e && Dt(e) && console.warn("Your browser supports a none-standard Picture in picture API.");
}
const so = (e) => {
  const { video: t } = e, {
    isPictureInPictureActive: n,
    isPictureInPictureAvailable: r,
    togglePictureInPicture: o
  } = ao({ current: t }), l = (s) => {
    s.stopPropagation(), o(!n);
  }, a = rt("miniplayer-button");
  if (r)
    return /* @__PURE__ */ P.jsx("div", { className: a, onClick: l, children: /* @__PURE__ */ P.jsx(oo, { width: Qe, height: Qe }) });
}, co = (e) => /* @__PURE__ */ b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 192, height: 192, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ b.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2 }, /* @__PURE__ */ b.createElement("path", { d: "M9 18A6 6 0 1 1 9 6h11m-7 14h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-2v-3h3" }), /* @__PURE__ */ b.createElement("path", { d: "m17 9l3-3l-3-3" }))), uo = (e) => /* @__PURE__ */ b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 192, height: 192, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ b.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2 }, /* @__PURE__ */ b.createElement("path", { d: "M15 18a6 6 0 1 0 0-12H4" }), /* @__PURE__ */ b.createElement("path", { d: "M7 9L4 6l3-3m1 17h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H8v-3h3" }))), Rr = (e) => {
  const { isNext: t, onClick: n } = e, r = (a) => {
    a.stopPropagation(), n && n(t, 5);
  }, o = rt("seconds-forward-button"), l = t ? co : uo;
  return /* @__PURE__ */ P.jsx("div", { className: o, onClick: r, children: /* @__PURE__ */ P.jsx(l, { width: Qe, height: Qe }) });
}, Qr = (e, t) => e / t * 100, fo = (e) => {
  const { videoState: t } = e, n = Le(null), r = Le(null), [o, l] = ue(null), [a, s] = ue(0), c = Math.round(
    Qr(t.currentTime, t.duration)
  ), u = Math.round(t.bufferingProgress);
  ee(() => {
    n.current && s(n.current.clientWidth);
  }, [n, t.fullscreen]);
  const d = (m) => {
    var A;
    const { left: h, width: E } = m.currentTarget.getBoundingClientRect(), v = (m.clientX - h) / E;
    if (v < 0 || v > 1)
      return;
    const T = (t.duration * 1e3 || 0) * v / 1e3;
    (A = t.actions) == null || A.updateCurrentTime(T);
  }, f = (m) => {
    const { left: h, width: E } = m.currentTarget.getBoundingClientRect(), v = (m.clientX - h) / E;
    if (v < 0 || v > 1)
      return;
    const T = (t.duration * 1e3 || 0) * v / 1e3;
    l({ duration: T, left: m.clientX - h });
  }, w = rt("progress-bar"), y = xe(w);
  return /* @__PURE__ */ P.jsxs(
    "div",
    {
      className: y,
      onClick: d,
      onMouseEnter: f,
      onMouseMove: f,
      onMouseLeave: () => l(null),
      ref: n,
      children: [
        /* @__PURE__ */ P.jsx("div", { className: Ie(w, "overlay") }),
        o && /* @__PURE__ */ P.jsx(
          "div",
          {
            className: Ie(w, "hovered-bar"),
            style: { width: o.left }
          }
        ),
        o && /* @__PURE__ */ P.jsx(
          "div",
          {
            ref: r,
            className: Ie(w, "hovered-duration"),
            style: {
              left: r.current && a - (o == null ? void 0 : o.left) <= 12 ? a - 12 : o.left <= 12 ? 12 : o.left
            },
            children: jt(o.duration, jt(t.duration))
          }
        ),
        /* @__PURE__ */ P.jsx(
          "div",
          {
            className: Ie(w, "play-progress"),
            style: { width: c + "%" }
          }
        ),
        /* @__PURE__ */ P.jsx(
          "div",
          {
            className: Ie(w, "load-progress"),
            style: { width: u + "%" }
          }
        ),
        /* @__PURE__ */ P.jsx("div", { className: Ie(w, "hover") })
      ]
    }
  );
}, vo = (e) => /* @__PURE__ */ b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 192, height: 192, viewBox: "0 0 2048 2048", ...e }, /* @__PURE__ */ b.createElement("path", { fill: "currentColor", d: "M1152 1536v128h256v128H768v-128h256v-128H128v-384h128v256h1664V512h-512V384h640v1152zm128-512H0V128h293L421 0h438l128 128h293zm-128-768H933L805 128H475L347 256H128v640h1024zm-512 0q53 0 99 20t82 55t55 81t20 100q0 53-20 99t-55 82t-81 55t-100 20q-53 0-99-20t-82-55t-55-81t-20-100q0-53 20-99t55-82t81-55t100-20m0 384q27 0 50-10t40-27t28-41t10-50q0-27-10-50t-27-40t-41-28t-50-10q-27 0-50 10t-40 27t-28 41t-10 50q0 27 10 50t27 40t41 28t50 10" })), mo = (e) => {
  const { className: t, onClick: n } = e, r = (a) => {
    a.stopPropagation(), n && n();
  }, o = rt("screenshot-button"), l = xe(o, t);
  return /* @__PURE__ */ P.jsx("div", { className: l, onClick: r, children: /* @__PURE__ */ P.jsx(vo, { width: Qe, height: Qe }) });
}, ho = (e) => /* @__PURE__ */ b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 192, height: 192, viewBox: "0 0 14 14", ...e }, /* @__PURE__ */ b.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M9.512 6.056L1.693.656C1.297.407.815.474.467.737A1.142 1.142 0 0 0 0 1.632v10.705c0 .884.979 1.456 1.693 1.004l7.82-5.367c.65-.439.65-1.48 0-1.919Zm4.238-4.314a1 1 0 1 0-2 0v10.516a1 1 0 0 0 2 0z", clipRule: "evenodd" })), po = (e) => /* @__PURE__ */ b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 192, height: 192, viewBox: "0 0 14 14", ...e }, /* @__PURE__ */ b.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "m4.238 6.056l7.819-5.4c.396-.25.878-.183 1.226.08c.269.201.458.519.467.897v10.705c0 .884-.979 1.456-1.693 1.004l-7.82-5.367c-.65-.439-.65-1.48 0-1.919ZM0 1.742a1 1 0 1 1 2 0v10.516a1 1 0 1 1-2 0z", clipRule: "evenodd" })), Pr = (e) => {
  const { type: t, onClickNext: n, onClickPrev: r, className: o, disabled: l } = e, a = (d) => {
    d.stopPropagation(), !l && (t === "next" ? n && n() : r && r());
  }, s = rt("arrow-navigation-button"), c = xe(s, o, {
    [`${s}-disabled`]: l
  }), u = t === "next" ? ho : po;
  return /* @__PURE__ */ P.jsx("div", { className: c, onClick: a, children: /* @__PURE__ */ P.jsx(u, { width: Qe - 9, height: Qe - 9 }) });
}, Nt = Math.min, Ct = Math.max, Bt = Math.round, Ut = Math.floor, Et = (e) => ({
  x: e,
  y: e
}), go = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, yo = {
  start: "end",
  end: "start"
};
function nr(e, t, n) {
  return Ct(e, Nt(t, n));
}
function $t(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function _t(e) {
  return e.split("-")[0];
}
function Ht(e) {
  return e.split("-")[1];
}
function Jr(e) {
  return e === "x" ? "y" : "x";
}
function cr(e) {
  return e === "y" ? "height" : "width";
}
function Yt(e) {
  return ["top", "bottom"].includes(_t(e)) ? "y" : "x";
}
function ur(e) {
  return Jr(Yt(e));
}
function wo(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ht(e), o = ur(e), l = cr(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[l] > t.floating[l] && (a = zt(a)), [a, zt(a)];
}
function bo(e) {
  const t = zt(e);
  return [or(e), t, or(t)];
}
function or(e) {
  return e.replace(/start|end/g, (t) => yo[t]);
}
function Eo(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], l = ["top", "bottom"], a = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? l : a;
    default:
      return [];
  }
}
function xo(e, t, n, r) {
  const o = Ht(e);
  let l = Eo(_t(e), n === "start", r);
  return o && (l = l.map((a) => a + "-" + o), t && (l = l.concat(l.map(or)))), l;
}
function zt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => go[t]);
}
function So(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function en(e) {
  return typeof e != "number" ? So(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Kt(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function kr(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const l = Yt(t), a = ur(t), s = cr(a), c = _t(t), u = l === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, w = r[s] / 2 - o[s] / 2;
  let y;
  switch (c) {
    case "top":
      y = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      y = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      y = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      y = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      y = {
        x: r.x,
        y: r.y
      };
  }
  switch (Ht(t)) {
    case "start":
      y[a] -= w * (n && u ? -1 : 1);
      break;
    case "end":
      y[a] += w * (n && u ? -1 : 1);
      break;
  }
  return y;
}
const Co = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: l = [],
    platform: a
  } = n, s = l.filter(Boolean), c = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let u = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: f
  } = kr(u, r, c), w = r, y = {}, m = 0;
  for (let h = 0; h < s.length; h++) {
    const {
      name: E,
      fn: v
    } = s[h], {
      x: p,
      y: x,
      data: T,
      reset: A
    } = await v({
      x: d,
      y: f,
      initialPlacement: r,
      placement: w,
      strategy: o,
      middlewareData: y,
      rects: u,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = p ?? d, f = x ?? f, y = {
      ...y,
      [E]: {
        ...y[E],
        ...T
      }
    }, A && m <= 50 && (m++, typeof A == "object" && (A.placement && (w = A.placement), A.rects && (u = A.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : A.rects), {
      x: d,
      y: f
    } = kr(u, w, c)), h = -1);
  }
  return {
    x: d,
    y: f,
    placement: w,
    strategy: o,
    middlewareData: y
  };
};
async function tn(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: l,
    rects: a,
    elements: s,
    strategy: c
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: w = !1,
    padding: y = 0
  } = $t(t, e), m = en(y), E = s[w ? f === "floating" ? "reference" : "floating" : f], v = Kt(await l.getClippingRect({
    element: (n = await (l.isElement == null ? void 0 : l.isElement(E))) == null || n ? E : E.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: c
  })), p = f === "floating" ? {
    ...a.floating,
    x: r,
    y: o
  } : a.reference, x = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(s.floating)), T = await (l.isElement == null ? void 0 : l.isElement(x)) ? await (l.getScale == null ? void 0 : l.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, A = Kt(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: p,
    offsetParent: x,
    strategy: c
  }) : p);
  return {
    top: (v.top - A.top + m.top) / T.y,
    bottom: (A.bottom - v.bottom + m.bottom) / T.y,
    left: (v.left - A.left + m.left) / T.x,
    right: (A.right - v.right + m.right) / T.x
  };
}
const _o = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: l,
      platform: a,
      elements: s,
      middlewareData: c
    } = t, {
      element: u,
      padding: d = 0
    } = $t(e, t) || {};
    if (u == null)
      return {};
    const f = en(d), w = {
      x: n,
      y: r
    }, y = ur(o), m = cr(y), h = await a.getDimensions(u), E = y === "y", v = E ? "top" : "left", p = E ? "bottom" : "right", x = E ? "clientHeight" : "clientWidth", T = l.reference[m] + l.reference[y] - w[y] - l.floating[m], A = w[y] - l.reference[y], te = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let H = te ? te[x] : 0;
    (!H || !await (a.isElement == null ? void 0 : a.isElement(te))) && (H = s.floating[x] || l.floating[m]);
    const re = T / 2 - A / 2, Y = H / 2 - h[m] / 2 - 1, Q = Nt(f[v], Y), J = Nt(f[p], Y), K = Q, oe = H - h[m] - J, U = H / 2 - h[m] / 2 + re, ne = nr(K, U, oe), G = !c.arrow && Ht(o) != null && U !== ne && l.reference[m] / 2 - (U < K ? Q : J) - h[m] / 2 < 0, $ = G ? U < K ? U - K : U - oe : 0;
    return {
      [y]: w[y] + $,
      data: {
        [y]: ne,
        centerOffset: U - ne - $,
        ...G && {
          alignmentOffset: $
        }
      },
      reset: G
    };
  }
}), Ro = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: l,
        rects: a,
        initialPlacement: s,
        platform: c,
        elements: u
      } = t, {
        mainAxis: d = !0,
        crossAxis: f = !0,
        fallbackPlacements: w,
        fallbackStrategy: y = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: h = !0,
        ...E
      } = $t(e, t);
      if ((n = l.arrow) != null && n.alignmentOffset)
        return {};
      const v = _t(o), p = _t(s) === s, x = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)), T = w || (p || !h ? [zt(s)] : bo(s));
      !w && m !== "none" && T.push(...xo(s, h, m, x));
      const A = [s, ...T], te = await tn(t, E), H = [];
      let re = ((r = l.flip) == null ? void 0 : r.overflows) || [];
      if (d && H.push(te[v]), f) {
        const K = wo(o, a, x);
        H.push(te[K[0]], te[K[1]]);
      }
      if (re = [...re, {
        placement: o,
        overflows: H
      }], !H.every((K) => K <= 0)) {
        var Y, Q;
        const K = (((Y = l.flip) == null ? void 0 : Y.index) || 0) + 1, oe = A[K];
        if (oe)
          return {
            data: {
              index: K,
              overflows: re
            },
            reset: {
              placement: oe
            }
          };
        let U = (Q = re.filter((ne) => ne.overflows[0] <= 0).sort((ne, G) => ne.overflows[1] - G.overflows[1])[0]) == null ? void 0 : Q.placement;
        if (!U)
          switch (y) {
            case "bestFit": {
              var J;
              const ne = (J = re.map((G) => [G.placement, G.overflows.filter(($) => $ > 0).reduce(($, B) => $ + B, 0)]).sort((G, $) => G[1] - $[1])[0]) == null ? void 0 : J[0];
              ne && (U = ne);
              break;
            }
            case "initialPlacement":
              U = s;
              break;
          }
        if (o !== U)
          return {
            reset: {
              placement: U
            }
          };
      }
      return {};
    }
  };
};
async function Po(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, l = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = _t(n), s = Ht(n), c = Yt(n) === "y", u = ["left", "top"].includes(a) ? -1 : 1, d = l && c ? -1 : 1, f = $t(t, e);
  let {
    mainAxis: w,
    crossAxis: y,
    alignmentAxis: m
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...f
  };
  return s && typeof m == "number" && (y = s === "end" ? m * -1 : m), c ? {
    x: y * d,
    y: w * u
  } : {
    x: w * u,
    y: y * d
  };
}
const ko = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: l,
        placement: a,
        middlewareData: s
      } = t, c = await Po(t, e);
      return a === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: l + c.y,
        data: {
          ...c,
          placement: a
        }
      };
    }
  };
}, Oo = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: l = !0,
        crossAxis: a = !1,
        limiter: s = {
          fn: (E) => {
            let {
              x: v,
              y: p
            } = E;
            return {
              x: v,
              y: p
            };
          }
        },
        ...c
      } = $t(e, t), u = {
        x: n,
        y: r
      }, d = await tn(t, c), f = Yt(_t(o)), w = Jr(f);
      let y = u[w], m = u[f];
      if (l) {
        const E = w === "y" ? "top" : "left", v = w === "y" ? "bottom" : "right", p = y + d[E], x = y - d[v];
        y = nr(p, y, x);
      }
      if (a) {
        const E = f === "y" ? "top" : "left", v = f === "y" ? "bottom" : "right", p = m + d[E], x = m - d[v];
        m = nr(p, m, x);
      }
      const h = s.fn({
        ...t,
        [w]: y,
        [f]: m
      });
      return {
        ...h,
        data: {
          x: h.x - n,
          y: h.y - r
        }
      };
    }
  };
};
function xt(e) {
  return rn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function tt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function yt(e) {
  var t;
  return (t = (rn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function rn(e) {
  return e instanceof Node || e instanceof tt(e).Node;
}
function gt(e) {
  return e instanceof Element || e instanceof tt(e).Element;
}
function ht(e) {
  return e instanceof HTMLElement || e instanceof tt(e).HTMLElement;
}
function Or(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof tt(e).ShadowRoot;
}
function Vt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = st(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function To(e) {
  return ["table", "td", "th"].includes(xt(e));
}
function fr(e) {
  const t = dr(), n = st(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Ao(e) {
  let t = Mt(e);
  for (; ht(t) && !Gt(t); ) {
    if (fr(t))
      return t;
    t = Mt(t);
  }
  return null;
}
function dr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Gt(e) {
  return ["html", "body", "#document"].includes(xt(e));
}
function st(e) {
  return tt(e).getComputedStyle(e);
}
function Xt(e) {
  return gt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Mt(e) {
  if (xt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Or(e) && e.host || // Fallback.
    yt(e)
  );
  return Or(t) ? t.host : t;
}
function nn(e) {
  const t = Mt(e);
  return Gt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ht(t) && Vt(t) ? t : nn(t);
}
function Ft(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = nn(e), l = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = tt(o);
  return l ? t.concat(a, a.visualViewport || [], Vt(o) ? o : [], a.frameElement && n ? Ft(a.frameElement) : []) : t.concat(o, Ft(o, [], n));
}
function on(e) {
  const t = st(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ht(e), l = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Bt(n) !== l || Bt(r) !== a;
  return s && (n = l, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function vr(e) {
  return gt(e) ? e : e.contextElement;
}
function Tt(e) {
  const t = vr(e);
  if (!ht(t))
    return Et(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: l
  } = on(t);
  let a = (l ? Bt(n.width) : n.width) / r, s = (l ? Bt(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const No = /* @__PURE__ */ Et(0);
function ln(e) {
  const t = tt(e);
  return !dr() || !t.visualViewport ? No : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Mo(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== tt(e) ? !1 : t;
}
function Rt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), l = vr(e);
  let a = Et(1);
  t && (r ? gt(r) && (a = Tt(r)) : a = Tt(e));
  const s = Mo(l, n, r) ? ln(l) : Et(0);
  let c = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, d = o.width / a.x, f = o.height / a.y;
  if (l) {
    const w = tt(l), y = r && gt(r) ? tt(r) : r;
    let m = w, h = m.frameElement;
    for (; h && r && y !== m; ) {
      const E = Tt(h), v = h.getBoundingClientRect(), p = st(h), x = v.left + (h.clientLeft + parseFloat(p.paddingLeft)) * E.x, T = v.top + (h.clientTop + parseFloat(p.paddingTop)) * E.y;
      c *= E.x, u *= E.y, d *= E.x, f *= E.y, c += x, u += T, m = tt(h), h = m.frameElement;
    }
  }
  return Kt({
    width: d,
    height: f,
    x: c,
    y: u
  });
}
const Lo = [":popover-open", ":modal"];
function an(e) {
  return Lo.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Io(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const l = o === "fixed", a = yt(r), s = t ? an(t.floating) : !1;
  if (r === a || s && l)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Et(1);
  const d = Et(0), f = ht(r);
  if ((f || !f && !l) && ((xt(r) !== "body" || Vt(a)) && (c = Xt(r)), ht(r))) {
    const w = Rt(r);
    u = Tt(r), d.x = w.x + r.clientLeft, d.y = w.y + r.clientTop;
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - c.scrollLeft * u.x + d.x,
    y: n.y * u.y - c.scrollTop * u.y + d.y
  };
}
function jo(e) {
  return Array.from(e.getClientRects());
}
function sn(e) {
  return Rt(yt(e)).left + Xt(e).scrollLeft;
}
function Do(e) {
  const t = yt(e), n = Xt(e), r = e.ownerDocument.body, o = Ct(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), l = Ct(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + sn(e);
  const s = -n.scrollTop;
  return st(r).direction === "rtl" && (a += Ct(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: l,
    x: a,
    y: s
  };
}
function Fo(e, t) {
  const n = tt(e), r = yt(e), o = n.visualViewport;
  let l = r.clientWidth, a = r.clientHeight, s = 0, c = 0;
  if (o) {
    l = o.width, a = o.height;
    const u = dr();
    (!u || u && t === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: l,
    height: a,
    x: s,
    y: c
  };
}
function $o(e, t) {
  const n = Rt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, l = ht(e) ? Tt(e) : Et(1), a = e.clientWidth * l.x, s = e.clientHeight * l.y, c = o * l.x, u = r * l.y;
  return {
    width: a,
    height: s,
    x: c,
    y: u
  };
}
function Tr(e, t, n) {
  let r;
  if (t === "viewport")
    r = Fo(e, n);
  else if (t === "document")
    r = Do(yt(e));
  else if (gt(t))
    r = $o(t, n);
  else {
    const o = ln(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return Kt(r);
}
function cn(e, t) {
  const n = Mt(e);
  return n === t || !gt(n) || Gt(n) ? !1 : st(n).position === "fixed" || cn(n, t);
}
function Ho(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ft(e, [], !1).filter((s) => gt(s) && xt(s) !== "body"), o = null;
  const l = st(e).position === "fixed";
  let a = l ? Mt(e) : e;
  for (; gt(a) && !Gt(a); ) {
    const s = st(a), c = fr(a);
    !c && s.position === "fixed" && (o = null), (l ? !c && !o : !c && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Vt(a) && !c && cn(e, a)) ? r = r.filter((d) => d !== a) : o = s, a = Mt(a);
  }
  return t.set(e, r), r;
}
function Vo(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? Ho(t, this._c) : [].concat(n), r], s = a[0], c = a.reduce((u, d) => {
    const f = Tr(t, d, o);
    return u.top = Ct(f.top, u.top), u.right = Nt(f.right, u.right), u.bottom = Nt(f.bottom, u.bottom), u.left = Ct(f.left, u.left), u;
  }, Tr(t, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Uo(e) {
  const {
    width: t,
    height: n
  } = on(e);
  return {
    width: t,
    height: n
  };
}
function Wo(e, t, n) {
  const r = ht(t), o = yt(t), l = n === "fixed", a = Rt(e, !0, l, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Et(0);
  if (r || !r && !l)
    if ((xt(t) !== "body" || Vt(o)) && (s = Xt(t)), r) {
      const f = Rt(t, !0, l, t);
      c.x = f.x + t.clientLeft, c.y = f.y + t.clientTop;
    } else
      o && (c.x = sn(o));
  const u = a.left + s.scrollLeft - c.x, d = a.top + s.scrollTop - c.y;
  return {
    x: u,
    y: d,
    width: a.width,
    height: a.height
  };
}
function Ar(e, t) {
  return !ht(e) || st(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function un(e, t) {
  const n = tt(e);
  if (!ht(e) || an(e))
    return n;
  let r = Ar(e, t);
  for (; r && To(r) && st(r).position === "static"; )
    r = Ar(r, t);
  return r && (xt(r) === "html" || xt(r) === "body" && st(r).position === "static" && !fr(r)) ? n : r || Ao(e) || n;
}
const Bo = async function(e) {
  const t = this.getOffsetParent || un, n = this.getDimensions;
  return {
    reference: Wo(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      ...await n(e.floating)
    }
  };
};
function zo(e) {
  return st(e).direction === "rtl";
}
const Ko = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Io,
  getDocumentElement: yt,
  getClippingRect: Vo,
  getOffsetParent: un,
  getElementRects: Bo,
  getClientRects: jo,
  getDimensions: Uo,
  getScale: Tt,
  isElement: gt,
  isRTL: zo
};
function Yo(e, t) {
  let n = null, r;
  const o = yt(e);
  function l() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function a(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), l();
    const {
      left: u,
      top: d,
      width: f,
      height: w
    } = e.getBoundingClientRect();
    if (s || t(), !f || !w)
      return;
    const y = Ut(d), m = Ut(o.clientWidth - (u + f)), h = Ut(o.clientHeight - (d + w)), E = Ut(u), p = {
      rootMargin: -y + "px " + -m + "px " + -h + "px " + -E + "px",
      threshold: Ct(0, Nt(1, c)) || 1
    };
    let x = !0;
    function T(A) {
      const te = A[0].intersectionRatio;
      if (te !== c) {
        if (!x)
          return a();
        te ? a(!1, te) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 100);
      }
      x = !1;
    }
    try {
      n = new IntersectionObserver(T, {
        ...p,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(T, p);
    }
    n.observe(e);
  }
  return a(!0), l;
}
function Go(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: l = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, u = vr(e), d = o || l ? [...u ? Ft(u) : [], ...Ft(t)] : [];
  d.forEach((v) => {
    o && v.addEventListener("scroll", n, {
      passive: !0
    }), l && v.addEventListener("resize", n);
  });
  const f = u && s ? Yo(u, n) : null;
  let w = -1, y = null;
  a && (y = new ResizeObserver((v) => {
    let [p] = v;
    p && p.target === u && y && (y.unobserve(t), cancelAnimationFrame(w), w = requestAnimationFrame(() => {
      var x;
      (x = y) == null || x.observe(t);
    })), n();
  }), u && !c && y.observe(u), y.observe(t));
  let m, h = c ? Rt(e) : null;
  c && E();
  function E() {
    const v = Rt(e);
    h && (v.x !== h.x || v.y !== h.y || v.width !== h.width || v.height !== h.height) && n(), h = v, m = requestAnimationFrame(E);
  }
  return n(), () => {
    var v;
    d.forEach((p) => {
      o && p.removeEventListener("scroll", n), l && p.removeEventListener("resize", n);
    }), f == null || f(), (v = y) == null || v.disconnect(), y = null, c && cancelAnimationFrame(m);
  };
}
const Xo = Oo, qo = Ro, Zo = _o, Nr = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Ko,
    ...n
  }, l = {
    ...o.platform,
    _c: r
  };
  return Co(e, t, {
    ...o,
    platform: l
  });
};
/*
* React Tooltip
* {@link https://github.com/ReactTooltip/react-tooltip}
* @copyright ReactTooltip Team
* @license MIT
*/
const Qo = "react-tooltip-core-styles", Jo = "react-tooltip-base-styles", Mr = { core: !1, base: !1 };
function Lr({ css: e, id: t = Jo, type: n = "base", ref: r }) {
  var o, l;
  if (!e || typeof document > "u" || Mr[n] || n === "core" && typeof process < "u" && (!((o = process == null ? void 0 : process.env) === null || o === void 0) && o.REACT_TOOLTIP_DISABLE_CORE_STYLES) || n !== "base" && typeof process < "u" && (!((l = process == null ? void 0 : process.env) === null || l === void 0) && l.REACT_TOOLTIP_DISABLE_BASE_STYLES))
    return;
  n === "core" && (t = Qo), r || (r = {});
  const { insertAt: a } = r;
  if (document.getElementById(t))
    return void console.warn(`[react-tooltip] Element with id '${t}' already exists. Call \`removeStyle()\` first`);
  const s = document.head || document.getElementsByTagName("head")[0], c = document.createElement("style");
  c.id = t, c.type = "text/css", a === "top" && s.firstChild ? s.insertBefore(c, s.firstChild) : s.appendChild(c), c.styleSheet ? c.styleSheet.cssText = e : c.appendChild(document.createTextNode(e)), Mr[n] = !0;
}
const Ir = async ({ elementReference: e = null, tooltipReference: t = null, tooltipArrowReference: n = null, place: r = "top", offset: o = 10, strategy: l = "absolute", middlewares: a = [ko(Number(o)), qo({ fallbackAxisSideDirection: "start" }), Xo({ padding: 5 })], border: s }) => {
  if (!e)
    return { tooltipStyles: {}, tooltipArrowStyles: {}, place: r };
  if (t === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {}, place: r };
  const c = a;
  return n ? (c.push(Zo({ element: n, padding: 5 })), Nr(e, t, { placement: r, strategy: l, middleware: c }).then(({ x: u, y: d, placement: f, middlewareData: w }) => {
    var y, m;
    const h = { left: `${u}px`, top: `${d}px`, border: s }, { x: E, y: v } = (y = w.arrow) !== null && y !== void 0 ? y : { x: 0, y: 0 }, p = (m = { top: "bottom", right: "left", bottom: "top", left: "right" }[f.split("-")[0]]) !== null && m !== void 0 ? m : "bottom", x = s && { borderBottom: s, borderRight: s };
    let T = 0;
    if (s) {
      const A = `${s}`.match(/(\d+)px/);
      T = A != null && A[1] ? Number(A[1]) : 1;
    }
    return { tooltipStyles: h, tooltipArrowStyles: { left: E != null ? `${E}px` : "", top: v != null ? `${v}px` : "", right: "", bottom: "", ...x, [p]: `-${4 + T}px` }, place: f };
  })) : Nr(e, t, { placement: "bottom", strategy: l, middleware: c }).then(({ x: u, y: d, placement: f }) => ({ tooltipStyles: { left: `${u}px`, top: `${d}px` }, tooltipArrowStyles: {}, place: f }));
}, jr = (e, t) => !("CSS" in window && "supports" in window.CSS) || window.CSS.supports(e, t), Dr = (e, t, n) => {
  let r = null;
  const o = function(...l) {
    const a = () => {
      r = null, n || e.apply(this, l);
    };
    n && !r && (e.apply(this, l), r = setTimeout(a, t)), n || (r && clearTimeout(r), r = setTimeout(a, t));
  };
  return o.cancel = () => {
    r && (clearTimeout(r), r = null);
  }, o;
}, Fr = (e) => e !== null && !Array.isArray(e) && typeof e == "object", lr = (e, t) => {
  if (e === t)
    return !0;
  if (Array.isArray(e) && Array.isArray(t))
    return e.length === t.length && e.every((o, l) => lr(o, t[l]));
  if (Array.isArray(e) !== Array.isArray(t))
    return !1;
  if (!Fr(e) || !Fr(t))
    return e === t;
  const n = Object.keys(e), r = Object.keys(t);
  return n.length === r.length && n.every((o) => lr(e[o], t[o]));
}, el = (e) => {
  if (!(e instanceof HTMLElement || e instanceof SVGElement))
    return !1;
  const t = getComputedStyle(e);
  return ["overflow", "overflow-x", "overflow-y"].some((n) => {
    const r = t.getPropertyValue(n);
    return r === "auto" || r === "scroll";
  });
}, $r = (e) => {
  if (!e)
    return null;
  let t = e.parentElement;
  for (; t; ) {
    if (el(t))
      return t;
    t = t.parentElement;
  }
  return document.scrollingElement || document.documentElement;
}, tl = typeof window < "u" ? yn : ee, rl = "DEFAULT_TOOLTIP_ID", nl = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, ol = mn({ getTooltipData: () => nl });
function fn(e = rl) {
  return hn(ol).getTooltipData(e);
}
var kt = { tooltip: "core-styles-module_tooltip__3vRRp", fixed: "core-styles-module_fixed__pcSol", arrow: "core-styles-module_arrow__cvMwQ", noArrow: "core-styles-module_noArrow__xock6", clickable: "core-styles-module_clickable__ZuTTB", show: "core-styles-module_show__Nt9eE", closing: "core-styles-module_closing__sGnxF" }, Zt = { tooltip: "styles-module_tooltip__mnnfp", arrow: "styles-module_arrow__K0L3T", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const ll = ({ forwardRef: e, id: t, className: n, classNameArrow: r, variant: o = "dark", anchorId: l, anchorSelect: a, place: s = "top", offset: c = 10, events: u = ["hover"], openOnClick: d = !1, positionStrategy: f = "absolute", middlewares: w, wrapper: y, delayShow: m = 0, delayHide: h = 0, float: E = !1, hidden: v = !1, noArrow: p = !1, clickable: x = !1, closeOnEsc: T = !1, closeOnScroll: A = !1, closeOnResize: te = !1, openEvents: H, closeEvents: re, globalCloseEvents: Y, imperativeModeOnly: Q, style: J, position: K, afterShow: oe, afterHide: U, content: ne, contentWrapperRef: G, isOpen: $, defaultIsOpen: B = !1, setIsOpen: W, activeAnchor: X, setActiveAnchor: Re, border: je, opacity: be, arrowColor: ze, role: De = "tooltip" }) => {
  var z;
  const se = Le(null), ge = Le(null), N = Le(null), ce = Le(null), He = Le(null), [Te, Ke] = ue({ tooltipStyles: {}, tooltipArrowStyles: {}, place: s }), [ye, Fe] = ue(!1), [Ce, he] = ue(!1), [le, $e] = ue(null), Ee = Le(!1), ve = Le(null), { anchorRefs: Pe, setActiveAnchor: Je } = fn(t), I = Le(!1), [fe, ke] = ue([]), we = Le(!1), ct = d || u.includes("click"), dt = ct || (H == null ? void 0 : H.click) || (H == null ? void 0 : H.dblclick) || (H == null ? void 0 : H.mousedown), nt = H ? { ...H } : { mouseenter: !0, focus: !0, click: !1, dblclick: !1, mousedown: !1 };
  !H && ct && Object.assign(nt, { mouseenter: !1, focus: !1, click: !0 });
  const Ae = re ? { ...re } : { mouseleave: !0, blur: !0, click: !1, dblclick: !1, mouseup: !1 };
  !re && ct && Object.assign(Ae, { mouseleave: !1, blur: !1 });
  const Ve = Y ? { ...Y } : { escape: T || !1, scroll: A || !1, resize: te || !1, clickOutsideAnchor: dt || !1 };
  Q && (Object.assign(nt, { mouseenter: !1, focus: !1, click: !1, dblclick: !1, mousedown: !1 }), Object.assign(Ae, { mouseleave: !1, blur: !1, click: !1, dblclick: !1, mouseup: !1 }), Object.assign(Ve, { escape: !1, scroll: !1, resize: !1, clickOutsideAnchor: !1 })), tl(() => (we.current = !0, () => {
    we.current = !1;
  }), []);
  const ae = (C) => {
    we.current && (C && he(!0), setTimeout(() => {
      we.current && (W == null || W(C), $ === void 0 && Fe(C));
    }, 10));
  };
  ee(() => {
    if ($ === void 0)
      return () => null;
    $ && he(!0);
    const C = setTimeout(() => {
      Fe($);
    }, 10);
    return () => {
      clearTimeout(C);
    };
  }, [$]), ee(() => {
    if (ye !== Ee.current)
      if (He.current && clearTimeout(He.current), Ee.current = ye, ye)
        oe == null || oe();
      else {
        const C = ((F) => {
          const V = F.match(/^([\d.]+)(ms|s)$/);
          if (!V)
            return 0;
          const [, pe, Se] = V;
          return Number(pe) * (Se === "ms" ? 1 : 1e3);
        })(getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay"));
        He.current = setTimeout(() => {
          he(!1), $e(null), U == null || U();
        }, C + 25);
      }
  }, [ye]);
  const ot = (C) => {
    Ke((F) => lr(F, C) ? F : C);
  }, Ye = (C = m) => {
    N.current && clearTimeout(N.current), Ce ? ae(!0) : N.current = setTimeout(() => {
      ae(!0);
    }, C);
  }, lt = (C = h) => {
    ce.current && clearTimeout(ce.current), ce.current = setTimeout(() => {
      I.current || ae(!1);
    }, C);
  }, vt = (C) => {
    var F;
    if (!C)
      return;
    const V = (F = C.currentTarget) !== null && F !== void 0 ? F : C.target;
    if (!(V != null && V.isConnected))
      return Re(null), void Je({ current: null });
    m ? Ye() : ae(!0), Re(V), Je({ current: V }), ce.current && clearTimeout(ce.current);
  }, mt = () => {
    x ? lt(h || 100) : h ? lt() : ae(!1), N.current && clearTimeout(N.current);
  }, Ue = ({ x: C, y: F }) => {
    var V;
    const pe = { getBoundingClientRect: () => ({ x: C, y: F, width: 0, height: 0, top: F, left: C, right: C, bottom: F }) };
    Ir({ place: (V = le == null ? void 0 : le.place) !== null && V !== void 0 ? V : s, offset: c, elementReference: pe, tooltipReference: se.current, tooltipArrowReference: ge.current, strategy: f, middlewares: w, border: je }).then((Se) => {
      ot(Se);
    });
  }, at = (C) => {
    if (!C)
      return;
    const F = C, V = { x: F.clientX, y: F.clientY };
    Ue(V), ve.current = V;
  }, Ge = (C) => {
    var F;
    if (!ye)
      return;
    const V = C.target;
    V.isConnected && (!((F = se.current) === null || F === void 0) && F.contains(V) || [document.querySelector(`[id='${l}']`), ...fe].some((pe) => pe == null ? void 0 : pe.contains(V)) || (ae(!1), N.current && clearTimeout(N.current)));
  }, it = Dr(vt, 50, !0), me = Dr(mt, 50, !0), Ne = (C) => {
    me.cancel(), it(C);
  }, j = () => {
    it.cancel(), me();
  }, q = pn(() => {
    var C, F;
    const V = (C = le == null ? void 0 : le.position) !== null && C !== void 0 ? C : K;
    V ? Ue(V) : E ? ve.current && Ue(ve.current) : X != null && X.isConnected && Ir({ place: (F = le == null ? void 0 : le.place) !== null && F !== void 0 ? F : s, offset: c, elementReference: X, tooltipReference: se.current, tooltipArrowReference: ge.current, strategy: f, middlewares: w, border: je }).then((pe) => {
      we.current && ot(pe);
    });
  }, [ye, X, ne, J, s, le == null ? void 0 : le.place, c, f, K, le == null ? void 0 : le.position, E]);
  ee(() => {
    var C, F;
    const V = new Set(Pe);
    fe.forEach((D) => {
      V.add({ current: D });
    });
    const pe = document.querySelector(`[id='${l}']`);
    pe && V.add({ current: pe });
    const Se = () => {
      ae(!1);
    }, Oe = $r(X), qe = $r(se.current);
    Ve.scroll && (window.addEventListener("scroll", Se), Oe == null || Oe.addEventListener("scroll", Se), qe == null || qe.addEventListener("scroll", Se));
    let _e = null;
    Ve.resize ? window.addEventListener("resize", Se) : X && se.current && (_e = Go(X, se.current, q, { ancestorResize: !0, elementResize: !0, layoutShift: !0 }));
    const i = (D) => {
      D.key === "Escape" && ae(!1);
    };
    Ve.escape && window.addEventListener("keydown", i), Ve.clickOutsideAnchor && window.addEventListener("click", Ge);
    const g = [], S = (D) => {
      ye && (D == null ? void 0 : D.target) === X || vt(D);
    }, R = (D) => {
      ye && (D == null ? void 0 : D.target) === X && mt();
    }, k = ["mouseenter", "mouseleave", "focus", "blur"], _ = ["click", "dblclick", "mousedown", "mouseup"];
    Object.entries(nt).forEach(([D, Z]) => {
      Z && (k.includes(D) ? g.push({ event: D, listener: Ne }) : _.includes(D) && g.push({ event: D, listener: S }));
    }), Object.entries(Ae).forEach(([D, Z]) => {
      Z && (k.includes(D) ? g.push({ event: D, listener: j }) : _.includes(D) && g.push({ event: D, listener: R }));
    }), E && g.push({ event: "pointermove", listener: at });
    const L = () => {
      I.current = !0;
    }, M = () => {
      I.current = !1, mt();
    };
    return x && !dt && ((C = se.current) === null || C === void 0 || C.addEventListener("mouseenter", L), (F = se.current) === null || F === void 0 || F.addEventListener("mouseleave", M)), g.forEach(({ event: D, listener: Z }) => {
      V.forEach((ie) => {
        var de;
        (de = ie.current) === null || de === void 0 || de.addEventListener(D, Z);
      });
    }), () => {
      var D, Z;
      Ve.scroll && (window.removeEventListener("scroll", Se), Oe == null || Oe.removeEventListener("scroll", Se), qe == null || qe.removeEventListener("scroll", Se)), Ve.resize ? window.removeEventListener("resize", Se) : _e == null || _e(), Ve.clickOutsideAnchor && window.removeEventListener("click", Ge), Ve.escape && window.removeEventListener("keydown", i), x && !dt && ((D = se.current) === null || D === void 0 || D.removeEventListener("mouseenter", L), (Z = se.current) === null || Z === void 0 || Z.removeEventListener("mouseleave", M)), g.forEach(({ event: ie, listener: de }) => {
        V.forEach((ut) => {
          var pt;
          (pt = ut.current) === null || pt === void 0 || pt.removeEventListener(ie, de);
        });
      });
    };
  }, [X, q, Ce, Pe, fe, H, re, Y, ct, m, h]), ee(() => {
    var C, F;
    let V = (F = (C = le == null ? void 0 : le.anchorSelect) !== null && C !== void 0 ? C : a) !== null && F !== void 0 ? F : "";
    !V && t && (V = `[data-tooltip-id='${t}']`);
    const pe = new MutationObserver((Se) => {
      const Oe = [], qe = [];
      Se.forEach((_e) => {
        if (_e.type === "attributes" && _e.attributeName === "data-tooltip-id" && (_e.target.getAttribute("data-tooltip-id") === t ? Oe.push(_e.target) : _e.oldValue === t && qe.push(_e.target)), _e.type === "childList") {
          if (X) {
            const i = [..._e.removedNodes].filter((g) => g.nodeType === 1);
            if (V)
              try {
                qe.push(...i.filter((g) => g.matches(V))), qe.push(...i.flatMap((g) => [...g.querySelectorAll(V)]));
              } catch {
              }
            i.some((g) => {
              var S;
              return !!(!((S = g == null ? void 0 : g.contains) === null || S === void 0) && S.call(g, X)) && (he(!1), ae(!1), Re(null), N.current && clearTimeout(N.current), ce.current && clearTimeout(ce.current), !0);
            });
          }
          if (V)
            try {
              const i = [..._e.addedNodes].filter((g) => g.nodeType === 1);
              Oe.push(...i.filter((g) => g.matches(V))), Oe.push(...i.flatMap((g) => [...g.querySelectorAll(V)]));
            } catch {
            }
        }
      }), (Oe.length || qe.length) && ke((_e) => [..._e.filter((i) => !qe.includes(i)), ...Oe]);
    });
    return pe.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"], attributeOldValue: !0 }), () => {
      pe.disconnect();
    };
  }, [t, a, le == null ? void 0 : le.anchorSelect, X]), ee(() => {
    q();
  }, [q]), ee(() => {
    if (!(G != null && G.current))
      return () => null;
    const C = new ResizeObserver(() => {
      setTimeout(() => q());
    });
    return C.observe(G.current), () => {
      C.disconnect();
    };
  }, [ne, G == null ? void 0 : G.current]), ee(() => {
    var C;
    const F = document.querySelector(`[id='${l}']`), V = [...fe, F];
    X && V.includes(X) || Re((C = fe[0]) !== null && C !== void 0 ? C : F);
  }, [l, fe, X]), ee(() => (B && ae(!0), () => {
    N.current && clearTimeout(N.current), ce.current && clearTimeout(ce.current);
  }), []), ee(() => {
    var C;
    let F = (C = le == null ? void 0 : le.anchorSelect) !== null && C !== void 0 ? C : a;
    if (!F && t && (F = `[data-tooltip-id='${t}']`), F)
      try {
        const V = Array.from(document.querySelectorAll(F));
        ke(V);
      } catch {
        ke([]);
      }
  }, [t, a, le == null ? void 0 : le.anchorSelect]), ee(() => {
    N.current && (clearTimeout(N.current), Ye(m));
  }, [m]);
  const Me = (z = le == null ? void 0 : le.content) !== null && z !== void 0 ? z : ne, Xe = ye && Object.keys(Te.tooltipStyles).length > 0;
  return gn(e, () => ({ open: (C) => {
    if (C != null && C.anchorSelect)
      try {
        document.querySelector(C.anchorSelect);
      } catch {
        return void console.warn(`[react-tooltip] "${C.anchorSelect}" is not a valid CSS selector`);
      }
    $e(C ?? null), C != null && C.delay ? Ye(C.delay) : ae(!0);
  }, close: (C) => {
    C != null && C.delay ? lt(C.delay) : ae(!1);
  }, activeAnchor: X, place: Te.place, isOpen: !!(Ce && !v && Me && Xe) })), Ce && !v && Me ? Ze.createElement(y, { id: t, role: De, className: xe("react-tooltip", kt.tooltip, Zt.tooltip, Zt[o], n, `react-tooltip__place-${Te.place}`, kt[Xe ? "show" : "closing"], Xe ? "react-tooltip__show" : "react-tooltip__closing", f === "fixed" && kt.fixed, x && kt.clickable), onTransitionEnd: (C) => {
    He.current && clearTimeout(He.current), ye || C.propertyName !== "opacity" || (he(!1), $e(null), U == null || U());
  }, style: { ...J, ...Te.tooltipStyles, opacity: be !== void 0 && Xe ? be : void 0 }, ref: se }, Me, Ze.createElement(y, { className: xe("react-tooltip-arrow", kt.arrow, Zt.arrow, r, p && kt.noArrow), style: { ...Te.tooltipArrowStyles, background: ze ? `linear-gradient(to right bottom, transparent 50%, ${ze} 50%)` : void 0 }, ref: ge })) : null;
}, al = ({ content: e }) => Ze.createElement("span", { dangerouslySetInnerHTML: { __html: e } }), il = Ze.forwardRef(({ id: e, anchorId: t, anchorSelect: n, content: r, html: o, render: l, className: a, classNameArrow: s, variant: c = "dark", place: u = "top", offset: d = 10, wrapper: f = "div", children: w = null, events: y = ["hover"], openOnClick: m = !1, positionStrategy: h = "absolute", middlewares: E, delayShow: v = 0, delayHide: p = 0, float: x = !1, hidden: T = !1, noArrow: A = !1, clickable: te = !1, closeOnEsc: H = !1, closeOnScroll: re = !1, closeOnResize: Y = !1, openEvents: Q, closeEvents: J, globalCloseEvents: K, imperativeModeOnly: oe = !1, style: U, position: ne, isOpen: G, defaultIsOpen: $ = !1, disableStyleInjection: B = !1, border: W, opacity: X, arrowColor: Re, setIsOpen: je, afterShow: be, afterHide: ze, role: De = "tooltip" }, z) => {
  const [se, ge] = ue(r), [N, ce] = ue(o), [He, Te] = ue(u), [Ke, ye] = ue(c), [Fe, Ce] = ue(d), [he, le] = ue(v), [$e, Ee] = ue(p), [ve, Pe] = ue(x), [Je, I] = ue(T), [fe, ke] = ue(f), [we, ct] = ue(y), [dt, nt] = ue(h), [Ae, Ve] = ue(null), [ae, ot] = ue(null), Ye = Le(B), { anchorRefs: lt, activeAnchor: vt } = fn(e), mt = (me) => me == null ? void 0 : me.getAttributeNames().reduce((Ne, j) => {
    var q;
    return j.startsWith("data-tooltip-") && (Ne[j.replace(/^data-tooltip-/, "")] = (q = me == null ? void 0 : me.getAttribute(j)) !== null && q !== void 0 ? q : null), Ne;
  }, {}), Ue = (me) => {
    const Ne = { place: (j) => {
      var q;
      Te((q = j) !== null && q !== void 0 ? q : u);
    }, content: (j) => {
      ge(j ?? r);
    }, html: (j) => {
      ce(j ?? o);
    }, variant: (j) => {
      var q;
      ye((q = j) !== null && q !== void 0 ? q : c);
    }, offset: (j) => {
      Ce(j === null ? d : Number(j));
    }, wrapper: (j) => {
      var q;
      ke((q = j) !== null && q !== void 0 ? q : f);
    }, events: (j) => {
      const q = j == null ? void 0 : j.split(" ");
      ct(q ?? y);
    }, "position-strategy": (j) => {
      var q;
      nt((q = j) !== null && q !== void 0 ? q : h);
    }, "delay-show": (j) => {
      le(j === null ? v : Number(j));
    }, "delay-hide": (j) => {
      Ee(j === null ? p : Number(j));
    }, float: (j) => {
      Pe(j === null ? x : j === "true");
    }, hidden: (j) => {
      I(j === null ? T : j === "true");
    }, "class-name": (j) => {
      Ve(j);
    } };
    Object.values(Ne).forEach((j) => j(null)), Object.entries(me).forEach(([j, q]) => {
      var Me;
      (Me = Ne[j]) === null || Me === void 0 || Me.call(Ne, q);
    });
  };
  ee(() => {
    ge(r);
  }, [r]), ee(() => {
    ce(o);
  }, [o]), ee(() => {
    Te(u);
  }, [u]), ee(() => {
    ye(c);
  }, [c]), ee(() => {
    Ce(d);
  }, [d]), ee(() => {
    le(v);
  }, [v]), ee(() => {
    Ee(p);
  }, [p]), ee(() => {
    Pe(x);
  }, [x]), ee(() => {
    I(T);
  }, [T]), ee(() => {
    nt(h);
  }, [h]), ee(() => {
    Ye.current !== B && console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.");
  }, [B]), ee(() => {
    typeof window < "u" && window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles", { detail: { disableCore: B === "core", disableBase: B } }));
  }, []), ee(() => {
    var me;
    const Ne = new Set(lt);
    let j = n;
    if (!j && e && (j = `[data-tooltip-id='${e}']`), j)
      try {
        document.querySelectorAll(j).forEach((F) => {
          Ne.add({ current: F });
        });
      } catch {
        console.warn(`[react-tooltip] "${j}" is not a valid CSS selector`);
      }
    const q = document.querySelector(`[id='${t}']`);
    if (q && Ne.add({ current: q }), !Ne.size)
      return () => null;
    const Me = (me = ae ?? q) !== null && me !== void 0 ? me : vt.current, Xe = new MutationObserver((F) => {
      F.forEach((V) => {
        var pe;
        if (!Me || V.type !== "attributes" || !(!((pe = V.attributeName) === null || pe === void 0) && pe.startsWith("data-tooltip-")))
          return;
        const Se = mt(Me);
        Ue(Se);
      });
    }), C = { attributes: !0, childList: !1, subtree: !1 };
    if (Me) {
      const F = mt(Me);
      Ue(F), Xe.observe(Me, C);
    }
    return () => {
      Xe.disconnect();
    };
  }, [lt, vt, ae, t, n]), ee(() => {
    U != null && U.border && console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."), W && !jr("border", `${W}`) && console.warn(`[react-tooltip] "${W}" is not a valid \`border\`.`), U != null && U.opacity && console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."), X && !jr("opacity", `${X}`) && console.warn(`[react-tooltip] "${X}" is not a valid \`opacity\`.`);
  }, []);
  let at = w;
  const Ge = Le(null);
  if (l) {
    const me = l({ content: (ae == null ? void 0 : ae.getAttribute("data-tooltip-content")) || se || null, activeAnchor: ae });
    at = me ? Ze.createElement("div", { ref: Ge, className: "react-tooltip-content-wrapper" }, me) : null;
  } else
    se && (at = se);
  N && (at = Ze.createElement(al, { content: N }));
  const it = { forwardRef: z, id: e, anchorId: t, anchorSelect: n, className: xe(a, Ae), classNameArrow: s, content: at, contentWrapperRef: Ge, place: He, variant: Ke, offset: Fe, wrapper: fe, events: we, openOnClick: m, positionStrategy: dt, middlewares: E, delayShow: he, delayHide: $e, float: ve, hidden: Je, noArrow: A, clickable: te, closeOnEsc: H, closeOnScroll: re, closeOnResize: Y, openEvents: Q, closeEvents: J, globalCloseEvents: K, imperativeModeOnly: oe, style: U, position: ne, isOpen: G, defaultIsOpen: $, border: W, opacity: X, arrowColor: Re, setIsOpen: je, afterShow: be, afterHide: ze, activeAnchor: ae, setActiveAnchor: (me) => ot(me), role: De };
  return Ze.createElement(ll, { ...it });
});
typeof window < "u" && window.addEventListener("react-tooltip-inject-styles", (e) => {
  e.detail.disableCore || Lr({ css: ":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}", type: "core" }), e.detail.disableBase || Lr({ css: `
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`, type: "base" });
});
const sl = (e) => /* @__PURE__ */ b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 192, height: 192, viewBox: "0 0 16 16", ...e }, /* @__PURE__ */ b.createElement("path", { fill: "currentColor", d: "M4.03 5.507a4 4 0 0 1 7.887-.323A5.5 5.5 0 0 0 5.207 12H4.25a3.25 3.25 0 0 1-.22-6.493M15 10.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4.854 2.353l.003.003a.5.5 0 0 0 .348.144h.006a.5.5 0 0 0 .35-.146l2-2a.5.5 0 0 0-.707-.708L11 11.293V8.5a.5.5 0 0 0-1 0v2.793l-1.146-1.147a.5.5 0 0 0-.708.708z" })), cl = (e) => {
  const { onClick: t, className: n } = e, r = (a) => {
    a.stopPropagation(), t && t();
  }, o = rt("download-button"), l = xe(o, n);
  return /* @__PURE__ */ P.jsx("div", { className: l, onClick: r, children: /* @__PURE__ */ P.jsx(sl, { width: Qe, height: Qe }) });
}, St = {
  play: "k",
  fullscreen: "f",
  screenshot: "SHIFT+S",
  download: "SHIFT D",
  mute: "m",
  next_video: "SHIFT+P",
  prev_video: "SHIFT+N"
}, ul = (e, t, n) => {
  e.keyCode === 32 || e.key === " " ? n.playing ? t == null || t.pause() : t == null || t.play() : e.keyCode === 37 || e.key === "ArrowLeft" ? t == null || t.updateCurrentTime(n.currentTime - 5) : e.keyCode === 39 || e.key === "ArrowRight" ? t == null || t.updateCurrentTime(n.currentTime + 5) : e.keyCode === 38 || e.key === "ArrowUp" ? n.volume < 1 && (t == null || t.setVolume(
    n.volume + 0.1 > 1 ? 1 : n.volume + 0.1
  )) : e.keyCode === 40 || e.key === "ArrowDown" ? n.volume > 0 && (t == null || t.setVolume(
    n.volume - 0.1 < 0 ? 0 : n.volume - 0.1
  )) : e.shiftKey && (e.key === "P" || e.key === "p") && typeof n.src != "string" ? t == null || t.nextVideo() : e.shiftKey && (e.key === "N" || e.key === "n") && typeof n.src != "string" ? t == null || t.previousVideo() : e.key === "m" || e.key === "M" ? n.muted ? t == null || t.setVolume(n.volume) : t == null || t.mute() : e.key === "f" || e.key === "F" ? (n.fullscreen ? t == null || t.setFullscreen(!1) : t == null || t.setFullscreen(!0), sr()) : e.key === "k" || e.key === "K" ? n.playing ? t == null || t.pause() : t == null || t.play() : e.shiftKey && (e.key === "S" || e.key === "s") ? t == null || t.screenShot() : e.shiftKey && (e.key === "D" || e.key === "d") && (t == null || t.download());
}, Qt = (e, t, n) => {
  const r = e[n], o = typeof r == "boolean";
  if (!(o ? r : r == null ? void 0 : r.allow))
    return null;
  const a = !o && (r == null ? void 0 : r.className), s = !o && (r == null ? void 0 : r.style), c = t.props.className, u = t.props.style, d = c ? `${c} ${a || ""}` : a, f = { ...u, ...s };
  return Ze.cloneElement(t, {
    className: d,
    style: f
  });
}, fl = (e, t, n) => {
  const r = rt("duration"), [o, l] = ue(n === "default" ? 0 : 1);
  return /* @__PURE__ */ P.jsxs(
    "div",
    {
      className: r,
      onClick: () => l(o === 0 ? 1 : 0),
      children: [
        jt(t, jt(e)),
        " /",
        " ",
        jt(o === 0 ? e : e - t)
      ]
    }
  );
}, dl = (e, t) => {
  const {
    videoRef: n,
    videoState: r,
    actions: o,
    allowedItems: l,
    durationType: a,
    customButtons: s,
    customControlBar: c,
    progressBar: u
  } = e, d = rt("control-bar"), f = (h, E) => {
    const v = (x) => {
      const T = x.currentTarget.children[1];
      T && T.click();
    }, p = `${Math.random() * 99999}`;
    return /* @__PURE__ */ P.jsxs(
      "div",
      {
        className: Ie(d, "button"),
        onClick: v,
        "data-tooltip-id": p,
        children: [
          /* @__PURE__ */ P.jsx(
            il,
            {
              id: p,
              variant: "dark",
              offset: 20,
              noArrow: !0,
              place: "top-end",
              className: Ie(d, "button-tooltip"),
              children: E
            }
          ),
          h
        ]
      }
    );
  }, w = xe(d, {
    [`${d}-hidden`]: r.playing
  }), y = s == null ? void 0 : s.filter(
    (h) => h.placement === "left"
  ), m = s == null ? void 0 : s.filter(
    (h) => h.placement === "right"
  );
  return /* @__PURE__ */ P.jsxs("div", { className: w, ref: t, children: [
    u && /* @__PURE__ */ P.jsx(fo, { videoState: r }),
    c || /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
      /* @__PURE__ */ P.jsxs("div", { className: `${d}-left`, children: [
        typeof r.src != "string" && r.currentSrcIndex !== 0 && f(
          /* @__PURE__ */ P.jsx(
            Pr,
            {
              type: "prev",
              disabled: r.currentSrcIndex === 0,
              onClickPrev: () => o == null ? void 0 : o.previousVideo()
            }
          ),
          /* @__PURE__ */ P.jsxs("div", { className: Ie(d, "video-preview"), children: [
            /* @__PURE__ */ P.jsxs("div", { children: [
              "previous ",
              St.prev_video
            ] }),
            /* @__PURE__ */ P.jsx(
              Ur,
              {
                width: "300px",
                autoPlay: !0,
                controller: !1,
                src: r.src[r.currentSrcIndex - 1]
              }
            )
          ] })
        ),
        f(
          /* @__PURE__ */ P.jsx(
            Cn,
            {
              onPlay: () => o == null ? void 0 : o.play(),
              onPause: () => o == null ? void 0 : o.pause(),
              play: r.playing
            }
          ),
          `${r.playing ? "Puase" : "Play"} (${St.play})`
        ),
        typeof r.src != "string" && !(r.currentSrcIndex + 1 > r.src.length - 1) && f(
          /* @__PURE__ */ P.jsx(
            Pr,
            {
              type: "next",
              disabled: r.currentSrcIndex + 1 > r.src.length - 1,
              onClickNext: () => o == null ? void 0 : o.nextVideo()
            }
          ),
          /* @__PURE__ */ P.jsxs("div", { className: Ie(d, "video-preview"), children: [
            /* @__PURE__ */ P.jsxs("div", { children: [
              "next ",
              St.next_video
            ] }),
            /* @__PURE__ */ P.jsx(
              Ur,
              {
                width: "300px",
                autoPlay: !0,
                controller: !1,
                src: r.src[r.currentSrcIndex + 1]
              }
            )
          ] })
        ),
        f(
          /* @__PURE__ */ P.jsx(
            Rr,
            {
              isNext: !1,
              onClick: (h, E) => o == null ? void 0 : o.updateCurrentTime(r.currentTime - E)
            }
          ),
          "Skip backward 5 seconds ←"
        ),
        f(
          /* @__PURE__ */ P.jsx(
            Rr,
            {
              isNext: !0,
              onClick: (h, E) => o == null ? void 0 : o.updateCurrentTime(r.currentTime + E)
            }
          ),
          "Skip forward 5 seconds →"
        ),
        /* @__PURE__ */ P.jsxs("div", { className: Ie(d, "volume-area"), children: [
          f(
            /* @__PURE__ */ P.jsx(
              Pn,
              {
                onClick: (h, E) => o == null ? void 0 : o.setVolume(E),
                onMute: () => o == null ? void 0 : o.mute(),
                onVolume: () => o == null ? void 0 : o.setVolume(
                  r.volume ? r.volume : 1
                ),
                volume: r.volume,
                mute: r.muted
              }
            ),
            `Volume ${Qr(r.volume, 1).toFixed()}% (${St.mute})`
          ),
          l.volumeSlider && /* @__PURE__ */ P.jsx(
            Xr,
            {
              className: "vf-slider",
              min: 0,
              max: 1,
              step: 0.1,
              value: r.muted ? 0 : r.volume,
              onChange: (h) => o == null ? void 0 : o.setVolume(h)
            }
          )
        ] }),
        f(
          fl(
            r.duration,
            r.currentTime,
            a
          ),
          "duration"
        ),
        y == null ? void 0 : y.map((h) => h.content)
      ] }),
      /* @__PURE__ */ P.jsxs("div", { className: `${d}-right`, children: [
        m == null ? void 0 : m.map((h) => h.content),
        Qt(
          l,
          f(
            /* @__PURE__ */ P.jsx(cl, { onClick: () => o == null ? void 0 : o.download() }),
            `downlaod (${St.download})`
          ),
          "downlaod"
        ),
        Qt(
          l,
          f(
            /* @__PURE__ */ P.jsx(mo, { onClick: () => o == null ? void 0 : o.screenShot() }),
            `screenshot (${St.screenshot})`
          ),
          "screenshot"
        ),
        f(/* @__PURE__ */ P.jsx(so, { video: n }), "mini player"),
        Qt(
          l,
          f(
            /* @__PURE__ */ P.jsx(
              no,
              {
                onFullScreen: () => o == null ? void 0 : o.setFullscreen(!0),
                onCancelFullScreen: () => o == null ? void 0 : o.setFullscreen(!1)
              }
            ),
            `fullscreen (${St.fullscreen})`
          ),
          "fullscreen"
        )
      ] })
    ] })
  ] });
}, vl = Ze.forwardRef(
  dl
);
async function ml(e) {
  const t = await fetch(e).then((n) => n.blob());
  return URL.createObjectURL(t);
}
async function Hr(e) {
  const t = document.createElement("a");
  t.href = await ml(e == null ? void 0 : e.url), t.download = e == null ? void 0 : e.name, t.click();
}
const hl = (e, t, n) => ({
  play() {
    e((r) => ({
      ...r,
      playing: !r.loadingData
    }));
  },
  pause() {
    e((r) => ({
      ...r,
      playing: !1,
      loadingData: !1
    }));
  },
  setVolume(r) {
    console.log({ volume: r }), e((o) => ({
      ...o,
      volume: r,
      muted: r === 0
    }));
  },
  mute() {
    e((r) => ({
      ...r,
      muted: !0
    }));
  },
  setCurrentTime(r) {
    e((o) => ({
      ...o,
      currentTime: r,
      rendered: !0,
      loadingData: !1
    }));
  },
  updateCurrentTime(r) {
    e((o) => ({
      ...o,
      currentTime: r
    })), t && (t.currentTime = r);
  },
  setFullscreen(r) {
    e((o) => ({
      ...o,
      fullscreen: r
    }));
  },
  setLoadingData(r) {
    e((o) => ({
      ...o,
      loadingData: r
    }));
  },
  setCurrentSrcIndex(r) {
    e((o) => ({
      ...o,
      currentSrcIndex: r
    }));
  },
  nextVideo() {
    e((r) => ({
      ...r,
      playing: !0,
      currentSrcIndex: r.currentSrcIndex + 1 > r.src.length - 1 ? r.src.length - 1 : r.currentSrcIndex + 1
    })), n.onClickNext && n.onClickNext();
  },
  previousVideo() {
    e((r) => ({
      ...r,
      playing: !0,
      currentSrcIndex: r.currentSrcIndex - 1 < 0 ? 0 : r.currentSrcIndex - 1
    })), n.onClickPrevious && n.onClickPrevious();
  },
  screenShot() {
    const r = (c) => {
      let u = c.videoWidth, d = c.videoHeight, f = document.createElement("canvas");
      f.width = u, f.height = d;
      let w = f.getContext("2d");
      return w == null || w.drawImage(c, 0, 0, u, d), f;
    }, o = new Date(Date.now()), l = `Screen Shot ${o.getFullYear()}-${String(
      o.getMonth() + 1
    ).padStart(2, "0")}-${String(o.getDate()).padStart(
      2,
      "0"
    )} at ${String(o.getHours() % 12 || 12).padStart(2, "0")}.${String(
      o.getMinutes()
    ).padStart(2, "0")}.${String(o.getSeconds()).padStart(2, "0")} ${o.getHours() >= 12 ? "PM" : "AM"}`, a = async (c, u) => {
      const f = await (await fetch(c)).blob();
      return new File([f], u, { type: f.type });
    };
    let s = r(t);
    Hr({ url: s.toDataURL(), name: l }), a(s.toDataURL(), l).then((c) => {
      n.onScreenshot && n.onScreenshot(c);
    });
  },
  download() {
    const r = new Date(Date.now()), o = `Vidify ${r.getFullYear()}-${String(
      r.getMonth() + 1
    ).padStart(2, "0")}-${String(r.getDate()).padStart(
      2,
      "0"
    )} at ${String(r.getHours() % 12 || 12).padStart(2, "0")}.${String(
      r.getMinutes()
    ).padStart(2, "0")}.${String(r.getSeconds()).padStart(2, "0")} ${r.getHours() >= 12 ? "PM" : "AM"}`;
    Hr({
      url: t == null ? void 0 : t.src,
      name: `${o}.mp4`
    }).then(
      () => n.onDownload && n.onDownload()
    );
  }
}), pl = (e, t) => {
  const { playing: n, videoLoaded: r, muted: o, volume: l } = t;
  r && (n ? e.play() : e.pause(), e.muted = o, l >= 0 && l <= 1 ? e.volume = l : console.error("Volume outside of range [0,1]"));
}, gl = (e) => /* @__PURE__ */ b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 192, height: 192, viewBox: "0 0 16 16", ...e }, /* @__PURE__ */ b.createElement("path", { fill: "currentColor", d: "M6 2a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 2m6.359 6a1.641 1.641 0 0 1 3.282 0a1.641 1.641 0 0 1-3.282 0m-1.602 4.243a1.486 1.486 0 1 1 2.971 0a1.486 1.486 0 0 1-2.971 0M6.654 14a1.346 1.346 0 1 1 2.693.001A1.346 1.346 0 0 1 6.654 14m-4.116-1.757a1.22 1.22 0 1 1 2.439 0a1.22 1.22 0 0 1-2.439 0M.896 8a1.104 1.104 0 1 1 2.207 0A1.104 1.104 0 0 1 .896 8m1.861-4.243a1 1 0 0 1 2 0a1 1 0 0 1-2 0m11.297 0a1.811 1.811 0 1 1-3.623 0a1.811 1.811 0 0 1 3.623 0" })), yl = (e, t) => {
  const {
    children: n,
    prefixCls: r,
    className: o,
    onClick: l,
    playing: a,
    videoState: { loadingData: s },
    controlBarElement: c,
    ...u
  } = e, [d, f] = ue(!1), [w, y] = ue(!1), m = xe(o, {
    [`${r}-hidden`]: a && d
  });
  let h = null;
  const E = () => {
    h = setInterval(() => {
      a && !w && f(!0);
    }, 5e3), a || (f(!1), clearInterval(h));
  }, v = () => f(!1);
  return ee(() => (E(), () => {
    h && clearInterval(h);
  }), [a, w]), ee(() => {
    c && (c == null || c.addEventListener("mouseenter", () => {
      y(!0);
    }), c == null || c.addEventListener("mouseleave", () => {
      y(!1);
    }));
  }, [c]), /* @__PURE__ */ P.jsxs(
    "div",
    {
      ...u,
      className: m,
      ref: t,
      onMouseLeave: () => h && clearInterval(h),
      onMouseMove: v,
      onClick: l,
      children: [
        s && /* @__PURE__ */ P.jsx(
          "div",
          {
            className: `${Ie(r, "loading-icon")} vf-center`,
            children: /* @__PURE__ */ P.jsx(gl, { width: 60, height: 60, color: "#fff" })
          }
        ),
        n
      ]
    }
  );
}, wl = wn(yl), bl = (e) => {
  const {
    onPlay: t,
    onPuase: n,
    videoState: { playing: r, rendered: o, videoLoaded: l }
  } = e, a = rt("play-button"), s = () => {
    r ? n() : t();
  }, c = xe(a, {
    [`${a}-play`]: r,
    [`${a}-pause`]: !r
  }), u = Le(null), d = Le(!0);
  return ee(() => {
    if (!o)
      return;
    if (d.current) {
      d.current = !1;
      return;
    }
    u.current && (u.current.style.display = "flex");
    const f = setTimeout(() => {
      u.current && (u.current.style.display = "none");
    }, 500);
    return () => {
      clearTimeout(f);
    };
  }, [r]), /* @__PURE__ */ P.jsx(
    "div",
    {
      className: c,
      id: !o && !r && l ? `${a}-initial` : "",
      onClick: s,
      ref: u,
      title: o ? "" : "play",
      children: r ? /* @__PURE__ */ P.jsx(
        "svg",
        {
          stroke: "currentColor",
          fill: "currentColor",
          strokeWidth: "0",
          viewBox: "0 0 20 20",
          "aria-hidden": "true",
          height: "35px",
          width: "35px",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ P.jsx("path", { d: "M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z" })
        }
      ) : /* @__PURE__ */ P.jsx(
        "svg",
        {
          stroke: "currentColor",
          fill: "currentColor",
          strokeWidth: "0",
          viewBox: "0 0 20 20",
          "aria-hidden": "true",
          height: "35px",
          width: "35px",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ P.jsx("path", { d: "M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" })
        }
      )
    }
  );
}, Vr = {
  screenshot: !0,
  fullscreen: !0,
  volumeSlider: !0,
  downlaod: !0,
  duration: !0,
  skip: !0
}, El = (e) => {
  const { controller: t = Vr } = e, {
    screenshot: n = !0,
    fullscreen: r = !0,
    volumeSlider: o = !0,
    downlaod: l = !0
  } = typeof t == "object" ? t : Vr;
  return {
    screenshot: n,
    fullscreen: r,
    volumeSlider: o,
    downlaod: l
  };
}, xl = (e, t) => {
  const { src: n } = e, { currentSrcIndex: r } = t;
  if (typeof n != "string" && (n != null && n.length) && r <= (n == null ? void 0 : n.length))
    return n[r];
  if (n && typeof n == "string")
    return n;
}, Sl = 16 / 9, dn = 800, Cl = Math.round(dn / Sl), Qe = 26, _l = (e, t) => {
  const {
    src: n,
    defaultSrcIndex: r = 0,
    className: o,
    containerRef: l,
    autoPlay: a = !1,
    volume: s,
    title: c = "",
    durationType: u = "default",
    // currentTime = 0,
    id: d,
    annotation: f,
    annotationStyle: w,
    width: y = dn,
    height: m = Cl,
    style: h = {},
    muted: E = !1,
    controller: v = !0,
    thumbnail: p,
    poster: x,
    loop: T = !1,
    block: A = !1,
    rounded: te = !0,
    primaryColor: H = "#5f55ee",
    playsInline: re,
    preload: Y,
    crossOrigin: Q = "anonymous",
    onClick: J,
    onClickNext: K,
    onClickPrevious: oe,
    onPause: U,
    onPlay: ne,
    onProgress: G,
    onDurationChange: $,
    onVolumeChange: B,
    onLoadedData: W,
    onScreenshot: X,
    onError: Re,
    onEnded: je,
    onWaiting: be,
    onDownload: ze,
    onAbort: De
  } = e, z = Le(null), se = Le(null), ge = Le(null), [N, ce] = ue({
    src: n,
    playing: a,
    volume: s !== void 0 && typeof s == "number" ? s : E ? 0 : 1,
    muted: s !== void 0 && typeof s == "number" && s === 0 || a || E,
    loop: T,
    durationType: u,
    rendered: !1,
    speed: 1,
    currentSrcIndex: r,
    loadingData: !1,
    bufferingProgress: 0,
    primaryColor: H,
    duration: 0,
    currentTime: 0,
    buffering: !1,
    fullscreen: !1,
    error: null,
    videoLoaded: !1,
    playbackProgress: 0
  });
  ee(() => {
    z.current && ce((I) => ({
      ...I,
      actions: hl(ce, z.current, {
        onScreenshot: X,
        onDownload: ze,
        onClickNext: K,
        onClickPrevious: oe
      })
    }));
  }, [z]), ee(() => {
    ce((I) => ({ ...I, src: n }));
  }, [n]), h && (h.width = h.width || y, h.height = h.height || m);
  const { width: He, height: Te, ...Ke } = h;
  H && (Ke["--vf-color-primary"] = H);
  const ye = () => {
    if (z.current) {
      let I = z.current.duration;
      I === 1 / 0 ? (z.current.currentTime = 1e101, setTimeout(() => {
        z.current.currentTime = 0, I = z.current.duration, ce((fe) => ({
          ...fe,
          videoLoaded: !0,
          loadingData: !1,
          error: !1,
          duration: I
        })), W && W();
      }, 100)) : (ce((fe) => ({
        ...fe,
        videoLoaded: !0,
        loadingData: !1,
        error: !1,
        duration: I
      })), W && W());
    }
  }, Fe = () => {
    var I, fe;
    z.current && (G && G(), $ && $(), (I = N.actions) == null || I.setCurrentTime(z.current.currentTime), N.duration === 1 / 0 && ((fe = z.current) == null ? void 0 : fe.duration) > 0 && ce((ke) => {
      var we;
      return {
        ...ke,
        duration: (we = z.current) == null ? void 0 : we.duration
      };
    }));
  }, Ce = (I) => {
    I.target === z.current && sr();
  }, he = (I) => {
    z.current && ul(I, N.actions, N);
  }, le = () => {
    ce((I) => ({
      ...I,
      error: !0,
      loadingData: !1
    })), Re && Re();
  }, $e = (I) => {
    var fe, ke;
    I.target === z.current && (N.playing ? (fe = N.actions) == null || fe.pause() : (ke = N.actions) == null || ke.play()), J && J(I);
  }, Ee = () => {
    const I = z.current;
    if (!I || !I.buffered || I.buffered.length === 0)
      return;
    const fe = I.buffered.end(I.buffered.length - 1), ke = I.duration;
    ke > 0 && ce((we) => ({
      ...we,
      bufferingProgress: fe / ke * 100
    }));
  }, ve = rt("video"), Pe = xe(o, `${ve}-wrapper`, {
    [`${ve}-wrapper-fullscreen`]: N.fullscreen,
    [`${ve}-block`]: A,
    [`${ve}-rounded`]: te
  }), Je = xe(`${ve}-wrapper-gradient-bottom`, {
    [`${ve}-wrapper-gradient-bottom-hidden`]: N.playing
  });
  return ee(() => {
    z.current && pl(z.current, N);
  }, [N, z]), ee(() => {
    if (t) {
      const { actions: I, ...fe } = N;
      t.current.videoState = fe, t.current.videoActions = I;
    }
  }, [N]), /* @__PURE__ */ P.jsxs(
    wl,
    {
      className: Pe,
      prefixCls: ve,
      videoState: N,
      onKeyDown: he,
      ref: gr(l, ge),
      onDoubleClick: Ce,
      onClick: $e,
      playing: N.playing,
      tabIndex: 0,
      title: c,
      style: Ke,
      controlBarElement: se.current,
      children: [
        /* @__PURE__ */ P.jsx(
          "video",
          {
            src: xl(e, N),
            id: d,
            poster: p || x,
            width: A ? "100%" : He,
            ref: gr(t, z),
            controls: !1,
            onPause: U,
            onPlay: ne,
            onEnded: je,
            onVolumeChange: B,
            className: ve,
            onAbort: De,
            loop: N.loop,
            preload: Y,
            onTimeUpdate: Fe,
            onProgress: Ee,
            onWaiting: () => {
              var I;
              be && be(), (I = N.actions) == null || I.setLoadingData(!0);
            },
            playsInline: re,
            crossOrigin: Q,
            onLoadStart: () => {
              var I;
              return (I = N.actions) == null ? void 0 : I.setLoadingData(!0);
            },
            onLoadedData: ye,
            onError: le,
            autoPlay: a,
            muted: N.muted
          }
        ),
        /* @__PURE__ */ P.jsx(
          bl,
          {
            videoState: N,
            onPlay: () => {
              var I;
              return (I = N.actions) == null ? void 0 : I.play();
            },
            onPuase: () => {
              var I;
              return (I = N.actions) == null ? void 0 : I.pause();
            }
          }
        ),
        N.videoLoaded && v && /* @__PURE__ */ P.jsx(
          vl,
          {
            ref: se,
            customControlBar: typeof v == "function" || typeof v == "object" && v.controlBar ? typeof v == "object" && typeof v.controlBar == "function" && v.controlBar(N.actions, N) || typeof v == "function" && v(N.actions, N) : null,
            videoRef: z == null ? void 0 : z.current,
            videoState: N,
            actions: N.actions,
            customButtons: typeof v == "object" ? (v == null ? void 0 : v.customButtons) || [] : null,
            allowedItems: El(e),
            progressBar: typeof v == "object" && v.progressBar !== void 0 ? v.progressBar : typeof v != "function",
            durationType: u
          }
        ),
        /* @__PURE__ */ P.jsx("div", { className: Je }),
        /* @__PURE__ */ P.jsx("div", { className: Je }),
        /* @__PURE__ */ P.jsx(
          "div",
          {
            className: `${Je} ${Ie(
              ve,
              "wrapper-gradient-top"
            )}`
          }
        ),
        f && /* @__PURE__ */ P.jsx(
          "div",
          {
            className: `${Ie(
              ve,
              "annotation"
            )} ${Je}`,
            style: w,
            children: f
          }
        ),
        N.error && /* @__PURE__ */ P.jsx("div", { className: Ie(ve, "error"), children: "Error : video not supported" })
      ]
    }
  );
}, Ur = Ze.forwardRef(
  _l
);
export {
  Ur as VideoPlayer
};
