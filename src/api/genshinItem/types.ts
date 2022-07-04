export interface ResResult {
  data: ResResultData;
  code: number;
}

export interface ResResultData {
  data?: any[];
  retcode: number;
  message: string;
}
