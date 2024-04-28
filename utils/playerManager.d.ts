/// <reference types="react" />
import { VideoPlayerState } from '../components/VideoPlayer/@types';
export declare const playerManager: (setState: React.Dispatch<React.SetStateAction<VideoPlayerState>>, video: HTMLVideoElement | null, mediaEventHandlers: any) => VideoPlayerState["actions"];
