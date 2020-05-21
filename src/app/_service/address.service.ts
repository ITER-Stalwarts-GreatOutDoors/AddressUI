import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddressDTO } from 
@Injectable({
  providedIn: 'root'
})
export class AddressService {

  addressURL:String = "http://localhost:8580/address";
  constructor(private http:HttpClient) { }

  public viewAllAddress(){
    return this.http.get(this.addressURL+"/viewALLAddress");
  }

  public addAddress(address:AddressDTO)
  {
    return this.http.post(this.addressURL+"/addAddress",AddressDTO,{responseType:'text' as 'json'});
  }

  public updateAddress(address:AddressDTO)
  {
    return this.http.post(this.addressURL+"/updateAddress",AddressDTO,{responseType:'text' as 'json'});
  }

  public deleteAddress(addressId){
    return this.http.delete(this.addressURL+"/deleteAddress?addressId=addressId="+addressId);
  }




}
