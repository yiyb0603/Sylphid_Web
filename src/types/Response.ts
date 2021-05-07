export type IResponse = {
  status: number;
  message: string;
  data: any;
}

export type IError = {
  response: {
    data: {
      status: number;
      message: string;
    }
  }
}