export const handleDownloadResume = (format: string) => {
  let url: string;
  let filename: string;

  if (format === "pdf") {
    url = "https://docs.google.com/document/d/1WQormpR0rl5oz-JgnFhqoH9MPsg3zvAwqA29mZzNNzw/export?format=pdf";
    filename = "Amit_Kumar_Resume.pdf";
  } else if (format === "docx") {
    url = "https://docs.google.com/document/d/1WQormpR0rl5oz-JgnFhqoH9MPsg3zvAwqA29mZzNNzw/export?format=docx";
    filename = "Amit_Kumar_Resume.docx";
  } else if (format === "png") {
    url = "/caseStudy.png";
    filename = "Bright DiGi Gold Case Study.png";
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
