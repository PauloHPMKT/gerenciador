import multer from "multer";
import { resolve } from "path";
import fs from "fs";

const uploadPath = resolve(__dirname, "../../..", "uploads");

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath,{ recursive: true });
}

export const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  })
})
