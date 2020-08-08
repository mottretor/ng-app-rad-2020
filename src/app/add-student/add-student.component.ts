import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {StudentService} from "../student.service";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student_form: FormGroup;

  constructor(private form_builder: FormBuilder, private data_service: StudentService) {
  }

  ngOnInit(): void {
    this.student_form = this.form_builder.group({
      name: "",
      reg_no: "",
      email: ""
    });
  }

  addStudent(data) {
    console.log(data);
    this.data_service.addStudent(data).subscribe(res => {
      console.log(res);
    })
  }

}
