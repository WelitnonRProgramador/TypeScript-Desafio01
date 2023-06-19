export abstract class DioAccount {
  private name: string
  readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber:number){
    this.name = name
    this.accountNumber = accountNumber
    
  }

  setName = (name: string): void =>{
    this.name = name
    console.log('New name saved')
  }

  deposit = (depositAmount: number): void =>{
    if(this.validadeStatus()){
      if(depositAmount>0){
        this.balance+=depositAmount
        console.log(this.balance)
      }else{
        console.log('deposit denied')
      }
    }
  }

  withdraw = (withdrawAmount: number): void =>{
    if(this.validadeStatus()){
      if(withdrawAmount<=this.balance){
        this.balance-=withdrawAmount
        console.log(`you witdraw ${withdrawAmount} your account have ${this.balance}`)
      }else{
        console.log('withdraw denied')
      }
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  public validadeStatus = ():boolean =>{
    if(this.status){
      return this.status
    }

    throw Error('conta invalida')
    
  }
}