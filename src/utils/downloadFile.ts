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
  const url = await toDataURL(file?.url);
  a.href = url;
  a.download = file?.name;
  a.target = "_blank";
  a.rel = "noreferrer";
  a.click();
  window.URL.revokeObjectURL(url);
}
