(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('#vf-control-button-play-button-container{display:flex;align-items:center;justify-content:center;width:15px;height:15px;cursor:pointer}.vf-control-button-play-button{display:inline-block;position:absolute;width:15px;height:15px;background:var(--vf-color-white);transition:clip-path .3s ease}.vf-control-button-play-button-before{clip-path:polygon(0 0,50% 25%,50% 75%,0% 100%)}.vf-control-button-play-button-after{clip-path:polygon(50% 25%,100% 50%,100% 50%,50% 75%)}.vf-control-button-pause .vf-control-button-play-button-before{clip-path:polygon(0 0,30% 0,30% 100%,0% 100%)}.vf-control-button-pause .vf-control-button-play-button-after{clip-path:polygon(70% 0,100% 0,100% 100%,70% 100%)}:root{--width-slide-duration: 10%}.vf-progress-bar{position:absolute;left:0;top:0;width:100%;background-color:var(--vf-progress-bar-bg);height:4px;border-radius:2px;-webkit-border-radius:2px;-moz-border-radius:2px;-ms-border-radius:2px;-o-border-radius:2px;transition:all .2s;-webkit-transition:all .2s;-moz-transition:all .2s;-ms-transition:all .2s;-o-transition:all .2s;cursor:pointer}.vf-progress-bar:hover{height:7px;top:-1px;border-radius:10px;-webkit-border-radius:10px;-moz-border-radius:10px;-ms-border-radius:10px;-o-border-radius:10px}.vf-progress-bar:hover .vf-progress-bar-play-progress:before{opacity:1}.vf-progress-bar-overlay{position:absolute;top:-10px;left:0;width:100%;height:15px}.vf-progress-bar-load-progress,.vf-progress-bar-play-progress{position:absolute;left:0;bottom:0;height:100%;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}.vf-progress-bar-play-progress{z-index:34;background-color:var(--vf-color-primary);width:20%}.vf-progress-bar-play-progress:before{content:"";position:absolute;width:13px;height:13px;background-color:var(--vf-color-primary);opacity:0;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;right:0;top:0;transform:translate(50%,-21%);-webkit-transform:translate(50%,-21%);-moz-transform:translate(50%,-21%);-ms-transform:translate(50%,-21%);-o-transform:translate(50%,-21%);transition:all .2;-webkit-transition:all .2;-moz-transition:all .2;-ms-transition:all .2;-o-transition:all .2}.vf-progress-bar-hovered-duration{position:absolute;top:-30px;transform:translate(-50%);background:var(--vf-color-white);font-size:13px;font-weight:600;z-index:250;padding:2px 4px;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);color:var(--vf-color-primary)}.vf-progress-bar-hovered-bar{position:absolute;top:0;height:100%;opacity:1;background-color:#ffffff80;transition:opacity .25s cubic-bezier(0,0,.2,1);-webkit-transition:opacity .25s cubic-bezier(0,0,.2,1);-moz-transition:opacity .25s cubic-bezier(0,0,.2,1);-ms-transition:opacity .25s cubic-bezier(0,0,.2,1);-o-transition:opacity .25s cubic-bezier(0,0,.2,1)}.vf-progress-bar .vf-progress-bar-load-progress{z-index:33;background-color:var(--vf-progress-bar-load-bg);width:30%}.drag-cr{height:15px;width:15px;border-radius:50%;background-color:var(--vf-color-primary);position:absolute;bottom:33%;left:var(--vf-color-primary, 0%);transform:translate(-50%,15%);z-index:1;opacity:1;transition:opacity .2s ease 0s,box-shadow .3s ease 0s}.drag-cr:before{content:" ";display:inline-block;background-color:var(--vf-color-primary);height:24px;width:24px;border-radius:50%;opacity:0;transition:opacity .2s ease 0s;filter:opacity(.5);transform:translate(-18%,-18%)}.vf-video-wrapper{position:relative;background-color:var(--vf-color-black);overflow:hidden;margin:0;padding:0;box-sizing:border-box;height:fit-content;display:flex;align-items:center;justify-content:center;transition:all .2s;-webkit-transition:all .2s;-moz-transition:all .2s;-ms-transition:all .2s;-o-transition:all .2s}.vf-video-wrapper-gradient-bottom{height:98px;width:100%;position:absolute;bottom:0;opacity:1!important;transition:all .3s ease;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom}.vf-video-wrapper-gradient-top{top:0;transform:rotate(180deg);-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg)}.vf-video-wrapper-gradient-bottom-hidden{opacity:0!important}.vf-video-wrapper:not(.vf-video-hidden):hover{transition-delay:10s}.vf-video-wrapper:not(.vf-video-hidden):hover .vf-control-bar{transform:none;-webkit-transform:none;-moz-transform:none;-ms-transform:none;-o-transform:none}.vf-video-wrapper:not(.vf-video-hidden):hover .vf-video-annotation{opacity:1}.vf-video-wrapper:not(.vf-video-hidden):hover .vf-video-wrapper-gradient-bottom{opacity:1!important}.vf-video-block{width:100%}.vf-video-rounded{border-radius:var(--vf-border-radius);-webkit-border-radius:var(--vf-border-radius);-moz-border-radius:var(--vf-border-radius);-ms-border-radius:var(--vf-border-radius);-o-border-radius:var(--vf-border-radius)}.vf-video-loading-icon{animation:icon-spin 2s infinite linear;-webkit-animation:icon-spin 2s infinite linear}.vf-video-hidden{cursor:none}.vf-video-hidden .vf-control-bar{transform:translateY(100%)!important;-webkit-transform:translateY(100%)!important;-moz-transform:translateY(100%)!important;-ms-transform:translateY(100%)!important;-o-transform:translateY(100%)!important}.vf-video-hidden .vf-video-wrapper-gradient-bottom,.vf-video-hidden .vf-video-annotation{opacity:0!important}.vf-spin{animation:vf-spin 2s infinite linear;-webkit-animation:vf-spin 2s infinite linear}@keyframes icon-spin{0%{transform:translate(-50%,-50%) rotate(0);-webkit-transform:translate(-50%,-50%) rotate(0deg);-moz-transform:translate(-50%,-50%) rotate(0deg);-ms-transform:translate(-50%,-50%) rotate(0deg);-o-transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(359deg);-webkit-transform:translate(-50%,-50%) rotate(359deg);-moz-transform:translate(-50%,-50%) rotate(359deg);-ms-transform:translate(-50%,-50%) rotate(359deg);-o-transform:translate(-50%,-50%) rotate(359deg)}}@keyframes vf-spin{0%{transform:rotate(0);-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg)}to{transform:rotate(359deg);-webkit-transform:rotate(359deg);-moz-transform:rotate(359deg);-ms-transform:rotate(359deg);-o-transform:rotate(359deg)}}.vf-center{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%)}.vf-video-medium .vf-control-bar-button{padding:0 6px;height:25px}.vf-video-medium .vf-control-bar-button svg{width:20px;height:20px}.vf-video-medium .vf-control-bar-button .vf-duration{font-size:13px}.vf-video-medium .vf-control-bar-button .vf-arrow-navigation-button svg{width:14px;height:14px}.vf-video-medium .vf-control-bar-button .vf-control-button,.vf-video-medium .vf-control-bar-button .vf-control-button span{width:13px;height:13px}.vf-video-max-small .vf-control-bar-volume-area .rc-slider{display:none}.vf-video-max-small .vf-control-bar-button svg{width:18px;height:18px}.vf-video-max-small .vf-control-bar-button .vf-duration{display:none}.vf-video-max-small .skip{display:none!important}.vf-video-max-small .skip .vf-seconds-forward-button{display:none}.vf-video-x-small .vf-control-bar-button svg{width:18px;height:18px}.vf-video-x-small .vf-control-bar-button .vf-control-bar-volume-area .rc-slider{display:none}.vf-video-x-small .skip{display:none!important}.vf-video-x-small .skip .vf-seconds-forward-button{display:none}.vf-video-small .vf-control-bar-volume-area{column-gap:4px}.vf-video-small .vf-control-bar-volume-area .rc-slider{width:50px}.vf-video-small .vf-control-bar-button{padding:0 5px;height:24px}.vf-video-small .vf-control-bar-button svg{width:18px;height:18px}.vf-video-small .vf-control-bar-button .vf-duration{font-size:12px}.vf-video-small .vf-control-bar-button .vf-arrow-navigation-button svg{width:13px;height:13px}.vf-video-small .vf-control-bar-button .vf-control-button,.vf-video-small .vf-control-bar-button .vf-control-button span{width:12px;height:12px}.vf-video-500 .vf-video-annotation{max-width:40px;max-height:40px}.vf-video-500 .vf-play-button{width:50px;height:50px}.vf-video-500 .vf-play-button svg{width:30px;height:30px}.vf-video-500 .vf-play-button-initial{width:60px;height:60px}.vf-video-500 .vf-play-button-initial svg{width:30px;height:30px}.vf-video-500 .vf-control-bar-video-preview .vf-video{width:200px}.vf-video-400 .vf-video-annotation{max-width:30px;max-height:30px}.vf-video-400 .vf-play-button{max-width:40px;max-height:40px}.vf-video-400 .vf-play-button svg{width:25px;height:25px}.vf-video-400 .vf-play-button-initial{max-width:50px;max-height:50px}.vf-video-400 .vf-play-button-initial svg{width:25px;height:25px}.vf-play-button{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);color:#cacaca;background-color:#00000080;width:60px;height:60px;display:flex;align-items:center;justify-content:center;border-radius:50%;display:none;animation:.5s linear 0s 1 normal forwards running play-animation;-webkit-animation:.5s linear 0s 1 normal forwards running play-animation;transition:transform .2s ease 0s,background-color .2s ease 0s;-webkit-transition:transform .2s ease 0s,background-color .2s ease 0s;-moz-transition:transform .2s ease 0s,background-color .2s ease 0s;-ms-transition:transform .2s ease 0s,background-color .2s ease 0s;-o-transition:transform .2s ease 0s,background-color .2s ease 0s}#vf-play-button-initial{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);width:80px;height:80px;color:#cacaca;background-color:var(--vf-color-primary);display:flex;align-items:center;justify-content:center;border-radius:50%;cursor:pointer;animation:none;-webkit-animation:none;border:2px solid rgba(255,255,255,.2)}#vf-play-button-initial:hover{transform:translate(-50%,-50%) scale(1.2);-webkit-transform:translate(-50%,-50%) scale(1.2);-moz-transform:translate(-50%,-50%) scale(1.2);-ms-transform:translate(-50%,-50%) scale(1.2);-o-transform:translate(-50%,-50%) scale(1.2)}@keyframes play-animation{0%{opacity:1}to{opacity:0;transform:translate(-50%,-50%) scale(1.5);-webkit-transform:translate(-50%,-50%) scale(1.5);-moz-transform:translate(-50%,-50%) scale(1.5);-ms-transform:translate(-50%,-50%) scale(1.5);-o-transform:translate(-50%,-50%) scale(1.5)}}.vf-arrow-navigation-button-disabled{cursor:not-allowed;pointer-events:none}.vf-arrow-navigation-button-disabled svg path{fill:#bababad6}.vf-speed-button{position:relative;overflow:visible}.vf-speed-button-speed-list{position:absolute;top:0;left:0;display:flex;flex-direction:column;align-items:center;z-index:200;background-color:red;color:#fff;transform:translate(-50%,calc(-100% - 40px));-webkit-transform:translate(-50%,calc(-100% - 40px));-moz-transform:translate(-50%,calc(-100% - 40px));-ms-transform:translate(-50%,calc(-100% - 40px));-o-transform:translate(-50%,calc(-100% - 40px))}:root{--vf-font-familly: "Raleway", sans-serif;--vf-prefix-class: "vf";--vf-color-white: #fff;--vf-color-black: #000;--vf-color-primary: #5f55ee;--vf-color-primary-50: #fcf9ff;--vf-color-primary-100: #f5eefa;--vf-color-primary-200: #e0ccef;--vf-color-primary-300: #c198e0;--vf-color-primary-400: #ad76d5;--vf-color-primary-500: #9854cb;--vf-color-primary-600: #7a43a2;--vf-color-primary-700: #5b327a;--vf-color-primary-800: #3d2251;--vf-color-primary-900: #301942;--vf-color-primary-950: #1e1129;--vf-color-secondary: #fdb022;--vf-color-secondary-50: #fffcf5;--vf-color-secondary-100: #fffaeb;--vf-color-secondary-200: #fef0c7;--vf-color-secondary-300: #fedf89;--vf-color-secondary-400: #fec84b;--vf-color-secondary-500: #fdb022;--vf-color-secondary-600: #f79009;--vf-color-secondary-700: #dc6803;--vf-color-secondary-800: #b54708;--vf-color-secondary-900: #92330a;--vf-color-secondary-950: #6c2304;--vf-color-red: #ff4141;--vf-color-red-50: #fff4f4;--vf-color-red-100: #ffe8e8;--vf-color-red-200: #ffd4d4;--vf-color-red-300: #ffb4b4;--vf-color-red-400: #ff8383;--vf-color-red-500: #ff4141;--vf-color-red-600: #ff1616;--vf-color-red-700: #d80000;--vf-color-red-800: #b50000;--vf-color-red-900: #7e040e;--vf-color-red-950: #64020a;--vf-color-gray: #9d9d9d;--vf-color-gray-50: #ffffff;--vf-color-gray-100: #f0f0f0;--vf-color-gray-200: #dadada;--vf-color-gray-300: #cecece;--vf-color-gray-400: #b6b6b6;--vf-color-gray-500: #9d9d9d;--vf-color-gray-600: #6a6a6a;--vf-color-gray-700: #545454;--vf-color-gray-800: #373737;--vf-color-gray-900: #1c1c1c;--vf-color-gray-950: #000000;--vf-color-green: #29b58b;--vf-color-green-50: #f1fffb;--vf-color-green-100: #e2fff6;--vf-color-green-200: #ccfff0;--vf-color-green-300: #a3edd7;--vf-color-green-400: #52c8a4;--vf-color-green-500: #29b58b;--vf-color-green-600: #00a372;--vf-color-green-700: #00825b;--vf-color-green-800: #006346;--vf-color-green-900: #00412e;--vf-color-green-950: #002117;--vf-color-orange: #29b58b;--vf-color-orange-50: #fffdf6;--vf-color-orange-100: #fffaea;--vf-color-orange-200: #fff5d4;--vf-color-orange-300: #ffecaa;--vf-color-orange-400: #ffe27f;--vf-color-orange-500: #ffcf2b;--vf-color-orange-600: #e6ba27;--vf-color-orange-700: #bf9b20;--vf-color-orange-800: #806716;--vf-color-orange-900: #4d3f0d;--vf-color-orange-950: #342a08;--vf-color-orange-1000: #fa8900;--vf-color-ashgrey: #b3afa1;--vf-color-ashgrey-50: #fdfdfc;--vf-color-ashgrey-100: #fbfbf9;--vf-color-ashgrey-200: #f7f6f2;--vf-color-ashgrey-300: #f0efea;--vf-color-ashgrey-400: #dddad0;--vf-color-ashgrey-500: #b3afa1;--vf-color-ashgrey-600: #858071;--vf-color-ashgrey-700: #5e5267;--vf-color-ashgrey-800: #676252;--vf-color-ashgrey-900: #39321d;--vf-color-ashgrey-950: #282210;--vf-color-snow: #b3afa1;--vf-color-snow-50: #fdfcfd;--vf-color-snow-100: #faf9fb;--vf-color-snow-200: #f5f2f7;--vf-color-snow-300: #edeaf0;--vf-color-snow-400: #d7d0dd;--vf-color-snow-500: #aba1b3;--vf-color-snow-600: #7c7185;--vf-color-snow-700: #5e5267;--vf-color-snow-800: #463454;--vf-color-snow-900: #2d1d39;--vf-color-snow-950: #1e1028;--vf-color-gray-0: #fff;--vf-color-yellow-50: #ffb300;--vf-color-cyan-50: #00bcd4;--vf-color-blue-50: #2196f3;--vf-color-violet-50: #673ab7;--vf-color-info: #1677ff;--vf-color-success: #52c41a;--vf-color-warning: #faad14;--vf-color-error: #ff4d4f;--vf-control-bar-height: 48px;--vf-border-radius: 12px;--vf-progress-bar-bg: #fff3;--vf-progress-bar-load-bg: #fff6;--vf-progress-bar-play-bg: var(--vf-color-primary);--vf-sound-icon-size: 18px;--vf-sound-icon-color: #fff}.vf-video{max-width:100%;max-height:100%;min-height:100%;object-fit:contain;overflow:clip;overflow-clip-margin:clip}.vf-video-wrapper-fullscreen{border-radius:0;-webkit-border-radius:0;-moz-border-radius:0;-ms-border-radius:0;-o-border-radius:0}.vf-video-wrapper-fullscreen video{height:100%;width:100%}.vf-video-annotation{position:absolute;pointer-events:none;right:20px;top:20px;max-width:50px;max-height:50px;background:none}.vf-video-annotation *{max-width:100%;max-height:100%}.vf-video-error{background:var(--vf-color-white);color:var(--vf-color-red);position:absolute;left:20px;top:20px;padding:10px;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px}.vf-control-bar{position:absolute;z-index:100;height:var(--vf-control-bar-height);width:calc(100% - 24px);bottom:0;left:12px;color:var(--vf-color-white);padding-top:3px;opacity:1;display:flex;align-items:center;transition:all .2s;-webkit-transition:all .2s;-moz-transition:all .2s;-ms-transition:all .2s;-o-transition:all .2s}.vf-control-bar-left,.vf-control-bar-right{display:flex;align-items:center;white-space:nowrap;overflow:hidden}.vf-control-bar-left{flex:1}.vf-control-bar-volume-area{display:flex;align-items:center;column-gap:13px;padding-right:10px}.vf-control-bar-volume-area .vf-slider{width:80px;transition:all .2s;-webkit-transition:all .2s;-moz-transition:all .2s;-ms-transition:all .2s;-o-transition:all .2s}.vf-control-bar-volume-area .vf-slider .rc-slider-handle{border-color:var(--vf-color-primary)!important}.vf-control-bar-volume-area .vf-slider .rc-slider-handle:focus-visible{box-shadow:0 0 0 3px var(--vf-color-primary)!important}.vf-control-bar-volume-area .vf-slider .rc-slider-handle.rc-slider-handle-dragging{box-shadow:0 0 0 5px var(--vf-color-primary)!important;border-color:var(--vf-color-primary)}.vf-control-bar-volume-area .vf-slider .rc-slider-track{background-color:var(--vf-color-primary)}.vf-control-bar-hidden{transform:translateY(100%);-webkit-transform:translateY(100%);-moz-transform:translateY(100%);-ms-transform:translateY(100%);-o-transform:translateY(100%)}.vf-control-bar-button{cursor:pointer;width:fit-content;padding:0 10px;height:30px;opacity:.9;display:inline-block;-webkit-transition:opacity .1s cubic-bezier(.4,0,1,1);transition:opacity .1s cubic-bezier(.4,0,1,1);overflow:hidden;display:flex;align-items:center;justify-content:center;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px;transition:all .4s;-webkit-transition:all .4s;-moz-transition:all .4s;-ms-transition:all .4s;-o-transition:all .4s}.vf-control-bar-button>*{line-height:0}.vf-control-bar-button:hover{background-color:var(--vf-color-primary)}.vf-control-bar-button-tooltip{background-color:#0e0e0ee7!important;padding:0 8px!important;min-height:23px!important;width:fit-content!important;display:flex;align-items:center;justify-content:center;font-size:12px!important;text-transform:capitalize;font-weight:400!important;letter-spacing:.5px;border-radius:7px!important;-webkit-border-radius:5px!important;-moz-border-radius:7px!important;-ms-border-radius:7px!important;-o-border-radius:7px!important}.vf-control-bar-video-preview{display:flex;flex-direction:column;padding-bottom:10px}.vf-control-bar-video-preview>div:first-child{display:flex;align-items:center;justify-content:flex-end;padding:2px 0;height:25px}.vf-duration{font-size:15px;white-space:nowrap;color:var(--vf-color-white)}.rc-slider{position:relative;width:100%;height:14px;padding:5px 0;border-radius:6px;touch-action:none;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.rc-slider *{box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.rc-slider-rail{position:absolute;width:100%;height:4px;background-color:#e9e9e9;border-radius:6px}.rc-slider-track,.rc-slider-tracks{position:absolute;height:4px;background-color:#abe2fb;border-radius:6px}.rc-slider-track-draggable{z-index:1;box-sizing:content-box;background-clip:content-box;border-top:5px solid rgba(0,0,0,0);border-bottom:5px solid rgba(0,0,0,0);transform:translateY(-5px)}.rc-slider-handle{position:absolute;z-index:1;width:14px;height:14px;margin-top:-5px;background-color:#fff;border:solid 2px #96dbfa;border-radius:50%;cursor:pointer;cursor:-webkit-grab;cursor:grab;opacity:.8;touch-action:pan-x}.rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging{border-color:#57c5f7;box-shadow:0 0 0 5px #96dbfa}.rc-slider-handle:focus{outline:none;box-shadow:none}.rc-slider-handle:focus-visible{border-color:#2db7f5;box-shadow:0 0 0 3px #96dbfa}.rc-slider-handle-click-focused:focus{border-color:#96dbfa;box-shadow:unset}.rc-slider-handle:hover{border-color:#57c5f7}.rc-slider-handle:active{border-color:#57c5f7;box-shadow:0 0 5px #57c5f7;cursor:-webkit-grabbing;cursor:grabbing}.rc-slider-mark{position:absolute;top:18px;left:0;width:100%;font-size:12px}.rc-slider-mark-text{position:absolute;display:inline-block;color:#999;text-align:center;vertical-align:middle;cursor:pointer}.rc-slider-mark-text-active{color:#666}.rc-slider-step{position:absolute;width:100%;height:4px;background:transparent}.rc-slider-dot{position:absolute;bottom:-2px;width:8px;height:8px;vertical-align:middle;background-color:#fff;border:2px solid #e9e9e9;border-radius:50%;cursor:pointer}.rc-slider-dot-active{border-color:#96dbfa}.rc-slider-dot-reverse{margin-right:-4px}.rc-slider-disabled{background-color:#e9e9e9}.rc-slider-disabled .rc-slider-track{background-color:#ccc}.rc-slider-disabled .rc-slider-handle,.rc-slider-disabled .rc-slider-dot{background-color:#fff;border-color:#ccc;box-shadow:none;cursor:not-allowed}.rc-slider-disabled .rc-slider-mark-text,.rc-slider-disabled .rc-slider-dot{cursor:not-allowed!important}.rc-slider-vertical{width:14px;height:100%;padding:0 5px}.rc-slider-vertical .rc-slider-rail{width:4px;height:100%}.rc-slider-vertical .rc-slider-track{bottom:0;left:5px;width:4px}.rc-slider-vertical .rc-slider-track-draggable{border-top:0;border-bottom:0;border-right:5px solid rgba(0,0,0,0);border-left:5px solid rgba(0,0,0,0);transform:translate(-5px)}.rc-slider-vertical .rc-slider-handle{position:absolute;z-index:1;margin-top:0;margin-left:-5px;touch-action:pan-y}.rc-slider-vertical .rc-slider-mark{top:0;left:18px;height:100%}.rc-slider-vertical .rc-slider-step{width:4px;height:100%}.rc-slider-vertical .rc-slider-dot{margin-left:-2px}.rc-slider-tooltip-zoom-down-enter,.rc-slider-tooltip-zoom-down-appear,.rc-slider-tooltip-zoom-down-leave{display:block!important;animation-duration:.3s;animation-fill-mode:both;animation-play-state:paused}.rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,.rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active{animation-name:rcSliderTooltipZoomDownIn;animation-play-state:running}.rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active{animation-name:rcSliderTooltipZoomDownOut;animation-play-state:running}.rc-slider-tooltip-zoom-down-enter,.rc-slider-tooltip-zoom-down-appear{transform:scale(0);animation-timing-function:cubic-bezier(.23,1,.32,1)}.rc-slider-tooltip-zoom-down-leave{animation-timing-function:cubic-bezier(.755,.05,.855,.06)}@keyframes rcSliderTooltipZoomDownIn{0%{transform:scale(0);transform-origin:50% 100%;opacity:0}to{transform:scale(1);transform-origin:50% 100%}}@keyframes rcSliderTooltipZoomDownOut{0%{transform:scale(1);transform-origin:50% 100%}to{transform:scale(0);transform-origin:50% 100%;opacity:0}}.rc-slider-tooltip{position:absolute;top:-9999px;left:-9999px;visibility:visible;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.rc-slider-tooltip *{box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.rc-slider-tooltip-hidden{display:none}.rc-slider-tooltip-placement-top{padding:4px 0 8px}.rc-slider-tooltip-inner{min-width:24px;height:24px;padding:6px 2px;color:#fff;font-size:12px;line-height:1;text-align:center;text-decoration:none;background-color:#6c6c6c;border-radius:6px;box-shadow:0 0 4px #d9d9d9}.rc-slider-tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow{bottom:4px;left:50%;margin-left:-4px;border-width:4px 4px 0;border-top-color:#6c6c6c}:root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:.9;--rt-transition-show-delay:.15s;--rt-transition-closing-delay:.15s}.core-styles-module_tooltip__3vRRp{left:0;opacity:0;pointer-events:none;position:absolute;top:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{background:inherit;position:absolute}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay) ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay) ease-in}.styles-module_tooltip__mnnfp{border-radius:3px;font-size:90%;padding:8px 16px;width:max-content}.styles-module_arrow__K0L3T{height:8px;width:8px}[class*=react-tooltip__place-top]>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*=react-tooltip__place-right]>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*=react-tooltip__place-bottom]>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*=react-tooltip__place-left]>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}')),document.head.appendChild(o)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import * as b from "react";
import Qe, { useState as ue, useEffect as ee, useRef as Le, createContext as fn, useContext as dn, useCallback as vn, useImperativeHandle as mn, useLayoutEffect as hn, forwardRef as pn } from "react";
function gn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Qt = { exports: {} }, Lt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vr;
function yn() {
  if (vr)
    return Lt;
  vr = 1;
  var e = Qe, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
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
var jt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr;
function wn() {
  return mr || (mr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Qe, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), m = Symbol.iterator, p = "@@iterator";
    function E(i) {
      if (i === null || typeof i != "object")
        return null;
      var g = m && i[m] || i[p];
      return typeof g == "function" ? g : null;
    }
    var v = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(i) {
      {
        for (var g = arguments.length, S = new Array(g > 1 ? g - 1 : 0), R = 1; R < g; R++)
          S[R - 1] = arguments[R];
        x("error", i, S);
      }
    }
    function x(i, g, S) {
      {
        var R = v.ReactDebugCurrentFrame, O = R.getStackAddendum();
        O !== "" && (g += "%s", S = S.concat([O]));
        var _ = S.map(function(L) {
          return String(L);
        });
        _.unshift("Warning: " + g), Function.prototype.apply.call(console[i], console, _);
      }
    }
    var A = !1, N = !1, te = !1, F = !1, re = !1, Y;
    Y = Symbol.for("react.module.reference");
    function Q(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === r || i === l || re || i === o || i === u || i === d || F || i === y || A || N || te || typeof i == "object" && i !== null && (i.$$typeof === w || i.$$typeof === f || i.$$typeof === a || i.$$typeof === s || i.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === Y || i.getModuleId !== void 0));
    }
    function J(i, g, S) {
      var R = i.displayName;
      if (R)
        return R;
      var O = g.displayName || g.name || "";
      return O !== "" ? S + "(" + O + ")" : S;
    }
    function K(i) {
      return i.displayName || "Context";
    }
    function oe(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
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
            var O = i, _ = O._payload, L = O._init;
            try {
              return oe(L(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var U = Object.assign, ne = 0, G, H, W, B, X, Re, De;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Ke() {
      {
        if (ne === 0) {
          G = console.log, H = console.info, W = console.warn, B = console.error, X = console.group, Re = console.groupCollapsed, De = console.groupEnd;
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
    function Ie() {
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
              value: H
            }),
            warn: U({}, i, {
              value: W
            }),
            error: U({}, i, {
              value: B
            }),
            group: U({}, i, {
              value: X
            }),
            groupCollapsed: U({}, i, {
              value: Re
            }),
            groupEnd: U({}, i, {
              value: De
            })
          });
        }
        ne < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = v.ReactCurrentDispatcher, se;
    function ge(i, g, S) {
      {
        if (se === void 0)
          try {
            throw Error();
          } catch (O) {
            var R = O.stack.trim().match(/\n( *(at )?)/);
            se = R && R[1] || "";
          }
        return `
` + se + i;
      }
    }
    var M = !1, ce;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      ce = new Ve();
    }
    function Ae(i, g) {
      if (!i || M)
        return "";
      {
        var S = ce.get(i);
        if (S !== void 0)
          return S;
      }
      var R;
      M = !0;
      var O = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = z.current, z.current = null, Ke();
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
          for (var P = We.stack.split(`
`), I = R.stack.split(`
`), Z = P.length - 1, ie = I.length - 1; Z >= 1 && ie >= 0 && P[Z] !== I[ie]; )
            ie--;
          for (; Z >= 1 && ie >= 0; Z--, ie--)
            if (P[Z] !== I[ie]) {
              if (Z !== 1 || ie !== 1)
                do
                  if (Z--, ie--, ie < 0 || P[Z] !== I[ie]) {
                    var de = `
` + P[Z].replace(" at new ", " at ");
                    return i.displayName && de.includes("<anonymous>") && (de = de.replace("<anonymous>", i.displayName)), typeof i == "function" && ce.set(i, de), de;
                  }
                while (Z >= 1 && ie >= 0);
              break;
            }
        }
      } finally {
        M = !1, z.current = _, Ie(), Error.prepareStackTrace = O;
      }
      var ut = i ? i.displayName || i.name : "", pt = ut ? ge(ut) : "";
      return typeof i == "function" && ce.set(i, pt), pt;
    }
    function Ye(i, g, S) {
      return Ae(i, !1);
    }
    function ye(i) {
      var g = i.prototype;
      return !!(g && g.isReactComponent);
    }
    function $e(i, g, S) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return Ae(i, ye(i));
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
            return Ye(i.render);
          case f:
            return $e(i.type, g, S);
          case w: {
            var R = i, O = R._payload, _ = R._init;
            try {
              return $e(_(O), g, S);
            } catch {
            }
          }
        }
      return "";
    }
    var Ce = Object.prototype.hasOwnProperty, he = {}, le = v.ReactDebugCurrentFrame;
    function Fe(i) {
      if (i) {
        var g = i._owner, S = $e(i.type, i._source, g ? g.type : null);
        le.setExtraStackFrame(S);
      } else
        le.setExtraStackFrame(null);
    }
    function Ee(i, g, S, R, O) {
      {
        var _ = Function.call.bind(Ce);
        for (var L in i)
          if (_(i, L)) {
            var P = void 0;
            try {
              if (typeof i[L] != "function") {
                var I = Error((R || "React class") + ": " + S + " type `" + L + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[L] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw I.name = "Invariant Violation", I;
              }
              P = i[L](g, L, R, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Z) {
              P = Z;
            }
            P && !(P instanceof Error) && (Fe(O), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", R || "React class", S, L, typeof P), Fe(null)), P instanceof Error && !(P.message in he) && (he[P.message] = !0, Fe(O), h("Failed %s type: %s", S, P.message), Fe(null));
          }
      }
    }
    var ve = Array.isArray;
    function ke(i) {
      return ve(i);
    }
    function Je(i) {
      {
        var g = typeof Symbol == "function" && Symbol.toStringTag, S = g && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return S;
      }
    }
    function j(i) {
      try {
        return fe(i), !1;
      } catch {
        return !0;
      }
    }
    function fe(i) {
      return "" + i;
    }
    function Oe(i) {
      if (j(i))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(i)), fe(i);
    }
    var we = v.ReactCurrentOwner, ct = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, dt, nt, Ne;
    Ne = {};
    function Ue(i) {
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
        Ne[S] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', oe(we.current.type), i.ref), Ne[S] = !0);
      }
    }
    function Ge(i, g) {
      {
        var S = function() {
          dt || (dt = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
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
          nt || (nt = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        S.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: S,
          configurable: !0
        });
      }
    }
    var vt = function(i, g, S, R, O, _, L) {
      var P = {
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
      return P._store = {}, Object.defineProperty(P._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(P, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.defineProperty(P, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: O
      }), Object.freeze && (Object.freeze(P.props), Object.freeze(P)), P;
    };
    function mt(i, g, S, R, O) {
      {
        var _, L = {}, P = null, I = null;
        S !== void 0 && (Oe(S), P = "" + S), ae(g) && (Oe(g.key), P = "" + g.key), Ue(g) && (I = g.ref, ot(g, O));
        for (_ in g)
          Ce.call(g, _) && !ct.hasOwnProperty(_) && (L[_] = g[_]);
        if (i && i.defaultProps) {
          var Z = i.defaultProps;
          for (_ in Z)
            L[_] === void 0 && (L[_] = Z[_]);
        }
        if (P || I) {
          var ie = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          P && Ge(L, ie), I && lt(L, ie);
        }
        return vt(i, P, I, O, R, we.current, L);
      }
    }
    var Be = v.ReactCurrentOwner, at = v.ReactDebugCurrentFrame;
    function Xe(i) {
      if (i) {
        var g = i._owner, S = $e(i.type, i._source, g ? g.type : null);
        at.setExtraStackFrame(S);
      } else
        at.setExtraStackFrame(null);
    }
    var it;
    it = !1;
    function me(i) {
      return typeof i == "object" && i !== null && i.$$typeof === t;
    }
    function Me() {
      {
        if (Be.current) {
          var i = oe(Be.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function D(i) {
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
    function Pe(i) {
      {
        var g = Me();
        if (!g) {
          var S = typeof i == "string" ? i : i.displayName || i.name;
          S && (g = `

Check the top-level render call using <` + S + ">.");
        }
        return g;
      }
    }
    function qe(i, g) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var S = Pe(g);
        if (q[S])
          return;
        q[S] = !0;
        var R = "";
        i && i._owner && i._owner !== Be.current && (R = " It was passed a child from " + oe(i._owner.type) + "."), Xe(i), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', S, R), Xe(null);
      }
    }
    function C(i, g) {
      {
        if (typeof i != "object")
          return;
        if (ke(i))
          for (var S = 0; S < i.length; S++) {
            var R = i[S];
            me(R) && qe(R, g);
          }
        else if (me(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var O = E(i);
          if (typeof O == "function" && O !== i.entries)
            for (var _ = O.call(i), L; !(L = _.next()).done; )
              me(L.value) && qe(L.value, g);
        }
      }
    }
    function $(i) {
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
          var O = oe(g);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", O || "Unknown");
        }
        typeof g.getDefaultProps == "function" && !g.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function V(i) {
      {
        for (var g = Object.keys(i.props), S = 0; S < g.length; S++) {
          var R = g[S];
          if (R !== "children" && R !== "key") {
            Xe(i), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", R), Xe(null);
            break;
          }
        }
        i.ref !== null && (Xe(i), h("Invalid attribute `ref` supplied to `React.Fragment`."), Xe(null));
      }
    }
    function pe(i, g, S, R, O, _) {
      {
        var L = Q(i);
        if (!L) {
          var P = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (P += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var I = D(O);
          I ? P += I : P += Me();
          var Z;
          i === null ? Z = "null" : ke(i) ? Z = "array" : i !== void 0 && i.$$typeof === t ? (Z = "<" + (oe(i.type) || "Unknown") + " />", P = " Did you accidentally export a JSX literal instead of a component?") : Z = typeof i, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Z, P);
        }
        var ie = mt(i, g, S, O, _);
        if (ie == null)
          return ie;
        if (L) {
          var de = g.children;
          if (de !== void 0)
            if (R)
              if (ke(de)) {
                for (var ut = 0; ut < de.length; ut++)
                  C(de[ut], i);
                Object.freeze && Object.freeze(de);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              C(de, i);
        }
        return i === r ? V(ie) : $(ie), ie;
      }
    }
    function Se(i, g, S) {
      return pe(i, g, S, !0);
    }
    function Te(i, g, S) {
      return pe(i, g, S, !1);
    }
    var Ze = Te, _e = Se;
    jt.Fragment = r, jt.jsx = Ze, jt.jsxs = _e;
  }()), jt;
}
process.env.NODE_ENV === "production" ? Qt.exports = yn() : Qt.exports = wn();
var k = Qt.exports;
const hr = (e) => !e || typeof e == "function" ? e : (t) => {
  e.current = t;
};
function pr(e, t) {
  const n = hr(e), r = hr(t);
  return (o) => {
    typeof n == "function" && n(o), typeof r == "function" && r(o);
  };
}
const rt = (e) => `vf-${e}`;
var Vr = { exports: {} };
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
})(Vr);
var bn = Vr.exports;
const xe = /* @__PURE__ */ gn(bn), je = (e, t) => (t == null ? void 0 : t.split(" ")).map((r) => `${e}-${r}`).join(" "), En = Qe.forwardRef(
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
    }, [a]), /* @__PURE__ */ k.jsxs(
      "span",
      {
        id: je(d, "play-button-container"),
        className: f,
        ref: t,
        onClick: w,
        children: [
          /* @__PURE__ */ k.jsx(
            "span",
            {
              className: je(
                d,
                "play-button play-button-before"
              )
            }
          ),
          /* @__PURE__ */ k.jsx(
            "span",
            {
              className: je(
                d,
                "play-button play-button-after"
              )
            }
          )
        ]
      }
    );
  }
), xn = (e) => /* @__PURE__ */ b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 192, height: 192, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ b.createElement("g", { fill: "none" }, /* @__PURE__ */ b.createElement("path", { d: "M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" }), /* @__PURE__ */ b.createElement("path", { fill: "currentColor", d: "M13.26 3.3a1.1 1.1 0 0 1 1.734.78l.006.114v15.612a1.1 1.1 0 0 1-1.643.957l-.096-.062L6.68 16H4a2 2 0 0 1-1.995-1.85L2 14v-4a2 2 0 0 1 1.85-1.995L4 8h2.68zm6.407 3.483A6.985 6.985 0 0 1 22 12a6.985 6.985 0 0 1-2.333 5.217a1 1 0 1 1-1.334-1.49A4.985 4.985 0 0 0 20 12c0-1.48-.642-2.81-1.667-3.727a1 1 0 1 1 1.334-1.49m-2 2.236A3.992 3.992 0 0 1 19 11.999a3.991 3.991 0 0 1-1.333 2.982a1 1 0 0 1-1.422-1.4l.088-.09c.41-.368.667-.899.667-1.491a1.99 1.99 0 0 0-.548-1.376l-.119-.115a1 1 0 1 1 1.334-1.49" }))), Sn = (e) => /* @__PURE__ */ b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 192, height: 192, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ b.createElement("g", { fill: "none" }, /* @__PURE__ */ b.createElement("path", { d: "M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" }), /* @__PURE__ */ b.createElement("path", { fill: "currentColor", d: "M13.26 3.3a1.1 1.1 0 0 1 1.734.78l.006.114v15.612a1.1 1.1 0 0 1-1.643.957l-.096-.062L6.68 16H4a2 2 0 0 1-1.995-1.85L2 14v-4a2 2 0 0 1 1.85-1.994L4 8h2.68zm4.326 5.872L19 10.586l1.414-1.414a1 1 0 1 1 1.414 1.414L20.414 12l1.414 1.414a1 1 0 0 1-1.414 1.415L19 13.414l-1.414 1.415a1 1 0 0 1-1.414-1.415L17.586 12l-1.414-1.414a1 1 0 1 1 1.414-1.414" }))), Cn = Qe.forwardRef(
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
    const y = c ? Sn : xn;
    return /* @__PURE__ */ k.jsx("div", { className: f, ref: t, onClick: w, children: /* @__PURE__ */ k.jsx(y, { width: He, height: He }) });
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
function _n(e, t) {
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
function Rn(e) {
  var t = _n(e, "string");
  return bt(t) == "symbol" ? t : String(t);
}
function ft(e, t, n) {
  return t = Rn(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function gr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ze(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gr(Object(n), !0).forEach(function(r) {
      ft(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Jt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function kn(e) {
  if (Array.isArray(e))
    return Jt(e);
}
function On(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Ur(e, t) {
  if (e) {
    if (typeof e == "string")
      return Jt(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Jt(e, t);
  }
}
function Tn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wt(e) {
  return kn(e) || On(e) || Ur(e) || Tn();
}
function An(e) {
  if (Array.isArray(e))
    return e;
}
function Nn(e, t) {
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
function Mn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function et(e, t) {
  return An(e) || Nn(e, t) || Ur(e, t) || Mn();
}
function yr(e) {
  var t = b.useRef();
  t.current = e;
  var n = b.useCallback(function() {
    for (var r, o = arguments.length, l = new Array(o), a = 0; a < o; a++)
      l[a] = arguments[a];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(l));
  }, []);
  return n;
}
function Pn() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var wr = process.env.NODE_ENV !== "test" && Pn() ? b.useLayoutEffect : b.useEffect, Ln = function(t, n) {
  var r = b.useRef(!0);
  wr(function() {
    return t(r.current);
  }, n), wr(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, br = function(t, n) {
  Ln(function(r) {
    if (!r)
      return t();
  }, n);
};
function Er(e) {
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
function jn(e, t) {
  var n = t || {}, r = n.defaultValue, o = n.value, l = n.onChange, a = n.postState, s = Er(function() {
    return qt(o) ? o : qt(r) ? typeof r == "function" ? r() : r : typeof e == "function" ? e() : e;
  }), c = et(s, 2), u = c[0], d = c[1], f = o !== void 0 ? o : u, w = a ? a(f) : f, y = yr(l), m = Er([f]), p = et(m, 2), E = p[0], v = p[1];
  br(function() {
    var x = E[0];
    u !== x && y(u, x);
  }, [E]), br(function() {
    qt(o) || d(o);
  }, [o]);
  var h = yr(function(x, A) {
    d(x, A), v([f], A);
  });
  return [w, h];
}
var er = {}, lr = [], Dn = function(t) {
  lr.push(t);
};
function In(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = lr.reduce(function(r, o) {
      return o(r ?? "", "warning");
    }, t);
    n && console.error("Warning: ".concat(n));
  }
}
function $n(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = lr.reduce(function(r, o) {
      return o(r ?? "", "note");
    }, t);
    n && console.warn("Note: ".concat(n));
  }
}
function Fn() {
  er = {};
}
function Br(e, t, n) {
  !t && !er[n] && (e(!1, n), er[n] = !0);
}
function Nt(e, t) {
  Br(In, e, t);
}
function Hn(e, t) {
  Br($n, e, t);
}
Nt.preMessage = Dn;
Nt.resetWarned = Fn;
Nt.noteOnce = Hn;
function Vn(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function o(l, a) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = r.has(l);
    if (Nt(!c, "Warning: There may be circular references"), c)
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
var kt = /* @__PURE__ */ b.createContext({
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
function Bt() {
  return Bt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Bt.apply(this, arguments);
}
function Un(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, l;
  for (l = 0; l < r.length; l++)
    o = r[l], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Wr(e, t) {
  if (e == null)
    return {};
  var n = Un(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (o = 0; o < l.length; o++)
      r = l[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
var T = {
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
    n >= T.F1 && n <= T.F12)
      return !1;
    switch (n) {
      case T.ALT:
      case T.CAPS_LOCK:
      case T.CONTEXT_MENU:
      case T.CTRL:
      case T.DOWN:
      case T.END:
      case T.ESC:
      case T.HOME:
      case T.INSERT:
      case T.LEFT:
      case T.MAC_FF_META:
      case T.META:
      case T.NUMLOCK:
      case T.NUM_CENTER:
      case T.PAGE_DOWN:
      case T.PAGE_UP:
      case T.PAUSE:
      case T.PRINT_SCREEN:
      case T.RIGHT:
      case T.SHIFT:
      case T.UP:
      case T.WIN_KEY:
      case T.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= T.ZERO && t <= T.NINE || t >= T.NUM_ZERO && t <= T.NUM_MULTIPLY || t >= T.A && t <= T.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case T.SPACE:
      case T.QUESTION_MARK:
      case T.NUM_PLUS:
      case T.NUM_MINUS:
      case T.NUM_PERIOD:
      case T.NUM_DIVISION:
      case T.SEMICOLON:
      case T.DASH:
      case T.EQUALS:
      case T.COMMA:
      case T.PERIOD:
      case T.SLASH:
      case T.APOSTROPHE:
      case T.SINGLE_QUOTE:
      case T.OPEN_SQUARE_BRACKET:
      case T.BACKSLASH:
      case T.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
};
function tr(e, t, n) {
  return (e - t) / (n - t);
}
function ar(e, t, n, r) {
  var o = tr(t, n, r), l = {};
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
function Tt(e, t) {
  return Array.isArray(e) ? e[t] : e;
}
var Bn = ["prefixCls", "value", "valueIndex", "onStartMove", "style", "render", "dragging", "onOffsetChange", "onChangeComplete"], zr = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var n, r, o = e.prefixCls, l = e.value, a = e.valueIndex, s = e.onStartMove, c = e.style, u = e.render, d = e.dragging, f = e.onOffsetChange, w = e.onChangeComplete, y = Wr(e, Bn), m = b.useContext(kt), p = m.min, E = m.max, v = m.direction, h = m.disabled, x = m.keyboard, A = m.range, N = m.tabIndex, te = m.ariaLabelForHandle, F = m.ariaLabelledByForHandle, re = m.ariaValueTextFormatterForHandle, Y = m.styles, Q = m.classNames, J = "".concat(o, "-handle"), K = function(W) {
    h || s(W, a);
  }, oe = function(W) {
    if (!h && x) {
      var B = null;
      switch (W.which || W.keyCode) {
        case T.LEFT:
          B = v === "ltr" || v === "btt" ? -1 : 1;
          break;
        case T.RIGHT:
          B = v === "ltr" || v === "btt" ? 1 : -1;
          break;
        case T.UP:
          B = v !== "ttb" ? 1 : -1;
          break;
        case T.DOWN:
          B = v !== "ttb" ? -1 : 1;
          break;
        case T.HOME:
          B = "min";
          break;
        case T.END:
          B = "max";
          break;
        case T.PAGE_UP:
          B = 2;
          break;
        case T.PAGE_DOWN:
          B = -2;
          break;
      }
      B !== null && (W.preventDefault(), f(B, a));
    }
  }, U = function(W) {
    switch (W.which || W.keyCode) {
      case T.LEFT:
      case T.RIGHT:
      case T.UP:
      case T.DOWN:
      case T.HOME:
      case T.END:
      case T.PAGE_UP:
      case T.PAGE_DOWN:
        w == null || w();
        break;
    }
  }, ne = ar(v, l, p, E), G = /* @__PURE__ */ b.createElement("div", Bt({
    ref: t,
    className: xe(J, (n = {}, ft(n, "".concat(J, "-").concat(a + 1), A), ft(n, "".concat(J, "-dragging"), d), n), Q.handle),
    style: ze(ze(ze({}, ne), c), Y.handle),
    onMouseDown: K,
    onTouchStart: K,
    onKeyDown: oe,
    onKeyUp: U,
    tabIndex: h ? null : Tt(N, a),
    role: "slider",
    "aria-valuemin": p,
    "aria-valuemax": E,
    "aria-valuenow": l,
    "aria-disabled": h,
    "aria-label": Tt(te, a),
    "aria-labelledby": Tt(F, a),
    "aria-valuetext": (r = Tt(re, a)) === null || r === void 0 ? void 0 : r(l),
    "aria-orientation": v === "ltr" || v === "rtl" ? "horizontal" : "vertical"
  }, y));
  return u && (G = u(G, {
    index: a,
    prefixCls: o,
    value: l,
    dragging: d
  })), G;
});
process.env.NODE_ENV !== "production" && (zr.displayName = "Handle");
var Wn = ["prefixCls", "style", "onStartMove", "onOffsetChange", "values", "handleRender", "draggingIndex"], Kr = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.style, o = e.onStartMove, l = e.onOffsetChange, a = e.values, s = e.handleRender, c = e.draggingIndex, u = Wr(e, Wn), d = b.useRef({});
  return b.useImperativeHandle(t, function() {
    return {
      focus: function(w) {
        var y;
        (y = d.current[w]) === null || y === void 0 || y.focus();
      }
    };
  }), /* @__PURE__ */ b.createElement(b.Fragment, null, a.map(function(f, w) {
    return /* @__PURE__ */ b.createElement(zr, Bt({
      ref: function(m) {
        m ? d.current[w] = m : delete d.current[w];
      },
      dragging: c === w,
      prefixCls: n,
      style: Tt(r, w),
      key: w,
      value: f,
      valueIndex: w,
      onStartMove: o,
      onOffsetChange: l,
      render: s
    }, u));
  }));
});
process.env.NODE_ENV !== "production" && (Kr.displayName = "Handles");
function xr(e) {
  var t = "touches" in e ? e.touches[0] : e;
  return {
    pageX: t.pageX,
    pageY: t.pageY
  };
}
function zn(e, t, n, r, o, l, a, s, c) {
  var u = b.useState(null), d = et(u, 2), f = d[0], w = d[1], y = b.useState(-1), m = et(y, 2), p = m[0], E = m[1], v = b.useState(n), h = et(v, 2), x = h[0], A = h[1], N = b.useState(n), te = et(N, 2), F = te[0], re = te[1], Y = b.useRef(null), Q = b.useRef(null);
  b.useEffect(function() {
    p === -1 && A(n);
  }, [n, p]), b.useEffect(function() {
    return function() {
      document.removeEventListener("mousemove", Y.current), document.removeEventListener("mouseup", Q.current), document.removeEventListener("touchmove", Y.current), document.removeEventListener("touchend", Q.current);
    };
  }, []);
  var J = function(H, W) {
    x.some(function(B, X) {
      return B !== H[X];
    }) && (W !== void 0 && w(W), A(H), a(H));
  }, K = function(H, W) {
    if (H === -1) {
      var B = F[0], X = F[F.length - 1], Re = r - B, De = o - X, be = W * (o - r);
      be = Math.max(be, Re), be = Math.min(be, De);
      var Ke = l(B + be);
      be = Ke - B;
      var Ie = F.map(function(M) {
        return M + be;
      });
      J(Ie);
    } else {
      var z = (o - r) * W, se = wt(x);
      se[H] = F[H];
      var ge = c(se, z, H, "dist");
      J(ge.values, ge.value);
    }
  }, oe = b.useRef(K);
  oe.current = K;
  var U = function(H, W, B) {
    H.stopPropagation();
    var X = B || n, Re = X[W];
    E(W), w(Re), re(X);
    var De = xr(H), be = De.pageX, Ke = De.pageY, Ie = function(ge) {
      ge.preventDefault();
      var M = xr(ge), ce = M.pageX, Ve = M.pageY, Ae = ce - be, Ye = Ve - Ke, ye = e.current.getBoundingClientRect(), $e = ye.width, Ce = ye.height, he;
      switch (t) {
        case "btt":
          he = -Ye / Ce;
          break;
        case "ttb":
          he = Ye / Ce;
          break;
        case "rtl":
          he = -Ae / $e;
          break;
        default:
          he = Ae / $e;
      }
      oe.current(W, he);
    }, z = function se(ge) {
      ge.preventDefault(), document.removeEventListener("mouseup", se), document.removeEventListener("mousemove", Ie), document.removeEventListener("touchend", se), document.removeEventListener("touchmove", Ie), Y.current = null, Q.current = null, E(-1), s();
    };
    document.addEventListener("mouseup", z), document.addEventListener("mousemove", Ie), document.addEventListener("touchend", z), document.addEventListener("touchmove", Ie), Y.current = Ie, Q.current = z;
  }, ne = b.useMemo(function() {
    var G = wt(n).sort(function(W, B) {
      return W - B;
    }), H = wt(x).sort(function(W, B) {
      return W - B;
    });
    return G.every(function(W, B) {
      return W === H[B];
    }) ? x : n;
  }, [n, x]);
  return [p, f, ne, U];
}
function Kn(e, t, n, r, o, l) {
  var a = b.useCallback(function(y) {
    var m = isFinite(y) ? y : e;
    return m = Math.min(t, y), m = Math.max(e, m), m;
  }, [e, t]), s = b.useCallback(function(y) {
    if (n !== null) {
      var m = e + Math.round((a(y) - e) / n) * n, p = function(x) {
        return (String(x).split(".")[1] || "").length;
      }, E = Math.max(p(n), p(t), p(e)), v = Number(m.toFixed(E));
      return e <= v && v <= t ? v : null;
    }
    return null;
  }, [n, e, t, a]), c = b.useCallback(function(y) {
    var m = a(y), p = r.map(function(h) {
      return h.value;
    });
    n !== null && p.push(s(y)), p.push(e, t);
    var E = p[0], v = t - e;
    return p.forEach(function(h) {
      var x = Math.abs(m - h);
      x <= v && (E = h, v = x);
    }), E;
  }, [e, t, r, n, a, s]), u = function y(m, p, E) {
    var v = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit";
    if (typeof p == "number") {
      var h, x = m[E], A = x + p, N = [];
      r.forEach(function(Q) {
        N.push(Q.value);
      }), N.push(e, t), N.push(s(x));
      var te = p > 0 ? 1 : -1;
      v === "unit" ? N.push(s(x + te * n)) : N.push(s(A)), N = N.filter(function(Q) {
        return Q !== null;
      }).filter(function(Q) {
        return p < 0 ? Q <= x : Q >= x;
      }), v === "unit" && (N = N.filter(function(Q) {
        return Q !== x;
      }));
      var F = v === "unit" ? x : A;
      h = N[0];
      var re = Math.abs(h - F);
      if (N.forEach(function(Q) {
        var J = Math.abs(Q - F);
        J < re && (h = Q, re = J);
      }), h === void 0)
        return p < 0 ? e : t;
      if (v === "dist")
        return h;
      if (Math.abs(p) > 1) {
        var Y = wt(m);
        return Y[E] = h, y(Y, p - te, E, v);
      }
      return h;
    } else {
      if (p === "min")
        return e;
      if (p === "max")
        return t;
    }
  }, d = function(m, p, E) {
    var v = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit", h = m[E], x = u(m, p, E, v);
    return {
      value: x,
      changed: x !== h
    };
  }, f = function(m) {
    return l === null && m === 0 || typeof l == "number" && m < l;
  }, w = function(m, p, E) {
    var v = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit", h = m.map(c), x = h[E], A = u(h, p, E, v);
    if (h[E] = A, o === !1) {
      var N = l || 0;
      E > 0 && h[E - 1] !== x && (h[E] = Math.max(h[E], h[E - 1] + N)), E < h.length - 1 && h[E + 1] !== x && (h[E] = Math.min(h[E], h[E + 1] - N));
    } else if (typeof l == "number" || l === null) {
      for (var te = E + 1; te < h.length; te += 1)
        for (var F = !0; f(h[te] - h[te - 1]) && F; ) {
          var re = d(h, 1, te);
          h[te] = re.value, F = re.changed;
        }
      for (var Y = E; Y > 0; Y -= 1)
        for (var Q = !0; f(h[Y] - h[Y - 1]) && Q; ) {
          var J = d(h, -1, Y - 1);
          h[Y - 1] = J.value, Q = J.changed;
        }
      for (var K = h.length - 1; K > 0; K -= 1)
        for (var oe = !0; f(h[K] - h[K - 1]) && oe; ) {
          var U = d(h, -1, K - 1);
          h[K - 1] = U.value, oe = U.changed;
        }
      for (var ne = 0; ne < h.length - 1; ne += 1)
        for (var G = !0; f(h[ne + 1] - h[ne]) && G; ) {
          var H = d(h, 1, ne + 1);
          h[ne + 1] = H.value, G = H.changed;
        }
    }
    return {
      value: h[E],
      values: h
    };
  };
  return [c, w];
}
function Yn(e) {
  var t = e.prefixCls, n = e.style, r = e.children, o = e.value, l = e.onClick, a = b.useContext(kt), s = a.min, c = a.max, u = a.direction, d = a.includedStart, f = a.includedEnd, w = a.included, y = "".concat(t, "-text"), m = ar(u, o, s, c);
  return /* @__PURE__ */ b.createElement("span", {
    className: xe(y, ft({}, "".concat(y, "-active"), w && d <= o && o <= f)),
    style: ze(ze({}, m), n),
    onMouseDown: function(E) {
      E.stopPropagation();
    },
    onClick: function() {
      l(o);
    }
  }, r);
}
function Gn(e) {
  var t = e.prefixCls, n = e.marks, r = e.onClick, o = "".concat(t, "-mark");
  return n.length ? /* @__PURE__ */ b.createElement("div", {
    className: o
  }, n.map(function(l) {
    var a = l.value, s = l.style, c = l.label;
    return /* @__PURE__ */ b.createElement(Yn, {
      key: a,
      prefixCls: o,
      style: s,
      value: a,
      onClick: r
    }, c);
  })) : null;
}
function Xn(e) {
  var t = e.prefixCls, n = e.value, r = e.style, o = e.activeStyle, l = b.useContext(kt), a = l.min, s = l.max, c = l.direction, u = l.included, d = l.includedStart, f = l.includedEnd, w = "".concat(t, "-dot"), y = u && d <= n && n <= f, m = ze(ze({}, ar(c, n, a, s)), typeof r == "function" ? r(n) : r);
  return y && (m = ze(ze({}, m), typeof o == "function" ? o(n) : o)), /* @__PURE__ */ b.createElement("span", {
    className: xe(w, ft({}, "".concat(w, "-active"), y)),
    style: m
  });
}
function qn(e) {
  var t = e.prefixCls, n = e.marks, r = e.dots, o = e.style, l = e.activeStyle, a = b.useContext(kt), s = a.min, c = a.max, u = a.step, d = b.useMemo(function() {
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
    return /* @__PURE__ */ b.createElement(Xn, {
      prefixCls: t,
      key: f,
      value: f,
      style: o,
      activeStyle: l
    });
  }));
}
function Sr(e) {
  var t, n = e.prefixCls, r = e.style, o = e.start, l = e.end, a = e.index, s = e.onStartMove, c = e.replaceCls, u = b.useContext(kt), d = u.direction, f = u.min, w = u.max, y = u.disabled, m = u.range, p = u.classNames, E = "".concat(n, "-track"), v = tr(o, f, w), h = tr(l, f, w), x = function(F) {
    !y && s && s(F, -1);
  }, A = {};
  switch (d) {
    case "rtl":
      A.right = "".concat(v * 100, "%"), A.width = "".concat(h * 100 - v * 100, "%");
      break;
    case "btt":
      A.bottom = "".concat(v * 100, "%"), A.height = "".concat(h * 100 - v * 100, "%");
      break;
    case "ttb":
      A.top = "".concat(v * 100, "%"), A.height = "".concat(h * 100 - v * 100, "%");
      break;
    default:
      A.left = "".concat(v * 100, "%"), A.width = "".concat(h * 100 - v * 100, "%");
  }
  var N = c || xe(E, (t = {}, ft(t, "".concat(E, "-").concat(a + 1), a !== null && m), ft(t, "".concat(n, "-track-draggable"), s), t), p.track);
  return /* @__PURE__ */ b.createElement("div", {
    className: N,
    style: ze(ze({}, A), r),
    onMouseDown: x,
    onTouchStart: x
  });
}
function Zn(e) {
  var t = e.prefixCls, n = e.style, r = e.values, o = e.startPoint, l = e.onStartMove, a = b.useContext(kt), s = a.included, c = a.range, u = a.min, d = a.styles, f = a.classNames, w = b.useMemo(function() {
    if (!c) {
      if (r.length === 0)
        return [];
      var m = o ?? u, p = r[0];
      return [{
        start: Math.min(m, p),
        end: Math.max(m, p)
      }];
    }
    for (var E = [], v = 0; v < r.length - 1; v += 1)
      E.push({
        start: r[v],
        end: r[v + 1]
      });
    return E;
  }, [r, c, o, u]), y = null;
  return (f.tracks || d.tracks) && (y = /* @__PURE__ */ b.createElement(Sr, {
    index: null,
    prefixCls: t,
    start: w[0].start,
    end: w[w.length - 1].end,
    replaceCls: xe(f.tracks, "".concat(t, "-tracks")),
    style: d.tracks
  })), s ? /* @__PURE__ */ b.createElement(b.Fragment, null, y, w.map(function(m, p) {
    var E = m.start, v = m.end;
    return /* @__PURE__ */ b.createElement(Sr, {
      index: p,
      prefixCls: t,
      style: ze(ze({}, Tt(n, p)), d.track),
      start: E,
      end: v,
      key: p,
      onStartMove: l
    });
  })) : null;
}
var Yr = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var n, r = e.prefixCls, o = r === void 0 ? "rc-slider" : r, l = e.className, a = e.style, s = e.classNames, c = e.styles, u = e.disabled, d = u === void 0 ? !1 : u, f = e.keyboard, w = f === void 0 ? !0 : f, y = e.autoFocus, m = e.onFocus, p = e.onBlur, E = e.min, v = E === void 0 ? 0 : E, h = e.max, x = h === void 0 ? 100 : h, A = e.step, N = A === void 0 ? 1 : A, te = e.value, F = e.defaultValue, re = e.range, Y = e.count, Q = e.onChange, J = e.onBeforeChange, K = e.onAfterChange, oe = e.onChangeComplete, U = e.allowCross, ne = U === void 0 ? !0 : U, G = e.pushable, H = G === void 0 ? !1 : G, W = e.draggableTrack, B = e.reverse, X = e.vertical, Re = e.included, De = Re === void 0 ? !0 : Re, be = e.startPoint, Ke = e.trackStyle, Ie = e.handleStyle, z = e.railStyle, se = e.dotStyle, ge = e.activeDotStyle, M = e.marks, ce = e.dots, Ve = e.handleRender, Ae = e.tabIndex, Ye = Ae === void 0 ? 0 : Ae, ye = e.ariaLabelForHandle, $e = e.ariaLabelledByForHandle, Ce = e.ariaValueTextFormatterForHandle, he = b.useRef(), le = b.useRef(), Fe = b.useMemo(function() {
    return X ? B ? "ttb" : "btt" : B ? "rtl" : "ltr";
  }, [B, X]), Ee = b.useMemo(function() {
    return isFinite(v) ? v : 0;
  }, [v]), ve = b.useMemo(function() {
    return isFinite(x) ? x : 100;
  }, [x]), ke = b.useMemo(function() {
    return N !== null && N <= 0 ? 1 : N;
  }, [N]), Je = b.useMemo(function() {
    return typeof H == "boolean" ? H ? ke : !1 : H >= 0 ? H : !1;
  }, [H, ke]), j = b.useMemo(function() {
    var R = Object.keys(M || {});
    return R.map(function(O) {
      var _ = M[O], L = {
        value: Number(O)
      };
      return _ && bt(_) === "object" && !/* @__PURE__ */ b.isValidElement(_) && ("label" in _ || "style" in _) ? (L.style = _.style, L.label = _.label) : L.label = _, L;
    }).filter(function(O) {
      var _ = O.label;
      return _ || typeof _ == "number";
    }).sort(function(O, _) {
      return O.value - _.value;
    });
  }, [M]), fe = Kn(Ee, ve, ke, j, ne, Je), Oe = et(fe, 2), we = Oe[0], ct = Oe[1], dt = jn(F, {
    value: te
  }), nt = et(dt, 2), Ne = nt[0], Ue = nt[1], ae = b.useMemo(function() {
    var R = Ne == null ? [] : Array.isArray(Ne) ? Ne : [Ne], O = et(R, 1), _ = O[0], L = _ === void 0 ? Ee : _, P = Ne === null ? [] : [L];
    if (re) {
      if (P = wt(R), Y || Ne === void 0) {
        var I = Y >= 0 ? Y + 1 : 2;
        for (P = P.slice(0, I); P.length < I; ) {
          var Z;
          P.push((Z = P[P.length - 1]) !== null && Z !== void 0 ? Z : Ee);
        }
      }
      P.sort(function(ie, de) {
        return ie - de;
      });
    }
    return P.forEach(function(ie, de) {
      P[de] = we(ie);
    }), P;
  }, [Ne, re, Ee, Y, we]), ot = b.useRef(ae);
  ot.current = ae;
  var Ge = function(O) {
    return re ? O : O[0];
  }, lt = function(O) {
    var _ = wt(O).sort(function(L, P) {
      return L - P;
    });
    Q && !Vn(_, ot.current, !0) && Q(Ge(_)), Ue(_);
  }, vt = function() {
    K == null || K(Ge(ot.current)), Nt(!K, "[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."), oe == null || oe(Ge(ot.current));
  }, mt = zn(le, Fe, ae, Ee, ve, we, lt, vt, ct), Be = et(mt, 4), at = Be[0], Xe = Be[1], it = Be[2], me = Be[3], Me = function(O, _) {
    if (!d) {
      var L = 0, P = ve - Ee;
      ae.forEach(function(Z, ie) {
        var de = Math.abs(O - Z);
        de <= P && (P = de, L = ie);
      });
      var I = wt(ae);
      I[L] = O, re && !ae.length && Y === void 0 && I.push(O), J == null || J(Ge(I)), lt(I), _ && me(_, L, I);
    }
  }, D = function(O) {
    O.preventDefault();
    var _ = le.current.getBoundingClientRect(), L = _.width, P = _.height, I = _.left, Z = _.top, ie = _.bottom, de = _.right, ut = O.clientX, pt = O.clientY, We;
    switch (Fe) {
      case "btt":
        We = (ie - pt) / P;
        break;
      case "ttb":
        We = (pt - Z) / P;
        break;
      case "rtl":
        We = (de - ut) / L;
        break;
      default:
        We = (ut - I) / L;
    }
    var un = Ee + We * (ve - Ee);
    Me(we(un), O);
  }, q = b.useState(null), Pe = et(q, 2), qe = Pe[0], C = Pe[1], $ = function(O, _) {
    if (!d) {
      var L = ct(ae, O, _);
      J == null || J(Ge(ae)), lt(L.values), C(L.value);
    }
  };
  b.useEffect(function() {
    if (qe !== null) {
      var R = ae.indexOf(qe);
      R >= 0 && he.current.focus(R);
    }
    C(null);
  }, [qe]);
  var V = b.useMemo(function() {
    return W && ke === null ? (process.env.NODE_ENV !== "production" && Nt(!1, "`draggableTrack` is not supported when `step` is `null`."), !1) : W;
  }, [W, ke]), pe = function(O, _) {
    me(O, _), J == null || J(Ge(ot.current));
  }, Se = at !== -1;
  b.useEffect(function() {
    if (!Se) {
      var R = ae.lastIndexOf(Xe);
      he.current.focus(R);
    }
  }, [Se]);
  var Te = b.useMemo(function() {
    return wt(it).sort(function(R, O) {
      return R - O;
    });
  }, [it]), Ze = b.useMemo(function() {
    return re ? [Te[0], Te[Te.length - 1]] : [Ee, Te[0]];
  }, [Te, re, Ee]), _e = et(Ze, 2), i = _e[0], g = _e[1];
  b.useImperativeHandle(t, function() {
    return {
      focus: function() {
        he.current.focus(0);
      },
      blur: function() {
        var O = document, _ = O.activeElement;
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
      direction: Fe,
      disabled: d,
      keyboard: w,
      step: ke,
      included: De,
      includedStart: i,
      includedEnd: g,
      range: re,
      tabIndex: Ye,
      ariaLabelForHandle: ye,
      ariaLabelledByForHandle: $e,
      ariaValueTextFormatterForHandle: Ce,
      styles: c || {},
      classNames: s || {}
    };
  }, [Ee, ve, Fe, d, w, ke, De, i, g, re, Ye, ye, $e, Ce, c, s]);
  return /* @__PURE__ */ b.createElement(kt.Provider, {
    value: S
  }, /* @__PURE__ */ b.createElement("div", {
    ref: le,
    className: xe(o, l, (n = {}, ft(n, "".concat(o, "-disabled"), d), ft(n, "".concat(o, "-vertical"), X), ft(n, "".concat(o, "-horizontal"), !X), ft(n, "".concat(o, "-with-marks"), j.length), n)),
    style: a,
    onMouseDown: D
  }, /* @__PURE__ */ b.createElement("div", {
    className: xe("".concat(o, "-rail"), s == null ? void 0 : s.rail),
    style: ze(ze({}, z), c == null ? void 0 : c.rail)
  }), /* @__PURE__ */ b.createElement(Zn, {
    prefixCls: o,
    style: Ke,
    values: Te,
    startPoint: be,
    onStartMove: V ? pe : null
  }), /* @__PURE__ */ b.createElement(qn, {
    prefixCls: o,
    marks: j,
    dots: ce,
    style: se,
    activeStyle: ge
  }), /* @__PURE__ */ b.createElement(Kr, {
    ref: he,
    prefixCls: o,
    style: Ie,
    values: it,
    draggingIndex: at,
    onStartMove: pe,
    onOffsetChange: $,
    onFocus: m,
    onBlur: p,
    handleRender: Ve,
    onChangeComplete: vt
  }), /* @__PURE__ */ b.createElement(Gn, {
    prefixCls: o,
    marks: j,
    onClick: Me
  })));
});
process.env.NODE_ENV !== "production" && (Yr.displayName = "Slider");
const It = (e, t) => {
  const n = Math.floor(e / 3600), r = Math.floor(e % 3600 / 60), o = Math.floor(e % 60);
  let l = "", a = (t == null ? void 0 : t.split(":")) || ["00", "00", "00"];
  a.length <= 1 ? a = ["00", "00", ...a] : a.length <= 2 && a.unshift("00");
  const s = (a == null ? void 0 : a.length) > 2 ? a[0] : null, c = (a == null ? void 0 : a.length) > 1 ? a[1] : null;
  return (n > 0 || s !== "00") && (l += `${String(n).padStart(2, "0")}:`), (r > 0 || n > 0 || c !== "00") && (l += `${String(r).padStart(2, "0")}:`), l += `${String(o).padStart(2, "0")}`, l.length === 2 && (l = "00:" + l), l;
}, Qn = (e) => /* @__PURE__ */ b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 192, height: 192, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ b.createElement("path", { fill: "currentColor", d: "M4 4h6v2H7.414l3 3L9 10.414l-3-3V10H4zm10 0h6v6h-2V7.414l-3 3L13.586 9l3-3H14zm-3.586 11l-3 3H10v2H4v-6h2v2.586l3-3zM15 13.586l3 3V14h2v6h-6v-2h2.586l-3-3z" })), Jn = (e) => /* @__PURE__ */ b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 192, height: 192, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ b.createElement("path", { fill: "currentColor", d: "M14 10V4h2v2.59l3.29-3.29l1.41 1.41L17.41 8H20v2zM4 10V8h2.59l-3.3-3.29l1.42-1.42L8 6.59V4h2v6zm16 4v2h-2.59l3.29 3.29l-1.41 1.41L16 17.41V20h-2v-6zm-10 0v6H8v-2.59l-3.29 3.3l-1.42-1.42L6.59 16H4v-2z" })), ir = () => {
  const e = document.querySelector(".vf-video-wrapper");
  document.fullscreenElement ? document.exitFullscreen && document.exitFullscreen().catch((t) => {
    console.error(
      `Error attempting to enable full-screen mode: ${t.message} (${t.name})`
    );
  }) : e.requestFullscreen && e.requestFullscreen();
}, eo = (e) => {
  const { onCancelFullScreen: t, onFullScreen: n, className: r } = e, [o, l] = ue(!1), a = () => {
    l(!!document.fullscreenElement), document.fullscreenElement ? n && n() : t && t();
  };
  ee(() => (document.addEventListener("fullscreenchange", a), () => {
    document.removeEventListener("fullscreenchange", a);
  }), []);
  const s = rt("fullscreen-button"), c = xe(s, r), u = o ? Jn : Qn;
  return /* @__PURE__ */ k.jsx("div", { className: c, onClick: ir, children: /* @__PURE__ */ k.jsx(u, { width: He, height: He }) });
}, to = (e) => /* @__PURE__ */ b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 192, height: 192, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ b.createElement("g", { fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ b.createElement("path", { d: "M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" }), /* @__PURE__ */ b.createElement("path", { fill: "currentColor", d: "M20 12a2 2 0 0 1 1.995 1.85L22 14v4a2 2 0 0 1-1.85 1.995L20 20h-5a2 2 0 0 1-1.995-1.85L13 18v-4a2 2 0 0 1 1.85-1.995L15 12zm-1-8a2 2 0 0 1 2 2v4h-7a3 3 0 0 0-3 3v6H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm1 10h-5v4h5zM4.173 6.173a1 1 0 0 0 0 1.414l1.915 1.915h-.586a1 1 0 0 0 0 2h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-2 0v.586L5.587 6.173a1 1 0 0 0-1.414 0" }))), ro = (e) => {
  const { video: t } = e, n = async (o) => {
    if (o.stopPropagation(), !!t)
      try {
        t !== document.pictureInPictureElement ? await t.requestPictureInPicture() : await document.exitPictureInPicture();
      } catch (l) {
        console.error(l);
      }
  }, r = rt("miniplayer-button");
  return /* @__PURE__ */ k.jsx("div", { className: r, onClick: n, children: /* @__PURE__ */ k.jsx(to, { width: He, height: He }) });
}, no = (e) => /* @__PURE__ */ b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 192, height: 192, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ b.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2 }, /* @__PURE__ */ b.createElement("path", { d: "M9 18A6 6 0 1 1 9 6h11m-7 14h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-2v-3h3" }), /* @__PURE__ */ b.createElement("path", { d: "m17 9l3-3l-3-3" }))), oo = (e) => /* @__PURE__ */ b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 192, height: 192, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ b.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2 }, /* @__PURE__ */ b.createElement("path", { d: "M15 18a6 6 0 1 0 0-12H4" }), /* @__PURE__ */ b.createElement("path", { d: "M7 9L4 6l3-3m1 17h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H8v-3h3" }))), Cr = (e) => {
  const { isNext: t, onClick: n } = e, r = (a) => {
    a.stopPropagation(), n && n(t, 5);
  }, o = rt("seconds-forward-button"), l = t ? no : oo;
  return /* @__PURE__ */ k.jsx("div", { className: o, onClick: r, children: /* @__PURE__ */ k.jsx(l, { width: He, height: He }) });
}, Gr = (e, t) => e / t * 100, lo = (e) => {
  const { videoState: t } = e, n = Le(null), r = Le(null), [o, l] = ue(null), [a, s] = ue(0), c = Math.round(
    Gr(t.currentTime, t.duration)
  ), u = Math.round(t.bufferingProgress);
  ee(() => {
    n.current && s(n.current.clientWidth);
  }, [n, t.fullscreen]);
  const d = (m) => {
    var N;
    const { left: p, width: E } = m.currentTarget.getBoundingClientRect(), v = (m.clientX - p) / E;
    if (v < 0 || v > 1)
      return;
    const A = (t.duration * 1e3 || 0) * v / 1e3;
    (N = t.actions) == null || N.updateCurrentTime(A);
  }, f = (m) => {
    const { left: p, width: E } = m.currentTarget.getBoundingClientRect(), v = (m.clientX - p) / E;
    if (v < 0 || v > 1)
      return;
    const A = (t.duration * 1e3 || 0) * v / 1e3;
    l({ duration: A, left: m.clientX - p });
  }, w = rt("progress-bar"), y = xe(w);
  return /* @__PURE__ */ k.jsxs(
    "div",
    {
      className: y,
      onClick: d,
      onMouseEnter: f,
      onMouseMove: f,
      onMouseLeave: () => l(null),
      ref: n,
      children: [
        /* @__PURE__ */ k.jsx("div", { className: je(w, "overlay") }),
        o && /* @__PURE__ */ k.jsx(
          "div",
          {
            className: je(w, "hovered-bar"),
            style: { width: o.left }
          }
        ),
        o && /* @__PURE__ */ k.jsx(
          "div",
          {
            ref: r,
            className: je(w, "hovered-duration"),
            style: {
              left: r.current && a - (o == null ? void 0 : o.left) <= 12 ? a - 12 : o.left <= 12 ? 12 : o.left
            },
            children: It(o.duration, It(t.duration))
          }
        ),
        /* @__PURE__ */ k.jsx(
          "div",
          {
            className: je(w, "play-progress"),
            style: { width: c + "%" }
          }
        ),
        /* @__PURE__ */ k.jsx(
          "div",
          {
            className: je(w, "load-progress"),
            style: { width: u + "%" }
          }
        ),
        /* @__PURE__ */ k.jsx("div", { className: je(w, "hover") })
      ]
    }
  );
}, ao = (e) => /* @__PURE__ */ b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 192, height: 192, viewBox: "0 0 2048 2048", ...e }, /* @__PURE__ */ b.createElement("path", { fill: "currentColor", d: "M1152 1536v128h256v128H768v-128h256v-128H128v-384h128v256h1664V512h-512V384h640v1152zm128-512H0V128h293L421 0h438l128 128h293zm-128-768H933L805 128H475L347 256H128v640h1024zm-512 0q53 0 99 20t82 55t55 81t20 100q0 53-20 99t-55 82t-81 55t-100 20q-53 0-99-20t-82-55t-55-81t-20-100q0-53 20-99t55-82t81-55t100-20m0 384q27 0 50-10t40-27t28-41t10-50q0-27-10-50t-27-40t-41-28t-50-10q-27 0-50 10t-40 27t-28 41t-10 50q0 27 10 50t27 40t41 28t50 10" })), io = (e) => {
  const { className: t, onClick: n } = e, r = (a) => {
    a.stopPropagation(), n && n();
  }, o = rt("screenshot-button"), l = xe(o, t);
  return /* @__PURE__ */ k.jsx("div", { className: l, onClick: r, children: /* @__PURE__ */ k.jsx(ao, { width: He, height: He }) });
}, so = (e) => /* @__PURE__ */ b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 192, height: 192, viewBox: "0 0 14 14", ...e }, /* @__PURE__ */ b.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M9.512 6.056L1.693.656C1.297.407.815.474.467.737A1.142 1.142 0 0 0 0 1.632v10.705c0 .884.979 1.456 1.693 1.004l7.82-5.367c.65-.439.65-1.48 0-1.919Zm4.238-4.314a1 1 0 1 0-2 0v10.516a1 1 0 0 0 2 0z", clipRule: "evenodd" })), co = (e) => /* @__PURE__ */ b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 192, height: 192, viewBox: "0 0 14 14", ...e }, /* @__PURE__ */ b.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "m4.238 6.056l7.819-5.4c.396-.25.878-.183 1.226.08c.269.201.458.519.467.897v10.705c0 .884-.979 1.456-1.693 1.004l-7.82-5.367c-.65-.439-.65-1.48 0-1.919ZM0 1.742a1 1 0 1 1 2 0v10.516a1 1 0 1 1-2 0z", clipRule: "evenodd" })), _r = (e) => {
  const { type: t, onClickNext: n, onClickPrev: r, className: o, disabled: l } = e, a = (d) => {
    d.stopPropagation(), !l && (t === "next" ? n && n() : r && r());
  }, s = rt("arrow-navigation-button"), c = xe(s, o, {
    [`${s}-disabled`]: l
  }), u = t === "next" ? so : co;
  return /* @__PURE__ */ k.jsx("div", { className: c, onClick: a, children: /* @__PURE__ */ k.jsx(u, { width: He - 9, height: He - 9 }) });
}, Mt = Math.min, Ct = Math.max, Wt = Math.round, Ut = Math.floor, Et = (e) => ({
  x: e,
  y: e
}), uo = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, fo = {
  start: "end",
  end: "start"
};
function rr(e, t, n) {
  return Ct(e, Mt(t, n));
}
function Ft(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function _t(e) {
  return e.split("-")[0];
}
function Ht(e) {
  return e.split("-")[1];
}
function Xr(e) {
  return e === "x" ? "y" : "x";
}
function sr(e) {
  return e === "y" ? "height" : "width";
}
function Yt(e) {
  return ["top", "bottom"].includes(_t(e)) ? "y" : "x";
}
function cr(e) {
  return Xr(Yt(e));
}
function vo(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ht(e), o = cr(e), l = sr(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[l] > t.floating[l] && (a = zt(a)), [a, zt(a)];
}
function mo(e) {
  const t = zt(e);
  return [nr(e), t, nr(t)];
}
function nr(e) {
  return e.replace(/start|end/g, (t) => fo[t]);
}
function ho(e, t, n) {
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
function po(e, t, n, r) {
  const o = Ht(e);
  let l = ho(_t(e), n === "start", r);
  return o && (l = l.map((a) => a + "-" + o), t && (l = l.concat(l.map(nr)))), l;
}
function zt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => uo[t]);
}
function go(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function qr(e) {
  return typeof e != "number" ? go(e) : {
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
function Rr(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const l = Yt(t), a = cr(t), s = sr(a), c = _t(t), u = l === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, w = r[s] / 2 - o[s] / 2;
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
const yo = async (e, t, n) => {
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
  } = Rr(u, r, c), w = r, y = {}, m = 0;
  for (let p = 0; p < s.length; p++) {
    const {
      name: E,
      fn: v
    } = s[p], {
      x: h,
      y: x,
      data: A,
      reset: N
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
    d = h ?? d, f = x ?? f, y = {
      ...y,
      [E]: {
        ...y[E],
        ...A
      }
    }, N && m <= 50 && (m++, typeof N == "object" && (N.placement && (w = N.placement), N.rects && (u = N.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : N.rects), {
      x: d,
      y: f
    } = Rr(u, w, c)), p = -1);
  }
  return {
    x: d,
    y: f,
    placement: w,
    strategy: o,
    middlewareData: y
  };
};
async function Zr(e, t) {
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
  } = Ft(t, e), m = qr(y), E = s[w ? f === "floating" ? "reference" : "floating" : f], v = Kt(await l.getClippingRect({
    element: (n = await (l.isElement == null ? void 0 : l.isElement(E))) == null || n ? E : E.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: c
  })), h = f === "floating" ? {
    ...a.floating,
    x: r,
    y: o
  } : a.reference, x = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(s.floating)), A = await (l.isElement == null ? void 0 : l.isElement(x)) ? await (l.getScale == null ? void 0 : l.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, N = Kt(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: h,
    offsetParent: x,
    strategy: c
  }) : h);
  return {
    top: (v.top - N.top + m.top) / A.y,
    bottom: (N.bottom - v.bottom + m.bottom) / A.y,
    left: (v.left - N.left + m.left) / A.x,
    right: (N.right - v.right + m.right) / A.x
  };
}
const wo = (e) => ({
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
    } = Ft(e, t) || {};
    if (u == null)
      return {};
    const f = qr(d), w = {
      x: n,
      y: r
    }, y = cr(o), m = sr(y), p = await a.getDimensions(u), E = y === "y", v = E ? "top" : "left", h = E ? "bottom" : "right", x = E ? "clientHeight" : "clientWidth", A = l.reference[m] + l.reference[y] - w[y] - l.floating[m], N = w[y] - l.reference[y], te = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let F = te ? te[x] : 0;
    (!F || !await (a.isElement == null ? void 0 : a.isElement(te))) && (F = s.floating[x] || l.floating[m]);
    const re = A / 2 - N / 2, Y = F / 2 - p[m] / 2 - 1, Q = Mt(f[v], Y), J = Mt(f[h], Y), K = Q, oe = F - p[m] - J, U = F / 2 - p[m] / 2 + re, ne = rr(K, U, oe), G = !c.arrow && Ht(o) != null && U !== ne && l.reference[m] / 2 - (U < K ? Q : J) - p[m] / 2 < 0, H = G ? U < K ? U - K : U - oe : 0;
    return {
      [y]: w[y] + H,
      data: {
        [y]: ne,
        centerOffset: U - ne - H,
        ...G && {
          alignmentOffset: H
        }
      },
      reset: G
    };
  }
}), bo = function(e) {
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
        flipAlignment: p = !0,
        ...E
      } = Ft(e, t);
      if ((n = l.arrow) != null && n.alignmentOffset)
        return {};
      const v = _t(o), h = _t(s) === s, x = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)), A = w || (h || !p ? [zt(s)] : mo(s));
      !w && m !== "none" && A.push(...po(s, p, m, x));
      const N = [s, ...A], te = await Zr(t, E), F = [];
      let re = ((r = l.flip) == null ? void 0 : r.overflows) || [];
      if (d && F.push(te[v]), f) {
        const K = vo(o, a, x);
        F.push(te[K[0]], te[K[1]]);
      }
      if (re = [...re, {
        placement: o,
        overflows: F
      }], !F.every((K) => K <= 0)) {
        var Y, Q;
        const K = (((Y = l.flip) == null ? void 0 : Y.index) || 0) + 1, oe = N[K];
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
              const ne = (J = re.map((G) => [G.placement, G.overflows.filter((H) => H > 0).reduce((H, W) => H + W, 0)]).sort((G, H) => G[1] - H[1])[0]) == null ? void 0 : J[0];
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
async function Eo(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, l = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = _t(n), s = Ht(n), c = Yt(n) === "y", u = ["left", "top"].includes(a) ? -1 : 1, d = l && c ? -1 : 1, f = Ft(t, e);
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
const xo = function(e) {
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
      } = t, c = await Eo(t, e);
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
}, So = function(e) {
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
              y: h
            } = E;
            return {
              x: v,
              y: h
            };
          }
        },
        ...c
      } = Ft(e, t), u = {
        x: n,
        y: r
      }, d = await Zr(t, c), f = Yt(_t(o)), w = Xr(f);
      let y = u[w], m = u[f];
      if (l) {
        const E = w === "y" ? "top" : "left", v = w === "y" ? "bottom" : "right", h = y + d[E], x = y - d[v];
        y = rr(h, y, x);
      }
      if (a) {
        const E = f === "y" ? "top" : "left", v = f === "y" ? "bottom" : "right", h = m + d[E], x = m - d[v];
        m = rr(h, m, x);
      }
      const p = s.fn({
        ...t,
        [w]: y,
        [f]: m
      });
      return {
        ...p,
        data: {
          x: p.x - n,
          y: p.y - r
        }
      };
    }
  };
};
function xt(e) {
  return Qr(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function tt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function yt(e) {
  var t;
  return (t = (Qr(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Qr(e) {
  return e instanceof Node || e instanceof tt(e).Node;
}
function gt(e) {
  return e instanceof Element || e instanceof tt(e).Element;
}
function ht(e) {
  return e instanceof HTMLElement || e instanceof tt(e).HTMLElement;
}
function kr(e) {
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
function Co(e) {
  return ["table", "td", "th"].includes(xt(e));
}
function ur(e) {
  const t = fr(), n = st(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function _o(e) {
  let t = Pt(e);
  for (; ht(t) && !Gt(t); ) {
    if (ur(t))
      return t;
    t = Pt(t);
  }
  return null;
}
function fr() {
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
function Pt(e) {
  if (xt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    kr(e) && e.host || // Fallback.
    yt(e)
  );
  return kr(t) ? t.host : t;
}
function Jr(e) {
  const t = Pt(e);
  return Gt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ht(t) && Vt(t) ? t : Jr(t);
}
function $t(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Jr(e), l = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = tt(o);
  return l ? t.concat(a, a.visualViewport || [], Vt(o) ? o : [], a.frameElement && n ? $t(a.frameElement) : []) : t.concat(o, $t(o, [], n));
}
function en(e) {
  const t = st(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ht(e), l = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Wt(n) !== l || Wt(r) !== a;
  return s && (n = l, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function dr(e) {
  return gt(e) ? e : e.contextElement;
}
function At(e) {
  const t = dr(e);
  if (!ht(t))
    return Et(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: l
  } = en(t);
  let a = (l ? Wt(n.width) : n.width) / r, s = (l ? Wt(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const Ro = /* @__PURE__ */ Et(0);
function tn(e) {
  const t = tt(e);
  return !fr() || !t.visualViewport ? Ro : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ko(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== tt(e) ? !1 : t;
}
function Rt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), l = dr(e);
  let a = Et(1);
  t && (r ? gt(r) && (a = At(r)) : a = At(e));
  const s = ko(l, n, r) ? tn(l) : Et(0);
  let c = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, d = o.width / a.x, f = o.height / a.y;
  if (l) {
    const w = tt(l), y = r && gt(r) ? tt(r) : r;
    let m = w, p = m.frameElement;
    for (; p && r && y !== m; ) {
      const E = At(p), v = p.getBoundingClientRect(), h = st(p), x = v.left + (p.clientLeft + parseFloat(h.paddingLeft)) * E.x, A = v.top + (p.clientTop + parseFloat(h.paddingTop)) * E.y;
      c *= E.x, u *= E.y, d *= E.x, f *= E.y, c += x, u += A, m = tt(p), p = m.frameElement;
    }
  }
  return Kt({
    width: d,
    height: f,
    x: c,
    y: u
  });
}
const Oo = [":popover-open", ":modal"];
function rn(e) {
  return Oo.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function To(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const l = o === "fixed", a = yt(r), s = t ? rn(t.floating) : !1;
  if (r === a || s && l)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Et(1);
  const d = Et(0), f = ht(r);
  if ((f || !f && !l) && ((xt(r) !== "body" || Vt(a)) && (c = Xt(r)), ht(r))) {
    const w = Rt(r);
    u = At(r), d.x = w.x + r.clientLeft, d.y = w.y + r.clientTop;
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - c.scrollLeft * u.x + d.x,
    y: n.y * u.y - c.scrollTop * u.y + d.y
  };
}
function Ao(e) {
  return Array.from(e.getClientRects());
}
function nn(e) {
  return Rt(yt(e)).left + Xt(e).scrollLeft;
}
function No(e) {
  const t = yt(e), n = Xt(e), r = e.ownerDocument.body, o = Ct(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), l = Ct(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + nn(e);
  const s = -n.scrollTop;
  return st(r).direction === "rtl" && (a += Ct(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: l,
    x: a,
    y: s
  };
}
function Mo(e, t) {
  const n = tt(e), r = yt(e), o = n.visualViewport;
  let l = r.clientWidth, a = r.clientHeight, s = 0, c = 0;
  if (o) {
    l = o.width, a = o.height;
    const u = fr();
    (!u || u && t === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: l,
    height: a,
    x: s,
    y: c
  };
}
function Po(e, t) {
  const n = Rt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, l = ht(e) ? At(e) : Et(1), a = e.clientWidth * l.x, s = e.clientHeight * l.y, c = o * l.x, u = r * l.y;
  return {
    width: a,
    height: s,
    x: c,
    y: u
  };
}
function Or(e, t, n) {
  let r;
  if (t === "viewport")
    r = Mo(e, n);
  else if (t === "document")
    r = No(yt(e));
  else if (gt(t))
    r = Po(t, n);
  else {
    const o = tn(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return Kt(r);
}
function on(e, t) {
  const n = Pt(e);
  return n === t || !gt(n) || Gt(n) ? !1 : st(n).position === "fixed" || on(n, t);
}
function Lo(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = $t(e, [], !1).filter((s) => gt(s) && xt(s) !== "body"), o = null;
  const l = st(e).position === "fixed";
  let a = l ? Pt(e) : e;
  for (; gt(a) && !Gt(a); ) {
    const s = st(a), c = ur(a);
    !c && s.position === "fixed" && (o = null), (l ? !c && !o : !c && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Vt(a) && !c && on(e, a)) ? r = r.filter((d) => d !== a) : o = s, a = Pt(a);
  }
  return t.set(e, r), r;
}
function jo(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? Lo(t, this._c) : [].concat(n), r], s = a[0], c = a.reduce((u, d) => {
    const f = Or(t, d, o);
    return u.top = Ct(f.top, u.top), u.right = Mt(f.right, u.right), u.bottom = Mt(f.bottom, u.bottom), u.left = Ct(f.left, u.left), u;
  }, Or(t, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Do(e) {
  const {
    width: t,
    height: n
  } = en(e);
  return {
    width: t,
    height: n
  };
}
function Io(e, t, n) {
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
      o && (c.x = nn(o));
  const u = a.left + s.scrollLeft - c.x, d = a.top + s.scrollTop - c.y;
  return {
    x: u,
    y: d,
    width: a.width,
    height: a.height
  };
}
function Tr(e, t) {
  return !ht(e) || st(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function ln(e, t) {
  const n = tt(e);
  if (!ht(e) || rn(e))
    return n;
  let r = Tr(e, t);
  for (; r && Co(r) && st(r).position === "static"; )
    r = Tr(r, t);
  return r && (xt(r) === "html" || xt(r) === "body" && st(r).position === "static" && !ur(r)) ? n : r || _o(e) || n;
}
const $o = async function(e) {
  const t = this.getOffsetParent || ln, n = this.getDimensions;
  return {
    reference: Io(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      ...await n(e.floating)
    }
  };
};
function Fo(e) {
  return st(e).direction === "rtl";
}
const Ho = {
  convertOffsetParentRelativeRectToViewportRelativeRect: To,
  getDocumentElement: yt,
  getClippingRect: jo,
  getOffsetParent: ln,
  getElementRects: $o,
  getClientRects: Ao,
  getDimensions: Do,
  getScale: At,
  isElement: gt,
  isRTL: Fo
};
function Vo(e, t) {
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
    const y = Ut(d), m = Ut(o.clientWidth - (u + f)), p = Ut(o.clientHeight - (d + w)), E = Ut(u), h = {
      rootMargin: -y + "px " + -m + "px " + -p + "px " + -E + "px",
      threshold: Ct(0, Mt(1, c)) || 1
    };
    let x = !0;
    function A(N) {
      const te = N[0].intersectionRatio;
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
      n = new IntersectionObserver(A, {
        ...h,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(A, h);
    }
    n.observe(e);
  }
  return a(!0), l;
}
function Uo(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: l = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, u = dr(e), d = o || l ? [...u ? $t(u) : [], ...$t(t)] : [];
  d.forEach((v) => {
    o && v.addEventListener("scroll", n, {
      passive: !0
    }), l && v.addEventListener("resize", n);
  });
  const f = u && s ? Vo(u, n) : null;
  let w = -1, y = null;
  a && (y = new ResizeObserver((v) => {
    let [h] = v;
    h && h.target === u && y && (y.unobserve(t), cancelAnimationFrame(w), w = requestAnimationFrame(() => {
      var x;
      (x = y) == null || x.observe(t);
    })), n();
  }), u && !c && y.observe(u), y.observe(t));
  let m, p = c ? Rt(e) : null;
  c && E();
  function E() {
    const v = Rt(e);
    p && (v.x !== p.x || v.y !== p.y || v.width !== p.width || v.height !== p.height) && n(), p = v, m = requestAnimationFrame(E);
  }
  return n(), () => {
    var v;
    d.forEach((h) => {
      o && h.removeEventListener("scroll", n), l && h.removeEventListener("resize", n);
    }), f == null || f(), (v = y) == null || v.disconnect(), y = null, c && cancelAnimationFrame(m);
  };
}
const Bo = So, Wo = bo, zo = wo, Ar = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Ho,
    ...n
  }, l = {
    ...o.platform,
    _c: r
  };
  return yo(e, t, {
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
const Ko = "react-tooltip-core-styles", Yo = "react-tooltip-base-styles", Nr = { core: !1, base: !1 };
function Mr({ css: e, id: t = Yo, type: n = "base", ref: r }) {
  var o, l;
  if (!e || typeof document > "u" || Nr[n] || n === "core" && typeof process < "u" && (!((o = process == null ? void 0 : process.env) === null || o === void 0) && o.REACT_TOOLTIP_DISABLE_CORE_STYLES) || n !== "base" && typeof process < "u" && (!((l = process == null ? void 0 : process.env) === null || l === void 0) && l.REACT_TOOLTIP_DISABLE_BASE_STYLES))
    return;
  n === "core" && (t = Ko), r || (r = {});
  const { insertAt: a } = r;
  if (document.getElementById(t))
    return void console.warn(`[react-tooltip] Element with id '${t}' already exists. Call \`removeStyle()\` first`);
  const s = document.head || document.getElementsByTagName("head")[0], c = document.createElement("style");
  c.id = t, c.type = "text/css", a === "top" && s.firstChild ? s.insertBefore(c, s.firstChild) : s.appendChild(c), c.styleSheet ? c.styleSheet.cssText = e : c.appendChild(document.createTextNode(e)), Nr[n] = !0;
}
const Pr = async ({ elementReference: e = null, tooltipReference: t = null, tooltipArrowReference: n = null, place: r = "top", offset: o = 10, strategy: l = "absolute", middlewares: a = [xo(Number(o)), Wo({ fallbackAxisSideDirection: "start" }), Bo({ padding: 5 })], border: s }) => {
  if (!e)
    return { tooltipStyles: {}, tooltipArrowStyles: {}, place: r };
  if (t === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {}, place: r };
  const c = a;
  return n ? (c.push(zo({ element: n, padding: 5 })), Ar(e, t, { placement: r, strategy: l, middleware: c }).then(({ x: u, y: d, placement: f, middlewareData: w }) => {
    var y, m;
    const p = { left: `${u}px`, top: `${d}px`, border: s }, { x: E, y: v } = (y = w.arrow) !== null && y !== void 0 ? y : { x: 0, y: 0 }, h = (m = { top: "bottom", right: "left", bottom: "top", left: "right" }[f.split("-")[0]]) !== null && m !== void 0 ? m : "bottom", x = s && { borderBottom: s, borderRight: s };
    let A = 0;
    if (s) {
      const N = `${s}`.match(/(\d+)px/);
      A = N != null && N[1] ? Number(N[1]) : 1;
    }
    return { tooltipStyles: p, tooltipArrowStyles: { left: E != null ? `${E}px` : "", top: v != null ? `${v}px` : "", right: "", bottom: "", ...x, [h]: `-${4 + A}px` }, place: f };
  })) : Ar(e, t, { placement: "bottom", strategy: l, middleware: c }).then(({ x: u, y: d, placement: f }) => ({ tooltipStyles: { left: `${u}px`, top: `${d}px` }, tooltipArrowStyles: {}, place: f }));
}, Lr = (e, t) => !("CSS" in window && "supports" in window.CSS) || window.CSS.supports(e, t), jr = (e, t, n) => {
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
}, Dr = (e) => e !== null && !Array.isArray(e) && typeof e == "object", or = (e, t) => {
  if (e === t)
    return !0;
  if (Array.isArray(e) && Array.isArray(t))
    return e.length === t.length && e.every((o, l) => or(o, t[l]));
  if (Array.isArray(e) !== Array.isArray(t))
    return !1;
  if (!Dr(e) || !Dr(t))
    return e === t;
  const n = Object.keys(e), r = Object.keys(t);
  return n.length === r.length && n.every((o) => or(e[o], t[o]));
}, Go = (e) => {
  if (!(e instanceof HTMLElement || e instanceof SVGElement))
    return !1;
  const t = getComputedStyle(e);
  return ["overflow", "overflow-x", "overflow-y"].some((n) => {
    const r = t.getPropertyValue(n);
    return r === "auto" || r === "scroll";
  });
}, Ir = (e) => {
  if (!e)
    return null;
  let t = e.parentElement;
  for (; t; ) {
    if (Go(t))
      return t;
    t = t.parentElement;
  }
  return document.scrollingElement || document.documentElement;
}, Xo = typeof window < "u" ? hn : ee, qo = "DEFAULT_TOOLTIP_ID", Zo = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, Qo = fn({ getTooltipData: () => Zo });
function an(e = qo) {
  return dn(Qo).getTooltipData(e);
}
var Ot = { tooltip: "core-styles-module_tooltip__3vRRp", fixed: "core-styles-module_fixed__pcSol", arrow: "core-styles-module_arrow__cvMwQ", noArrow: "core-styles-module_noArrow__xock6", clickable: "core-styles-module_clickable__ZuTTB", show: "core-styles-module_show__Nt9eE", closing: "core-styles-module_closing__sGnxF" }, Zt = { tooltip: "styles-module_tooltip__mnnfp", arrow: "styles-module_arrow__K0L3T", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const Jo = ({ forwardRef: e, id: t, className: n, classNameArrow: r, variant: o = "dark", anchorId: l, anchorSelect: a, place: s = "top", offset: c = 10, events: u = ["hover"], openOnClick: d = !1, positionStrategy: f = "absolute", middlewares: w, wrapper: y, delayShow: m = 0, delayHide: p = 0, float: E = !1, hidden: v = !1, noArrow: h = !1, clickable: x = !1, closeOnEsc: A = !1, closeOnScroll: N = !1, closeOnResize: te = !1, openEvents: F, closeEvents: re, globalCloseEvents: Y, imperativeModeOnly: Q, style: J, position: K, afterShow: oe, afterHide: U, content: ne, contentWrapperRef: G, isOpen: H, defaultIsOpen: W = !1, setIsOpen: B, activeAnchor: X, setActiveAnchor: Re, border: De, opacity: be, arrowColor: Ke, role: Ie = "tooltip" }) => {
  var z;
  const se = Le(null), ge = Le(null), M = Le(null), ce = Le(null), Ve = Le(null), [Ae, Ye] = ue({ tooltipStyles: {}, tooltipArrowStyles: {}, place: s }), [ye, $e] = ue(!1), [Ce, he] = ue(!1), [le, Fe] = ue(null), Ee = Le(!1), ve = Le(null), { anchorRefs: ke, setActiveAnchor: Je } = an(t), j = Le(!1), [fe, Oe] = ue([]), we = Le(!1), ct = d || u.includes("click"), dt = ct || (F == null ? void 0 : F.click) || (F == null ? void 0 : F.dblclick) || (F == null ? void 0 : F.mousedown), nt = F ? { ...F } : { mouseenter: !0, focus: !0, click: !1, dblclick: !1, mousedown: !1 };
  !F && ct && Object.assign(nt, { mouseenter: !1, focus: !1, click: !0 });
  const Ne = re ? { ...re } : { mouseleave: !0, blur: !0, click: !1, dblclick: !1, mouseup: !1 };
  !re && ct && Object.assign(Ne, { mouseleave: !1, blur: !1 });
  const Ue = Y ? { ...Y } : { escape: A || !1, scroll: N || !1, resize: te || !1, clickOutsideAnchor: dt || !1 };
  Q && (Object.assign(nt, { mouseenter: !1, focus: !1, click: !1, dblclick: !1, mousedown: !1 }), Object.assign(Ne, { mouseleave: !1, blur: !1, click: !1, dblclick: !1, mouseup: !1 }), Object.assign(Ue, { escape: !1, scroll: !1, resize: !1, clickOutsideAnchor: !1 })), Xo(() => (we.current = !0, () => {
    we.current = !1;
  }), []);
  const ae = (C) => {
    we.current && (C && he(!0), setTimeout(() => {
      we.current && (B == null || B(C), H === void 0 && $e(C));
    }, 10));
  };
  ee(() => {
    if (H === void 0)
      return () => null;
    H && he(!0);
    const C = setTimeout(() => {
      $e(H);
    }, 10);
    return () => {
      clearTimeout(C);
    };
  }, [H]), ee(() => {
    if (ye !== Ee.current)
      if (Ve.current && clearTimeout(Ve.current), Ee.current = ye, ye)
        oe == null || oe();
      else {
        const C = (($) => {
          const V = $.match(/^([\d.]+)(ms|s)$/);
          if (!V)
            return 0;
          const [, pe, Se] = V;
          return Number(pe) * (Se === "ms" ? 1 : 1e3);
        })(getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay"));
        Ve.current = setTimeout(() => {
          he(!1), Fe(null), U == null || U();
        }, C + 25);
      }
  }, [ye]);
  const ot = (C) => {
    Ye(($) => or($, C) ? $ : C);
  }, Ge = (C = m) => {
    M.current && clearTimeout(M.current), Ce ? ae(!0) : M.current = setTimeout(() => {
      ae(!0);
    }, C);
  }, lt = (C = p) => {
    ce.current && clearTimeout(ce.current), ce.current = setTimeout(() => {
      j.current || ae(!1);
    }, C);
  }, vt = (C) => {
    var $;
    if (!C)
      return;
    const V = ($ = C.currentTarget) !== null && $ !== void 0 ? $ : C.target;
    if (!(V != null && V.isConnected))
      return Re(null), void Je({ current: null });
    m ? Ge() : ae(!0), Re(V), Je({ current: V }), ce.current && clearTimeout(ce.current);
  }, mt = () => {
    x ? lt(p || 100) : p ? lt() : ae(!1), M.current && clearTimeout(M.current);
  }, Be = ({ x: C, y: $ }) => {
    var V;
    const pe = { getBoundingClientRect: () => ({ x: C, y: $, width: 0, height: 0, top: $, left: C, right: C, bottom: $ }) };
    Pr({ place: (V = le == null ? void 0 : le.place) !== null && V !== void 0 ? V : s, offset: c, elementReference: pe, tooltipReference: se.current, tooltipArrowReference: ge.current, strategy: f, middlewares: w, border: De }).then((Se) => {
      ot(Se);
    });
  }, at = (C) => {
    if (!C)
      return;
    const $ = C, V = { x: $.clientX, y: $.clientY };
    Be(V), ve.current = V;
  }, Xe = (C) => {
    var $;
    if (!ye)
      return;
    const V = C.target;
    V.isConnected && (!(($ = se.current) === null || $ === void 0) && $.contains(V) || [document.querySelector(`[id='${l}']`), ...fe].some((pe) => pe == null ? void 0 : pe.contains(V)) || (ae(!1), M.current && clearTimeout(M.current)));
  }, it = jr(vt, 50, !0), me = jr(mt, 50, !0), Me = (C) => {
    me.cancel(), it(C);
  }, D = () => {
    it.cancel(), me();
  }, q = vn(() => {
    var C, $;
    const V = (C = le == null ? void 0 : le.position) !== null && C !== void 0 ? C : K;
    V ? Be(V) : E ? ve.current && Be(ve.current) : X != null && X.isConnected && Pr({ place: ($ = le == null ? void 0 : le.place) !== null && $ !== void 0 ? $ : s, offset: c, elementReference: X, tooltipReference: se.current, tooltipArrowReference: ge.current, strategy: f, middlewares: w, border: De }).then((pe) => {
      we.current && ot(pe);
    });
  }, [ye, X, ne, J, s, le == null ? void 0 : le.place, c, f, K, le == null ? void 0 : le.position, E]);
  ee(() => {
    var C, $;
    const V = new Set(ke);
    fe.forEach((I) => {
      V.add({ current: I });
    });
    const pe = document.querySelector(`[id='${l}']`);
    pe && V.add({ current: pe });
    const Se = () => {
      ae(!1);
    }, Te = Ir(X), Ze = Ir(se.current);
    Ue.scroll && (window.addEventListener("scroll", Se), Te == null || Te.addEventListener("scroll", Se), Ze == null || Ze.addEventListener("scroll", Se));
    let _e = null;
    Ue.resize ? window.addEventListener("resize", Se) : X && se.current && (_e = Uo(X, se.current, q, { ancestorResize: !0, elementResize: !0, layoutShift: !0 }));
    const i = (I) => {
      I.key === "Escape" && ae(!1);
    };
    Ue.escape && window.addEventListener("keydown", i), Ue.clickOutsideAnchor && window.addEventListener("click", Xe);
    const g = [], S = (I) => {
      ye && (I == null ? void 0 : I.target) === X || vt(I);
    }, R = (I) => {
      ye && (I == null ? void 0 : I.target) === X && mt();
    }, O = ["mouseenter", "mouseleave", "focus", "blur"], _ = ["click", "dblclick", "mousedown", "mouseup"];
    Object.entries(nt).forEach(([I, Z]) => {
      Z && (O.includes(I) ? g.push({ event: I, listener: Me }) : _.includes(I) && g.push({ event: I, listener: S }));
    }), Object.entries(Ne).forEach(([I, Z]) => {
      Z && (O.includes(I) ? g.push({ event: I, listener: D }) : _.includes(I) && g.push({ event: I, listener: R }));
    }), E && g.push({ event: "pointermove", listener: at });
    const L = () => {
      j.current = !0;
    }, P = () => {
      j.current = !1, mt();
    };
    return x && !dt && ((C = se.current) === null || C === void 0 || C.addEventListener("mouseenter", L), ($ = se.current) === null || $ === void 0 || $.addEventListener("mouseleave", P)), g.forEach(({ event: I, listener: Z }) => {
      V.forEach((ie) => {
        var de;
        (de = ie.current) === null || de === void 0 || de.addEventListener(I, Z);
      });
    }), () => {
      var I, Z;
      Ue.scroll && (window.removeEventListener("scroll", Se), Te == null || Te.removeEventListener("scroll", Se), Ze == null || Ze.removeEventListener("scroll", Se)), Ue.resize ? window.removeEventListener("resize", Se) : _e == null || _e(), Ue.clickOutsideAnchor && window.removeEventListener("click", Xe), Ue.escape && window.removeEventListener("keydown", i), x && !dt && ((I = se.current) === null || I === void 0 || I.removeEventListener("mouseenter", L), (Z = se.current) === null || Z === void 0 || Z.removeEventListener("mouseleave", P)), g.forEach(({ event: ie, listener: de }) => {
        V.forEach((ut) => {
          var pt;
          (pt = ut.current) === null || pt === void 0 || pt.removeEventListener(ie, de);
        });
      });
    };
  }, [X, q, Ce, ke, fe, F, re, Y, ct, m, p]), ee(() => {
    var C, $;
    let V = ($ = (C = le == null ? void 0 : le.anchorSelect) !== null && C !== void 0 ? C : a) !== null && $ !== void 0 ? $ : "";
    !V && t && (V = `[data-tooltip-id='${t}']`);
    const pe = new MutationObserver((Se) => {
      const Te = [], Ze = [];
      Se.forEach((_e) => {
        if (_e.type === "attributes" && _e.attributeName === "data-tooltip-id" && (_e.target.getAttribute("data-tooltip-id") === t ? Te.push(_e.target) : _e.oldValue === t && Ze.push(_e.target)), _e.type === "childList") {
          if (X) {
            const i = [..._e.removedNodes].filter((g) => g.nodeType === 1);
            if (V)
              try {
                Ze.push(...i.filter((g) => g.matches(V))), Ze.push(...i.flatMap((g) => [...g.querySelectorAll(V)]));
              } catch {
              }
            i.some((g) => {
              var S;
              return !!(!((S = g == null ? void 0 : g.contains) === null || S === void 0) && S.call(g, X)) && (he(!1), ae(!1), Re(null), M.current && clearTimeout(M.current), ce.current && clearTimeout(ce.current), !0);
            });
          }
          if (V)
            try {
              const i = [..._e.addedNodes].filter((g) => g.nodeType === 1);
              Te.push(...i.filter((g) => g.matches(V))), Te.push(...i.flatMap((g) => [...g.querySelectorAll(V)]));
            } catch {
            }
        }
      }), (Te.length || Ze.length) && Oe((_e) => [..._e.filter((i) => !Ze.includes(i)), ...Te]);
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
    const $ = document.querySelector(`[id='${l}']`), V = [...fe, $];
    X && V.includes(X) || Re((C = fe[0]) !== null && C !== void 0 ? C : $);
  }, [l, fe, X]), ee(() => (W && ae(!0), () => {
    M.current && clearTimeout(M.current), ce.current && clearTimeout(ce.current);
  }), []), ee(() => {
    var C;
    let $ = (C = le == null ? void 0 : le.anchorSelect) !== null && C !== void 0 ? C : a;
    if (!$ && t && ($ = `[data-tooltip-id='${t}']`), $)
      try {
        const V = Array.from(document.querySelectorAll($));
        Oe(V);
      } catch {
        Oe([]);
      }
  }, [t, a, le == null ? void 0 : le.anchorSelect]), ee(() => {
    M.current && (clearTimeout(M.current), Ge(m));
  }, [m]);
  const Pe = (z = le == null ? void 0 : le.content) !== null && z !== void 0 ? z : ne, qe = ye && Object.keys(Ae.tooltipStyles).length > 0;
  return mn(e, () => ({ open: (C) => {
    if (C != null && C.anchorSelect)
      try {
        document.querySelector(C.anchorSelect);
      } catch {
        return void console.warn(`[react-tooltip] "${C.anchorSelect}" is not a valid CSS selector`);
      }
    Fe(C ?? null), C != null && C.delay ? Ge(C.delay) : ae(!0);
  }, close: (C) => {
    C != null && C.delay ? lt(C.delay) : ae(!1);
  }, activeAnchor: X, place: Ae.place, isOpen: !!(Ce && !v && Pe && qe) })), Ce && !v && Pe ? Qe.createElement(y, { id: t, role: Ie, className: xe("react-tooltip", Ot.tooltip, Zt.tooltip, Zt[o], n, `react-tooltip__place-${Ae.place}`, Ot[qe ? "show" : "closing"], qe ? "react-tooltip__show" : "react-tooltip__closing", f === "fixed" && Ot.fixed, x && Ot.clickable), onTransitionEnd: (C) => {
    Ve.current && clearTimeout(Ve.current), ye || C.propertyName !== "opacity" || (he(!1), Fe(null), U == null || U());
  }, style: { ...J, ...Ae.tooltipStyles, opacity: be !== void 0 && qe ? be : void 0 }, ref: se }, Pe, Qe.createElement(y, { className: xe("react-tooltip-arrow", Ot.arrow, Zt.arrow, r, h && Ot.noArrow), style: { ...Ae.tooltipArrowStyles, background: Ke ? `linear-gradient(to right bottom, transparent 50%, ${Ke} 50%)` : void 0 }, ref: ge })) : null;
}, el = ({ content: e }) => Qe.createElement("span", { dangerouslySetInnerHTML: { __html: e } }), tl = Qe.forwardRef(({ id: e, anchorId: t, anchorSelect: n, content: r, html: o, render: l, className: a, classNameArrow: s, variant: c = "dark", place: u = "top", offset: d = 10, wrapper: f = "div", children: w = null, events: y = ["hover"], openOnClick: m = !1, positionStrategy: p = "absolute", middlewares: E, delayShow: v = 0, delayHide: h = 0, float: x = !1, hidden: A = !1, noArrow: N = !1, clickable: te = !1, closeOnEsc: F = !1, closeOnScroll: re = !1, closeOnResize: Y = !1, openEvents: Q, closeEvents: J, globalCloseEvents: K, imperativeModeOnly: oe = !1, style: U, position: ne, isOpen: G, defaultIsOpen: H = !1, disableStyleInjection: W = !1, border: B, opacity: X, arrowColor: Re, setIsOpen: De, afterShow: be, afterHide: Ke, role: Ie = "tooltip" }, z) => {
  const [se, ge] = ue(r), [M, ce] = ue(o), [Ve, Ae] = ue(u), [Ye, ye] = ue(c), [$e, Ce] = ue(d), [he, le] = ue(v), [Fe, Ee] = ue(h), [ve, ke] = ue(x), [Je, j] = ue(A), [fe, Oe] = ue(f), [we, ct] = ue(y), [dt, nt] = ue(p), [Ne, Ue] = ue(null), [ae, ot] = ue(null), Ge = Le(W), { anchorRefs: lt, activeAnchor: vt } = an(e), mt = (me) => me == null ? void 0 : me.getAttributeNames().reduce((Me, D) => {
    var q;
    return D.startsWith("data-tooltip-") && (Me[D.replace(/^data-tooltip-/, "")] = (q = me == null ? void 0 : me.getAttribute(D)) !== null && q !== void 0 ? q : null), Me;
  }, {}), Be = (me) => {
    const Me = { place: (D) => {
      var q;
      Ae((q = D) !== null && q !== void 0 ? q : u);
    }, content: (D) => {
      ge(D ?? r);
    }, html: (D) => {
      ce(D ?? o);
    }, variant: (D) => {
      var q;
      ye((q = D) !== null && q !== void 0 ? q : c);
    }, offset: (D) => {
      Ce(D === null ? d : Number(D));
    }, wrapper: (D) => {
      var q;
      Oe((q = D) !== null && q !== void 0 ? q : f);
    }, events: (D) => {
      const q = D == null ? void 0 : D.split(" ");
      ct(q ?? y);
    }, "position-strategy": (D) => {
      var q;
      nt((q = D) !== null && q !== void 0 ? q : p);
    }, "delay-show": (D) => {
      le(D === null ? v : Number(D));
    }, "delay-hide": (D) => {
      Ee(D === null ? h : Number(D));
    }, float: (D) => {
      ke(D === null ? x : D === "true");
    }, hidden: (D) => {
      j(D === null ? A : D === "true");
    }, "class-name": (D) => {
      Ue(D);
    } };
    Object.values(Me).forEach((D) => D(null)), Object.entries(me).forEach(([D, q]) => {
      var Pe;
      (Pe = Me[D]) === null || Pe === void 0 || Pe.call(Me, q);
    });
  };
  ee(() => {
    ge(r);
  }, [r]), ee(() => {
    ce(o);
  }, [o]), ee(() => {
    Ae(u);
  }, [u]), ee(() => {
    ye(c);
  }, [c]), ee(() => {
    Ce(d);
  }, [d]), ee(() => {
    le(v);
  }, [v]), ee(() => {
    Ee(h);
  }, [h]), ee(() => {
    ke(x);
  }, [x]), ee(() => {
    j(A);
  }, [A]), ee(() => {
    nt(p);
  }, [p]), ee(() => {
    Ge.current !== W && console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.");
  }, [W]), ee(() => {
    typeof window < "u" && window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles", { detail: { disableCore: W === "core", disableBase: W } }));
  }, []), ee(() => {
    var me;
    const Me = new Set(lt);
    let D = n;
    if (!D && e && (D = `[data-tooltip-id='${e}']`), D)
      try {
        document.querySelectorAll(D).forEach(($) => {
          Me.add({ current: $ });
        });
      } catch {
        console.warn(`[react-tooltip] "${D}" is not a valid CSS selector`);
      }
    const q = document.querySelector(`[id='${t}']`);
    if (q && Me.add({ current: q }), !Me.size)
      return () => null;
    const Pe = (me = ae ?? q) !== null && me !== void 0 ? me : vt.current, qe = new MutationObserver(($) => {
      $.forEach((V) => {
        var pe;
        if (!Pe || V.type !== "attributes" || !(!((pe = V.attributeName) === null || pe === void 0) && pe.startsWith("data-tooltip-")))
          return;
        const Se = mt(Pe);
        Be(Se);
      });
    }), C = { attributes: !0, childList: !1, subtree: !1 };
    if (Pe) {
      const $ = mt(Pe);
      Be($), qe.observe(Pe, C);
    }
    return () => {
      qe.disconnect();
    };
  }, [lt, vt, ae, t, n]), ee(() => {
    U != null && U.border && console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."), B && !Lr("border", `${B}`) && console.warn(`[react-tooltip] "${B}" is not a valid \`border\`.`), U != null && U.opacity && console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."), X && !Lr("opacity", `${X}`) && console.warn(`[react-tooltip] "${X}" is not a valid \`opacity\`.`);
  }, []);
  let at = w;
  const Xe = Le(null);
  if (l) {
    const me = l({ content: (ae == null ? void 0 : ae.getAttribute("data-tooltip-content")) || se || null, activeAnchor: ae });
    at = me ? Qe.createElement("div", { ref: Xe, className: "react-tooltip-content-wrapper" }, me) : null;
  } else
    se && (at = se);
  M && (at = Qe.createElement(el, { content: M }));
  const it = { forwardRef: z, id: e, anchorId: t, anchorSelect: n, className: xe(a, Ne), classNameArrow: s, content: at, contentWrapperRef: Xe, place: Ve, variant: Ye, offset: $e, wrapper: fe, events: we, openOnClick: m, positionStrategy: dt, middlewares: E, delayShow: he, delayHide: Fe, float: ve, hidden: Je, noArrow: N, clickable: te, closeOnEsc: F, closeOnScroll: re, closeOnResize: Y, openEvents: Q, closeEvents: J, globalCloseEvents: K, imperativeModeOnly: oe, style: U, position: ne, isOpen: G, defaultIsOpen: H, border: B, opacity: X, arrowColor: Re, setIsOpen: De, afterShow: be, afterHide: Ke, activeAnchor: ae, setActiveAnchor: (me) => ot(me), role: Ie };
  return Qe.createElement(Jo, { ...it });
});
typeof window < "u" && window.addEventListener("react-tooltip-inject-styles", (e) => {
  e.detail.disableCore || Mr({ css: ":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}", type: "core" }), e.detail.disableBase || Mr({ css: `
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`, type: "base" });
});
const rl = (e) => /* @__PURE__ */ b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 192, height: 192, viewBox: "0 0 16 16", ...e }, /* @__PURE__ */ b.createElement("path", { fill: "currentColor", d: "M4.03 5.507a4 4 0 0 1 7.887-.323A5.5 5.5 0 0 0 5.207 12H4.25a3.25 3.25 0 0 1-.22-6.493M15 10.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4.854 2.353l.003.003a.5.5 0 0 0 .348.144h.006a.5.5 0 0 0 .35-.146l2-2a.5.5 0 0 0-.707-.708L11 11.293V8.5a.5.5 0 0 0-1 0v2.793l-1.146-1.147a.5.5 0 0 0-.708.708z" })), sn = (e) => /* @__PURE__ */ b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 192, height: 192, viewBox: "0 0 16 16", ...e }, /* @__PURE__ */ b.createElement("path", { fill: "currentColor", d: "M6 2a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 2m6.359 6a1.641 1.641 0 0 1 3.282 0a1.641 1.641 0 0 1-3.282 0m-1.602 4.243a1.486 1.486 0 1 1 2.971 0a1.486 1.486 0 0 1-2.971 0M6.654 14a1.346 1.346 0 1 1 2.693.001A1.346 1.346 0 0 1 6.654 14m-4.116-1.757a1.22 1.22 0 1 1 2.439 0a1.22 1.22 0 0 1-2.439 0M.896 8a1.104 1.104 0 1 1 2.207 0A1.104 1.104 0 0 1 .896 8m1.861-4.243a1 1 0 0 1 2 0a1 1 0 0 1-2 0m11.297 0a1.811 1.811 0 1 1-3.623 0a1.811 1.811 0 0 1 3.623 0" })), nl = (e) => {
  const { onClick: t, className: n, downloading: r } = e, o = (s) => {
    s.stopPropagation(), t && t();
  }, l = rt("download-button"), a = xe(l, n);
  return /* @__PURE__ */ k.jsx("div", { className: a, onClick: o, children: r ? /* @__PURE__ */ k.jsx(
    sn,
    {
      width: He,
      height: He,
      className: "vf-spin"
    }
  ) : /* @__PURE__ */ k.jsx(rl, { width: He, height: He }) });
}, St = {
  play: "k",
  fullscreen: "f",
  screenshot: "SHIFT+S",
  download: "SHIFT D",
  mute: "m",
  next_video: "SHIFT+P",
  prev_video: "SHIFT+N"
}, ol = (e, t, n) => {
  e.keyCode === 32 || e.key === " " ? n.playing ? t == null || t.pause() : t == null || t.play() : e.keyCode === 37 || e.key === "ArrowLeft" ? t == null || t.updateCurrentTime(n.currentTime - 5) : e.keyCode === 39 || e.key === "ArrowRight" ? t == null || t.updateCurrentTime(n.currentTime + 5) : e.keyCode === 38 || e.key === "ArrowUp" ? n.volume < 1 && (t == null || t.setVolume(
    n.volume + 0.1 > 1 ? 1 : n.volume + 0.1
  )) : e.keyCode === 40 || e.key === "ArrowDown" ? n.volume > 0 && (t == null || t.setVolume(
    n.volume - 0.1 < 0 ? 0 : n.volume - 0.1
  )) : e.shiftKey && (e.key === "P" || e.key === "p") && typeof n.src != "string" ? t == null || t.nextVideo() : e.shiftKey && (e.key === "N" || e.key === "n") && typeof n.src != "string" ? t == null || t.previousVideo() : e.key === "m" || e.key === "M" ? n.muted ? t == null || t.setVolume(n.volume) : t == null || t.mute() : e.key === "f" || e.key === "F" ? (n.fullscreen ? t == null || t.setFullscreen(!1) : t == null || t.setFullscreen(!0), ir()) : e.key === "k" || e.key === "K" ? n.playing ? t == null || t.pause() : t == null || t.play() : e.shiftKey && (e.key === "S" || e.key === "s") ? t == null || t.screenShot() : e.shiftKey && (e.key === "D" || e.key === "d") && (t == null || t.download());
}, Dt = (e, t, n) => {
  const r = e ? e[n] : null, o = typeof r == "boolean";
  if (!(o ? r : r == null ? void 0 : r.allow) && e)
    return null;
  const a = !o && (r == null ? void 0 : r.className), s = !o && (r == null ? void 0 : r.style), c = t.props.className, u = t.props.style, d = c ? `${c} ${a || ""}` : a, f = { ...u, ...s };
  return Qe.cloneElement(t, {
    className: `${d} ${n}`,
    style: f
  });
}, ll = (e, t, n) => {
  const r = rt("duration"), [o, l] = ue(null);
  return ee(() => {
    l(n === "default" ? 0 : 1);
  }, [n]), /* @__PURE__ */ k.jsxs(
    "div",
    {
      className: r,
      onClick: () => l(o === 0 ? 1 : 0),
      children: [
        It(t, It(e)),
        " /",
        " ",
        It(o === 0 ? e : e - t)
      ]
    }
  );
}, al = (e, t) => {
  const {
    videoRef: n,
    videoState: r,
    actions: o,
    allowedItems: l,
    durationType: a,
    customButtons: s,
    customControlBar: c,
    progressBar: u
  } = e, d = rt("control-bar"), f = (p, E) => {
    const v = (x) => {
      const A = x.currentTarget.children[1];
      A && A.click();
    }, h = `${Math.random() * 99999}`;
    return /* @__PURE__ */ k.jsxs(
      "div",
      {
        className: je(d, "button"),
        onClick: v,
        "data-tooltip-id": h,
        children: [
          /* @__PURE__ */ k.jsx(
            tl,
            {
              id: h,
              variant: "dark",
              offset: 20,
              noArrow: !0,
              place: "top-end",
              className: je(d, "button-tooltip"),
              children: E
            }
          ),
          p
        ]
      }
    );
  }, w = xe(d, {
    [`${d}-hidden`]: r.playing
  }), y = s == null ? void 0 : s.filter(
    (p) => p.placement === "left"
  ), m = s == null ? void 0 : s.filter(
    (p) => p.placement === "right"
  );
  return /* @__PURE__ */ k.jsxs("div", { className: w, ref: t, children: [
    u && /* @__PURE__ */ k.jsx(lo, { videoState: r }),
    c || /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
      /* @__PURE__ */ k.jsxs("div", { className: `${d}-left`, children: [
        typeof r.src != "string" && r.currentSrcIndex !== 0 && f(
          /* @__PURE__ */ k.jsx(
            _r,
            {
              type: "prev",
              disabled: r.currentSrcIndex === 0,
              onClickPrev: () => o == null ? void 0 : o.previousVideo()
            }
          ),
          /* @__PURE__ */ k.jsxs("div", { className: je(d, "video-preview"), children: [
            /* @__PURE__ */ k.jsxs("div", { children: [
              "previous ",
              St.prev_video
            ] }),
            /* @__PURE__ */ k.jsx(
              Hr,
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
          /* @__PURE__ */ k.jsx(
            En,
            {
              onPlay: () => o == null ? void 0 : o.play(),
              onPause: () => o == null ? void 0 : o.pause(),
              play: r.playing
            }
          ),
          `${r.playing ? "Puase" : "Play"} (${St.play})`
        ),
        typeof r.src != "string" && !(r.currentSrcIndex + 1 > r.src.length - 1) && f(
          /* @__PURE__ */ k.jsx(
            _r,
            {
              type: "next",
              disabled: r.currentSrcIndex + 1 > r.src.length - 1,
              onClickNext: () => o == null ? void 0 : o.nextVideo()
            }
          ),
          /* @__PURE__ */ k.jsxs("div", { className: je(d, "video-preview"), children: [
            /* @__PURE__ */ k.jsxs("div", { children: [
              "next ",
              St.next_video
            ] }),
            /* @__PURE__ */ k.jsx(
              Hr,
              {
                width: "300px",
                autoPlay: !0,
                controller: !1,
                src: r.src[r.currentSrcIndex + 1]
              }
            )
          ] })
        ),
        Dt(
          null,
          f(
            /* @__PURE__ */ k.jsx(
              Cr,
              {
                isNext: !1,
                onClick: (p, E) => o == null ? void 0 : o.updateCurrentTime(r.currentTime - E)
              }
            ),
            "Skip backward 5 seconds ←"
          ),
          "skip"
        ),
        Dt(
          null,
          f(
            /* @__PURE__ */ k.jsx(
              Cr,
              {
                isNext: !0,
                onClick: (p, E) => o == null ? void 0 : o.updateCurrentTime(r.currentTime + E)
              }
            ),
            "Skip forward 5 seconds →"
          ),
          "skip"
        ),
        /* @__PURE__ */ k.jsxs("div", { className: je(d, "volume-area"), children: [
          f(
            /* @__PURE__ */ k.jsx(
              Cn,
              {
                onClick: (p, E) => o == null ? void 0 : o.setVolume(E),
                onMute: () => o == null ? void 0 : o.mute(),
                onVolume: () => o == null ? void 0 : o.setVolume(
                  r.volume ? r.volume : 1
                ),
                volume: r.volume,
                mute: r.muted
              }
            ),
            `Volume ${Gr(r.volume, 1).toFixed()}% (${St.mute})`
          ),
          l.volumeSlider && /* @__PURE__ */ k.jsx(
            Yr,
            {
              className: "vf-slider",
              min: 0,
              max: 1,
              step: 0.1,
              value: r.muted ? 0 : r.volume,
              onChange: (p) => o == null ? void 0 : o.setVolume(p)
            }
          )
        ] }),
        f(
          ll(
            r.duration,
            r.currentTime,
            a
          ),
          "duration"
        ),
        y == null ? void 0 : y.map((p) => p.content)
      ] }),
      /* @__PURE__ */ k.jsxs("div", { className: `${d}-right`, children: [
        m == null ? void 0 : m.map((p) => p.content),
        Dt(
          l,
          f(
            /* @__PURE__ */ k.jsx(
              nl,
              {
                onClick: () => o == null ? void 0 : o.download(),
                downloading: r.downloading
              }
            ),
            `${r.downloading ? "downlaoding" : "downlaod"} (${St.download})`
          ),
          "downlaod"
        ),
        Dt(
          l,
          f(
            /* @__PURE__ */ k.jsx(io, { onClick: () => o == null ? void 0 : o.screenShot() }),
            `screenshot (${St.screenshot})`
          ),
          "screenshot"
        ),
        f(/* @__PURE__ */ k.jsx(ro, { video: n }), "mini player"),
        Dt(
          l,
          f(
            /* @__PURE__ */ k.jsx(
              eo,
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
}, il = Qe.forwardRef(
  al
);
async function sl(e) {
  const t = await fetch(e).then((n) => n.blob());
  return URL.createObjectURL(t);
}
async function $r(e) {
  const t = document.createElement("a"), n = await sl(e == null ? void 0 : e.url);
  t.href = n, t.download = e == null ? void 0 : e.name, t.target = "_blank", t.rel = "noreferrer", t.click(), window.URL.revokeObjectURL(n);
}
const cl = (e, t, n) => ({
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
    e((o) => ({
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
    $r({ url: s.toDataURL(), name: `${l}.png` }), a(s.toDataURL(), l).then((c) => {
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
    e((l) => ({ ...l, downloading: !0 })), $r({
      url: t == null ? void 0 : t.src,
      name: `${o}.mp4`
    }).then(() => {
      e((l) => ({ ...l, downloading: !1 })), n.onDownload && n.onDownload();
    }).catch((l) => {
      console.log("Error", l);
    });
  }
}), ul = (e, t) => {
  const { playing: n, videoLoaded: r, muted: o, volume: l } = t;
  r && (n ? e.play() : e.pause(), e.muted = o, l >= 0 && l <= 1 ? e.volume = l : console.error("Volume outside of range [0,1]"));
}, fl = (e) => {
  const [t, n] = ue({ width: 1, height: 2 }), r = new ResizeObserver((o) => {
    for (let l of o)
      n({
        width: l.contentRect.width,
        height: l.contentRect.height
      });
  });
  return ee(() => {
    e.current && r.observe(e.current);
  }, [e]), t;
}, dl = 500, vl = 400, ml = 350, hl = 630, pl = (e, t) => {
  const {
    children: n,
    prefixCls: r,
    className: o,
    onClick: l,
    currentVideoRef: a,
    playing: s,
    videoState: { loadingData: c },
    controlBarElement: u,
    ...d
  } = e, { width: f } = fl(a), [w, y] = ue(!1), [m, p] = ue(!1), E = xe(o, {
    [`${r}-hidden`]: s && w,
    [`${r}-small`]: f <= dl,
    [`${r}-x-small`]: f <= vl,
    [`${r}-max-small`]: f <= ml,
    [`${r}-medium`]: f <= hl,
    [`${r}-500`]: f <= 500,
    [`${r}-400`]: f <= 400
  });
  let v = null;
  const h = () => {
    v = setInterval(() => {
      s && !m && y(!0);
    }, 5e3), s || (y(!1), clearInterval(v));
  }, x = () => y(!1);
  return ee(() => (h(), () => {
    v && clearInterval(v);
  }), [s, m]), ee(() => {
    u && (u == null || u.addEventListener("mouseenter", () => {
      p(!0);
    }), u == null || u.addEventListener("mouseleave", () => {
      p(!1);
    }));
  }, [u]), /* @__PURE__ */ k.jsxs(
    "div",
    {
      ...d,
      className: E,
      ref: t,
      onMouseLeave: () => v && clearInterval(v),
      onMouseMove: x,
      onClick: l,
      children: [
        c && /* @__PURE__ */ k.jsx(
          "div",
          {
            className: `${je(r, "loading-icon")} vf-center`,
            children: /* @__PURE__ */ k.jsx(sn, { width: 60, height: 60, color: "#fff" })
          }
        ),
        n
      ]
    }
  );
}, gl = pn(pl), yl = (e) => {
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
  }, [r]), /* @__PURE__ */ k.jsx(
    "div",
    {
      className: c,
      id: !o && !r && l ? `${a}-initial` : "",
      onClick: s,
      ref: u,
      title: o ? "" : "play",
      children: r ? /* @__PURE__ */ k.jsx(
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
          children: /* @__PURE__ */ k.jsx("path", { d: "M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z" })
        }
      ) : /* @__PURE__ */ k.jsx(
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
          children: /* @__PURE__ */ k.jsx("path", { d: "M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" })
        }
      )
    }
  );
}, Fr = {
  screenshot: !0,
  fullscreen: !0,
  volumeSlider: !0,
  downlaod: !0,
  duration: !0,
  skip: !0
}, wl = (e) => {
  const { controller: t = Fr } = e, {
    screenshot: n = !0,
    fullscreen: r = !0,
    volumeSlider: o = !0,
    downlaod: l = !0
  } = typeof t == "object" ? t : Fr;
  return {
    screenshot: n,
    fullscreen: r,
    volumeSlider: o,
    downlaod: l
  };
}, bl = (e, t) => {
  const { src: n } = e, { currentSrcIndex: r } = t;
  if (typeof n != "string" && (n != null && n.length) && r <= (n == null ? void 0 : n.length))
    return n[r];
  if (n && typeof n == "string")
    return n;
}, El = 16 / 9, cn = 800, xl = Math.round(cn / El), He = 26, Sl = (e, t) => {
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
    width: y = cn,
    height: m = xl,
    style: p = {},
    muted: E = !1,
    controller: v = !0,
    thumbnail: h,
    poster: x,
    loop: A = !1,
    block: N = !1,
    rounded: te = !0,
    primaryColor: F = "#5f55ee",
    playsInline: re,
    preload: Y,
    crossOrigin: Q = "anonymous",
    onClick: J,
    onClickNext: K,
    onClickPrevious: oe,
    onPause: U,
    onPlay: ne,
    onProgress: G,
    onDurationChange: H,
    onVolumeChange: W,
    onLoadedData: B,
    onScreenshot: X,
    onError: Re,
    onEnded: De,
    onWaiting: be,
    onDownload: Ke,
    onAbort: Ie
  } = e, z = Le(null), se = Le(null), ge = Le(null), [M, ce] = ue({
    src: n,
    playing: a,
    volume: s !== void 0 && typeof s == "number" ? s : E ? 0 : 1,
    muted: s !== void 0 && typeof s == "number" && s === 0 || a || E,
    loop: A,
    durationType: u,
    rendered: !1,
    speed: 1,
    currentSrcIndex: r,
    loadingData: !1,
    bufferingProgress: 0,
    primaryColor: F,
    duration: 0,
    currentTime: 0,
    buffering: !1,
    downloading: !1,
    fullscreen: !1,
    error: null,
    videoLoaded: !1,
    playbackProgress: 0
  });
  ee(() => {
    z.current && ce((j) => ({
      ...j,
      actions: cl(ce, z.current, {
        onScreenshot: X,
        onDownload: Ke,
        onClickNext: K,
        onClickPrevious: oe
      })
    }));
  }, [z]), ee(() => {
    ce((j) => ({ ...j, src: n, primaryColor: F, durationType: u }));
  }, [n, F, u]), p && (p.width = p.width || y, p.height = p.height || m);
  const { width: Ve, height: Ae, ...Ye } = p;
  F && (Ye["--vf-color-primary"] = F);
  const ye = () => {
    if (z.current) {
      let j = z.current.duration;
      j === 1 / 0 ? (z.current.currentTime = 1e101, setTimeout(() => {
        z.current.currentTime = 0, j = z.current.duration, ce((fe) => ({
          ...fe,
          videoLoaded: !0,
          loadingData: !1,
          error: !1,
          duration: j
        })), B && B();
      }, 100)) : (ce((fe) => ({
        ...fe,
        videoLoaded: !0,
        loadingData: !1,
        error: !1,
        duration: j
      })), B && B());
    }
  }, $e = () => {
    var j, fe;
    z.current && (G && G(), H && H(), (j = M.actions) == null || j.setCurrentTime(z.current.currentTime), M.duration === 1 / 0 && ((fe = z.current) == null ? void 0 : fe.duration) > 0 && ce((Oe) => {
      var we;
      return {
        ...Oe,
        duration: (we = z.current) == null ? void 0 : we.duration
      };
    }));
  }, Ce = (j) => {
    j.target === z.current && ir();
  }, he = (j) => {
    z.current && ol(j, M.actions, M);
  }, le = () => {
    ce((j) => ({
      ...j,
      error: !0,
      loadingData: !1
    })), Re && Re();
  }, Fe = (j) => {
    var fe, Oe;
    j.target === z.current && (M.playing ? (fe = M.actions) == null || fe.pause() : (Oe = M.actions) == null || Oe.play()), J && J(j);
  }, Ee = () => {
    const j = z.current;
    if (!j || !j.buffered || j.buffered.length === 0)
      return;
    const fe = j.buffered.end(j.buffered.length - 1), Oe = j.duration;
    Oe > 0 && ce((we) => ({
      ...we,
      bufferingProgress: fe / Oe * 100
    }));
  }, ve = rt("video"), ke = xe(o, `${ve}-wrapper`, {
    [`${ve}-wrapper-fullscreen`]: M.fullscreen,
    [`${ve}-block`]: N,
    [`${ve}-rounded`]: te
  }), Je = xe(`${ve}-wrapper-gradient-bottom`, {
    [`${ve}-wrapper-gradient-bottom-hidden`]: M.playing
  });
  return ee(() => {
    z.current && ul(z.current, M);
  }, [M, z]), ee(() => {
    if (t) {
      const { actions: j, ...fe } = M;
      t.current.videoState = fe, t.current.videoActions = j;
    }
  }, [M]), /* @__PURE__ */ k.jsxs(
    gl,
    {
      className: ke,
      prefixCls: ve,
      videoState: M,
      onKeyDown: he,
      currentVideoRef: z,
      ref: pr(l, ge),
      onDoubleClick: Ce,
      onClick: Fe,
      playing: M.playing,
      tabIndex: 0,
      title: c,
      style: Ye,
      controlBarElement: se.current,
      children: [
        /* @__PURE__ */ k.jsx(
          "video",
          {
            src: bl(e, M),
            id: d,
            poster: h || x,
            width: N ? "100%" : Ve,
            ref: pr(t, z),
            controls: !1,
            onPause: U,
            onPlay: ne,
            onEnded: De,
            onVolumeChange: W,
            className: ve,
            onAbort: Ie,
            loop: M.loop,
            preload: Y,
            onTimeUpdate: $e,
            onProgress: Ee,
            onWaiting: () => {
              var j;
              be && be(), (j = M.actions) == null || j.setLoadingData(!0);
            },
            playsInline: re,
            crossOrigin: Q,
            onLoadStart: () => {
              var j;
              return (j = M.actions) == null ? void 0 : j.setLoadingData(!0);
            },
            onLoadedData: ye,
            onError: le,
            autoPlay: a,
            muted: M.muted
          }
        ),
        /* @__PURE__ */ k.jsx(
          yl,
          {
            videoState: M,
            onPlay: () => {
              var j;
              return (j = M.actions) == null ? void 0 : j.play();
            },
            onPuase: () => {
              var j;
              return (j = M.actions) == null ? void 0 : j.pause();
            }
          }
        ),
        M.videoLoaded && v && /* @__PURE__ */ k.jsx(
          il,
          {
            ref: se,
            customControlBar: typeof v == "function" || typeof v == "object" && v.controlBar ? typeof v == "object" && typeof v.controlBar == "function" && v.controlBar(M.actions, M) || typeof v == "function" && v(M.actions, M) : null,
            videoRef: z == null ? void 0 : z.current,
            videoState: M,
            actions: M.actions,
            customButtons: typeof v == "object" ? (v == null ? void 0 : v.customButtons) || [] : null,
            allowedItems: wl(e),
            progressBar: typeof v == "object" && v.progressBar !== void 0 ? v.progressBar : typeof v != "function",
            durationType: u
          }
        ),
        /* @__PURE__ */ k.jsx("div", { className: Je }),
        /* @__PURE__ */ k.jsx("div", { className: Je }),
        /* @__PURE__ */ k.jsx(
          "div",
          {
            className: `${Je} ${je(
              ve,
              "wrapper-gradient-top"
            )}`
          }
        ),
        f && /* @__PURE__ */ k.jsx(
          "div",
          {
            className: `${je(
              ve,
              "annotation"
            )} ${Je}`,
            style: w,
            children: f
          }
        ),
        M.error && /* @__PURE__ */ k.jsx("div", { className: je(ve, "error"), children: "Error : video not supported" })
      ]
    }
  );
}, Hr = Qe.forwardRef(
  Sl
);
export {
  Hr as VideoPlayer
};
