import {HomeDashboard} from "../Pages/HomeDashboard"

export class OrangeHRm {

    private t_username = 'input[name="username"]';
    private t_password = 'input[name="password"]';
    private lgn_btn = '.orangehrm-login-button';




    public visitURL() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        return this;

    }

    public step_enterUsername(usernamed: string) {
        cy.get(this.t_username).type(usernamed);
        return this;

    }

    public step_enterPassword(password: string) {
        cy.get(this.t_password).type(password);
        return this;
    }

    public step_clicklogin() {
        cy.get(this.lgn_btn).click();
        return new HomeDashboard;
    }


   

}