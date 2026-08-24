import { ShieldCheck } from "lucide-react";

export default function Terms() {
    const rules = [
        "Applications for FD/RD/SB should be made in the company's prescribed form.",
        "Deposits will be accepted by means of account payee cheques/drafts if the deposit amount is Rs. 20,000 and above.",
        "Interest is payable monthly on deposits made under Fixed Deposit Scheme. The depositors may avail of the facilities of cheques, Inter-department adjustments etc, with regard to mode of disposal of interest not drawn by the depositors will not carry any interest.",
        "Deposits can be made either individually or in the Joint names of two persons payable to Former/ Either or Survivor.",
        "In the case of Joint deposits the first named depositor will be regarded as the beneficial owner and will be treated as the payee for the purpose of deduction of tax at source.",
        "All correspondence will be addressed to the first named depositor. The depositors are requested to intimate the change of address and instructions regarding interest before 15 days thereof.",
        "In the event of the First Joint-holder of the deposit, repayment of principal and Interest will be made to the survivor given in the application form on production of the death certificate without reference to the legal heirs/legal representatives of the deceased.",
        "As per the directions of the Department of Company Affairs new depositors are required to be properly introduced or a document of their Identity has to be furnished to the company. Such Introduction can be done either by an existing depositor or a Bank Manager or gazetted officer for which necessary provision has been made in the application form.",
        "Income tax in terms of provisions of the Income Tax Act will be deducted on the Interest payable / Credited.",
        "Persons desiring non-deduction of tax at source on Interest exceeding the limit set out in the Finance Act are required to submit Form 15G in duplicate.",
        "Interest will cease on the due dates of deposits unless they are renewed.",
        "Deposits will be repaid on maturity by cheques provided the deposit receipts are validly discharged. At the request of the depositor, payment will be made by Demand Draft at their cost.",
        "Repayment of deposit where the deposit amount together with interest payable if any is Rs. 20,000 or more in one or more deposit accounts in single name or jointly with another person will be governed by the provisions of the Income Tax Act.",
        "Where the due date of any repayment falls on a weekly holiday or any other day on which the Company remains closed the payment will be made on the next working day.",
        "The company reserves the right to allow at its discretion withdrawal of deposit before maturity. Such premature withdrawal of deposits will be in accordance with the directions of the Department of Company Affairs:\n i. Deposits which are foreclosed between 6 months to 1 year: 2% interest less than the rate applicable.\n ii. The Fund will not repay any deposit within a period of three months from the date of its acceptance.\n iii. The Fund at the request of the depositor will purchase any deposit after a period of three months, but the depositor shall not be entitled to any Interest up to six months from the date of deposit.\n iv. The Fund at the request of the depositor makes repayment of a deposit before the expiry of the period for which such deposit was accepted by the Fund, the rate of interest payable by the Fund on such deposit shall be reduced by 2% percent from the rate which the Fund would have ordinarily paid, had the deposit been accepted for the period for which such deposit had run.\n v. In the event of death of a depositor, the deposit will be repaid prematurely to the surviving depositors in the case of joint holding with survivor clause, or to the nominee or legal heirs with Interest at the rate which the Fund would have ordinarily paid, had such deposit been 'accepted for the period for which such deposit had run, up to the date of repayment.",
        "Any deposit which remains unclaimed or unpaid for more than Seven years from the date it becomes due for payment will be transferred to the Investor Education and Protection Fund established by the Central Government under sec. 205C (1) of the Companies Act, 1956 or will be dealt with in accordance with law.",
        "In the event of loss, destruction or mutilation of a deposit receipt, the company may at its sole discretion issue a duplicate upon receiving an Indemnity Bond in the form prescribed by the company on non-judicial stamp paper duly executed and notarized from the depositor. All expenses in this connection are to be borne by the depositor.",
        "The Company will not recognise any lien, charge or assignment of deposits or any other encumbrances.",
        "It is not obligatory on the part of the company to give notice or advance Intimation about the maturity of the deposit.",
        "It is suggested that the depositor fills in the column \"Nominee\" in favour of a person of his/her choice to enable the latter to receive the proceed of the deposit in case of unfortunate death.",
        "In case an Interest Cheque/Deposit receipt is lost / misplaced, a duplicate Interest Cheque/Deposit receipt will be issued on production of an indemnity on a non-judicial stamp paper of Rs. 20/-.",
        "In case of non-payment of the deposit or part thereof as per the terms and conditions of such deposit, the depositor may approach the Bench of Company Law Board having jurisdiction over the company.",
        "In case of any deficiency of the Nidhi or Mutual Benefit Society in servicing its deposit, the depositor may approach the National Consumers Disputes Redressal Forum, the State Level Consumers Disputes Redressal Forum or District Level Consumers Disputes Redressal Forum for relief.",
        "A Statement that the financial position of the Nidhi or Mutual Benefit Society as disclosed and the representations made in the application form are true and correct and that the Nidhi and the Board of Directors are responsible for the correctness and veracity thereof.",
        "The Board of Directors reserve the right to alter or amend any of the terms and conditions maintained above."
    ];

    return (
        <div className="pt-32 pb-20 px-6 sm:px-8 max-w-[900px] mx-auto min-h-screen">
            <div className="flex items-center gap-3 mb-8">
                <ShieldCheck className="h-8 w-8 text-primary" />
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Terms & Conditions</h1>
            </div>

            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                Please read all 27 official rules and regulations of Suriyan Benefit Fund (Madras) Limited governing acceptance of deposits.
            </p>

            <div className="bg-card rounded-2xl p-6 sm:p-10 shadow-sm border border-border">
                <ol className="list-decimal pl-5 space-y-6">
                    {rules.map((rule, idx) => (
                        <li key={idx} className="text-[15px] text-foreground leading-relaxed pl-2">
                            <span className="whitespace-pre-wrap">{rule}</span>
                        </li>
                    ))}
                </ol>
            </div>
            <div className="mt-8 text-center text-sm font-medium text-muted-foreground">
                ✓ End of Terms & Conditions.
            </div>
        </div>
    );
}
