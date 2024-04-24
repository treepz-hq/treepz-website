/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
const PrivacyPage = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const stickyPoint = 300; // Change this value based on your needs
 const revertPoint = 8750
  if (scrollTop >= stickyPoint && scrollTop <= revertPoint) {
    setIsSticky(true);
  } else {
    setIsSticky(false);
  }    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="">
      <div className=" pt-[103px] pb-[65px] bg-[#FDF2D0] px-4 sm:px-20">
        <h1
          className="text-[24px] sm:text-[32px]
                lg:text-[72px]"
        >
          Privacy Policy
        </h1>
        <p className=" text-[#6F7174] text-[20px]">
          Last updated: June 01,2023
        </p>
      </div>
      <div className="sm:px-20 px-4 pt-[100px] flex-row flex gap-[100px] relative">
        <div className="max-w-[792px]">
          <section id="introduction">
            <h1 className=" text-[24px] md:text-[40px] font-medium ">
              1. Introduction
            </h1>
            <p className="text-[18px] mt-[24px]">
              TreepzNg Limited (“Treepz ”, “we”, “us”, “our” “Company”),
              recognizes your privacy rights as guaranteed under the 1999
              Constitution of the Federal Republic of Nigeria; The Nigerian Data
              Protection Regulation (NDPR), and other applicable privacy laws in
              Nigeria. Thus, it is important to us as a law-abiding organisation
              that your Personal Data is managed, processed and protected in
              accordance with the provisions of the applicable laws. In the
              course of our business and/or your engagement with us and third
              parties through our Platforms (this includes but are not limited
              to our websites, digital platforms, mobile applications, physical
              operations/offices, amongst others), we may process your Personal
              Data, subject however to the terms of this Policy. This Privacy
              Policy (“Policy”) therefore explains our privacy practices with
              respect to how we collect, process your Personal Data and
              describes your rights as a user of any of our services and
              Platforms. This Policy applies to all our Platforms, and all
              related sites, applications, services and tools regardless of how
              they are accessed or used. In this Privacy Policy, “we”, “us” or
              “our” refers to Treepz Limited and its successors, agents and
              assigns, while “you”, “your” refers to you and/or any person who
              subscribes for, uses or authorizes the use of the Service. Our
              Privacy Policy explains our user’s privacy rights regarding: What
              Personal Data we collect Why we collect such Personal Data The use
              of such Personal Data The storage, sharing and protection of such
              Personal Data
            </p>
          </section>
          <section id="consent" className="mt-[56px]">
            <h1 className=" text-[24px] md:text-[40px] font-medium ">
              2. Consent
            </h1>
            <p className="mt-[24px] text-[18px]">
              As a user of any of our Platforms, you accept this Privacy Policy
              when you sign up for, or use our products, services, content,
              technologies or functions offered on our Platforms and all related
              sites and services (“Services”).
            </p>
          </section>
          <section className="mt-[56px]" id="definitionofterms">
            <h1 className=" text-[24px] md:text-[40px] font-medium ">
              3. Definition of Terms
            </h1>
            <div className="mt-[24px] text-[18px]">
              For the purpose of this Policy:
              <ol className="list-decimal">
                <li>
                  Personal Data: Means any information relating to you,
                  including your name, identification number, location data,
                  online identifier address, photo, email address, pins,
                  passwords, bank details, posts on our Platforms, religion,
                  date of birth, health, race/tribe, nationality, ethnicity,
                  political views, trade union membership, criminal records,
                  medical information, and other unique identifiers such as but
                  not limited to MAC address, IP address, IMEI number, Bank
                  Verification Number, IMSI number, SIM and others. It also
                  includes factors specific to your physical, physiological,
                  genetic, mental, economic, cultural or social identity.
                </li>
                <li>
                  Process/Processing: Means any operation or set of operations
                  which is performed on your Personal Data or sets of Personal
                  Data, whether or not by automated means, such as collection,
                  recording, organisation, structuring, storage, adaptation or
                  alteration, retrieval, consultation, use, disclosure by
                  transmission, dissemination or otherwise making available,
                  alignment or combination, restriction, erasure or destruction.
                </li>
                <li>
                  Consent: We kindly request that you carefully read through
                  this Policy and click on the ‘Agree’ icon below, if you
                  consent to the terms of this Policy, particularly with respect
                  to the processing of your Personal Data. That notwithstanding,
                  if you proceed to use any of our Platforms and services, it
                  will deemed that you have provided your express consent to the
                  terms of this Policy.
                </li>
                <li>
                  Age: You must be at least 18 years old to use our services or
                  any of our Platforms. Individuals under the age of 18, or
                  applicable age of maturity, may utilize our Platforms services
                  only with involvement of a parent or legal guardian, under
                  such person’s account. Regardless, all Personal Data which we
                  may process shall be in accordance with this Policy and other
                  applicable laws.
                </li>
              </ol>
            </div>
          </section>
          <section id="collectionofpersonal" className="mt-[56px]">
            <h1 className=" text-[24px] md:text-[40px] font-medium ">
              4. Collection of Personal Data
            </h1>
            <p className="text-[18px] font-normal my-[24px]">
              In the course of your engagement with us or with third parties
              through our Platforms, we may collect your Personal Data and
              non-Personal Data in the following ways:
            </p>
            <div>
              <ul className="list-disc">
                <li>
                  Automatic Information collection: We may automatically collect
                  Information upon your engagement with us or our Platforms
                  through your computer, mobile phones, forms, documents made
                  available to us and other access devices. The information sent
                  includes, but is not limited to, data about our pages you
                  access, geo-location information; statistics on page views;
                  traffic to and from our Platforms.
                </li>
                <li>
                  Information from downloads: When you download or use our
                  digital Platforms or access our site, we may receive non
                  personal information from your mobile device about your
                  location, number of downloads, geo location of downloads. You
                  may disable your location in the settings menu of the device.
                </li>
                <li>
                  Physically or Digitally Provided Personal Data: We may collect
                  and process your Personal Data when you create and/or update
                  your account on our Platform; complete forms, questionnaires,
                  surveys etc. We may also collect Personal Data from
                  information you provide to us through documents, letters,
                  e-mail, agreements, correspondence, ID cards, passports, or
                  through any other means by which you wilfully provide
                  information to us. When you use Treepz Services, we may also
                  collect Personal Data about your transactions and your
                  activities. In addition, when you open an account on our
                  Platform, we may collect Personal Data such as your contact
                  information, which includes your name, address, phone number,
                  email or other similar information; financial information such
                  as your full bank account numbers and/or credit card or debit
                  card numbers.
                </li>
                <li>
                  Third Parties: We may also receive your Personal Data from
                  third parties such as, guardians, financial institutions,
                  identity verification services, vendors, and service providers
                  etc.
                </li>
                <li>
                  Social Media: We also receive Personal Data through your
                  engagements with us on social media sites (e.g., Facebook,
                  Instagram, LinkedIn, Twitter, etc). This includes but are not
                  limited to your replies to our posts, your comments,
                  enquiries, messages to us, etc. We may also collect Personal
                  Data from your public profile and updates on social media.
                </li>
              </ul>
            </div>
          </section>
          <section className="mt-[56px]" id="accessingpersonal">
            <h1 className=" text-[24px] md:text-[40px] font-medium ">
              5. Accessing your personal data
            </h1>
            <p className="text-[18px] mt-[24px]">
              When accessing our Platforms, we may collect Personal Data about
              you and your interactions with the Services to which we undertake
              to keep secure and confidential. We may offer you the ability to
              connect with our Platforms using a mobile device, either through a
              mobile application (App), computer, mobile optimized website, or
              by any other means. The provisions of this Privacy Policy apply to
              all such mobile access and use of mobile devices. When you
              download or use our mobile applications, or access one of our
              mobile optimized sites, we may receive Personal Data about your
              location and your mobile device, including a unique identifier for
              your device. We may use this information to provide you with
              location-based services, such as advertising, search results, and
              other personalized content. Most mobile devices allow you to
              control or disable location services in the device's setting's
              menu. If you have questions about how to disable your device’s
              location services, we recommend you contact your mobile service
              carrier or the manufacture of your particular device.
            </p>
          </section>
          <section className="mt-[56px]" id="usingpersonaldata">
            <h1 className=" text-[24px] md:text-[40px] font-medium ">
              6. Using your personal data
            </h1>
            <div className="mt-[24px] text-[18px]">
              <p className="mb-[24px]">
                In the course of your engagements with us or through our
                Platforms, we collect Personal Data for various legal reasons,
                largely to enable us to personalize your experience and to
                provide a more efficient service to you. Some of the reasons we
                collect Personal Data are to:
              </p>
              <ol className="list-disc">
                <li>provide services and customer support;</li>
                <li>
                  process transactions, payment requests, and send notices about
                  transactions;
                </li>
                <li>
                  create an account with us for the provision or use of our
                  services;
                </li>
                <li>
                  communicate with you about your account or transactions with
                  us and send you information or request feedback about features
                  on our website and applications or changes to our policies;
                </li>
                <li>
                  send you periodic emails and updates pertaining to our
                  products and services;
                </li>
                <li>
                  verify customers’ identity, including during account creation
                  and password reset processes;
                </li>
                <li>
                  manage your account and provide you with efficient customer
                  service,
                </li>
                <li>
                  send you offers and promotions for our services and investment
                  opportunities
                </li>
                <li>
                  resolve disputes, process payments and troubleshoot problems;
                </li>
                <li>
                  detect, investigate and prevent activities that may violate
                  our policies or be illegal;
                </li>
                <li>
                  manage risks, or to detect, prevent, and/or remediate fraud,
                  violation of policies and applicable user agreements or other
                  potentially prohibited or illegal activities;
                </li>
                <li>execute our contractual obligations to you;</li>
                <li>
                  improve our services and functionality by customizing user
                  experience;
                </li>
                <li>
                  measure the performance of our services and improve their
                  content and layout;
                </li>

                <li>
                  manage and protect our information technology infrastructure;
                </li>
                <li>
                  provide targeted marketing and advertising, provide service or
                  transaction update notices, and deliver promotional offers
                  based on communication preferences;
                </li>
                <li>
                  obtain a means by which we may contact you; either by
                  telephone, text (SMS), email messaging, social media, etc;
                </li>
                <li>
                  conduct background checks, compare information for accuracy
                  and verify same with third parties;
                </li>
                <li>
                  identify or address a violation and administer our policies
                  and terms of use;
                </li>
                <li>
                  comply with legal, contractual and regulatory obligations;
                </li>
                <li>
                  execute your specific requests or use same for a specific
                  purpose as you may instruct;
                </li>
                <li>
                  investigate and respond to your complaints or enquiries;
                </li>
                <li>
                  process your access to our services, Platforms, or functions
                  from time to time;
                </li>
                <li>
                  If we intend to use any Personal Data in any manner that is
                  not consistent with this Privacy Policy, you will be informed
                  of such anticipated use prior to or at the time at which the
                  Personal Data is required and obtain your consent.
                </li>
              </ol>
            </div>
          </section>
          <section className="mt-[56px]" id="lawful">
            <h1 className=" text-[24px] md:text-[40px] font-medium ">
              7. Lawful basis for processing
            </h1>
            <div className="mt-[24px] text-[18px]">
              <p>
                We can only use your Personal Data if we have a lawful basis for
                doing so. We consider that the lawful basis for processing your
                Personal Data are as follows:
              </p>
              <ul className="list-disc">
                <li>to comply with our legal and regulatory obligations</li>
                <li>
                  to perform a contract with you or to take steps at your
                  request before entering into a contract
                </li>
                <li>
                  if we have your consent for specific processing of your
                  Personal Data for one or more specific purposes
                </li>
                <li>
                  to use your Personal Data in our business interest to enable
                  us to give you the best services
                </li>
                <li>
                  for the performance of a task or function carried out in the
                  interest of the public.
                </li>
                <li>
                  when it is required for the protection of your vital
                  interests.
                </li>
              </ul>
            </div>
          </section>
          <section className="mt-[56px]" id="storage">
            <h1 className=" text-[24px] md:text-[40px] font-medium ">
              8. Storage and protection of your personal data
            </h1>
            <p className="mt-[24px] text-[18px]">
              We protect your Personal Data using physical, technical, and
              administrative security measures to reduce the risks of loss,
              misuse, unauthorized access, unauthorised disclosure and
              alteration. Some of our safeguards include firewall protection,
              Virtual Private Network (VPN) protection, encryption of data,
              authorization keys for authorised access and strong passwords.
              Access to our various platforms is restricted to authorized users
              only. Your Personal Data is also stored on our secure servers as
              well as secure physical locations and cloud infrastructure (where
              applicable). Please be aware that, despite our best efforts, no
              security measures are perfect or impenetrable. We will retain your
              Personal Data for the length of time needed to fulfil the purposes
              outlined in this privacy policy unless a longer retention period
              is required or permitted by law. To dispose of Personal Data, we
              may anonymize it, delete it or take other appropriate steps.
              Personal Data may persist in copies made for backup and business
              continuity purposes for additional time. We will take all
              necessary measures to ensure that your Personal Data is safe,
              however, you are also required to ensure that access codes, PINs,
              passwords, usernames, and all other information or hints that may
              enable third party access to your accounts on our Platforms are
              secure. We therefore strongly advise you to keep such information
              secure and confidential. If you use a third party’s device
              (laptops, phones, public internet, etc.) to access your account,
              kindly ensure that you always log out. Kindly note however that
              certain devices are programmed to save passwords or usernames, as
              such, we advise that you use third party devices with extreme
              caution. If you believe that an unauthorized person has accessed
              your information, please contact us immediately.
            </p>
          </section>
          <section className="mt-[56px]" id="processingpersonaldata">
            <h1 className=" text-[24px] md:text-[40px] font-medium ">
              9. Processing your personal data
            </h1>
            <p className="mt-[24px] text-[18px]">
              In order to execute our obligations to you or process your
              transactions, we may be required to process your Personal Data,
              such as your name, account number, account ID, contact details,
              shipping and billing address, or other information needed to
              complete the transaction. We also work with third parties,
              including financial institutions, vendors, service providers, who
              at one point or the other facilitate transactions executed on our
              Platforms. For completeness, in the course of your engagement with
              us or use of our services and Platforms, we may share your
              Personal Data with different stakeholders, including but not
              limited to Financial institutions; service providers; Credit
              bureaus and collection agencies to report account or credit
              information; Treepz’s subsidiaries and affiliates; Regulatory or
              judicial authorities; or other third parties pursuant to a
              subpoena, court order, or other legal process or requirement
              applicable to Treepz . Please note that the aforementioned parties
              may be within or outside Nigeria. We may also process your
              Personal Data when we believe, in our sole discretion, that the
              disclosure of your Personal Data is necessary to comply with
              applicable laws and judicial/regulatory orders; conduct
              investigations; manage existing or imminent risks, prevent fraud,
              crime or financial loss, or for public safety or to report
              suspected illegal activity or to investigate violations of our
              Terms and Conditions. In all cases, we will ensure that your
              Personal Data is safe, and notify the receiving party of the
              confidential nature of your Personal Data, particularly the need
              to maintain the confidentiality of same and prevent unlawful or
              unauthorised usage.
            </p>
          </section>
          <section className="mt-[56px]" id="yourright">
            <h1 className=" text-[24px] md:text-[40px] font-medium ">
              10. Your right as a data subject
            </h1>
            <div className="mt-[24px] text-[18px]">
              You have the following rights regarding your Personal Data
              collected by us: <br /> Right to access your Personal Data being
              held by us. Request for such information may be sent to{" "}
              <Link href="mailto:info@treepz.com">
                <span className="underline">info@treepz.com</span>
              </Link>
              <br />
              Right to request that your Personal Data be made available to you
              in an electronic format or that it should be sent to a third party
              (Kindly note that we have the right to decline such request if it
              is too frequent, unreasonable, and likely to cause substantial
              cost to us. In any event, we will communicate the reason for our
              refusal);
              <br />
              Right to rectify any inaccurate, incomplete Personal Data. As
              such, if you discover any inaccuracy in your Personal Data, kindly
              notify us promptly and provide us with documentary evidence to
              enable us to update the requisite changes.
              <br />
              Right to withdraw consent for the processing of your Personal
              Data, provided that such withdrawal shall not invalidate any
              processing hitherto done based on the consent previously given by
              you; Restrict or object to the processing of your Personal Data
              provided that we may be compelled to process your Personal Data
              where required under law, regulatory authorities, or court of law.
              <br />
              Right to request that your Personal Data be deleted. We may
              however continue to retain the information where required under
              law, contract, regulatory authorities, or court of law.
            </div>
          </section>
          <section id="disclosures" className="mt-[56px] ">
            <h1 className=" text-[24px] md:text-[40px] font-medium ">
              11. Disclosures of personal data
            </h1>
            <div className="mt-[24px] text-[18px]">
              We may share your Personal Data with: Members of Treepz to provide
              joint content, products and services (such as registration,
              transactions and customer support), to help detect and prevent
              potentially illegal acts and violations of our policies, and to
              guide decisions about their products, services, and
              communications. Members of the group will use this Personal Data
              to send you marketing communications and opportunities only if you
              have requested their services. Credit bureaus and collection
              agencies to report account or credit information, as permitted by
              law. Companies that we plan to merge with or are acquired by.
              (Should such a combination occur, we will require that the new
              combined entity follow this Privacy Policy with respect to your
              Personal Data. If your Personal Data could be used contrary to
              this policy, you will receive prior notice). Law enforcement,
              government officials, or other third parties pursuant to a
              subpoena, court order, or other legal process or requirement
              applicable to Treepz or one of its agents; when we need to do so
              to comply with law; or when we believe, in our sole discretion,
              that the disclosure of Personal Data is necessary to prevent
              physical harm or financial loss, to report suspected illegal
              activity or to investigate violations of our User Agreement. Other
              unaffiliated third parties, for the following purposes:
              <ul className="list-disc">
                <li>
                  Fraud Prevention and Risk Management: to help prevent fraud or
                  assess and manage risk.
                </li>
                <li>
                  Customer Service: for customer service purposes, including to
                  help service your accounts or resolve disputes.
                </li>
                <li>
                  Legal Compliance: to help them comply with anti-money
                  laundering and counter-terrorist financing verification
                  requirements.
                </li>
                <li>
                  Service Providers: to enable service providers under contract
                  with us to support our business operations, such as fraud
                  prevention, marketing, customer service and technology
                  services. Our contracts dictate that these service providers
                  only use your Personal Data in connection with the services
                  they perform for us and not for their own benefit.
                </li>
              </ul>
            </div>
          </section>
          <section id="crossborder" className="mt-[56px] ">
            <h1 className=" text-[24px] md:text-[40px] font-medium ">
              12. Cross-border transfers of personal information
            </h1>
            <div className="mt-[24px] text-[18px]">
              We operate globally, and in a bid to serve you better, we may
              transfer your Personal Data to third parties in locations around
              the world for the purposes described in this Privacy Policy. That
              notwithstanding, Treepz is committed to adequately protecting your
              Personal Data regardless of where the Data is transferred or
              hosted. Please be rest assured that all our affiliates are bound
              by the same level of strict confidentiality with respect to your
              Personal Data.
            </div>
          </section>{" "}
          <section id="software" className="mt-[56px] ">
            <h1 className=" text-[24px] md:text-[40px] font-medium ">
              13. Software
            </h1>
            <div className="mt-[24px] text-[18px]">
              If you download or use our software, such as a stand-alone
              software product, an app, or a browser plugin, you agree that from
              time to time, the software may download and install upgrades,
              updates and additional features from us in order to improve,
              enhance, and further develop the software. We may utilise your
              Personal Data to internally evaluate our software.
            </div>
          </section>{" "}
          <section id="period" className="mt-[56px] ">
            <h1 className=" text-[24px] md:text-[40px] font-medium ">
              14. Period of storage
            </h1>
            <div className="mt-[24px] text-[18px]">
              We retain your Personal Data for as long as necessary for the
              purpose(s) for which it was collected. The period of data storage
              is also subject to legal, regulatory, administrative and
              operational requirements.
            </div>
          </section>{" "}
          <section id="exceptions" className="mt-[56px] ">
            <h1 className=" text-[24px] md:text-[40px] font-medium ">
              15. Exceptions
            </h1>
            <div className="mt-[24px] text-[18px]">
              Please note that this Policy does not apply to Information that is
              already in the public domain through no fault of ours.
            </div>
          </section>
          <section id="databreach" className="mt-[56px] ">
            <h1 className=" text-[24px] md:text-[40px] font-medium ">
              16. Data breach/violation
            </h1>
            <div className="mt-[24px] text-[18px]">
              In the event of a breach of security leading to the accidental or
              unlawful destruction, loss, alteration, unauthorized disclosure
              of, or access to Personal Data, we reserve the right to restrict
              your access to our Platforms and shall within 72 (Seventy-Two)
              hours of having knowledge of such breach report the details of the
              breach to NITDA. Furthermore, where we ascertain that such breach
              is detrimental to your rights and freedoms in relation to your
              Personal Data, we shall having knowledge of the occurrence of such
              breach take steps to inform you of the breach incident, the risk
              to your rights and freedoms resulting from such breach and any
              course of action to remedy said breach.
            </div>
          </section>
          <section id="disputes" className="mt-[56px] ">
            <h1 className=" text-[24px] md:text-[40px] font-medium ">
              17. Dispute Resolutions
            </h1>
            <div className="mt-[24px] text-[18px]">
              We are dedicated to ensuring that you are satisfied with our
              management of your Personal Data. However, in the unlikely event
              that you have a complaint, please contact us via the details
              below, stating your name and details of your complaint. Upon
              receipt of your complaint we will endeavor to contact you within 3
              (three) working days with a view to amicably resolving such
              dispute within the shortest possible time. The foregoing
              notwithstanding, all disputes arising from this policy shall first
              be resolved by negotiation. However, if parties fail to resolve
              the disputes amicably by such mutual consultations, parties shall
              further attempt to resolve the dispute by mediation.
            </div>
          </section>
          <section id="contactus" className="mt-[56px] ">
            <h1 className=" text-[24px] md:text-[40px] font-medium ">
              18. Contact us
            </h1>
            <div className="mt-[24px] text-[18px]">
              If you have questions regarding your data privacy rights or would
              like to submit a related data privacy right request, kindly
              contact us via the information below:
              <br />
              <span className="font-bold">
                TreepzNg Limited 2, Opeyemisi Bamidele Street, Off Freedom Way,
                Lekki, Lagos, Nigeria Email: info@treepz.com Phone number:
                08171000085 (Lagos), 08171100552 (Abuja)
              </span>{" "}
              <br />
              <p className="mt-[30px]">
                Please allow up to 1 (One) month for requests to be processed.
                The Company reserves the right to charge a reasonable fee to
                process excessive or repeated requests.
              </p>
            </div>
          </section>
          <section id="amendment" className="mt-[56px] ">
            <h1 className=" text-[24px] md:text-[40px] font-medium ">
              19. Amendment
            </h1>
            <div className="mt-[24px] text-[18px]">
              We may amend or revise this Policy at any time by posting a
              revised version on our website. Notice of the amendment shall be
              posted on our website and the revised version will be effective
              from the date of publication. Kindly, note that your continued use
              of our Platform after the publication of the revised version
              constitutes your acceptance of our amended terms of the Policy.
            </div>
          </section>
        </div>

        <div  className={`hidden lg:block  ${isSticky ? 'fixed overflow-hidden z-10 top-[95px] right-[7.29%]' : 'absolute right-[7.29%]'}`}>
          <ul className="space-y-[18px] text-[16px]">
            <li className="text-[#6F7174] hover:text-black hover:underline  leading-[20px]">
              <a href="#introduction">1. Introduction</a>
            </li>

            <li className="text-[#6F7174] hover:text-black hover:underline eading-[20px]">
              <a href="#consent">2. Consent</a>
            </li>
            <li className="text-[#6F7174] hover:text-black hover:underline leading-[20px]">
              <a href="#definitionofterms"> 3. Definition of terms</a>
            </li>
            <li className="text-[#6F7174] hover:text-black hover:underline leading-[20px]">
              <a href="#collectionofpersonal">
                4. Collection of personal data{" "}
              </a>
            </li>
            <li className="text-[#6F7174] hover:text-black hover:underline  leading-[20px]">
              <a
                href="#accessingpersonal
                                "
              >
                {" "}
                5. Accessing your personal data
              </a>
            </li>
            <li className="text-[#6F7174] hover:text-black hover:underline leading-[20px]">
              <a
                href="#usingpersonaldata
 "
              >
                {" "}
                6. Using your personal data
              </a>
            </li>
            <li className="text-[#6F7174] hover:text-black hover:underline leading-[20px]">
              <a
                href="#lawful
