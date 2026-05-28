import { useState } from 'react';

// All reviews sourced from Google Business Profile screenshots.
// location: 'de' = Delaware / Eastern Shore listing | 'md' = Maryland listing
// type: 'board' = named board member or officer | 'owner' = property/rental owner | 'homeowner' = resident/community member

const GOOGLE_REVIEWS = [

  // ── BOARD MEMBERS & OFFICERS ─────────────────────────────────────

  { id: 'g001', name: 'Mary Neimeyer',   initials: 'MN', rating: 5, date: 'Mar 2024',
    quote: 'Tammy Alarie is very organized and a responsive and hardworking property manager for our small community.',
    type: 'board', location: 'de', community: 'Shoreview' },

  { id: 'g002', name: 'David Seamen',    initials: 'DS', rating: 5, date: '21 days ago',
    quote: 'Crystal Marine is by far the very best property Management Representative any organization could ever have. Crystal has demonstrated outstanding managerial ability in maintaining the Homestead HOA\'s diversified operations. She has displayed exceptional professional ability, initiative, and meticulous attention to detail in managing our HOA. She has demonstrated on all occasions a thorough knowledge of her work, exceptional ability and resoluteness of purpose. Her complete understanding of HOA rules, long hours of work are an inspiration to those with whom she serves. Her superb planning ability, contributed significantly to the success of our HOA. We thank her for her selfless attitude and willingness to expend every effort to achieve superior results. Crystal Marine is the best!',
    type: 'board', location: 'md', community: 'Homestead HOA Board' },

  { id: 'g003', name: 'Wayne Vosik',     initials: 'WV', rating: 5, date: '14 days ago',
    quote: 'Crystal at Tidewater-cleaned up our community after a bad situation with another management company. She handles problems and is always there for us. She is amazing. Mary Vosik (treasurer at shoreview woods)',
    type: 'board', location: 'md', community: 'Shoreview Woods' },

  { id: 'g004', name: 'Walt Taylor',     initials: 'WT', rating: 5, date: '1 year ago',
    quote: 'I must say as a small Community, we have experienced great and timely service from Tidewater. We\'ve worked with Mr. Christopher Ziesat who has always quickly responded to our concerns even if it was for guidance. As President of our HOA, I\'m very pleased with being able to call upon Christopher Ziesat who will always respond in a professional and timely manner.',
    type: 'board', location: 'md', community: 'HOA President' },

  { id: 'g005', name: 'Steve Turner',    initials: 'ST', rating: 5, date: '1 year ago',
    quote: 'As a new treasurer to our HOA, Christopher Ziesat and the resources available at Tidewater have been an invaluable asset. Requests for help are quickly answered, information provided in a timely manner, and suggestions to make my job easier are offered without prompting. The reports provided to our Board and community keep us well informed and on a solid basis to understand our financial status.',
    type: 'board', location: 'md', community: 'HOA Treasurer' },

  // ── PROPERTY OWNERS ──────────────────────────────────────────────

  { id: 'g006', name: 'Stephanie Nicolaides', initials: 'SN', rating: 5, date: '5 days ago',
    quote: 'I own a property in a complex that Tidewater manages. They are always very helpful and answer questions quickly. Needed to pick up some guest parking passes and Patricia had them all ready for me so I could get back to my vacation.',
    type: 'owner', location: 'md', community: '' },

  { id: 'g006b', name: 'Chad Brigance',  initials: 'CB', rating: 5, date: '27 weeks ago',
    quote: 'Tidewater managed my rental property for just over 12 years. I found them to be a great team that worked diligently, professionally, and faithfully communicated great over the years. Their remote and online services were great for me as someone living abroad and they were perfectly capable of handling everything I needed. From handling basic matters to problematic tenants, they were more than capable. Finally, as the time came to sell my property, Cody Bishop provided an excellent service that gave me exactly the kind of service and experience I needed to get across the finish line. He led me through the whole process, patiently answered questions, and was there to support all the way through to closing and wrapping it all up. Thank you Cody and the whole team!',
    type: 'owner', location: 'md', community: '' },

  { id: 'g007', name: 'Robert Green',    initials: 'RG', rating: 5, date: '33 weeks ago',
    quote: 'I own a portfolio of rental properties in MD and Tidewater has been the manager for a few years. They do a great job. If I have an issue with something, they address it. We have never had a disagreement, and I am not always the easiest person to please. I would recommend them for property management services.',
    type: 'owner', location: 'md', community: '' },

  { id: 'g008', name: 'JoAnn Young',     initials: 'JY', rating: 5, date: '1 year ago',
    quote: 'Just recently became a property owner which Tidewater manages. Had questions about the portals and Kristin Whitcomb was very, very helpful in getting me set up. I really appreciate her time and attentiveness in answering my questions.',
    type: 'owner', location: 'md', community: '' },

  // ── HOMEOWNERS & RESIDENTS – DELAWARE / EASTERN SHORE ────────────

  { id: 'g009', name: 'Jeffrey Treadwell', initials: 'JT', rating: 5, date: '12 days ago',
    quote: 'I am a new first time homeowner in Kent County Delaware, and I was a bit worried about dealing with an HOA. But I must say that after several interactions with the Tidewater Property Management team of Tammie Alarie, Patricia Shaffer, and others, I am reminded that they are all excellent examples of kind, thoughtful, pleasant, caring, professionals who are effective in their service to this community that is now my retirement home. I truly appreciate their diligence and commitment to a job well done. Thank you.',
    type: 'homeowner', location: 'de', community: 'Kent County, DE' },

  { id: 'g010', name: 'Cancerian Libra Moon', initials: 'KC', rating: 5, date: '1 year ago',
    quote: 'This review is all for Lisa Walls, who is our main point of contact for any issue we may have here at Paynter\'s Mill (Milton, DE). Short review: Lisa is amazing! Long review: From day 1, Lisa has been the all-knowing source of info helping me find my mailbox #, learning about HOA payment schedules, figuring out the recycling, and every other basic perk, number, and procedure for living in this community. Without Lisa, I would still be stumbling around trying to figure things out. I have no comments about Tidewater as a company. My only contact is Lisa, and thank the heavens we have her. -Kristina Cunillera',
    type: 'homeowner', location: 'de', community: "Paynter's Mill" },

  { id: 'g011', name: 'Nancy Freeman',   initials: 'NF', rating: 5, date: '2 years ago',
    quote: 'I am recently new to this property and was greeted in the Manor House by Lisa Walls, admin for Paynters Mill complex, who gave me a thorough briefing of all the amenities, regulations, meetings and contacts for the property. I live in the condos & when the condo property manager could not be reached, Lisa handled my questions & set me up for a maintenance request after a storm. She went above & beyond what she is required to do and was willing to help. Very thankful to have a contact who is readily available, informative & proactive.',
    type: 'homeowner', location: 'de', community: "Paynter's Mill" },

  { id: 'g012', name: 'Alice Taylor',    initials: 'AT', rating: 5, date: '10 months ago',
    quote: 'Managing a community as complex as ours takes an incredible attention to details, the patience of a saint, and a juggling skill worthy of Cirque du Soleil. Lisa Walls has all of that and more. She is extremely knowledgeable of the requirements of the community, adept at working with service providers, and goes above and beyond her job all of the time. Lisa is not only an asset to our community, she is a significant asset to Tidewater Property Management.',
    type: 'homeowner', location: 'de', community: "Paynter's Mill" },

  { id: 'g013', name: 'Detrick Morrell', initials: 'DM', rating: 5, date: '9 months ago',
    quote: 'Lisa Walls is absolutely awesome! Over the past several weeks I\'ve needed assistance with irrigation and lawn maintenance over on the MPC side of PM - she can really get things done. Lisa is always upbeat, positive and willing to help while handling things in a professional manner - she is an asset to our Paynters Mill community.',
    type: 'homeowner', location: 'de', community: "Paynter's Mill" },

  { id: 'g014', name: 'Jody White',      initials: 'JW', rating: 5, date: '1 year ago',
    quote: "Lisa Walls has done a fabulous job as an Administrative Specialist within our community of Paynter's Mill! She is always ready to assist us, as needed, with any task at hand when organizing Social Committee events. Her friendly demeanor and attention to detail are evident. Great job, Lisa! Jody White",
    type: 'homeowner', location: 'de', community: "Paynter's Mill" },

  { id: 'g015', name: 'P McMaster',      initials: 'PM', rating: 5, date: '1 year ago',
    quote: 'I would like to commend Lisa Walls for her outstanding and compassionate work. She always responses to my inquiries quickly and even comes to my house to review the situation and resolve it quickly. She is a great role model for other employees. I thoroughly love having her as our representative. Thank you. Paula McMaster',
    type: 'homeowner', location: 'de', community: '' },

  { id: 'g016', name: 'Barry Kessler',   initials: 'BK', rating: 5, date: '11 months ago',
    quote: "Lisa Walls has been doing a great job on behalf of Tidewater Property Management. She's quick to reply and often has thorough and helpful suggestions to remedy anything that comes up. I am very pleased to be working with her.",
    type: 'homeowner', location: 'de', community: '' },

  { id: 'g017', name: 'Todd Greco',      initials: 'TG', rating: 5, date: '9 months ago',
    quote: "Although I've only lived in the community about a year, I've come to realize that Lisa Walls has the answers to all my questions. Whenever I have a question or concern I go to Lisa Walls first and she goes out of her way to explain or help me with the situation. Lisa truly is committed to improving our community and our experiences within it.",
    type: 'homeowner', location: 'de', community: '' },

  { id: 'g018', name: 'Cindy Kruglak',   initials: 'CK', rating: 5, date: '11 months ago',
    quote: 'Lisa Walls does an amazing job for our community. I have had many interactions with Lisa, and every time she responds quickly and does whatever is needed to respond to the issue. Our community is fortunate to have Lisa as the representative for our property management company.',
    type: 'homeowner', location: 'de', community: '' },

  { id: 'g019', name: 'Sam Shelton',     initials: 'SS', rating: 5, date: '11 months ago',
    quote: "It's great having Lisa Walls in our community at Paynter's Mill. She's always helping out and going the extra mile!",
    type: 'homeowner', location: 'de', community: "Paynter's Mill" },

  { id: 'g020', name: 'Cupcake K',       initials: 'CK', rating: 5, date: '1 year ago',
    quote: 'I spoke to Lisa Walls. She was so informative and patient. She is truly an asset to your company. Thank you Lisa!',
    type: 'homeowner', location: 'de', community: '' },

  { id: 'g021', name: 'Samantha Murphy', initials: 'SM', rating: 5, date: '1 year ago',
    quote: 'Lisa is incredibly responsive and organized. It is a pleasure to work with her. As a contractor, communication is key. Lisa provides as much information as possible and is always available for questions and follow ups.',
    type: 'homeowner', location: 'de', community: '' },

  { id: 'g022', name: 'dietmar seiffert', initials: 'DS', rating: 5, date: '1 year ago',
    quote: 'The purpose of this review is to acknowledge Jordan Andrews for his great efforts and expertise to figure out our account issues between the recreational and homeowner part of the website. Jordan was highly responsive to emails with turnaround time in minutes rather than hours and days you sometimes encounter with other organizations. Jordan, thanks for the job well done.',
    type: 'homeowner', location: 'de', community: '' },

  { id: 'g023', name: 'Edward Batzel',   initials: 'EB', rating: 5, date: '1 year ago',
    quote: 'Just spoke with Jordon Andrews with an invoice problem. She was polite, responsive and resolved my issue without problem.',
    type: 'homeowner', location: 'de', community: '' },

  { id: 'g024', name: 'Marge Steele',    initials: 'MS', rating: 5, date: '1 year ago',
    quote: 'Jordan Andrew rocks! He was extremely helpful and responsive!',
    type: 'homeowner', location: 'de', community: '' },

  { id: 'g025', name: 'blake miller',    initials: 'BM', rating: 5, date: '1 year ago',
    quote: "Jordan is fantastic, and honestly the group in general immediately and positively addresses my issues. Very pleased to be living here and appreciative of Tidewater's management!",
    type: 'homeowner', location: 'de', community: '' },

  { id: 'g026', name: 'Rob',             initials: 'R',  rating: 5, date: '1 year ago',
    quote: "Jordan Andrew's was exceptional in assisting me with my acct and explained everything in detail.",
    type: 'homeowner', location: 'de', community: '' },

  { id: 'g027', name: 'Roderick Capili', initials: 'RC', rating: 5, date: '1 year ago',
    quote: 'Karen has been especially helpful with several of my concerns and requests for the HOA especially with regard to community rules and access support. She has even offered after-hours/weekend support if needed and have reached out to rental management companies to resolve our problems. Thank you Karen for the highly commendable support from management.',
    type: 'homeowner', location: 'de', community: '' },

  { id: 'g028', name: 'John Littleton',  initials: 'JL', rating: 5, date: '2 years ago',
    quote: "Karen is always willing to help with any issues or concerns. If she doesn't have the answer she will call you back with it. Thanks for all your support.",
    type: 'homeowner', location: 'de', community: '' },

  { id: 'g029', name: 'Amy Mac',         initials: 'AM', rating: 5, date: '1 year ago',
    quote: 'I had the pleasure of dealing with Karen Thompson and she went above and beyond to help me with something on the day of my closing when she was off work. Thank you!!',
    type: 'homeowner', location: 'de', community: '' },

  { id: 'g030', name: 'Larry Marhefka',  initials: 'LM', rating: 5, date: '1 year ago',
    quote: 'Excellent service staff, swift repairs. Tammy Alarie provides excellent service as a property manager.',
    type: 'homeowner', location: 'de', community: '' },

  { id: 'g031', name: 'John M. (jjmatt33)', initials: 'JM', rating: 5, date: '11 months ago',
    quote: 'Jordan Bennett was great. Super quick to handle my concerns.',
    type: 'homeowner', location: 'de', community: '' },

  // ── HOMEOWNERS & RESIDENTS – MARYLAND ────────────────────────────

  { id: 'g032', name: 'Mike Vitale',     initials: 'MV', rating: 5, date: '20 days ago',
    quote: 'The folks at Tidewater are extremely helpful. Responded quickly to several issue I recently had. In each case I was kept informed about steps being taken to resolve these issues. I appreciate the support.',
    type: 'homeowner', location: 'md', community: '' },

  { id: 'g033', name: 'Thomas Herrick',  initials: 'TH', rating: 5, date: '9 months ago',
    quote: "Lisa Walls is the best property management rep we've ever had. She does such a great job communicating with us in Paynter's Mill. Whenever something needs attention, she lets us know right away and keeps us posted as to the progress of the needed repairs. I've worked with lots of reps over the years, but no one has been better than Lisa!",
    type: 'homeowner', location: 'md', community: "Paynter's Mill" },

  { id: 'g034', name: 'Rose Giangiulio', initials: 'RG', rating: 5, date: '9 months ago',
    quote: 'Lisa Walls consistently responds with accurate, professional, and informative responses. She also responds immediately in many cases to the problem at hand. We are so fortunate to have Lisa in our community!',
    type: 'homeowner', location: 'md', community: '' },

  { id: 'g035', name: 'Kathleen Ford',   initials: 'KF', rating: 5, date: '11 months ago',
    quote: 'Lisa Walls continues to be an asset to our community. She is quick to respond and takes pride in overseeing our community and knowing the homeowners. Most recently, Lisa drove through the community following a severe thunderstorm to assess storm damage. She acted quickly to address the problem of a downed tree. Great job, Lisa, and keep up the outstanding job you are doing.',
    type: 'homeowner', location: 'md', community: '' },

  { id: 'g036', name: 'Celeste W',       initials: 'CW', rating: 5, date: '10 months ago',
    quote: 'I had the pleasure of speaking with Robyne Maggio to discuss our future residency in a community they manage. She was very helpful on the phone. I emailed my detailed questions and she promptly answered them. I look forward to a good relationship with Tidewater Management going forward once we move in.',
    type: 'homeowner', location: 'md', community: '' },

  { id: 'g037', name: 'Joe D',           initials: 'JD', rating: 5, date: '10 months ago',
    quote: 'Tidewater manages the condos where I live. I needed help last week and Robyne Maggio looked into the matter right away, contacted our board, and solved the problem. I was very happy with her service.',
    type: 'homeowner', location: 'md', community: '' },

  { id: 'g038', name: 'Danielle Miller', initials: 'DM', rating: 5, date: '11 months ago',
    quote: 'I recently worked with Bonnie Oistad to coordinate a clubhouse rental, and the experience was excellent. She was responsive, helpful, and made the process smooth from start to finish. I appreciated her prompt responses and clear communication about the process.',
    type: 'homeowner', location: 'md', community: '' },

  { id: 'g039', name: 'Ted Smith',       initials: 'TS', rating: 5, date: '9 months ago',
    quote: 'The folks over at Tidewater are very responsive and helpful. Shout out to Robyne for making the process of updating my account very easy.',
    type: 'homeowner', location: 'md', community: '' },

  { id: 'g040', name: 'Tatyana Khazanova', initials: 'TK', rating: 5, date: '10 months ago',
    quote: 'I requested a document by email. Robyne Maggio responded during the same day and provided the needed document to me. Thank you for your assistant and help.',
    type: 'homeowner', location: 'md', community: '' },

  { id: 'g041', name: 'Bong Soo Kim',    initials: 'BK', rating: 5, date: '11 months ago',
    quote: 'I always correspond with Robyne Maggio, and she has been not only helpful but also cordial every single time. She is also extremely responsive, thank you!',
    type: 'homeowner', location: 'md', community: '' },

  { id: 'g042', name: 'Renee Holmes',    initials: 'RH', rating: 5, date: '11 months ago',
    quote: '6/6/25 - As a new client; Ms. Jordan Bennett was very kind and helpful to assist with navigating the Tidewater Portal process. Thank you very much.',
    type: 'homeowner', location: 'md', community: '' },

  { id: 'g043', name: 'Tamara L. Baker', initials: 'TB', rating: 5, date: '9 months ago',
    quote: 'Robyne Maggio is my go-to person at Tidewater, as she promptly addresses concerns and actually gets back to you when she says she will.',
    type: 'homeowner', location: 'md', community: '' },

  { id: 'g044', name: 'Rachel Halo',     initials: 'RH', rating: 5, date: '10 months ago',
    quote: 'I contacted the management company last minute about a tree removal, and Kayla Mycka went above and beyond to make it happen quickly. She worked fast, coordinated with all the right people, and made the entire process smooth and efficient. Her communication was kind, clear, and professional from start to finish. I truly appreciate all of her hard work — highly recommend working with Kayla!',
    type: 'homeowner', location: 'md', community: '' },

  { id: 'g045', name: 'Frank Greenstein', initials: 'FG', rating: 5, date: '10 months ago',
    quote: 'Robyne Maggio made the process of getting my approvals so easy. Always responsive to my emails and Tidewater is lucky to have her as an asset.',
    type: 'homeowner', location: 'md', community: '' },

  { id: 'g046', name: 'Betsy Jones',     initials: 'BJ', rating: 5, date: '11 months ago',
    quote: 'My experience working with Robyne Maggio has been excellent. She is responsive, knowledgeable and has solved my questions quickly and thoroughly. Thank you!',
    type: 'homeowner', location: 'md', community: '' },

  { id: 'g047', name: 'Alisha W.',       initials: 'AW', rating: 5, date: '1 year ago',
    quote: 'Tidewater has been an excellent management company for our community. Christopher Ziesat is our account manager and he\'s been very professional, responsive and informative. I highly recommend Tidewater for any community looking for a management company.',
    type: 'homeowner', location: 'md', community: '' },

  { id: 'g048', name: 'Grant',           initials: 'G',  rating: 5, date: '1 year ago',
    quote: 'Robyne Maggio did an amazing job with all of HOA questions.',
    type: 'homeowner', location: 'md', community: '' },

  { id: 'g049', name: 'Denise Mason-johnson', initials: 'DM', rating: 5, date: '1 year ago',
    quote: "Robyn Maggio was excellent. She single handedly solve the problem with my neighbor's smoke alarm going off every couple of minutes. I appreciate her concerns with my frustration. You go Robyne and keep up the outstanding work.",
    type: 'homeowner', location: 'md', community: '' },

  { id: 'g050', name: 'Chris Yankosky',  initials: 'CY', rating: 5, date: '1 year ago',
    quote: "Christopher Ziesat at Tidewater has been great to work with. Being in real estate I deal with a lot of management companies and most of the time I don't even get responses from their points of contact. Chris doesn't only get back to you, but he does so very quickly and always has suggestions on how to help. Thank you for everything Chris!",
    type: 'homeowner', location: 'md', community: '' },

  { id: 'g051', name: 'Desiree Kelley',  initials: 'DK', rating: 5, date: '1 year ago',
    quote: "Tira Floyd was a huge help when some questions needed to be answered for a client buying a property in one of her communities. Other property managers have ignored requests, but not Tira. She was quick and responsive, allowing us to get the condo approved quickly and the client to the closing table with no delays. This means so much to the client who will now have confidence in his property manager.",
    type: 'homeowner', location: 'md', community: '' },

  { id: 'g052', name: 'Christine Lee',   initials: 'CL', rating: 5, date: '1 year ago',
    quote: 'I just want to acknowledge that my experience with Tidewater Property Management has been great. Anytime I\'ve had an issue or question, the staff has always been very professional and helpful, which I very much appreciate. I also want to acknowledge the great service and communication I received from Robyne Maggio during my ARC project request. Keep up the good work!!',
    type: 'homeowner', location: 'md', community: '' },

  { id: 'g053', name: 'John Greenfield', initials: 'JG', rating: 5, date: '11 months ago',
    quote: 'Karen Thompson is Great, we appreciate her help for our building in OCMD.',
    type: 'homeowner', location: 'md', community: 'Ocean City, MD' },

  { id: 'g054', name: 'Connor Brown',    initials: 'CB', rating: 5, date: '11 months ago',
    quote: 'Working with Karen Thompson over the past couple of years has been an absolute pleasure!',
    type: 'homeowner', location: 'md', community: '' },

  { id: 'g055', name: 'Barsa Family',    initials: 'BF', rating: 5, date: '1 year ago',
    quote: 'Had a very positive experience with Robynne Maggio, an administrative specialist at Tidewater. She was very responsive to our billing questions, emailing us promptly with answers to all our concerns. It is efficient customer service like this which will make your customers happy.',
    type: 'homeowner', location: 'md', community: '' },

  { id: 'g056', name: 'C Siler',         initials: 'CS', rating: 5, date: '1 year ago',
    quote: 'Christopher Ziesat assist our community, who is extremely knowledgeable and very responsive to our needs.',
    type: 'homeowner', location: 'md', community: '' },

  { id: 'g057', name: 'Bryan McCorr',    initials: 'BM', rating: 5, date: '1 year ago',
    quote: 'Pure miracle. I called in desperate and spoke to Robyne Maggie. This morning my car keys fell in the elevator shaft as I left out to work. Robyne wasted no time taking my call and worked until she was able to get an elevator maintenance professional to come out and retrieve my keys. I\'m not the most spiritual person, but I recognize angels when I see them. Thank you Robyne for being my angel today.',
    type: 'homeowner', location: 'md', community: '' },

  { id: 'g058', name: 'Matt Zaborsky',   initials: 'MZ', rating: 5, date: '1 year ago',
    quote: 'Good people and easy to work with!',
    type: 'homeowner', location: 'md', community: '' },

  { id: 'g059', name: 'Alfonzo Cortez',  initials: 'AC', rating: 5, date: '1 year ago',
    quote: 'Robyne Maggio has always been very helpful resolving any issues.',
    type: 'homeowner', location: 'md', community: '' },

  { id: 'g060', name: 'Chris Hyde',      initials: 'CH', rating: 5, date: '11 months ago',
    quote: 'I have completed several projects in the Cambridge area with Karen Thompson and Tidewater Property Management. She has been excellent to work with every time and is very responsive to my emails and phone calls. I would highly recommend them for any property management needs.',
    type: 'homeowner', location: 'md', community: 'Cambridge, MD' },

  { id: 'g061', name: 'Tracy Gill',      initials: 'TG', rating: 5, date: '11 months ago',
    quote: 'Shannon Naff is always good about getting back to me, and great to work with!',
    type: 'homeowner', location: 'md', community: '' },

  { id: 'g062', name: 'Kathy Kight',     initials: 'KK', rating: 5, date: '11 months ago',
    quote: 'Robyne Maggio is excellent- very responsive, helpful, and efficient, and gets high praise from our community members.',
    type: 'homeowner', location: 'md', community: '' },

  { id: 'g063', name: 'Sushant Bhattarai', initials: 'SB', rating: 5, date: '1 year ago',
    quote: 'Charles Fontaney went above and beyond to help me update my name and mailing address in the system. He handled everything quickly and communicated clearly throughout the process. It\'s reassuring to know someone so reliable is managing things on the backend. Excellent customer service—thank you, Charles!',
    type: 'homeowner', location: 'md', community: '' },

  { id: 'g064', name: 'Mrs. A. W.',      initials: 'AW', rating: 5, date: '1 year ago',
    quote: 'Thank you Jordan Bennett for providing exceptional customer service by responding to my email in a timely manner. Your help and assistance was greatly appreciated. Respectfully, Mrs. Washington.',
    type: 'homeowner', location: 'md', community: '' },

  { id: 'g065', name: 'Marian Mekhaeil', initials: 'MM', rating: 5, date: '1 year ago',
    quote: 'Mr. Charles Fontaney Was very professional and supportive.',
    type: 'homeowner', location: 'md', community: '' },
];

