interface fileType {
    url: string;
    name: string;
}
export declare function downloadFile(file: fileType): Promise<void>;
export {};
