import { LeftPannel } from "./Pannel/leftpannel"
export class Adminpage {
    private sidepannel;

    private lbl_admin = '.oxd-topbar-header-breadcrumb-module'
    private txt_usernametxt = "div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']"
    private btn_submit = 'button[type="submit"]';
    private selected_role = "div[class='oxd-table-card'] div:nth-child(3) div:nth-child(1)";

    constructor() {
        this.sidepannel = new LeftPannel();
    }

    public step_Adminverify() {
        cy.get(this.lbl_admin).should('have.text', 'Admin')

    }
    public step_typeUserName(name: string) {
        cy.get(this.txt_usernametxt).type(name);
        return this;
    }
    public step_selectRole(role: string) {
        cy.get('.oxd-select-text').first().click();
        cy.wait(3000);
        cy.get('.oxd-select-dropdown .oxd-select-option').contains(role).click();
        return this;
    }

    public step_clicksubmit() {
        cy.get(this.btn_submit).click();
        return this;
    }

    public step_verifyselectedRole() {
    cy.get(this.selected_role).should('have.text', 'Admin');
    }

}