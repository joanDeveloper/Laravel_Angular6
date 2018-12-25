export interface Product {
  
	id: string,
	name: string,
	images: string[],
	price	: {
		value: number,
	installments: number,
	installmentValue : number
	},
	slug: string;
  model: string;
  description: string;
  battery: string;
  brand: string;
  camera: string;
  media: string;
  
  
}