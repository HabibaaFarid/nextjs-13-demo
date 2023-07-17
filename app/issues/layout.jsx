import { PrismaClient } from "@prisma/client";
import IssuesList from "../../components/issues/IssuesList"
import classes from "./layout.module.css"

function getIssues(){
    const prisma = new PrismaClient()
    return prisma.issue.findMany()
}

const IssuesLayout = async ({children}) => {

    const issues = await getIssues()
  return <div className={classes.layout}>
    <aside className={classes.sidebar}>
    <IssuesList issues={issues}/>
    </aside>
    {children}
  </div>
};

export default IssuesLayout;
