import React from 'react'

const SixthPage = () => {
    return (
        <div className='columns-2 gap-8 text-justify'>
            <div className='indented'>
                The IRS does not initiate contacts with taxpayers via emails. Also, the
                IRS does not request personal detailed information through email or ask
                taxpayers for the PIN numbers, passwords, or similar secret access
                information for their credit card, bank, or other financial accounts.
            </div>
            <div className='indented my-2'>
                If you receive an unsolicited email claiming to be from the IRS,
                forward this message to <a className='italic' href='mailto:phishing@irs.gov'>.phishing@irs.gov.</a> You may also report misuse
                of the IRS name, logo, or other IRS property to the Treasury Inspector
                General for Tax Administration (TIGTA) at 1-800-366-4484. You can
                forward suspicious emails to the Federal Trade Commission at
                <a href='mailto:spam@uce.gov'>spam@uce.gov</a> or report them at <a className='italic' href="https://reportfraud.ftc.gov/">www.ftc.gov/complaint</a>. You can
                contact the FTC at <a className='italic' href="https://reportfraud.ftc.gov/#/">www.ftc.gov/idtheft</a> or 877-IDTHEFT (877-438-4338).
                If you have been the victim of identity theft, see <a className='italic' href='https://www.identitytheft.gov/#/'> www.IdentityTheft.gov</a>
                and Pub. 5027.
            </div>

            <div className='indented'>

                Visit <a className='italic' href='https://www.irs.gov/identity-theft-central'>www.irs.gov/IdentityTheft</a> to learn more about identity theft and
                how to reduce your risk.
            </div>

            <div className='break-inside-avoid'>

            <h3 className='font-bold text-[1.3rem] capitalize my-2'>privacy act notice</h3>
            <div>
                Section 6109 of the Internal Revenue Code requires you to provide your
                correct TIN to persons (including federal agencies) who are required to
                file information returns with the IRS to report interest, dividends, or
                certain other income paid to you; mortgage interest you paid; the
                acquisition or abandonment of secured property; the cancellation of
                debt; or contributions you made to an IRA, Archer MSA, or HSA. The
                person collecting this form uses the information on the form to file
                information returns with the IRS, reporting the above information.
                Routine uses of this information include giving it to the Department of
                Justice for civil and criminal litigation and to cities, states, the District of
                Columbia, and U.S. commonwealths and possessions for use in
                administering their laws. The information also may be disclosed to other
                countries under a treaty, to federal and state agencies to enforce civil
                and criminal laws, or to federal law enforcement and intelligence
                agencies to combat terrorism. You must provide your TIN whether or
                not you are required to file a tax return. Under section 3406, payers
                must generally withhold a percentage of taxable interest, dividend, and
                certain other payments to a payee who does not give a TIN to the payer.
                Certain penalties may also apply for providing false or fraudulent
                information.
            </div>
            </div>
        </div>
    )
}

export default SixthPage