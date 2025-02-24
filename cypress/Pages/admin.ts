import { LeftPannel } from "./Pannel/leftpannel"
export class Adminpage{
 private sidepannel;

private lbl_admin= '.oxd-topbar-header-breadcrumb-module'

 constructor (){
this.sidepannel = new LeftPannel();
 }

 public step_Adminverify(){
cy.get(this.lbl_admin).should('have.text', 'Admin')

 }

}