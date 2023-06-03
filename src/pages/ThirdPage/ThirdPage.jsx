import React from 'react'
import '../ThirdPage/ThirdApp.css'

const ThirdPage = () => {
    return (
        <div className='gap-8 columns-2 text-justify leading-4'>
            <div className='leading-3'>
                <span className='font-bold'>Criminal penalty for falsifying information</span>. Willfully falsifying
                certifications or affirmations may subject you to criminal penalties
                including fines and/or imprisonment.
            </div>
            <div className='leading-3 my-1'>
                <span className='font-bold'>Misuse of TINs</span>. If the requester discloses or uses TINs in violation of
                federal law, the requester may be subject to civil and criminal penalties
            </div>
            <h3 className='font-bold text-[1.3rem] capitalize my-2'>Specific instructions</h3>

            <h4 className='font-bold text-[1rem] my-1'>Line 1</h4>

            <div className='my-1'>You must enter one of the following on this line; <span className='font-bold'>do not</span>  leave this line
                blank. The name should match the name on your tax return
            </div>
            <div className='my-1 leading-[14px]'>If this Form W-9 is for a joint account (other than an account
                maintained by a foreign financial institution (FFI)), list first, and then
                circle, the name of the person or entity whose number you entered in
                Part I of Form W-9. If you are providing Form W-9 to an FFI to document
                a joint account, each holder of the account that is a U.S. person must
                provide a Form W-9.
            </div>
            <ol className="alphaNumeric">
                <li><span className='font-bold'>Individual.</span> Generally, enter the name shown on your tax return. If
                    you have changed your last name without informing the Social Security
                    Administration (SSA) of the name change, enter your first name, the last
                    name as shown on your social security card, and your new last name.
                    <div className='my-1'>
                        <span className='font-bold'>Note: ITIN applicant:</span>
                        Enter your individual name as it was entered on
                        your Form W-7 application, line 1a. This should also be the same as the
                        name you entered on the Form 1040/1040A/1040EZ you filed with your
                        application.
                    </div>
                </li>
                <li><span className='font-bold'>Sole proprietor or single-member LLC.</span> Enter your individual
                    name as shown on your 1040/1040A/1040EZ on line 1. You may enter
                    your business, trade, or “doing business as” (DBA) name on line 2.</li>
                <li><span className='font-bold'>Partnership, LLC that is not a single-member LLC, C
                    corporation, or S corporation.</span> Enter the entity's name as shown on the
                    entity's tax return on line 1 and any business, trade, or DBA name on
                    line 2.</li>
                <li><span className='font-bold'>Other entities.</span> Enter your name as shown on required U.S. federal
                    tax documents on line 1. This name should match the name shown on the
                    charter or other legal document creating the entity. You may enter any
                    business, trade, or DBA name on line 2.</li>
                <li><span className='font-bold'>Disregarded entity.</span> For U.S. federal tax purposes, an entity that is
                    disregarded as an entity separate from its owner is treated as a
                    “disregarded entity.” See Regulations section 301.7701-2(c)(2)(iii). Enter
                    the owner's name on line 1. The name of the entity entered on line 1
                    should never be a disregarded entity. The name on line 1 should be the
                    name shown on the income tax return on which the income should be
                    reported. For example, if a foreign LLC that is treated as a disregarded
                    entity for U.S. federal tax purposes has a single owner that is a U.S.
                    person, the U.S. owner's name is required to be provided on line 1. If
                    the direct owner of the entity is also a disregarded entity, enter the first
                    owner that is not disregarded for federal tax purposes. Enter the
                    disregarded entity's name on line 2, “Business name/disregarded entity
                    name.” If the owner of the disregarded entity is a foreign person, the
                    owner must complete an appropriate Form W-8 instead of a Form W-9.
                    This is the case even if the foreign person has a U.S. TIN. </li>
            </ol>

            <h4 className='font-bold text-[1rem] my-1'>Line 2</h4>

            <div className='my-1'>If you have a business name, trade name, DBA name, or disregarded
                entity name, you may enter it on line 2.
            </div>
            <h4 className='font-bold text-[1rem] my-2'>Line 3</h4>

            <div className='my-1'>Check the appropriate box on line 3 for the U.S. federal tax
                classification of the person whose name is entered on line 1. Check only
                one box on line 3.
            </div>


            <div className="overflow-x-auto break-inside-avoid">
                <table className="text-[13px] text-justify">
                    <thead className="text-sm">
                        <tr>
                            <th scope="col" className="w-[50%]">
                                IF the entity/person on line 1 is a(n) ...
                            </th>
                            <th scope="col" className='w-[50%]'>
                                THEN check the box for ...
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <ul>
                                    <li>Corporation</li>
                                </ul>
                            </td>
                            <td>
                                Corporation
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <ul className='leading-[14px]'>
                                    <li>Individual</li>
                                    <li>Sole proprietorship, or</li>
                                    <li>Single-member limited liability company(LLC) owned by an individual and disregarded for U.S. federal tax purposes.</li>
                                </ul>
                            </td>
                            <td>
                                Individual/sole proprietor or single-member LLC
                            </td>
                        </tr>
                        <tr>

                            <td>
                                <ul>
                                    <li>
                                        LLC treated as a partnership for
                                        U.S. federal tax purposes,
                                    </li>
                                    <li>
                                        LLC that has filed Form 8832 or
                                        2553 to be taxed as a corporation,
                                        or
                                    </li>
                                    <li>
                                        LLC that is disregarded as an
                                        entity separate from its owner but
                                        the owner is another LLC that is
                                        not disregarded for U.S. federal tax
                                        purposes.
                                    </li>
                                </ul>
                            </td>
                            <td>
                                Limited liability company and enter
                                the appropriate tax classification.
                                (P= Partnership; C= C corporation;
                                or S= S corporation)
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <ul>
                                    <li>Partnership</li>
                                </ul>
                            </td>
                            <td>
                                Partnership
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <ul>
                                    <li>Trust/estate</li>
                                </ul>
                            </td>
                            <td>
                                Trust/estate
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>

            <h4 className='font-bold text-[1rem] my-1'>Line 4,Exemptions</h4>

            <div className='my-1'>If you are exempt from backup withholding and/or FATCA reporting,
                enter in the appropriate space on line 4 any code(s) that may apply to
                you.
            </div>

            <div className='font-bold'>Exempt payee code.</div>

            <ul className='leading-3'>
                <li>Generally, individuals (including sole proprietors) are not exempt from
                    backup withholding.</li>
                <li>Except as provided below, corporations are exempt from backup
                    withholding for certain payments, including interest and dividends.</li>
                <li>Corporations are not exempt from backup withholding for payments
                    made in settlement of payment card or third party network transactions.</li>
                <li className='leading-3'>Corporations are not exempt from backup withholding with respect to
                    attorneys’ fees or gross proceeds paid to attorneys, and corporations
                    that provide medical or health care services are not exempt with respect
                    to payments reportable on Form 1099-MISC.</li>
            </ul>

            <div className='indented'>The following codes identify payees that are exempt from backup
                withholding. Enter the appropriate code in the space in line 4.</div>
            <ol className='leading-3'>
                <li className='leading-3'>—An organization exempt from tax under section 501(a), any IRA, or
                    a custodial account under section 403(b)(7) if the account satisfies the
                    requirements of section 401(f)(2)</li>
                <li>—The United States or any of its agencies or instrumentalities</li>
                <li className="leading-3">A state, the District of Columbia, a U.S. commonwealth or possession,or any of their political subdivisions or instrumentalities</li>
                <li>—A foreign government or any of its political subdivisions, agencies,
                    or instrumentalities</li>
                <li>—A corporation</li>
                <li className='leading-3'>—A dealer in securities or commodities required to register in the United States, the District of Columbia, or a U.S. commonwealth or possession</li>
                <li>—A futures commission merchant registered with the Commodity
                    Futures Trading Commission</li>
                <li>—A real estate investment trust</li>
                <li>—An entity registered at all times during the tax year under the
                    Investment Company Act of 1940</li>
                <li>—A common trust fund operated by a bank under section 584(a)</li>
                <li>—A financial institution</li>
                <li>—A middleman known in the investment community as a nominee or
                    custodian</li>
                <li>—A middleman known in the investment community as a nominee or
                    custodian</li>
            </ol>



        </div>
    )
}

export default ThirdPage