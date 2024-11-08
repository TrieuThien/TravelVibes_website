1. Sau khi pull code về, tại thư mục gốc của dự án, thực hiện câu lệnh bên dưới để chạy dự án nodejs - website tourest bằng localhost:
   
    node src/index.js

NOTE: Khi chạy trên máy cá nhân (localhost), IP của máy cá nhân sẽ bị chặn do cơ sở dữ liệu mongoDB từ chối truy cập từ các địa chỉ IP chưa được cấp phép, dẫn đến không thể sử dụng được các tính năng cần có dữ liệu từ CSDL (các tính năng liên quan đến BE của web).

2. Để trải nghiệm các tính năng của webstite mà không bị lỗi từ chối truy cập từ mongoDB.
    Hiện tại website đã được deploy, hãy truy cập website của chúng tôi tại địa chỉ: https://tourest-website.onrender.com/
