const auth = require("../controllers/admin.controller");
const { authJwt } = require("../middlewares");
const express = require('express');
const router = express.Router();
var multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
        cloud_name: "dbrvq9uxa",
        api_key: "567113285751718",
        api_secret: "rjTsz9ksqzlDtsrlOPcTs_-QtW4",
});
const storage = new CloudinaryStorage({
        cloudinary: cloudinary,
        params: {
                folder: "images/image",
                allowed_formats: ["jpg", "jpeg", "png", "PNG", "xlsx", "xls", "pdf", "PDF"],
        },
});
const upload = multer({ storage: storage });
router.post("/registration", auth.registration);
router.post("/login", auth.signin);
router.put("/update", [authJwt.verifyToken], auth.update);
router.post("/Banner/AddBanner", [authJwt.verifyToken], upload.single('image'), auth.AddBanner);
router.get("/Banner/allBanner", auth.getBanner);
router.get("/Banner/getBannerById/:id", auth.getBannerById);
router.delete("/Banner/deleteBanner/:id", [authJwt.verifyToken], auth.DeleteBanner);
router.get("/User/allUser", auth.getAllUsers);
router.put("/User/blockUnblockUser/:id", [authJwt.verifyToken], auth.blockUnblockUser);
module.exports = router;
