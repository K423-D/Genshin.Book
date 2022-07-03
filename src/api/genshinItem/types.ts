export interface ResResult {
  data: ResResultData;
  code: number;
}

export interface ResResultData {
  data?: Item[];
  retcode: number;
  message: string;
}

export interface Item {
  id: number;
  name: string;
  url: string;
}
