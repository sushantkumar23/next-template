'use server'

import { PrivacyTermsContainer } from '@/components/containers'
import {
  APP_NAME,
  BASE_URL,
  COMPANY_NAME,
  baseOpenGraphMetadata,
  baseTwitterMetadata
} from '@/config'

const title = 'Terms of Service'
const description = `Terms of Service for ${APP_NAME}`

export async function generateMetadata() {
  return {
    title,
    description,
    openGraph: {
      ...baseOpenGraphMetadata,
      title,
      description,
      url: `${BASE_URL}/terms`
    },
    twitter: {
      ...baseTwitterMetadata,
      title,
      description
    }
  }
}

function Terms() {
  return (
    <PrivacyTermsContainer heading="Terms of Service">
      <p>
        <strong>{COMPANY_NAME}</strong> would not be liable for any misuse of
        the products delivered. After selling the products &#38; services and
        the core technology, {COMPANY_NAME} will not be liable for any changs,
        maintenance and errors which might arise due to external tampering. If
        the client wants {COMPANY_NAME}
        to handle the maintenance of the product after selling the technology
        then there would be extra charges which would be decided mutually
        between the two parties in writing. Each and every communication related
        to the technology and product would be considered valid for clients only
        if they have the clauses mentioned in the agreement or have mails
        approved from the higher authorities of {COMPANY_NAME}.
      </p>
      <h2 className="font-bold">Important Note:</h2>
      <p>
        The client can not sell the products or materials provided by{' '}
        {COMPANY_NAME} to another one without the written permission of
        {COMPANY_NAME}. In case of such a condition, {COMPANY_NAME} will have
        all the authorities to stop all the services provided to the client on
        immediate effect without any financial liability or losses.
      </p>
      <p>
        In a situation of any dispute between the clients and their customers,{' '}
        {COMPANY_NAME} will not be liable for any concern or financial losses
        for any third party company or person.{' '}
      </p>
      <p>
        {COMPANY_NAME} will not have any responsibility in case of giving money
        in the bank account of any other company.
      </p>
      <h3 className="font-bold">Quotations and Estimates:</h3>
      <ul className="list-disc space-y-4">
        <li>
          All quotations and estimates provided by {COMPANY_NAME} are valid for
          a period of 30 days from date of issue. Quotations not accepted within
          this timeframe must be reissued.
        </li>
        <li>
          All quoted prices, excluding where indicated, do not include Goods and
          Services Tax.
        </li>{' '}
        <li>
          {COMPANY_NAME} reserves the right to suspend the services/quotation at
          any time, without any prior information.
        </li>
      </ul>
      <h3 className="font-bold">Payment Terms &#38; Intellectual Property</h3>
      <ul className="list-disc space-y-4">
        <li>
          All quotations provided by {COMPANY_NAME}, require at least 10%
          deposit upon acceptance.
        </li>{' '}
        <li>
          Unless prior arrangement has been made, final payment is strictly net
          15 days from the date of completion.
        </li>{' '}
        <li>
          Any cost arising from payment clearings or transaction charges are
          solely the responsibility of the client and will be charged as such.
        </li>{' '}
        <li>
          {COMPANY_NAME} will only commence work on the quoted application once
          any deposited funds have cleared.
        </li>{' '}
        <li>
          The customer will not be entitled for any service in case of delay in
          payment for more than 15 days from the final date of installation /
          date of project / module completion.
        </li>{' '}
        <li>
          If opted for service beyond the 12 months of maintenance period or as
          agreed by {COMPANY_NAME}, The Annual Maintenance Charges (AMC) will be
          normally applicable 25% (PERCENT) of original development cost of
          Project / Module; each year the development cost for new modules will
          be added to the initial development cost for the calculation of the
          AMC.
        </li>{' '}
        <li>
          The AMC percentage shall be decided by the {COMPANY_NAME}; which
          depends upon the amount of efforts and work required. This % may vary
          each year.
        </li>{' '}
        <li>
          The recurring / renewal amount of the domain and hosting are subjected
          to change as per the market rates. {COMPANY_NAME} disclaims all
          warranties or conditions, whether expressed or implied, (including
          without limitation implied, warranties or conditions of information
          and context). We consider ourselves and intend to be subject to the
          jurisdiction only of the courts of Gurugram, Haryana, India.
        </li>{' '}
        <li>
          Unless specified, all quotations provided by {COMPANY_NAME} do not
          include any source code license.
        </li>{' '}
        <li>
          All source code and associated intellectual property relating to said
          source code, developed by {COMPANY_NAME}, solely remains the property
          of {COMPANY_NAME}, except where specific code license has been issued
          to the client and said issuance has been indicated in writing from{' '}
          {COMPANY_NAME}.
        </li>{' '}
        <li>
          Any alteration, reverse engineering, or manipulation of any kind on
          the code, compiled or otherwise, created by {COMPANY_NAME} for the
          quoted application may be a breach of trademark and copyright laws. If
          said breach is confirmed, penalties will apply under the relevant
          acts.
        </li>
      </ul>
      <p>
        {' '}
        Any costs incurred by {COMPANY_NAME} for third party code license
        required to complete the quoted application are the responsibility of
        the client and will be solely borne by the client. Any such third party
        code license will be attached to the existing {COMPANY_NAME} code
        license for the quoted application.
      </p>
      <h3 className="font-bold">Website Contents:</h3>{' '}
      <ul className="list-disc space-y-4">
        <li>
          Clients are required to ensure that the content of the application
          being quoted adheres to all the current Indian legislation regarding
          publication.
        </li>
        <li>
          {COMPANY_NAME} reserves the right not to include any material supplied
          by the client within the quoted application if {COMPANY_NAME} deems
          said material inappropriate or offensive.erial inappropriate or
          offensive.
        </li>{' '}
        <li>
          It is the client&apos;s responsibility, in all cases, to ensure the
          applications content is displayed and formatted as they require. If
          the client cannot format the application&apos;s content,{' '}
          {COMPANY_NAME} will offer this service at {COMPANY_NAME} current
          hourly rate at the time of the request.
        </li>
      </ul>
      <h3 className="font-bold">Cancellations</h3>
      <ul className="list-disc space-y-4">
        <li>
          Should the client wish to cancel acceptance of the quotation,
          {COMPANY_NAME} will invoice the client for any work completed to date,
          as a percentage of the total work involved.
        </li>
        <li>
          The minimum cancellation fee will be 30% of the signed quotation.
        </li>
      </ul>
      <h3 className="font-bold">Errors and Liabilities</h3>
      <ul className="list-disc space-y-4">
        <li>
          {COMPANY_NAME} will pursue due care to ensure applications created by{' '}
          {COMPANY_NAME} are free of errors.
        </li>{' '}
        <li>
          {COMPANY_NAME} will correct any errors made by {COMPANY_NAME} staff in
          the undertaking of the quoted application.
        </li>{' '}
        <li>
          {COMPANY_NAME} does not accept responsibility for losses or damage
          arising from errors within any application.
        </li>
        <li>
          {COMPANY_NAME} does not accept responsibility for errors, damages,
          losses or additional costs that relate to third party products that{' '}
          {COMPANY_NAME} may require completing the quoted application.
        </li>
      </ul>
      <h3 className="font-bold">Alterations</h3>
      <ul className="list-disc space-y-4">
        <li>
          Any alterations requested by the client after development has begun
          will incur extra development and regression testing time. Dependent
          upon the alteration or change requested an average of 3 days extra
          development time per alteration should be allowed for. The 3 day
          average may not be indicative of the time required and can be extended
          commensurate of the time involved to implement said changes.
        </li>{' '}
        <li>
          {COMPANY_NAME} will not accept responsibility for any alterations
          performed by the client or any third party which may cause or induce
          errors within the quoted application.
        </li>{' '}
        <li>
          If {COMPANY_NAME} are required to correct said alterations or errors
          resulting from said alterations, induced, injected or otherwise caused
          by parties other than {COMPANY_NAME}, the client will be charged at
          the hourly rate that is current for {COMPANY_NAME} at the time said
          errors are to be fixed.
        </li>
      </ul>
      <h3 className="font-bold">Completion of work</h3>
      <ul className="list-disc space-y-4">
        <li>
          All timeframes offered by {COMPANY_NAME} to the client are estimates.
          The intrinsic nature of software development and its intricacies do
          not offer {COMPANY_NAME} the luxury of defining definite timeframes.
        </li>{' '}
        <li>
          {COMPANY_NAME} will endeavour to complete all work within the
          estimated time frames discussed with the client in the quotation.
          However, {COMPANY_NAME} will not be liable for any penalties, monies
          or hardships otherwise incurred by the client if the application
          cannot be delivered within the estimated timeframe.
        </li>{' '}
        <li>
          {COMPANY_NAME} will not release the quoted application unless all
          payments have been met under the obligations of the quotation or work
          agreement.
        </li>{' '}
        <li>
          If {COMPANY_NAME} does not have control over the residence where the
          finished work will reside then full payment must be made prior to said
          work being released by {COMPANY_NAME}.
        </li>{' '}
        <li>
          The quoted application remains the property of {COMPANY_NAME} Software
          until all obligations have been met for release of said application to
          the client.
        </li>{' '}
        <li>
          If {COMPANY_NAME} is working as a third party to another company, said
          company is responsible in meeting the obligations for release of the
          quote application to their client.
        </li>
      </ul>
      <h2 className="font-bold">
        Changes to site and these terms and conditions
      </h2>
      <p>
        This Site and these {COMPANY_NAME} Terms and Conditions may be amended,
        revised, changed, updated or modified by
        {COMPANY_NAME} with or without notice. Please review this link on a
        regular basis for changes. Continued use of this Site following any
        change to the {COMPANY_NAME} Terms and Conditions constitutes your
        acceptance of any such change to the {COMPANY_NAME} Terms and
        Conditions.
      </p>
    </PrivacyTermsContainer>
  )
}

export default Terms
