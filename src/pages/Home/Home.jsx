import React, { useState, useRef } from 'react'

import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'


const Home = () => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
  const required = value => (value ? undefined : 'Required')

  const [ssn, setSsn] = useState(Array(9).fill(''));

  const [ein, setEin] = useState(Array(9).fill(''))

  const ssnInputRefs = useRef([]);

  const einInputRefs = useRef([])

  const handleSsnChange = (e, index) => {
    const updatedPin = [...ssn];
    updatedPin[index] = e.target.value;
    setSsn(updatedPin);

    if (index < ssnInputRefs.current.length - 1 && e.target.value !== '') {
      ssnInputRefs.current[index + 1].focus();
    }
  };

  const handleSsnBackspace = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && ssn[index] === '') {
      ssnInputRefs.current[index - 1].focus();
    }
  };
  const handleEinChange = (e, index) => {
    const updatedPin = [...ein];
    updatedPin[index] = e.target.value;
    setEin(updatedPin);

    if (index < einInputRefs.current.length - 1 && e.target.value !== '') {
      einInputRefs.current[index + 1].focus();
    }
  };

  const handleEinBackspace = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && ein[index] === '') {
      einInputRefs.current[index - 1].focus();
    }
  };

  const initialValues = {
    businessValues: [
      "Individual/sole proprietor or single-member LLC",
      "C Corporation",
      "S Corporation",
      "Partnership",
      "Trust/estate",
      "Limited Liability company",
      "other"
    ]
  }
  const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
  }
  return (
    <div className='Home'>
      {/* heading */}
      <div className='border-b-2 flex items-stretch'>
        <div className='basis-[200px]'>
          <div>
            form <span className='text-[2rem] font-extrabold whitespace-nowrap'>W-9</span>
            <div>

              (Rev. October 2018) Department of the Treasury Internal Revenue Service
            </div>

          </div>
        </div>

        <div className='text-center  border-x-2  text-heading-bold grow px-4'>
          <div className='mb-1'>
            <div>
              Request for Taxpayer
            </div>
            <div>

              Identification and Certification
            </div>
          </div>
          <div className='text-heading-light-bold'>
            <span className='h-2 w-2'>&#9658;</span> Go to <a className='italic' href="https://www.irs.gov/forms-pubs/about-form-w-9">www.iris.gov/Form w9</a> for instructions and the latest information.
          </div>
        </div>
        <div className='font-[700] pl-1 text-left text-[1rem] basis-[200px]'>
          Give Form to the
          requester.Do not
          send to the IRS.
        </div>
      </div>

      {/* form part */}
      <div className='flex'>
        <div className='text-center vertical-rl leading-3'>
          <div>Print or type</div>
          <div>See <span className='font-bold'>Specific Instructions</span> on page 3.</div>
        </div>

        <Form
          initialValues={initialValues}
          onSubmit={onSubmit}
          mutators={{
            ...arrayMutators
          }}
          render={({ handleSubmit, form, values }) => (
            <form onSubmit={handleSubmit} className='border-l-2'>

              <div className='pl-1 border-b-2'>
                <label>
                  <Field
                    name="Name"
                    component="input"
                    type="text"
                    placeholder=""
                    className="input-textSize"
                    validate={required}>
                    {({ input, meta }) => (
                      <div>
                        <label><span className='text-ordered-list mr-1'>1</span>Name (as shown on your income tax return). Name is required on this line; do not leave this line blank.</label>
                        <input className="input-textSize" {...input} type="text" placeholder="" />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                </label>

              </div>


              <div className='pl-1'>
                <Field
                  name="BusinessName"
                  component="input"
                  type="text"
                  placeholder=""

                  validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <label><span className='text-ordered-list mr-1'>2</span>Business name/disregarded entity name, if different from above</label>
                      <input className="input-textSize" {...input} type="text" placeholder="" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>


              </div>


              <div className='flex border-y-2'>

                <div className='pl-1 w-[170%]'>
                  <label className='inline-block mb-2'><span className='text-ordered-list mr-1'>3</span>Check appropriate box for federal tax classification of the person whose name is entered on line 1. Check only one of the
                    following seven boxes. </label>
                  <FieldArray name="businessValues">
                    {({ fields }) => (
                      <div>
                        {fields.map((name, index) => {
                          if (index < 5) {
                            return (<label key={index} className={index === 0 ? 'w-[150px] mr-2' : 'mr-2'}>
                              <Field
                                name="federal-tax-classification"
                                component="input"
                                type="radio"
                                value={fields.value[index]}
                                className="square-radio"
                              />{' '}{' '}
                              {fields.value[index]}
                            </label>)
                          }
                          else if (index === 5) {
                            return (
                              <div key={index} className='my-2'>
                                <label>
                                  <Field
                                    name="federal-tax-classification"
                                    component="input"
                                    type="radio"
                                    value={fields.value[index]}
                                    className="square-radio"
                                  />{' '}
                                  Limited liability company. Enter the tax classification (C=C corporation, S=S corporation, P=Partnership)
                                </label>

                                <label>
                                  <span className='inline-block h-4 w-4'>&#9658;</span> <Field
                                    name="federal-tax-classification"
                                    component="input"
                                    type="text"
                                    placeholder=""
                                    className="outline-none border-b-2 border-black w-[150px]"
                                  />
                                </label>

                                <div className='leading-3'>
                                  <span className='font-bold'>Note</span>: Check the appropriate box in the line above for the tax classification of the single-member owner. Do not check
                                  LLC if the LLC is classified as a single-member LLC that is disregarded from the owner unless the owner of the LLC is
                                  another LLC that is not disregarded from the owner for U.S. federal tax purposes. Otherwise, a single-member LLC that
                                  is disregarded from the owner should check the appropriate box for the tax classification of its owner.
                                </div>
                              </div>
                            )
                          }
                          else {
                            return (
                              <div key={index}>
                                <label>
                                  <Field
                                    name="federal-tax-classification"
                                    component="input"
                                    type="radio"
                                    value={fields.value[index]}
                                    className="square-radio"
                                  />{' '}
                                  Other (see instructions) <span className='h-2 w-2'>&#9658;</span>
                                </label>
                              </div>
                            )
                          }
                        })}
                      </div>
                    )}
                  </FieldArray>
                  {/* <div className='flex justify-between my-2'>
                    <label className='w-[150px] grow'>
                      <Field
                        name="federal-tax-classification"
                        component="input"
                        type="radio"
                        value="Individual/sole proprietor or single-member LLC"
                        className="square-radio"
                      />{' '}{' '}
                      Individual/sole proprietor or single-member LLC
                    </label>
                    <label className='grow'>
                      <Field
                        name="federal-tax-classification"
                        component="input"
                        type="radio"
                        value="C Corporation"
                        className="square-radio"
                      />{' '}
                      C Corporation
                    </label>
                    <label className='grow'>
                      <Field
                        name="federal-tax-classification"
                        component="input"
                        type="radio"
                        value="S Corporation"
                        className="square-radio"
                      />{' '}
                      S Corporation
                    </label>
                    <label className='grow'>
                      <Field
                        name="federal-tax-classification"
                        component="input"
                        type="radio"
                        value="Partnership"
                        className="square-radio"
                      />{' '}
                      Partnership
                    </label>
                    <label className='grow'>
                      <Field
                        name="federal-tax-classification"
                        component="input"
                        type="radio"
                        value="Trust/estate"
                        className="square-radio"
                      />{' '}
                      Trust/estate
                    </label>

                  </div>

                  <div className='my-2'>


                    <label>
                      <Field
                        name="federal-tax-classification"
                        component="input"
                        type="radio"
                        value="Limited Liability company"
                        className="square-radio"
                      />{' '}
                      Limited liability company. Enter the tax classification (C=C corporation, S=S corporation, P=Partnership)
                    </label>

                    <label>
                      <span className='h-2 w-2'>&#9658;</span> <Field
                        name="federal-tax-classification"
                        component="input"
                        type="text"
                        placeholder=""
                        className="outline-none border-b-2 border-black w-[40px]"
                      />
                    </label>

                    <div className='leading-3'>
                      <span className='font-bold'>Note</span>: Check the appropriate box in the line above for the tax classification of the single-member owner. Do not check
                      LLC if the LLC is classified as a single-member LLC that is disregarded from the owner unless the owner of the LLC is
                      another LLC that is not disregarded from the owner for U.S. federal tax purposes. Otherwise, a single-member LLC that
                      is disregarded from the owner should check the appropriate box for the tax classification of its owner.
                    </div>
                  </div>

                  <div>
                    <label>
                      <Field
                        name="federal-tax-classification"
                        component="input"
                        type="radio"
                        value="other"
                        className="square-radio"
                      />{' '}
                      Other (see instructions) <span className='h-2 w-2'>&#9658;</span>
                    </label>
                  </div> */}

                </div>

                <div className='pl-1 border-l-2 '>
                  <div>

                    <span className='text-ordered-list pr-1'>4</span> Exemptions (codes apply only to
                    certain entities, not individuals; see
                    instructions on page 3):
                  </div>

                  <div className='my-3'>
                    <label>
                      Exempt payee code (if any)
                      <Field
                        name="payee code"
                        component="input"
                        type="text"
                        value=""
                        className="outline-none border-b-2 border-black w-[40px]"
                      />

                    </label>
                  </div>
                  <div className='my-4'>
                    <label>
                      <div>

                        Exemption from FATCA
                        reporting
                        code (if any)
                        <Field
                          name="Fatca code"
                          component="input"
                          type="text"
                          value=""
                          className="outline-none border-b-2 border-black w-[60px]"
                        />
                      </div>

                    </label>
                  </div>

                  <div className='italic text-[0.6rem]'>
                    (Applies to accounts maintained outside the U.S.)
                  </div>
                </div>

              </div>

              <div className='flex'>

                <div className='basis-[60%]'>
                  <div className='pl-1 border-b-2'>
                    <label><span className='text-ordered-list mr-1'>5</span> Address (number, street, and apt. or suite no.) See instructions.
                      <Field
                        name="Address"
                        component="input"
                        type="text"
                        placeholder=""
                        className="input-textSize"
                      />
                    </label>

                  </div>
                  <div className='pl-1 border-b-2'>
                    <label><span className='text-ordered-list mr-1'>6</span>  City, state, and ZIP code
                      <Field
                        name="Address"
                        component="input"
                        type="text"
                        placeholder=""
                        className="input-textSize"

                      />
                    </label>

                  </div>

                </div>
                <div className='border-b-2  border-l-2  grow'>

                  <div className='pb-2'>
                    <label>Requester’s name and address (optional)
                      <Field
                        name="requesterNameAndAddress"
                        component="input"
                        type="text"
                        placeholder=""
                        className="input-textSize"
                      />
                    </label>

                  </div>
                </div>

              </div>
              <div className='pl-1'>
                <label><span className='text-ordered-list mr-1'>7</span>List account number(s) here (optional)<Field
                  name="account Number"
                  component="input"
                  type="text"
                  placeholder=""
                  className="input-textSize"

                />
                </label>

              </div>

            </form>

          )}
        />

      </div>
      <div>
        <div className='border-y-2 flex text-[1.2rem] leading-none font-medium'>
          <div className='px-8 bg-black  text-white  mr-6'>Part I</div>
          Taxpayer Identification Number (TIN)
        </div>
      </div>

      <div className='flex'>
        <div className='mr-2 w-[90%]'>

          <div className='text-paragraph-normal mb-2'>
            Enter your TIN in the appropriate box. The TIN provided must match the name given on line 1 to avoid
            backup withholding. For individuals, this is generally your social security number (SSN). However, for a
            resident alien, sole proprietor, or disregarded entity, see the instructions for Part I, later. For other
            entities, it is your employer identification number (EIN). If you do not have a number, see <span className='italic'>How to get a
              TIN,</span> later.
          </div>

          <div className='text-paragraph-normal'>
            <span className='font-medium mr-2'>Note:</span>
            If the account is in more than one name, see the instructions for line 1. Also see <span className='italic'>What Name and
              Number To Give the Requester</span> for guidelines on whose number to enter.
          </div>
        </div>
        <div className='w-[50%]'>
          <div className='px-2 py-1 font-medium outline outline-2'>
            Social security number
          </div>
          <div className='mt-1 flex'>

            {ssn.map((digit, index) => (
              <input className='chakra-pin-input text-center'
                key={index}
                type="text"
                value={digit}
                maxLength="1"
                onChange={(e) => handleSsnChange(e, index)}
                onKeyDown={(e) => handleSsnBackspace(e, index)}
                ref={(ref) => (ssnInputRefs.current[index] = ref)}
              />
            ))}
            {/* <HStack spacing="0" mt='4px'>

              <PinInput placeholder=''>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <Center w='0.8rem' h='0.8rem' fontSize='2xl'>
                  -
                </Center>
                <PinInputField />
                <PinInputField />
                <Center w='0.8rem' h='0.8rem' fontSize='2xl'>
                  -
                </Center>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack> */}

          </div>
          <div className='font-medium my-1'>
            or
          </div>
          <div className=' px-2 py-1 font-medium outline outline-2'>
            Employer identification number
          </div>
          {/* <div>
            <HStack spacing="0" mt='4px'>

              <PinInput placeholder=''>
                <PinInputField />
                <PinInputField />
                <Center w='0.8rem' h='0.8rem' fontSize='2xl'>
                  -
                </Center>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>

          </div> */}
          <div className='mt-1 flex'>

            {ein.map((digit, index) => (
              <input className='chakra-pin-input text-center'
                key={index}
                type="text"
                value={digit}
                maxLength="1"
                onChange={(e) => handleEinChange(e, index)}
                onKeyDown={(e) => handleEinBackspace(e, index)}
                ref={(ref) => (einInputRefs.current[index] = ref)}
              />
            ))}
          </div>

        </div>

      </div>


      <div className='border-y-2 flex leading-none text-[1.2rem] font-medium'>
        <div className='px-8 bg-black  text-white  mr-6'>Part II</div>
        Certification
      </div>

      <div className='text-paragraph-normal'>
        <div>
          Under penalties of perjury, I certify that:
        </div>
        <ol>
          <li> The number shown on this form is my correct taxpayer identification number (or I am waiting for a number to be issued to me); and</li>
          <li>I am not subject to backup withholding because: (a) I am exempt from backup withholding, or (b) I have not been notified by the Internal Revenue
            Service (IRS) that I am subject to backup withholding as a result of a failure to report all interest or dividends, or (c) the IRS has notified me that I am
            no longer subject to backup withholding; and</li>
          <li> I am a U.S. citizen or other U.S. person (defined below); and</li>
          <li>The FATCA code(s) entered on this form (if any) indicating that I am exempt from FATCA reporting is correct</li>
        </ol>
        <div className='my-1 leading-3'>
          <span className='font-medium mr-2'>Certification instructions.</span>
          You must cross out item 2 above if you have been notified by the IRS that you are currently subject to backup withholding because
          you have failed to report all interest and dividends on your tax return. For real estate transactions, item 2 does not apply. For mortgage interest paid,
          acquisition or abandonment of secured property, cancellation of debt, contributions to an individual retirement arrangement (IRA), and generally, payments
          other than interest and dividends, you are not required to sign the certification, but you must provide your correct TIN. See the instructions for Part II, later.
        </div>

        <div className='border-y-2 text-[1.2rem] font-medium'>
          <div className='pr-2 leading-none inline-block'>

            <div>Sign</div>
            <div>Here</div>
          </div>

          <div className='flex'>


          </div>
        </div>

        <div className='column-container text-paragraph-normal'>
          <h3 className='font-bold text-[1.3rem]'>General Instructions</h3>
          <div >Section references are to the Internal Revenue Code unless otherwise
            noted.</div>
          <div>
            <span className='font-bold'>Future developments.</span> For the latest information about developments
            related to Form W-9 and its instructions, such as legislation enacted
            after they were published, go to <a href='https://www.irs.gov/forms-pubs/about-form-w-9' className='italic'>www.irs.gov/FormW9.</a>
          </div>
          <h3 className='font-bold text-[1.3rem]'>Purpose of Form</h3>
          <div>
            An individual or entity (Form W-9 requester) who is required to file an
            information return with the IRS must obtain your correct taxpayer
            identification number (TIN) which may be your social security number
            (SSN), individual taxpayer identification number (ITIN), adoption
            taxpayer identification number (ATIN), or employer identification number
            (EIN), to report on an information return the amount paid to you, or other
            amount reportable on an information return. Examples of information
            returns include, but are not limited to, the following
          </div>

          <ul>
            <li>Form 1099-INT (interest earned or paid)</li>
            <li>Form 1099-DIV (dividends, including those from stocks or mutual funds.</li>

            <li> Form 1099-MISC (various types of income, prizes, awards, or gross
              proceeds</li>
            <li> Form 1099-B (stock or mutual fund sales and certain other
              transactions by brokers)</li>
            <li>Form 1099-S (proceeds from real estate transactions)</li>
            <li> Form 1099-K (merchant card and third party network transactions)</li>
            <li>Form 1098 (home mortgage interest), 1098-E (student loan interest),
              1098-</li>
            <li>Form 1099-C (canceled debt)</li>
            <li> Form 1099-A (acquisition or abandonment of secured property)</li>
          </ul>
          <div>
            Use Form W-9 only if you are a U.S. person (including a resident
            alien), to provide your correct TIN
          </div>
          <div>
            <span className='italic'>If you do not return Form W-9 to the requester with a TIN, you might
              be subject to backup withholding. See</span> What is backup withholding,
            later.</div>
        </div>
      </div>

    </div>

  )
}

export default Home