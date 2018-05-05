import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { IAccount } from './account.component';


@Component ({
  selector: 'ms-accounts',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})

export class AccountListComponent implements OnInit {
  order: string = 'account';
  accountOrder: string = 'account';
  showData: boolean = false;
  reverse: boolean = false;
  collection: IAccount[] = [
    {
        "account": "AAA - 0029",
        "availableCash": 39160334.42,
        "percentageVariance": "-0.07",
        "cashVariance": 31435.87
    },
    {
        "account": "IRA - 0146",
        "availableCash": 15884302.39,
        "percentageVariance": "+0.03",
        "cashVariance": 7430.83
    },
    {
        "account": "AAA - 1812",
        "availableCash": 2010926.10,
        "percentageVariance": "+0.21",
        "cashVariance": 38881.63
    },
    {
        "account": "REG - 2019",
        "availableCash": 13465679.34,
        "percentageVariance": "0.00",
        "cashVariance": 0.00
    },
    {
        "account": "AAA - 3810",
        "availableCash": 10050054.07,
        "percentageVariance": "+0.07",
        "cashVariance": 8916.69
    },
    {
        "account": "IRA - 5200",
        "availableCash": 5763.36,
        "percentageVariance": "-0.08",
        "cashVariance": 8916.69
    }
  ];
 
   sortedCollection: IAccount[];

   
  
  constructor(private orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.collection, 'account');
    console.log(this.sortedCollection);
  }

  

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

   setAccountOrder(value: string) {
     let strippedValue = value.slice(-4)
    if (this.order === strippedValue) {
      this.reverse = !this.reverse;
    }

    this.order = strippedValue;
  }

  customComparator(itemA, itemB) {
    return itemA > itemB ? 1 : -1;
}

ngOnInit(): void {
        this.sortedCollection;
      
    }




  isValid: boolean = true;
     
  changeValue(valid: boolean) {
	this.isValid = valid;
 
  }
  
 
    
};








