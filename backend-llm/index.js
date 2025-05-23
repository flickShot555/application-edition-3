// index.js
require('dotenv').config();
const express = require('express');
const { GoogleGenAI } = require('@google/genai');

const app = express();
app.use(express.json());

// Initialize the Gemini client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

// Dummy variables (replace with real inputs later)
const userScenario = "deliberate withholding or non-payment of refunds";
//line number 4250 in pak_laws_cleaned.json
const relevantDocument = `THE ESTABLISHMENT OF THE OFFICE OF FEDERAL TAX \nOMBUDSMAN ORDINANCE, 2000 \n \n \n \nCONTENTS 
\n1. Short title, extent and commencement \n2. Definitions \n3. Appointment of Federal Tax Ombudsman \n4. Tenure of the 
Federal Tax Ombudsman \n5. Federal Tax Ombudsman not to hold any other office of profit, etc \n6. Terms and conditions 
of service and remuneration of Federal Tax Ombudsman \n7. Acting Federal Tax Ombudsman \n8. Terms and conditions of 
service of staff \n9. Jurisdiction, functions and powers of the Federal Tax Ombudsman \n10. Procedure and evidence 
\n11. Recommendations for implementation \n12. Defiance of Recommendations \n13. Reference by Federal Tax Ombudsman 
\n14. Powers of the Federal Tax Ombudsman \n15. Power to enter and search any premises \n16. Power to punish for contempt 
\n17. Inspection Team \n18. Standing or advisory committees \n19. Delegation of powers \n20. Appointment of advisers and 
other staff \n \n \n \n \n 21. Authorisation of provincial functionaries \n22. Award of costs and compensation and refunds 
of amounts \n23. Assistance and advice to Federal Tax Ombudsman \n24. Conduct of business \n25. Requirement of affidavits 
\n26. Reward and remuneration \n27. Federal Tax Ombudsman and Staff Members to be public servants \n28. Annual and other 
reports \n29. Bar of jurisdiction \n30. Immunity \n31. Reference by President \n32. Representation to President \n33. 
Informal resolution of disputes \n34. Service of process \n35. Expenditure to be charged on Federal Consolidated Fund 
\n36. Power to make rules \n37. Ordinance to have overriding effect \n38. Removal of difficulties \n \n \n \n 
THE ESTABLISHMENT OF THE OFFICE OF FEDERAL TAX \nOMBUDSMAN ORDINANCE, 2000 \nORDINANCE No. XXXV of 2000 
\n[11th August, 2000] \nAn Ordinance to provide for the appointment of the Federal Tax Ombudsman \n WHEREAS, it is 
expedient to provide for the appointment of the Federal Tax Ombudsman to \ndiagnose, investigate, redress and rectify 
any injustice done to a person through maladministration by \nfunctionaries administering tax laws; \n AND WHEREAS the 
National Assembly and the Senate stand suspended in pursuance of the \nProclamation of Emergency of the fourteenth day 
of October, 1999, and the Provisional Constitution \nOrder No. 1 of 1999; \n NOW, THEREFORE, in pursuance of the aforesaid 
Proclamation of the fourteenth day of \nOctober, 1999, and Provisional Constitution Order No. 1 of 1999, as well as Order 
No. 9 of 1999, and \nin exercise of all powers enabling him in that beha lf, the President of the Islamic Republic of 
Pakistan \nis pleased to make and promulgate the following Ordinance: — \n 1. Short title, extent and commencement :___ (1)
 This Ordinance may be called the \nEstablishment of the Office of Federal Tax Ombudsman Ordinan ce, 2000. \n 
 (2) It extends to the whole of Pakistan. \n (3) It shall come into force at once. \n 2. Definitions :___ In this 
 Ordinance, unless there is anything repugnant in the subject or \ncontext, — \n (1)”Federal Tax Ombudsman\" means the 
 Federal Tax Ombudsman appointed under section -3; \n (2)”Inspection Team\" means the Inspection Team constituted under 
 section 17; \n (3)”maladministration\" includes, — \n(i) a decision, process, recommendation, act of omission o r 
 commission \nwhich — \n(a) is contrary to law, rules or regulations or is a departure from established practice \nor 
 procedure, unless it is bona fide and for valid reasons; \n(b) is perverse, arbitrary or unreasonable, unjust, biased, 
 oppressive, or \ndiscriminatory; \n(c) is based on irrelevant grounds; or \n \n (d) involves the exercise of powers, 
 or the failure or refusal to do so, for corrupt or \nimproper motives, such as bribery, job bery, favouritism, nepotism 
 and \nadministrative excesses; \n(ii) neglect, inattention, delay, incompetence, inefficiency and ineptitude, in \nthe 
 administration or discharge of duties and responsibilities; \n(iii) repeated notices, unnecessary attendance or pr olonged
  hearings while \ndeciding cases involving — \n(a) assessment of income or wealth; \n(b) determination of liability of 
  tax or duty; \n(c) classification or valuation of goods; \n(d) settlement of claims of refund, rebate or duty drawback; 
  or \n(e) deter mination of fiscal and tax concessions or exemptions. \n(iv) wilful errors in the determination of 
  refunds, rebates or duty drawbacks; \n(v) deliberate withholding or non -payment of refunds, rebates or duty \ndrawbacks 
  already determined by the competent auth ority; \n(vi) coercive methods of tax recovery in cases where default in 
  payment of \ntax or duty is not apparent from record; and \n(vii) avoidance of disciplinary action against an officer 
  or official whose \norder of assessment or valuation is held by a com petent appellate \nauthority to be vindictive, 
  capricious, biased or patently illegal. \n (4) “Office ” means the office of the Federal Tax Ombudsman. \n (5)
   “prescribed ” means prescribed by rules made under this Ordinance. \n (6) “Relevant Legislation” means — \n(i) 
   the Provisional Collection of Taxes Act 1931; (XVI of 1931) \n(ii) the Commercial Documents Evidence Act, 1939; 
   (XXX of 1939) \n(iii) the Central Excises Act, 1944; (I of 1944) \n(iv) the Wealth Tax Act, 1963; (XV of 1963) 
   \n(v) the Customs Act, 1969; ( IV of 1969) \n(vi) the Worker ’s Welfare Fund Ordinance, 1971; (XXXVI of 1971) \
   n(vii) the Prevention of Smuggling Act, 1977; (XII of 1977) \n \n (viii) the Income Tax Ordinance, 1979; (XXXI 
    of 1979) \n(ix) the Import of goods (Anti -dumping and Countervailing Duties) \nOrdinance, 1983; (III of 1983) \
    n(x) section 7 of the Finance Act, 1989; (V of 1989) \n(xi) the Sales Tax Act, 1990; (XII of 1991) \n(xii) secti
    on 12 of the Finance Act, 1991; \n(xiii) such other laws having nexus with taxation as the Federal Government \n
    may, by notification in the official Gazette, specify to be the Relevant \nLegislation for the purposes of this 
    Ordinance; and \n(xiv) the rules, regulations and notifications, made or issued thereun der. \n (7)”Revenue Divi
    sion\" means the administrative unit responsible for the conduct of business \nof the Federal Government in matt
    ers relating directly or indirectly with the collection of revenue from \nfederal taxes, levy of taxes, duties, 
    cesses or fees and declared as such by the Federal Government, and \nincludes all its subordinate departments, o
    ffices and agencies; \n (8)”Staff Member\" means any officer or employee of the Office appointed under section 8
     and \nincludes advisers, commissioners, consultants, experts, fellows, interns, liaison officers, bailiffs and 
     \nother staff appointed under section 20; \n (9)”Standing or Advisory Committee\" means a Standing or advisory 
     Committee established \nunder section 18; and \n (10) 'Tax Employee\" means an employee of the Revenue Division
     and includes an officer and \nany other functionary serving in, or any office subordinate to, the said Divisio
    n. \n 3. Appointment of Federal Tax Ombudsman :___ (1) There shall be a Federal Tax \nOmbudsman who shall be a
    ppointed by the President. \n (2) Before entering upon office, the Federal Tax Ombudsman shall make oath 
    before the \nPresident in the form set out in the Schedule to this Ordinance. \n (3) The Federal T ax Ombudsman 
    shall, in all matters, perform his functions ad exercise his \npowers fairly, honestly, diligently and independently 
    of the executive and all executive authorities \nthroughout Pakistan shall act in aid of the Federal Tax Ombudsman. 
    \n 4. Tenure o f the Federal Tax Ombudsman :___ (I) The Federal Tax Ombudsman shall hold \noffice for a period of 
    four years and shall not be eligible for any extension of tenure or reappointment \nas Federal Tax Ombudsman. . \n 
    (2) The Federal Tax Ombudsman may resign his offic e by writing under his hand addressed to \nthe President. \n \n 
    5. Federal Tax Ombudsman not to hold any other office of profit, etc :___ (1) The Federal \nTax Ombudsman shall not 
    — \n(a) hold any other office of profit in the service of Pakistan; or \n(b) hold any o ther position carrying the 
    right to remuneration for rendering of \nservices. \n (2) The Federal Tax Ombudsman shall not hold any office of 
    profit in the service of Pakistan \nbefore the expiration of two years after he has ceased to hold that office; nor 
    shall he be eligible during \nthe tenure of office and for a period of two years thereafter for election as a member 
    of Majlis -e-Shoora \n(Parli ament) or a Provincial Assembly or any local body or take part in any political activity. 
    \n 6. Terms and conditions of ser vice and remuneration of Federal Tax Ombudsman :___ (1) \nThe Federal Tax Ombudsman 
    shall be entitled to such salary, allowances and privileges and other \nterms and conditions of service as the 
    President may determine and these terms shall not be varied \nduring the term of office of a Federal Tax Ombudsman. \n 
    (2) The Federal Tax Ombudsman may be removed from office by the President on grounds of \nmisconduct or of being incapable 
    of properly performing the duties of his office for reasons of physical \nor mental inc apacity: \n Provided that the Federal 
    Tax Ombudsman may, if he sees fit and appropriate to refute any \ncharges, request an open public evidentiary hearing before 
    the Supreme Judicial Council and, if such \na hearing is not held within thirty days of the receip t of such request or not 
    concluded within ninety \ndays of its receipts, the Federal Tax Ombudsman well be absolved of any charge whatever. In such 
    \ncircumstances, the Federal Tax Ombudsman may choose to leave his office and shall be entitled to \nreceive full remuneration 
    and benefits for the rest of his term. \n (3) If the Federal Tax Ombudsman makes a request under the proviso to sub -section (2), 
    he \nshall not perform his functions under this Ordinance until the hearing before the Supreme Judicial \nCouncil has concluded. 
    \n (4) A Federal Tax Ombudsman removed from o ffice on the ground of misconduct shall not be \neligible to hold any office of profit 
    in the service of Pakistan or for election as a member of Majlise -\nShoora (Parliament) or a Provincial Assembly or any local body. 
    \n 7. Acting Federal Tax Ombudsman :___ At a ny time when the office of Federal Tax \nOmbudsman is vacant, or the Federal Tax Ombudsman 
    is absent or is unable to perform his functions \ndue to any cause, the President shall appoint an acting Federal Tax Ombudsman. \n 8. 
    Terms and conditions of service of staff :___ Subject to the provision of section 20, the \nStaff Members shall be entitled to such salary, 
    allowances and other terms and conditions of service \nas may be prescribed having regard to the salary, allowances and other terms and 
    conditions of servi ce \nthat may for the time being be admissible to other employees of the Federal government in the \ncorresponding 
    Basic Pay Scales. \n 9. Jurisdiction, functions and powers of the Federal Tax Ombudsman :___ (1) Subject to \nSub –section (2). the Federal 
    Tax Ombud sman may on a complaint by any aggrieved person, or on a \n \n reference by the President, the Senate or the National Assembly, 
    as the case may be, or on a motion of \nthe Supreme Court or a High Court made during the course of any proceedings before it or of his own 
    \nmotion, investigate any allegation of maladministration on the part of the Revenue Division or any \nTax Employee. \n (2) The Federal Tax 
    Ombudsman shall not have jurisdiction to investigate or inquire into \nmatters which — \n(a) are sub judice before a court of competent 
    jurisdiction or tribunal or board or \nauthority on the date of the receipt of a complaint, reference or motion by him; \nor \n(b) relate 
    to assessment of income or wealth, determination of liability of tax or \nduty, classification or valuation of goods, interpretation of 
    law, rules and \nregulations relating to such assessment, determination, classification or \nvaluation in respect of which legal remedies 
    of appeal, review or revision are \navailable under the Relevant Legislation. \n (3) Notwithstanding anything contained in sub -section 
    (1), the Federal Tax Ombudsman shall \nnot accept for investigation any complaint by or on behalf of a Tax Employee concerning matters \nrelating to the Revenue Division in respect of any personal grievance relating to his se rvice. \n (4) For carrying out the objectives of this Ordinance and, in particular for ascerta
    ining the \ncauses of corrupt practices and injustice, the Federal Tax Ombudsman may arrange for studies to be \nmade or research to be conducted and may recommend app ropriate steps for their eradication. \n (5) The Federal Tax Ombudsman may set up regional offices as, when and where required \n 10. Procedure and evidence :___(1) A complaint shall be made in writing on solemn \naffirmation or oath and shall be addressed to th e Federal Tax Ombudsman by the person aggrieved or, \nin the case of his death, by his legal representative and may be lodged in person at the office or handed \nover to the Federal Tax Ombudsman in person or sent by any other means of communication to the \nOffice. \n (2) The Federal Tax Ombudsman shall not entertain anonymous or pseudonymous complaints. \n (3) A complaint shall be made not later than six months from the day on which the person \naggrieved first had the notice of the matter alleged in the complaint, but the Federal Tax Ombudsman \nmay conduct any investigation pursuant to a complaint which is not within time if he considers that \nthere are special circumstances which he deems proper in he interest of justice to entertain the \ncomplaint. \n (4) When the Fe deral Tax Ombudsman proposes to conduct an investigation he shall issue to \nthe Secretary of the Revenue Division, and to the person who is alleged in the complaint to have taken \nor authorised the action complained of, a notice calling upon him to reply to the allegations contained \nin the complaint: \n Provided that the Federal Tax Ombudsman may proceed with the investigation if no response \nto the notice is received by him from the Secretary or other person within thirty days of the receipt of \n \n the notice or within such longer period as may be allowed by the Federal Tax Ombudsman, for \nsufficient cause to be recorded. \n (5) Every investigation shall be conducted in private, but the Federal Tax Ombudsman may \nadopt such procedure as he considers appropriate for su ch investigation and he may obtain information \nfrom such persons and in such manner and make such inquiries as he thinks fit. 
    \n (6) A person shall be entitled to appear in person or be represented before the Federal Tax \nOmbudsman. \n (7) The Federal Tax Omb udsman shall, in accordance with the rules made under this \nOrdinance, pay expenses and allowances to any persons who attends or furnishes information for the \npurposes of any investigation. \n (8) The conduct of an investigation shall not affect any action t aken by the Revenue Division, \nor any power or duty of the Revenue Division to take further action with respect of any matter subject \nto the investigation. \n (9) For the purposes of an investigation under this Ordinance, the Federal Tax Ombudsman \nmay requir e any Tax Employee to furnish any information or to produce any document which in the \nopinion of the Federal Tax Ombudsman is relevant and helpful in the conduct of the investigation, and \nthere shall be no obligation to maintain secrecy in respect of discl osure of any information or document \nfor the purposes of such investigation. \n (10) In any case where the Federal Tax Ombudsman decides not to conduct an investigation, \nhe shall send to the complainant a statement of his reasons for not conducting the inve stigation. \n (11) Save as provided in this Ordinance, the Federal Tax Ombudsman shall regulate the \nprocedure for the conduct of business or the exercise of powers under this Ordinance. \n 11. Recommendations for implementation :___ (1) If the Federal Tax Ombu dsman is of \nopinion that the matter considered amounts to maladministration, he shall communicate his finding \nwith a recommendation to the Revenue Division within a period of sixty days from the date of receipt \nof the complaint, reference or motion, as the case may be. \n (2) The Revenue Division shall, within such time as may be specified by the Federal Tax \nOmbudsman, inform him about the action taken on his recommendations or the reasons for not \ncomplying with the same. \n (3) In any case where the Federal T ax Ombudsman has considered a matter, or conducted an \ninvestigation, on a complaint or on a reference by the President, the Senate or the National Assembly 
    \nor on a motion by the Supreme Court or a High Court, the Federal Tax Ombudsman shall forward a \ncopy of the communication received by him from the Revenue Division in pursuance of sub -section \n(2) to the complainant or, as the case may be, the President, the Senate, the National Assembly, the \nSupreme Court or the High Court. \n (4) If, after conducting an investigation, it appears to the Federal Tax Ombudsman that an \ninjustice has been caused to the person aggrieved in consequence of maladministration and that the \n \n injustice has not been or will not be remedied, he may, if he thinks fit lay, a special report on the case \nbefore the President. \n (5) If the Revenue Division does not comply with the recommendations of the Federal Tax \nOmbudsman or does not give reasons to the satisfaction of the Federal Tax Ombudsman for non -\ncompliance, it shall be treated as ”Defia nce of Recommendations\" and shall be dealt with as hereinafter \nprovided. \n 12. Defiance of Recommendations :___ (1) If there is a ”Defiance of Recommendations\" by a \nTax Employee with regard to the implementation of a recommendation given by the Federal Tax \nOmbudsman, the Federal Tax Ombudsman may refer the matter to the President who may, in his \ndiscretion, direct the Revenue Division to implement the recommendation and inform the Federal Tax \nOmbudsman accordingly. \n (2) It shall be the duty of the Revenue Division and the Tax Employee to implement the finding \nmade under sections 11 and 12 within thirty days of such decision being communicated to the \nconcerned Tax Employee. In each instance of ”Defiance of Recommendatio ns\", a report by the Federal \nTax Ombudsman shall become a part of the personal file or character roll of the Tax Employee \nprimarily responsible for the defence, and such Tax Employee shall be liable for contempt as provided \nhereafter in section 16: \n Provid ed that the Tax Employee concerned had been granted an opportunity to be heard in the \nmatter. \n 13. Reference by Federal Tax Ombudsman . Where, during or after an investigation, the \nFederal Tax Ombudsman is satisfied 
    that any person is guilty of any allegati ons as referred to in \nsubsection (1) of section 9, the Federal Tax Ombudsman may refer the case to the Revenue Division \nfor appropriate corrective or disciplinary action, or both corrective and disciplinary action, and the \nRevenue Division shall inform the Federal Tax Ombudsman within thirty days of the receipt of \nreference of the action taken. If no information is received within this period, the Federal Tax \nOmbudsman may bring the matter to the notice of the President for such action as he may deem fit, \nbesides action for contempt under section 16 hereof. \n 14. Powers of the Federal Tax Ombudsman :___ (1) The Federal Tax Ombudsman shall, for \nthe purposes of this Ordinance, have the same powers as are vested in a civil court under the Code of \nCivil Procedure, 1908 (Act V of 1908) in respect of the following matters, namely: — \n(a) summoning and enforcing the attendance of any person and examining him on \noath; \n(b) compelling the production of documents; \n(c) receiving evidence on affidavits; and \n(d) issuing commission for the examination of witnesses. \n (2) The Federal Tax Ombudsman shall have the power to require any person to furnish \ninformation on such points or matters as, in the opinion of the Federal Tax Ombudsman, may be useful \nfor, or relevant to, the subject matter of any investigation. \n \n (3) The powers referred to in sub -section (1) may be exercised by the Federal Tax Ombudsman \nor any person 
    authorised in writing by the Federal Tax Ombudsman in this behalf while carrying out \nan investigation under th e provisions of this Ordinance. \n (4) Where the Federal Tax Ombudsman finds the complaint referred to in sub -section (1) of \nsection 9 to be false, frivolous or vexatious, he may award reasonable compensation to the Revenue \nDivision or Tax Employee against whom the complaint was made. The amount of such compensation \nshall be recoverable from the complainant as an arrear of land revenue: \n Provided that the award of compensation under this subsection shall not debar the aggrieved \nperson from seeking civil and criminal remedy. \n (5) If the Revenue Division or Tax Employee fails to comply with the order of the Federal Tax \nOmbudsman, he may, in addition to taking other actions under this Ordinance, refer the matter to the \nappropriate authority for taking disciplina ry action against the person who disregarded the order of the \nFederal Tax Ombudsman. \n (6) If the Federal Tax Ombudsman has reason to believe that any Tax Employee has acted in a \nmanner warranting criminal or disciplinary proceedings against him, he may re fer the matter to the \nappropriate authority for necessary action to be taken within the time specified by the Federal Tax \nOmbudsman. \n (7) The Staff Members and nominees of the Office may be commissioned by the Federal Tax \nOmbudsman to administer oaths for the purposes of this Ordinance and to attest various affidavits, \naffirmations or declarations which shall be admitted in evidence in all proceedings under this \nOrdinance without proof of the signature or seal or official character of such person. \n (8) Th e Federal Tax Ombudsman shall have the power to review any finding communicated or \nrecommendation made or any order passed by him. \n 15. Power to enter and search any premises :___ (1) The Federal Tax Ombudsman, or any \nStaff Member authorised in this behalf, may, for the purpose of making any investigation, enter any \npremises where the Federal Tax Ombudsman or, as the case may be, such member has reason to believe \nthat any article, 
    book of accounts, or any other document relating to the subject matter of inve stigation \nmay be found, and may — \n(a) search such premises and inspect any article, book of accounts or other \ndocument; \n(b) take extracts or copies of such books of accounts and documents; \n(c) impound or seal such articles, books of accounts or documents; and \n(d) make any inventory of such articles, books of accounts and other documents \nfound in such premises. \n (2) All searches made under sub -section (1) shall be carried out, mutatis mutandis, in \naccordance with the provisions of the Code of Criminal Procedure, 1898. (Act V of 1898) \n \n 16. Power to punish for contempt :___ (1) The Federal Tax Ombudsman shall have the same \npowers, mutatis mutandis , as the Supreme Court has to punish any person for its contempt who — \n(a) abuses, interferes with, impedes, imperials, or obstructs the process of the \nFederal Tax Ombudsman in any way or disobeys any order of the Federal Tax \nOmbudsman; \n(b) scandalises the Federal Tax Ombudsman or otherwise does anything which \ntends to bring the Federal Tax Ombudsman, Staff Members, nominees of the \nOffice, or any person authorised by the Federal Tax Ombudsman in relation to \nhis office into hatred, ridicule or contempt; \n(c) does anything which tends to prejudice the determination of a matter pending \nbefore the Federal Tax Ombudsman; or \n(d) does any other thing which, by any other law, constitutes contempt of court: \n Provided that fair comments made in good faith and i n public interest on the working of the \nFederal Tax Ombudsman or any Staff Member, or on the final report of the Federal Tax Ombudsman \nafter the completion of the investigation shall not constitute contempt of the Federal Tax Ombudsman \nor his Office. \n (2) Any person sentenced under sub -section (1) may, notwithstanding anything herein \ncontained, within thirty days of the passing of the order, appeal to the Supreme Court. \n (3) Nothing contained in this section takes away the power of the President to grant p ardon, \nreprieve, or respite and to remit, suspend or commute 
    any sentence passed by any court, tribunal or \nother, authority, under this section. \n 17. Inspection Team :___ (1) The Federal Tax Ombudsman may constitute an Inspection Team \nfor the performance of any of the functions of the Federal Tax Ombudsman. \n (2) The Inspection Team shall consist of one or more Staff Members and shall be assisted by \nsuch other person or persons, is the Federal Tax Om budsman may consider necessary. \n (3) The Inspection Team sh all exercise such of the powers of the Federal Tax Ombudsman as \nhe may specify by order in writing and every report of the Inspection Team shall first be submitted to \nthe Federal Tax Ombudsman with its recommendations for appropriate action. \n 18. Standing or advisory committees :___ The Federal Tax Ombudsman may, whenever he \nthinks fit, establish standing or advisory committees at specified places with specified jurisdiction for \nperforming such functions of the Federal Tax Ombudsman as are assigned to them f rom time to time \nand every report of such committee shall first be submitted to the Federal Tax Ombudsman with its \nrecommendations for appropriate action. \n 19. Delegation of powers :___ The Federal Tax Ombudsman may, by order in writing, delegate \nsuch of his powers as may be specified in the order to any Staff Member or to a Standing or Advisory \nCommittee, to be exercised subject to such conditions as may be specified, and every report of such \n \n member or committee shall first be submitted to the 
    Federal Tax Ombudsman with his or its \nrecommendations for appropriate action. \n 20. Appointm ent of advisers and other staff:___ (1) The Federal Tax Ombudsman may \nappoint advisers, commissioners, consultants, experts, fellows, interns, liaison officers, bailiffs, and \nother staff, with or without remuneration, to assist him in the discharge of his duties under this \nOrdinance. \n (2) The Federal Tax Ombudsman may, in his discretion, fix an honorarium or remuneration of \nadvisers, commissioners, consultants, experts, fellows, interns, liaison officers, bailiffs, and other staff, \nengaged by him from time to time for the services rendered. \n 21. Authorisation of provincial functionaries :___ The Federal Tax Ombudsman may, if he \nconsiders it expedient, authorise, with the consent o f a Provincial Government any agency, public \nservant or other functionary working under the administrative control of the Provincial Government to \nundertake the functions of the Federal Tax Ombudsman under sub -section (1) or sub -section (2) of \nsection 14 i n respect of any matter falling within the jurisdiction of the Federal Tax Ombudsman; and \nit shall be the duty of the agency, public servant or other functionary so authorised to undertake such \nfunctions to such extent and subject to such conditions as the Federal Tax Ombudsman may specify. \n 22. Award of costs and compensation and refunds of amounts :___ (1)The Federal Tax \nOmbudsman —(1) may, where he deems necessary, call upon a Tax Employee or the Revenue Division \nto show cause why compensation be not award ed to an aggrieved party for any loss or damage suffered \nby him on account of any maladministration committed by such Tax Employee or Revenue Division, \nand after considering the explanation, and hearing such Tax Employee or Revenue Division, award \nreasonab le costs or compensation and the same shall be recoverable as arrears of land revenue from \nthe Tax Employee or Revenue Division. \n (2) In cases involving payment of illegal gratification to any Tax Employee, or to any other \nperson on his behalf, or misappro priation, 
    criminal breach of trust or cheating, the Federal Tax \nOmbudsman may order the payment thereof for credit to the government or pass such other order as \nhe may deem fit. \n (3) An order made under sub -section \n (2) against any person shall not absolv e such person of any liability under any other law. \n 23. Assistance and advice to Federal Tax Ombudsman :___ (1) The Federal Tax Ombudsman \nmay seek the assistance of any person, officer or authority for the performance of his functions under \nthis Ordinance. \n (2) All Staff Members and any other person or authority whose assistance has been sought by \nthe Federal Tax Ombudsman in the, performance of his functions shall render such assistance to the \nextent it is within their power or capacity. \n (3) No statement made by a person or authority in the course of giving evidence before the \nFederal Tax Ombudsman or any Staff Member shall subject him to, or be used against him in any civil \nor criminal proceedings except for prosecution of such person for giving false ev idence. \n \n 24. Conduct of business :___ (1) The Federal Tax Ombudsman shall be the chief executive of \nthe Office. \n (2) The Federal Tax Ombudsman shall be the Principal Accounting Officer of the Office in \nrespect of the expenditure incurred against budget grant or grants controlled by the Federal Tax \nOmbudsman and shall, for this purpose, exercise all the financial and administrative powers delegated \nto a ministry or division. \n 25. Requirement of affidavits :___(1) The Federal Tax Ombudsman may require any \ncomplainant or any party connected or concerned with a complaint, or with any inquiry or reference, \nto subm it affidavit attested or notaris ed before any competent authority in that behalf within the time \nprescribed by the Federal Tax Ombudsman or any Staff Member. \n (2) The Federal Tax Ombudsman may take evidence without technicalities and may also \nrequire complainants or witnesses to take lie detection tests to examine their veracity and credibility \nand draw such inferences that are reasonable in all circum stances of the case, especially 
    when a person \nrefuses, without reasonable justification, to submit to such tests. \n 26. Reward and remuneration :___(1) The Federal Tax Ombudsman may, in his discretion, fix \nthe honorarium or remuneration of advisers, consultants, and experts engaged by him from time to \ntime for services rendered. \n (2) The Federal Tax Ombudsman may, in his discretion, fix a reward or r emuneration to be \npaid to any person for exceptional services rendered or valuable assistance given to the Federal Tax \nOmbudsman in carrying out his functions: \n Provided that the Federal Tax Ombudsman shall withhold the identity of the person, if so \nreque sted by the person concerned, and take steps to provide due protection under the law to such \nperson against harassment, victimisation, retribution, reprisals or retaliation. \n 27. Federal Tax Ombudsman and Staff Members to be public servants :___ The Federal Tax \nOmbudsman and Staff Members shall be deemed to be public servants within the meaning of section \n21 of the Pakistan Penal Code. (Act XLV of 1860) \n 28. Annual and other reports :___ (1) Within three months of the conclusion of the calendar \nyear to which the report pertains, the Federal Tax Ombudsman shall submit an Annual Report to the \nPresident. \n (2) The Federal Tax Ombudsman may, from time to time, lay before the President such other \nreports relating to his functions as he may think proper or as may be desired by the President. . \n (3) Simultaneously, the Federal Tax Ombudsman 
    shall release such reports for publication and \ncopies thereof shall be provided to the public at reasonable cost. \n (4) The Federal Tax Ombudsman may also, from time to time, make public any of his studies, \nresearch, conclusions, recommendations, ideas or suggestions in respect of any matters being dealt \nwith by the Office. \n \n (5) The report and other documents mentioned in this section shall be placed before the Senate \nor the Natio nal Assembly, as the case may be. \n 29. Bar of jurisdiction :___ No court or other authority shall have jurisdiction to — \n(a) question the validity of any action taken, or intended to be taken, or order made, \nor anything done or purporting to have been taken, made or done under this \nOrdinance; or \n(b) grant an injunction or stay or to make any interim order in relation to any \nproceedings before, or anything done or intended to be done or purporting to \nhave been done by, or under the orders or at the instance of the Federal Tax \nOmbudsman. \n 30. Immunity :___ No suit, prosecution or other legal proceeding shall lie against the Federa l \nTax Ombudsman, Staff Members, Inspection Team, members of a Standing or Advisory Committee, \nnominees of the Office, or any person authorised by the Federal Tax Ombudsman for anything which \nis in good faith done or intended to be done under this Ordinance . \n 31. Reference by President :___ (1)The President may refer any matter, report or complaint for \ninvestigation and independent recommendation by the Federal Tax Ombudsman. \n (2) The Federal Tax Ombudsman shall promptly investigate any such matter, report o r \ncomplaint and submit his finding within a reasonable time. \n 32. Representation to President :___ The Revenue Division or any person aggrieved by a \nrecommendation of the Federal Tax O
    mbudsman may, within thirty days of the recommendation, make \na representa tion to the President who may pass such or
    der thereon as he may deem fit. \n 33. Informal resolution of disputes :___ (1) Notwithstanding anything contained in 
    this \nOrdinance, the Federal Tax Ombudsman and authorised Staff Members shall have the authority to \ninformally conc
    iliate, amicably resolve, stipulate, settle or ameliorate any grievance without written \nmemorandum and without the n
    ecessity of docketing any complaint or issuing any official notice. \n (2) The Federal Tax Ombudsman may appoint for p
    urposes of liaison counselors, whether \nhonorary or otherwise, at local levels on such terms and conditions, as the F
    ederal Tax Ombudsman \nmay deem proper. \n 34. Service of process :___ (1) For the purposes of this Ordinance, a writt
    en process or \ncommunication from th e Office shall be deemed to have been duly served upon a respondent of any \noth
    er person by, inter alia , any one or more of the following methods, namely: — \n(a) by service in person through any 
    Staff Member or by any special process -server \nappointed in the name of the Federal Tax Ombudsman by any authorised 
    Staff \nMember, or any other person authorised in this behalf; \n(b) by depositing in any mail box or posting in any P
    ost Office a postage -prepaid \ncopy of the process, or any other document under certificat e of posting or by \nregis
    tered post acknowledgement due to the last known address of the \n \n respondent or person concerned in the record of 
    the office, in which case service \nshall be deemed to have been effected ten days after the aforesaid mailing; \n(c) 
    by a police officer or any Staff Member or nominee of the Office leaving the \nprocess or document at the last known a
    ddress, abode, or place of business of \nthe respondent or person concerned and, if no one is available at the \nafore
    mentioned address, premises or place, by affixing a copy of the process or \nother document to the main entrance of su
    ch address; and \n(d) by publishing the process or document through any newspaper and sending a \ncopy thereof to the 
    respondent or the person concerned through ordinary ma il, \nin which case service shall be deemed to have been effect
    ed on the day of the \npublication of the newspaper. \n (2) In all matters involving service the burden of proof shall
     be upon a respondent to credibly \ndemonstrate by assigning sufficient cause that he, in fact, had absolutely no know
    ledge of the process, \nand that he actually acted in good faith. \n (3) Whenever a document or process from the Offic
    e is mailed, the envelope or the package \nshall clearly bear the legend that it is from the Office. \n 35. Ex penditu
    re to be charged on Federal Consolidated Fund :___ The remuneration payable \nto the Federal Tax Ombudsman and the adm
    inistrative expenses of the office, including the \nremuneration payable to eligible Staff Members, nominees and grant
    ees, shall be an expenditure \ncharged upon the Federal' Consolidated Fund. \n 36. Power to make rules :___ The Federa
    l Tax Ombudsman may, with the approval of the \nPresident, make rules for carrying out the purposes of this Ordinance.
     \n 37. Ordinance to have overriding effect :___ The provisions of this Ordinance shall have effect \nnotwithstanding 
    anything contrary contained in any other law for the time being in force, including the \nEstablishment of the Office 
    of Wafaqi Mohtasib (Ombudsman) Order, 1983 (President's Order). (I of \n1983) \n 38. Removal of difficulties :___ 
    If any difficulty arises in giving effect to any provision of this \nOrdinance, the President may make such order, not 
    inconsistent with the provisions of this Ordinance, \nas may appear to him to be necessary for the p urpose of removing 
    such difficulty. \nTHE SCHEDULE \n \n[See section 3(2)] \n I, .................................... do solemnly swear 
    that I will bear true faith and allegiance to Pakistan; \n That as Federal Tax Ombudsman, I will discharge my duties 
    and perform my functions \nhonestly, to the best of my ability, faithfully in accordance with the laws of the Islamic Re
    public of \nPakistan, and without fear or favour, affection or ill -will; \n The I will not allow my personal interest to 
    influence my official conduct or my official \ndecisions; \n \n That I shall do my best to promote the best interest of 
    Pakistan; \n And that I will not directly or indirectly communicate, or reveal to any person any matter which \nshall be 
    brought under my consideration, or shall become known to me, as Federal Tax Ombudsman, \nexcept as may be required for 
    the due discharge of my duties as Federal Tax Ombudsman. \n May Allah Almighty help and guide me (Ameen).`;

async function callGemini(scenario, doc) {
  // Combine inputs into a single prompt
  const prompt = `
    Scenario:
    ${scenario}

    Context Document:
    ${doc}

    Question: Based on the above scenario, and the attached document, i want you to give me a brief analysis of my scenario against the document.
    and i want you to behave like my lawyer, not like an AI chatbot. keep your answers short, and do not include any disclaimers or unnecessary information.
    also, use less estarisks as possible as it shows that the response is generated by an AI.
    `;


  try {
    // Send to Gemini
    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL_ID,
      contents: prompt
    });

    let raw = response.text;
    let clean = raw.split('**Disclaimer**')[0].trim();
    console.log("Dear User,\n", clean);
  } catch (err) {
    console.error("Error calling Gemini:", err);
  }
}

// For now, just call on startup and exit
callGemini(userScenario, relevantDocument)
  .then(() => process.exit())
  .catch(() => process.exit(1));

// Later, you can expose an HTTP endpoint:
// app.post('/generate', async (req, res) => { … });
