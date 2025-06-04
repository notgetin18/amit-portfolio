export const handleDownloadResume = (format: string) => {
  let url: string;
  let filename: string;

  if (format === "pdf") {
    url = "/Amit-Resume.pdf";
    filename = "Amit_Kumar_Resume.pdf";
  } else if (format === "docx") {
    url = "/Amit-kumar_Resume.docx";
    filename = "AmitKumar_Resume.docx";
  } else {
    return;
  }

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
