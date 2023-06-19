import { CompanyAccount } from './class/CompanyAccont'
import { PeopleAcconts } from './class/PeopleAccont'


const peopleAcconts: PeopleAcconts = new PeopleAcconts(1,'Ricardo', 25)

//console.log(peopleAcconts)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
//console.log(companyAccount.getBalance)
companyAccount.getLoan(1500)

