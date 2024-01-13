import React from "react";
import { Card, CardContent, CardTitle } from "@/shared/components/ui/card";

const Page = () => {
  return (
    <div>
      <h1 className={'font-bold text-center mt-5 text-xl'}>About TITAN</h1>
      <div className={'grid'}>
        <Card>
          <CardTitle>Our company</CardTitle>
          <CardContent>
            Revolutionizes personal and organizational budgeting by transforming intricate spreadsheets into intuitive, mobile-friendly financial management tools.
          </CardContent>
        </Card>
        <p><b>Problem</b> Budgeting is often a tedious task bogged down by complex spreadsheets that are difficult to interpret and update, especially for non-finance individuals. Current solutions are either too simplistic, lacking in-depth analysis and customization, or overly complicated, requiring extensive financial knowledge to navigate.</p>
        <p><b>Solution</b> The eureka moment came when recognizing the gap between spreadsheet complexity and user-friendliness in financial planning tools. Our app&apos;s unique value proposition lies in its ability to simplify financial data into accessible, actionable insights through a user-friendly interface, leveraging AI for personalized financial advice. This approach is not only compelling but enduring, as it scales from individual to enterprise use without losing simplicity.</p>
        <p><b>Why now?</b> The rise of mobile technology and AI has reached a point where sophisticated financial tools can be made user-friendly and widely accessible. People are more mobile-dependent than ever, and there&apos;s a growing demand for financial empowerment on-the-go. The market is ripe for an innovation that bridges the gap between powerful financial planning and everyday convenience.</p>
        <p><b>Market potential </b> Our target market includes both individuals seeking to improve their personal finances and organizations looking to streamline their budgeting processes. By inventing a market for cross-demographic financial management tools, we cater to a broad audience that values simplicity and efficiency.</p>
        <p><b>Competition / alternatives</b> Direct competitors include existing budgeting apps and financial planning software, while indirect competitors are traditional spreadsheet programs like Microsoft Excel. Our plan to win involves leveraging our app&apos;s unique selling points: superior user experience, AI-driven insights, and scalability for both personal and professional use.</p>
        <p><b>Business model</b> The business model is a freemium approach, with basic features available for free to individuals and a subscription-based model for organizations. The monthly fee for organizations will be tiered based on the number of employees, ensuring affordability and scalability.</p>
        <p><b>Team</b> Our founders and key team members bring together expertise in finance, software development, and user experience design. Their collective experience and passion for financial empowerment form the backbone of our company&apos;s mission.</p>
        <p><b>Financials</b> While financial details are not specified, the model anticipates revenue generation through both individual in-app purchases and organizational subscriptions, with potential for partnerships and financial advisory services.</p>
        <p><b>Vision</b> In five years, we aim to be the leading financial management platform, synonymous with making budgeting and financial planning as intuitive and commonplace as checking the weather on your phone. We will have expanded our user base globally and developed a suite of tools that cater to various financial needs, all while maintaining our core value of simplicity.</p>
      </div>
    </div>
  );
};
export default Page;
