export interface Medicine {
  id: number;
  name: string;
  composition: string;
  category: string;
  uses: string;
  price: number | string;
  rx: boolean;
  in_stock: boolean;
}

export interface InquiryPayload {
  name: string;
  phone: string;
  medicine?: string;
  message?: string;
}
