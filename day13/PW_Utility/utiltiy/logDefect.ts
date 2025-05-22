import { TestInfo } from "@playwright/test";
import { createIssue } from "./createIssue_Jira";

export async function logDefect(testinfo:TestInfo){
 
    const isBug=testinfo.annotations.some(annotation=>annotation.type=="Bug")

  if((testinfo.status=='failed'||testinfo.status=="interrupted"||testinfo.status=="timedOut")&& !isBug){           
      const summary=`The test is ${testinfo.status}`
      const description=`The test is failed due to ${testinfo.error?.message}`
      return createIssue(summary,description)
  }


}