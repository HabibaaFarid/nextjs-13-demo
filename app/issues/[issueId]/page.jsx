import { PrismaClient } from "@prisma/client";
import {wait} from "../../../util/time"
import IssueDetails from "./IssueDetails";

function getIssueDetails(id) {
  const prisma = new PrismaClient();
  return prisma.issue.findFirst({ where: { id } });
}

const IssueDetailsPage = async ({ params }) => {
  const issueDetails = await getIssueDetails(+params.issueId);
  //await wait(3);
  if(!issueDetails){
    throw new Error('Issue not found')
  }
  return <IssueDetails issue={issueDetails} />;
};

export default IssueDetailsPage;
