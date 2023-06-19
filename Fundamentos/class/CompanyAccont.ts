import { DioAccount } from "./DioAccount"
import { PeopleAcconts } from "./PeopleAccont"

export class CompanyAccount extends DioAccount{

  constructor(name:string, accountNumber:number){
    super(name, accountNumber)
  }

  getLoan = (requestedLoan:number): void =>{
    if(this.validadeStatus()){  
      if(requestedLoan>0){
        this.deposit(requestedLoan)
      }
    }  
  }

  deposit = (depositAmount: number): void => {,
  
    if(depositAmount>0){
      this.balance+=depositAmount
      console.log(`your account have ${this.balance}`)
    }else{
      console.log('deposit denied')
    }
  }


}