"
              >
                {" "}
                7. Lawful basis for processing
              </a>
            </li>
            <li className="text-[#6F7174] hover:text-black hover:underline  leading-[20px]">
              <a href="#storage">
                {" "}
                8. Storage and protection of your personal data
              </a>
            </li>
            <li className="text-[#6F7174] hover:text-black hover:underline leading-[20px]">
              {" "}
              <a href="#processingpersonaldata">
                {" "}
                9. Processing your personal data
              </a>
            </li>
            <li className="text-[#6F7174] hover:text-black hover:underline leading-[20px]">
              <a href="#yourright">10. Your right as a data subject</a>
            </li>
            <li className="text-[#6F7174] hover:text-black hover:underline leading-[20px]">
              {" "}
              <a href="#disclosures">11. Disclosures of personal data</a>
            </li>
            <li className="text-[#6F7174] hover:text-black hover:underline leading-[20px]">
              <a href="#crossborder">
                12. Cross-border transfers of personal information
              </a>
            </li>
            <li className="text-[#6F7174] hover:text-black hover:underline leading-[20px]">
              <a href="#software">13. Software</a>
            </li>
            <li className="text-[#6F7174] hover:text-black hover:underline leading-[20px]">
              {" "}
              <a href="#period">14. Period of storage</a>
            </li>
            <li className="text-[#6F7174] hover:text-black hover:underline leading-[20px]">
              <a href="#exceptions">15. Exceptions</a>
            </li>
            <li className="text-[#6F7174] hover:text-black hover:underline leading-[20px]">
              <a href="#databreach">16. Data breach/violation</a>
            </li>
            <li className="text-[#6F7174] hover:text-black hover:underline leading-[20px]">
              <a href="#disputes">17. Dispute resolution</a>
            </li>
            <li className="text-[#6F7174] hover:text-black hover:underline leading-[20px]">
              <a href="#contactus">18. Contact us</a>
            </li>
            <li className="text-[#6F7174] hover:text-black hover:underline leading-[20px]">
              <a href="#amendment">19. Amendment</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;

