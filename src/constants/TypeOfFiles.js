const fileTypes = {
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  jpg: "image/jpeg",
  png: "image/png",
  txt: "text/plain",
};

const fileImages = new Map([
  ["pdf", require("~/assets/images/pdf.png")],
  ["doc", require("~/assets/images/doc.png")],
  ["docx", require("~/assets/images/doc.png")],
  ["jpg", require("~/assets/images/jpg.png")],
  ["png", require("~/assets/images/png.png")],
  ["txt", require("~/assets/images/txt.png")],
]);

const unknownImage = "~/assets/images/unknown.png";

const returnFileImage = (mimeType) => {
  const fileType = Object.keys(fileTypes).find(
    (key) => fileTypes[key] === mimeType
  );
  return fileImages.get(fileType) || unknownImage;
};

const formatFileResult = (result) => {
  const formattedFiles = result.assets.map((file) => {
    const { mimeType, name, size, uri } = file;
    return {
      mimeType,
      name,
      size,
      uri,
      canceled: result.canceled,
    };
  });

  return formattedFiles;
};

const maxFiles = 3;

export { fileTypes, formatFileResult, maxFiles, returnFileImage };
