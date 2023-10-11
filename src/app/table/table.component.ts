import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  
  totalLength: any;
  page: number = 1;
  itemPerPage: number = 4;
  
  headers = ['STT', 'Mã đoàn vào', 'Tên đoàn vào', 'Cơ quan', 'Quốc gia', 'Mục đích hoạt động', 'Ngày nhập cảnh-xuất cảnh', 'Thành viên đoàn'];

  items = [
    { "id": "1", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "2", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8"},
    { "id": "3", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "4", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "5", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "6", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "7", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "8", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "9", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "10", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "11", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "12", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "13", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "14", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "15", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "16", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "17", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "18", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "19", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "20", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "21", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "22", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "23", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "24", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "25", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "26", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "27", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "28", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "25", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "26", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "27", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "28", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "25", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "26", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "27", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
    { "id": "28", "MDR": 'VN06028', "TDR": 'Đoàn Tổng Bí thư Nguyễn Phú Trọng', "CQ": 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', "QGD": 'Trung Quốc', "MD": 'Thăm và làm việc', "NXNC": '21/06/2023-25/06/2023', "TVD": "8" },
  ]
  totalPages: number = Math.ceil(this.items.length / this.itemPerPage)

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
