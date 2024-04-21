interface fileType {
  url: string;
  name: string;
}

async function toDataURL(url: string) {
  const blob = await fetch(url).then((res) => res.blob());
  return URL.createObjectURL(blob);
}

export async function downloadFile(file: fileType) {
  const a = document.createElement("a");
  a.href = await toDataURL(file?.url);
  a.download = file?.name;
  a.click();
}