function StarRow({ rating }) {
  return (
    <span className="tw-tst-stars">
      {[0,1,2,3,4].map(i => (
        <svg key={i} viewBox="0 0 24 24"
          fill={i < rating ? 'currentColor' : 'none'}
          stroke="currentColor" strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </span>
  );
}

function GoogleIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" style={{flexShrink:0}}>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

const TYPE_LABELS = {
  board:     'Board Member',
  owner:     'Property Owner',
  homeowner: 'Homeowner / Resident',
};

function ReviewCard({ r }) {
  return (
    <article className="tw-tst-card">
      <div className="tw-tst-card-head">
        <StarRow rating={r.rating} />
        <span className={`tw-tst-tag${r.type === 'board' ? '' : r.type === 'owner' ? ' rental' : ' condo'}`}>
          {TYPE_LABELS[r.type]}
        </span>
      </div>
      <blockquote>&ldquo;{r.quote}&rdquo;</blockquote>
      <div className="tw-tst-card-foot">
        <div className="tw-tst-card-avatar">{r.initials}</div>
        <div style={{flex:1,minWidth:0}}>
          <div className="tw-tst-card-name">{r.name}</div>
          <div className="tw-tst-card-meta">
            {r.community && <><span className="role">{r.community}</span> &middot; </>}
            <span>{r.location === 'de' ? 'Delaware / Eastern Shore' : 'Maryland'}</span>
            {r.date && <><span className="sep"> &middot; </span><span>{r.date}</span></>}
          </div>
        </div>
      </div>
      <div className="tw-tst-card-source">
        <GoogleIcon />
        <span>Google Review</span>
      </div>
    </article>
  );
}

export default function GoogleReviewsGrid() {
  const [type,     setType]     = useState('all');
  const [location, setLocation] = useState('all');

  const typeFilters = [
    { id: 'all',       label: 'All',                    count: GOOGLE_REVIEWS.length },
    { id: 'board',     label: 'Board Members',          count: GOOGLE_REVIEWS.filter(r => r.type === 'board').length },
    { id: 'owner',     label: 'Property Owners',        count: GOOGLE_REVIEWS.filter(r => r.type === 'owner').length },
    { id: 'homeowner', label: 'Homeowners / Residents', count: GOOGLE_REVIEWS.filter(r => r.type === 'homeowner').length },
  ];

  const locationFilters = [
    { id: 'all', label: 'All locations',              count: GOOGLE_REVIEWS.length },
    { id: 'md',  label: 'Maryland',                   count: GOOGLE_REVIEWS.filter(r => r.location === 'md').length },
    { id: 'de',  label: 'Delaware & Eastern Shore',   count: GOOGLE_REVIEWS.filter(r => r.location === 'de').length },
  ];

  const visible = GOOGLE_REVIEWS.filter(r =>
    (type     === 'all' || r.type     === type) &&
    (location === 'all' || r.location === location)
  );

  return (
    <>
      <section className="tw-grev-head">
        <div className="tw-container-wide">
          <div className="tw-grev-head-inner">
            <div>
              <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'8px'}}>
                <div style={{width:'32px',height:'2px',background:'var(--tw-teal)'}}></div>
                <span className="tw-eyebrow">From Google</span>
              </div>
              <h2 className="tw-grev-title">What our communities say</h2>
              <p className="tw-grev-sub">Unedited reviews from residents, homeowners, and property owners across our managed communities — sourced directly from Google.</p>
            </div>
            <div className="tw-grev-badges">
              {/* Overall rating badge hidden until confirmed — restore when ready */}
              {/* <div className="tw-grev-badge">
                <div className="tw-grev-badge-num">3.6–3.9</div>
                <div className="tw-grev-badge-label">Overall Google<br/>rating</div>
              </div> */}
              <div className="tw-grev-badge">
                <div className="tw-grev-badge-num">{GOOGLE_REVIEWS.length}</div>
                <div className="tw-grev-badge-label">Reviews shown<br/>on this page</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tw-tst-filters">
        <div className="tw-tst-filters-inner" style={{flexWrap:'wrap',gap:'8px 6px'}}>
          <span className="tw-tst-filter-label">Type</span>
          {typeFilters.map(f => (
            <button key={f.id}
              className={`tw-tst-filter-chip${type === f.id ? ' is-active' : ''}`}
              onClick={() => setType(f.id)}>
              <span>{f.label}</span>
              <span className="tw-tst-filter-chip-count">{f.count}</span>
            </button>
          ))}
        </div>
        <div className="tw-tst-filters-inner" style={{flexWrap:'wrap',gap:'8px 6px',paddingTop:'10px'}}>
          <span className="tw-tst-filter-label">Location</span>
          {locationFilters.map(f => (
            <button key={f.id}
              className={`tw-tst-filter-chip${location === f.id ? ' is-active' : ''}`}
              onClick={() => setLocation(f.id)}>
              <span>{f.label}</span>
              <span className="tw-tst-filter-chip-count">{f.count}</span>
            </button>
          ))}
        </div>
      </section>

      <section id="google-reviews" className="tw-tst-grid-section">
        <div className="tw-container-wide">
          {visible.length === 0
            ? <p style={{textAlign:'center',padding:'40px 0',color:'var(--tw-fg-muted)'}}>No reviews match this filter combination.</p>
            : <div className="tw-tst-grid">
                {visible.map(r => <ReviewCard key={r.id} r={r} />)}
              </div>
          }
          <div style={{textAlign:'center',paddingTop:'32px',paddingBottom:'16px'}}>
            <a href="https://www.google.com/search?q=tidewater+property+management+reviews"
               target="_blank" rel="noopener"
               className="tw-btn tw-btn-ghost">
              See all Google reviews &rarr;
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
