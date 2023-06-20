import multer from "multer";
import path from "path";

const storage = multer.diskStorage({});

function fileFilter(req, file, cb) {
  // The function should call `cb` with a boolean
  // to indicate if the file should be accepted

  //NOTE - Find out the file extension:
  const extension = path.extname(file.originalname);

  if (
    extension !== ".jpg" &&
    extension !== ".png" &&
    extension !== ".jpeg" &&
    extension !== ".JPG" &&
    extension !== ".JPEG" &&
    extension !== ".PNG" &&
  ) {
    //NOTE - if it is not any of the extensions allowed, nothing is uploaded!

    cb(null, false);
  } else {
    //NOTE -  To accept the file pass `true`, like so:
    cb(null, true);
  }

  // You can always pass an error if something goes wrong:
  // cb(new Error('I don\'t have a clue!'))
}

const multerUpload = multer({ storage, fileFilter });

export default multerUpload;
