
import {OrangeHRm} from "../Pages/testlogin"
const loginpage = new OrangeHRm();

describe('Login Test of Oange HRM', () => {
    it('login with methods', () => {
        loginpage.visitURL()
        .step_enterUsername('Admin')
        .step_enterPassword('admin123')
        .step_clicklogin()

    })

});