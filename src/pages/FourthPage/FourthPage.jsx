import React from 'react'


const FourthPage = () => {
    return (

        <div className='columns-2 gap-8 text-justify'>

            <div className='indented'>The following codes identify payees that are exempt from backup
                withholding. Enter the appropriate code in the space in line 4.</div>

            <table className="text-[13px] text-justify">
                <thead className="text-sm">
                    <tr>
                        <th scope="col" className="w-[50%]">
                            IF the payment is for . . .
                        </th>
                        <th scope="col" className='w-[50%]'>
                            THEN the payment is exempt for . . .
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Interest and dividend payments
                        </td>
                        <td>
                            All exempt payees except for 7
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Broker transactions
                        </td>
                        <td>
                            Exempt payees 1 through 4 and 6
                            through 11 and all C corporations.
                            S corporations must not enter an
                            exempt payee code because they
                            are exempt only for sales of
                            noncovered securities acquired
                            prior to 2012.
                        </td>
                    </tr>
                    <tr>

                        <td>
                            Barter exchange transactions and
                            patronage dividends
                        </td>
                        <td>
                            Exempt payees 1 through 4
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Payments over $600 required to be
                            reported and direct sales over
                            $5,000<sup>1</sup>.
                        </td>
                        <td>
                            Generally, exempt payees
                            1 through 5<sup>2</sup>.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Payments made in settlement of
                            payment card or third party network
                            transactions
                        </td>
                        <td>
                            Exempt payees 1 through 4
                        </td>
                    </tr>
                </tbody>

            </table>

            <div><sup>1</sup> See Form 1099-MISC, Miscellaneous Income, and its instructions</div>
            <div><sup>2</sup>  However, the following payments made to a corporation and
                reportable on Form 1099-MISC are not exempt from backup
                withholding: medical and health care payments, attorneys’ fees, gross
                proceeds paid to an attorney reportable under section 6045(f), and
                payments for services paid by a federal executive agency.</div>

            <div className='leading-3'>
                <span className='font-bold'>Exemption from FATCA reporting code</span>. The following codes identify
                payees that are exempt from reporting under FATCA. These codes
                apply to persons submitting this form for accounts maintained outside
                of the United States by certain foreign financial institutions. Therefore, if
                you are only submitting this form for an account you hold in the United
                States, you may leave this field blank. Consult with the person
                requesting this form if you are uncertain if the financial institution is
                subject to these requirements. A requester may indicate that a code is
                not required by providing you with a Form W-9 with “Not Applicable” (or
                any similar indication) written or printed on the line for a FATCA
                exemption code
            </div>

            <ol className="alphaNumeric">
                <li>—An organization exempt from tax under section 501(a) or any
                    individual retirement plan as defined in section 7701(a)(37)
                </li>
                <li>—The United States or any of its agencies or instrumentalities</li>
                <li>—A state, the District of Columbia, a U.S. commonwealth or
                    possession, or any of their political subdivisions or instrumentalities.</li>
                <li>—A corporation the stock of which is regularly traded on one or
                    more established securities markets, as described in Regulations
                    section 1.1472-1(c)(1)(i)</li>
                <li>—A corporation that is a member of the same expanded affiliated
                    group as a corporation described in Regulations section 1.1472-1(c)(1)(i)</li>
                <li>—A real estate investment trust</li>
                <li>—A regulated investment company as defined in section 851 or an
                    entity registered at all times during the tax year under the Investment
                    Company Act of 1940</li>
                <li>—A regulated investment company as defined in section 851 or an
                    entity registered at all times during the tax year under the Investment
                    Company Act of 1940</li>
                <li>—A common trust fund as defined in section 584(a)</li>
                <li>—A bank as defined in section 581</li>
                <li>—A broker</li>
                <li>—A trust exempt from tax under section 664 or described in section
                    4947(a)(1)</li>
                <li>—A tax exempt trust under a section 403(b) plan or section 457(g)
                    plan</li>

            </ol>

            <div className='leading-3 my-1'>
                <span className='font-bold'>Note</span>: You may wish to consult with the financial institution requesting
                this form to determine whether the FATCA code and/or exempt payee
                code should be completed.
            </div>

            <h4 className='font-bold text-[1rem] my-2'>Line 5</h4>

            <div className='my-1'>Enter your address (number, street, and apartment or suite number).
                This is where the requester of this Form W-9 will mail your information
                returns. If this address differs from the one the requester already has on
                file, write NEW at the top. If a new address is provided, there is still a
                chance the old address will be used until the payor changes your
                address in their records.
            </div>
            <h4 className='font-bold text-[1rem] my-2'>Line 6</h4>

            <div className='my-1'>Enter your city, state, and ZIP code.
            </div>

            <h3 className='font-bold text-[1.3rem] capitalize my-2 leading-6 wordSpacing'>Part I. Taxpayer Identification Number (TIN)</h3>

            <div className='leading-3'>
                <span className='font-bold'>Enter your TIN in the appropriate box</span>. If you are a resident alien and
                you do not have and are not eligible to get an SSN, your TIN is your IRS
                individual taxpayer identification number (ITIN). Enter it in the social
                security number box. If you do not have an ITIN, see How to get a TIN
                below
            </div>

            <div className='my-1 indented'>
                If you are a sole proprietor and you have an EIN, you may enter either
                your SSN or EIN.
            </div>
            <div className='my-1 indented'>
                If you are a single-member LLC that is disregarded as an entity
                separate from its owner, enter the owner’s SSN (or EIN, if the owner has
                one). Do not enter the disregarded entity’s EIN. If the LLC is classified as
                a corporation or partnership, enter the entity’s EIN.
            </div>

            <div className='leading-3'>
                <span className='font-bold'>Note</span>:
                See What Name and Number To Give the Requester, later, for
                further clarification of name and TIN combinations.
            </div>
            <div className='leading-3 my-1'>
                <span className='font-bold'>How to get a TIN</span>.
                If you do not have a TIN, apply for one immediately.
                To apply for an SSN, get Form SS-5, Application for a Social Security
                Card, from your local SSA office or get this form online at
                www.SSA.gov. You may also get this form by calling 1-800-772-1213.
                Use Form W-7, Application for IRS Individual Taxpayer Identification
                Number, to apply for an ITIN, or Form SS-4, Application for Employer
                Identification Number, to apply for an EIN. You can apply for an EIN
                online by accessing the IRS website at www.irs.gov/Businesses and
                clicking on Employer Identification Number (EIN) under Starting a
                Business. Go to www.irs.gov/Forms to view, download, or print Form
                W-7 and/or Form SS-4. Or, you can go to www.irs.gov/OrderForms to
                place an order and have Form W-7 and/or SS-4 mailed to you within 10
                business days
            </div>

            <div className='indented'>
                If you are asked to complete Form W-9 but do not have a TIN, apply
                for a TIN and write “Applied For” in the space for the TIN, sign and date
                the form, and give it to the requester. For interest and dividend
                payments, and certain payments made with respect to readily tradable
                instruments, generally you will have 60 days to get a TIN and give it to
                the requester before you are subject to backup withholding on
                payments. The 60-day rule does not apply to other types of payments.
                You will be subject to backup withholding on all such payments until
                you provide your TIN to the requester.
            </div>
            <div className='leading-3 my-1'>
                <span className='font-bold'>Note</span>:
                Entering “Applied For” means that you have already applied for a
                TIN or that you intend to apply for one soon
            </div>
            <div className='leading-3 my-1'>
                <span className='font-bold'>Caution</span>:
                A disregarded U.S. entity that has a foreign owner must use
                the appropriate Form W-8.
            </div>

            <h3 className='font-bold text-[1.3rem] capitalize my-2'>Part II. Certification</h3>

            <div>
                To establish to the withholding agent that you are a U.S. person, or
                resident alien, sign Form W-9. You may be requested to sign by the
                withholding agent even if item 1, 4, or 5 below indicates otherwise
            </div>
            <div className='indented'>
                For a joint account, only the person whose TIN is shown in Part I
                should sign (when required). In the case of a disregarded entity, the
                person identified on line 1 must sign. Exempt payees, see Exempt payee
                code, earlier
            </div>
            <div>
                <span className='font-bold'>Signature Requirements</span>. Complete the certification as indicated in
                items 1 through 5 below
            </div>
        </div>

    )
}

export default FourthPage