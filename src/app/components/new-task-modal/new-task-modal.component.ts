import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Component({
  selector: 'app-new-task-modal',
  templateUrl: './new-task-modal.component.html',
  styleUrls: ['./new-task-modal.component.scss']
})
export class NewTaskModalComponent implements OnInit {
  closeResult = "";
  value = '';
  firstFields = [1, 1, 1, 1, 1, 1, 1, 1]
  listInputController = new FormControl();  
  pickerValue = '';
  selectedValue = 0;
  formattedDate = '';
  lists = [
    {id: '0', viewValue: 'Trabalho'},
    {id: '1', viewValue: 'Escola'},
    {id: '2', viewValue: 'Time de basquete'}
  ];
  selectedValuePeriod = 0;
  periods = [
    {id: '0', viewValue: 'Diariamente'},
    {id: '1', viewValue: 'Semanalmente'},
    {id: '2', viewValue: 'Mensalmente'}
  ];

  constructor(private modalService: NgbModal) {}

  open(content: TemplateRef<any>) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit(): void {
  }
  
  onChangeValue() {
    this.formattedDate = moment(new Date(this.pickerValue)).locale('pt-br').format('dddd');
    ;
  }
}
