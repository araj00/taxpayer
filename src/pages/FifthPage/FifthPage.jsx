import React from 'react'

const FifthPage = () => {
    return (
        <div className='columns-2 gap-8 text-justify'>
            <ol>
                <li><span className='font-bold'>Interest, dividend, and barter exchange accounts opened
                    before 1984 and broker accounts considered active during 1983..</span> You must give your correct TIN, but you do not have to sign the
                    certification.</li>
                <li className='my-1'>
                    <span className='font-bold'> Interest, dividend, broker, and barter exchange accounts
                        opened after 1983 and broker accounts considered inactive during
                        1983. </span>
                    You must sign the certification or backup withholding will apply. If
                    you are subject to backup withholding and you are merely providing
                    your correct TIN to the requester, you must cross out item 2 in the
                    certification before signing the form.
                </li>
                <li><span className='font-bold'>Real estate transactions.</span>  You must sign the certification. You may
                    cross out item 2 of the certification.</li>
                <li><span className='font-bold'>Other payments.</span> You must give your correct TIN, but you do not
                    have to sign the certification unless you have been notified that you
                    have previously given an incorrect TIN. “Other payments” include
                    payments made in the course of the requester’s trade or business for
                    rents, royalties, goods (other than bills for merchandise), medical and
                    health care services (including payments to corporations), payments to
                    a nonemployee for services, payments made in settlement of payment
                    card and third party network transactions, payments to certain fishing
                    boat crew members and fishermen, and gross proceeds paid to
                    attorneys (including payments to corporations). </li>
                <li><span className='font-bold'> Mortgage interest paid by you, acquisition or abandonment of
                    secured property, cancellation of debt, qualified tuition program
                    payments (under section 529), ABLE accounts (under section 529A),
                    IRA, Coverdell ESA, Archer MSA or HSA contributions or
                    distributions, and pension distributions.</span> You must give your correct
                    TIN, but you do not have to sign the certification.</li>

            </ol>

            <h3 className='font-bold text-[1.3rem] capitalize my-2 leading-4'>What Name and Number To Give the Requester</h3>
            <table className="text-[13px] text-justify fifth">
                <thead className="text-sm text-center">
                    <tr>
                        <th scope="col" className="w-[50%]">
                            For this type of account:
                        </th>
                        <th scope="col" className='w-[50%]'>
                            Give name and SSN of:
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <ol>
                                <li>Individual</li>
                            </ol>
                        </td>
                        <td>
                            The individual
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ol start='2'>
                                <li>Two or more individuals (joint
                                    account) other than an account
                                    maintained by an FFI</li>
                            </ol>
                        </td>

                        <td> The actual owner of the account or, if
                            combined funds, the first individual on
                            the account<sup>1</sup></td>
                    </tr>
                    <tr>
                        <td>
                            <ol start='3'>
                                <li> Two or more U.S. persons
                                    (joint account maintained by an FFI)</li>
                            </ol>
                        </td>

                        <td>Each holder of the account</td>
                    </tr>
                    <tr>
                        <td>
                            <ol start='4'>
                                <li>Custodial account of a minor
                                    (Uniform Gift to Minors Act)
                                </li>
                            </ol>
                        </td>

                        <td>The minor<sup>2</sup></td>
                    </tr>
                    <tr>
                        <td>
                            <ol start='5'>
                                <li> a. The usual revocable savings trust
                                    (grantor is also trustee)
                                    <div>
                                        b. So-called trust account that is not
                                        a legal or valid trust under state law
                                    </div>
                                </li>
                            </ol>
                        </td>

                        <td>
                            <div>
                                The grantor-trustee<sup>1</sup>
                            </div>
                            <div>
                                The actual owner<sup>1</sup>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ol start='6'>
                                <li>Sole proprietorship or disregarded
                                    entity owned by an individual</li>
                            </ol>
                        </td>

                        <td>
                            The owner<sup>3</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ol start='7'>

                                <li>Grantor trust filing under Optional
                                    Form 1099 Filing Method 1 (see
                                    Regulations section 1.671-4(b)(2)(i)
                                    (A))</li>
                            </ol>

                        </td>

                        <td>
                            The grantor*
                        </td>
                    </tr>




                    <tr className='text-[1rem] font-bold text-center'>
                        <td>
                            For this type of account:
                        </td>
                        <td>
                            Give name and EIN of:
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <ol start='8'>
                                <li>Disregarded entity not owned by an
                                    individual</li>
                            </ol>
                        </td>
                        <td>
                            The owner
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ol start='9'>
                                <li>A valid trust, estate, or pension trust</li>
                            </ol>
                        </td>

                        <td>Legal entity<sup>4</sup></td>
                    </tr>
                    <tr>
                        <td>
                            <ol start='10'>
                                <li>Corporation or LLC electing
                                    corporate status on Form 8832 or
                                    Form 2553</li>
                            </ol>
                        </td>

                        <td>The corporation</td>
                    </tr>
                    <tr>
                        <td>
                            <ol start='11'>
                                <li>Association, club, religious,
                                    charitable, educational, or other taxexempt organizatio
                                </li>
                            </ol>
                        </td>

                        <td>The organization</td>
                    </tr>
                    <tr>
                        <td>
                            <ol start='12'>
                                <li>Association, club, religious,
                                    charitable, educational, or other taxexempt organizatio
                                </li>
                            </ol>
                        </td>

                        <td>
                            The partnership

                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ol start='13'>
                                <li>. A broker or registered nominee</li>
                            </ol>
                        </td>

                        <td>
                            The broker or nominee
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ol start='14'>

                                <li>Account with the Department of
                                    Agriculture in the name of a public
                                    entity (such as a state or local
                                    government, school district, or
                                    prison) that receives agricultural
                                    program payments</li>
                            </ol>

                        </td>

                        <td>
                            The public entity
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ol start='15'>

                                <li>. Grantor trust filing under the Form
                                    1041 Filing Method or the Optional
                                    Form 1099 Filing Method 2 (see
                                    Regulations section 1.671-4(b)(2)(i)(B))
                                </li>
                            </ol>

                        </td>

                        <td>
                            The trust
                        </td>
                    </tr>
                </tbody>

            </table >

            <div>
                <sup>1</sup>
                List first and circle the name of the person whose number you furnish.
                If only one person on a joint account has an SSN, that person’s number
                must be furnished
            </div>

            <div>
                <sup>2</sup>Circle the minor’s name and furnish the minor’s SSN.
            </div>

            <div>
                <sup>3</sup>You must show your individual name and you may also enter your
                business or DBA name on the “Business name/disregarded entity”
                name line. You may use either your SSN or EIN (if you have one), but the
                IRS encourages you to use your SSN.</div>

            <div>
                <sup>4</sup>List first and circle the name of the trust, estate, or pension trust. (Do
                not furnish the TIN of the personal representative or trustee unless the
                legal entity itself is not designated in the account title.) Also see <span className='italic'>Special
                    rules for partnerships,</span> earlier
            </div>

            <div><span className='font-bold'>*Note</span>. The grantor also must provide a Form W-9 to trustee of trust.
            </div>
            <div><span className='font-bold'>Note</span>. If no name is circled when more than one name is listed, the
                number will be considered to be that of the first name listed.
            </div>
            <h3 className='font-bold text-[1.3rem] capitalize my-1 leading-5'>secure your tax records from identity theft</h3>

            <div>
                Identity theft occurs when someone uses your personal information
                such as your name, SSN, or other identifying information, without your
                permission, to commit fraud or other crimes. An identity thief may use
                your SSN to get a job or may file a tax return using your SSN to receive
                a refund.
            </div>

            <div className='indent-3 leading-3'>To reduce your risk</div>

            <ul>
                <li>Protect your SSN,</li>
                <li>Ensure your employer is protecting your SSN, and</li>
                <li>Be careful when choosing a tax preparer.</li>
            </ul>

            <div className='indented'>
                If your tax records are affected by identity theft and you receive a
                notice from the IRS, respond right away to the name and phone number
                printed on the IRS notice or letter.
            </div>
            <div className='indented'>
                If your tax records are not currently affected by identity theft but you
                think you are at risk due to a lost or stolen purse or wallet, questionable
                credit card activity or credit report, contact the IRS Identity Theft Hotline
                at 1-800-908-4490 or submit Form 14039.
            </div>
            <div className='indented'>
                For more information, see Pub. 5027, Identity Theft Information for
                Taxpayers.
            </div>
            <div className='indented'>
                Victims of identity theft who are experiencing economic harm or a
                systemic problem, or are seeking help in resolving tax problems that
                have not been resolved through normal channels, may be eligible for
                Taxpayer Advocate Service (TAS) assistance. You can reach TAS by
                calling the TAS toll-free case intake line at 1-877-777-4778 or TTY/TDD
                1-800-829-4059.
            </div>

            <div><span className='font-bold'>Protect yourself from suspicious emails or phishing schemes</span>.Phishing is the creation and use of email and websites designed to
                mimic legitimate business emails and websites. The most common act
                is sending an email to a user falsely claiming to be an established
                legitimate enterprise in an attempt to scam the user into surrendering
                private information that will be used for identity theft.
            </div>
        </div >
    )
}

export default FifthPage