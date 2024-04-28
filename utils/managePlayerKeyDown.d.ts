import { VideoPlayerState } from '../components/VideoPlayer/@types';
export declare const vidifyShortcuts: {
    play: string;
    fullscreen: string;
    screenshot: string;
    download: string;
    mute: string;
    next_video: string;
    prev_video: string;
};
export declare const managePlayerKeyDown: (event: React.KeyboardEvent<HTMLDivElement>, actions: VideoPlayerState["actions"], videoState: VideoPlayerState) => void;
