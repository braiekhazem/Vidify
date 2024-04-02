export const formatTime = (timeInSeconds: number, format?: string): string => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = Math.floor(timeInSeconds % 60);

  let formattedTime = "";

  let parts = format?.split(":") || ["00", "00", "00"];
  if (parts.length <= 1) {
    parts = ["00", "00", ...parts];
  } else if (parts.length <= 2) {
    parts.unshift("00");
  }

  const formatHrours = parts?.length > 2 ? parts[0] : null;
  const formatMinutes = parts?.length > 1 ? parts[1] : null;

  if (hours > 0 || formatHrours !== "00") {
    formattedTime += `${String(hours).padStart(2, "0")}:`;
  }

  if (minutes > 0 || hours > 0 || formatMinutes !== "00") {
    formattedTime += `${String(minutes).padStart(2, "0")}:`;
  }

  formattedTime += `${String(seconds).padStart(2, "0")}`;

  if (formattedTime.length === 2) {
    formattedTime = "00:" + formattedTime;
  }

  return formattedTime;
};
