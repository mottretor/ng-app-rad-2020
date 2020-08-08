import {Component, OnInit} from '@angular/core';
import {StudentService} from "../student.service";

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  studentData: any = [];

  constructor(private data_service: StudentService) {
    this.data_service.getStudents().subscribe(data => {
      this.studentData = data;
      console.log(this.studentData);
    })
  }

  ngOnInit(): void {
  }

}
