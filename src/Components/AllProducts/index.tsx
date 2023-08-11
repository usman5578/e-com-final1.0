import { Component } from "react";
import { ProductType } from "../utils/ProductDataTypes";
import Card from "../views/Card";

interface propsType {
    response:Array<ProductType>
}

export default async function ({ProductData}: {ProductData:any} ){
        return (
            <div className="grid grid-cols-3" >
                {ProductData?.map((items:any, index:number)=>(
                <div key={index} >
                    <Card  singleProductData={items}/>
                </div>
            ))}</div>
        )
    }
