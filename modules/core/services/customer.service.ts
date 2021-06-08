import {getAuthorization} from "../../auth/service";
export interface SearchCustomerRequest {
  branchId: number;
  customerInfo: string;
  pageIndex: number;
  pageSize: number;
}

export interface SearchCustomerResponse {
  data: any;
  errorCode: string;
  errorMessage: string;
}
export const onSearchCustomer = async (
  searchCustomerRequest: SearchCustomerRequest
): Promise<SearchCustomerResponse> => {
  const url = "http://192.168.76.6:8888/cs/api/v1.0/customers/profile/search/";
  const userToken = await getAuthorization();
  const bearer = 'Bearer ' + userToken;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      
      'Authorization': bearer,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(searchCustomerRequest),
  });

  const data = await response.json();
  return data;
};
