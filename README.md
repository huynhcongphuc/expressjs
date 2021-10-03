# expressjs
# demo expressjs connect to mongoDB and show course in website with basic bootstrap 4.0.0
index.js là file chạy chính khi khởi tạo

Các thư viện sử dụng hỗ trợ:
"dependencies": {
    "concurrently": "^6.2.2", -> chạy đa nhiệm js file cùng lúc (dành cho dev)
    "express": "^4.17.1", -> thư viện build chính cho webserver với mô hình MVC
    "express-handlebars": "^5.3.4", -> thư viện bổ sung tự sinh ra khi cài express để show view
    "method-override": "^3.0.0", -> dành cho override các method http (vì form submit giới hạn chỉ 2 phương thức get và post)
    "mongoose": "^6.0.8", -> thư viện sử dụng đơn giản hóa CSDL Mongo DB
    "mongoose-delete": "^0.5.4", -> thư viện bổ trợ mongoose cơ chế delete
    "mongoose-slug-generator": "^1.0.4" -> thư viện bổ trợ tự sinh slug từ request http vào CSDL
  },
  "devDependencies": {
    "node-scss": "^7.0.3", -> thư viện build scss -> css (dành cho dev)
    "nodemon": "^2.0.13" -> thư viện tự restart server nodejs khi save file (dành cho dev)
  },

  Thư mục:
src: thư mục chính của webserver
src/config: lưu cấu hình db và method connect DB
src/public: lưu trữ css, hình ảnh và các css vendor (iconic bootstrap)
src/app/controller: lưu trữ các controller website
src/app/helper: viết help xử lý view cho file index.js chính (express-handlebars)
src/app/middleware: sử dụng middleware xử lý lưu trữ dữ liệu request ở local request trong middleware trước khi đẩy về controller
src/app/models: mô hình object từ CSDL
src/resources: lưu trữ file scss và hệ thống view của web
src/route: lưu trữ các file route để chuyển request đến các controller/middleware


