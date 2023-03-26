import { Component } from '@angular/core';

interface UserType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register-case-manager',
  templateUrl: './register-case-manager.component.html',
  styleUrls: ['./register-case-manager.component.scss']
})
export class RegisterCaseManagerComponent {
  userTypes: UserType[] = [
    {value: 'Customer', viewValue: 'Customer'},
    {value: 'CaseManager', viewValue: 'Case Manager'},
    {value: 'PetitionManager', viewValue: 'Petition Manager'},
  ];
  hide = true;
}
